# 导入所需的标准库
import json
import re
import datetime
import unicodedata
import os
import sys
from collections import OrderedDict

# ==============================================================================
# --- 用户配置区：在这里添加您的所有自定义规则 ---
# ==============================================================================

# 手动覆盖规则：用于修正单个英雄的特定错误数据
# 示例: { "name": "英雄的英文名", "overrides": { "要修正的字段": "新的值" } }
MANUAL_OVERRIDE_RULES = [
    #{ "name": "Ascension Mimic", "overrides": { "Release date": "2025-07-04" } },
]

# 全局修正规则：用于批量修正特定字段的通用错误
# 示例: "要修正的字段": { "旧的值": "新的值" }
GLOBAL_CORRECTIONS = {
    #"AetherPower": { "Counterattack": "Pain Return" }
}

# --- 新增：最终输出顺序定义 ---
# 这是你期望的最终JSON对象中键（key）的排列顺序
DESIRED_KEY_ORDER = [
    "name",
    "fancy name",
    "element",
    "rarity",
    "class",
    "speed",
    "Release date",
    "AetherPower",
    "skill_types",
    "heroId",
    "baseAttack",
    "baseDefense",
    "baseHealth",
    "specialId",
    "specialId_costume",
    "passiveSkills",
    "costumeBonusPassiveSkillIds",
    "attackBonus",
    "defenseBonus",
    "healthBonus",
    "manaBonus"
]
# ==============================================================================

# --- 全局变量定义 ---
CHARACTERS_DATA = {}                # 存储从 characters_en.json 加载并处理后的核心英雄数据
HEROES_EXTRA_DATA = []              # 存储从 heroes_data_extra.js 加载的待补充数据
COSTUME_BONUSES_DATA = {}           # 存储从 other.json 加载的服装奖励规则
SYNC_LOG = {'unmatched': [], 'mismatched_dimension': [], 'successful': []} # 同步过程的日志
COSTUMES_IN_EXTRA_DATA = set()      # 记录在 extra 数据中所有被识别为服装的英雄集合
MATCHED_COSTUMES = set()            # 记录成功匹配上的服装集合
BONUS_CALCULATION_FAILURES = []     # 记录服装奖励计算失败的英雄列表
CORRECTION_LOG_MESSAGES = []        # 记录手动和全局修正操作的日志信息

# --- 核心函数 ---

def normalize_name(text):
    """
    对英雄名称进行标准化处理，移除重音符号等，以便于模糊匹配。
    例如将 'Caitlín' 转换为 'Caitlin'。
    """
    if not isinstance(text, str): return ""
    return unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')

def format_percentage(per_mil_value):
    """
    将千分位数值转换为百分比字符串。
    例如 150 (代表 15.0%) 会被格式化为 "15%" 或 "15.0%"。
    """
    if not isinstance(per_mil_value, (int, float)): return "0%"
    percentage = per_mil_value / 10.0
    # 如果是整数，则不显示小数位
    return f"{int(percentage)}%" if percentage == int(percentage) else f"{percentage:.1f}%"

def load_all_data_sources():
    """
    加载所有需要用到的数据源文件 (JSON, JS, TXT) 到全局变量中。
    """
    global CHARACTERS_DATA, HEROES_EXTRA_DATA, COSTUME_BONUSES_DATA
    print("--- 阶段 1: 正在预加载所有数据源... ---")
    
    raw_chars = {}
    try:
        # 加载核心英雄数据
        with open('./dict_gen/官方英雄数据缓存解析/CachedConfigurations/json/characters_en.json', 'r', encoding='utf-8') as f:
            raw_chars = json.load(f)
    except Exception as e:
        print(f"❌ 严重错误: 无法加载 'characters_en.json'。错误: {e}"); return False

    translation_table = {}
    try:
        # 加载英雄的 "fancy name" 翻译文件
        with open('./dict_gen/官方语言字典生成/generated_txt/heroes_name_fancy_en.txt', 'r', encoding='utf-8') as f:
            for line in f:
                if ',' in line:
                    k, v = line.split(',', 1)
                    translation_table[k.strip().strip('"')] = v.strip().strip('"')
        print(f"✅ 成功加载 'heroes_name_fancy_en.txt' ({len(translation_table)} 条翻译规则)")
    except Exception as e:
        print(f"🟡 警告: 无法加载 'heroes_name_fancy_en.txt'。英雄名将使用原始ID。错误: {e}")

    print("--- 正在对源数据进行预翻译并构建一对多查找地图... ---")
    multi_map = {}
    # 基于翻译后的 "fancy name" 创建一个查找表，以处理同名英雄的情况
    for original_id, data in raw_chars.items():
        lookup_key = 'heroes.name_fancy.' + original_id.lower()
        translated_name = translation_table.get(lookup_key, original_id)
        normalized_key = normalize_name(translated_name)
        
        if normalized_key not in multi_map:
            multi_map[normalized_key] = []
        
        # --- 修改：除了核心数据，额外存储原始的 fancy_name 以便后续报告 ---
        multi_map[normalized_key].append({
            'original_id': original_id, 
            'data': data,
            'fancy_name': translated_name  # 新增此行
        })

    CHARACTERS_DATA = multi_map
    CHARACTERS_DATA['__raw__'] = raw_chars # 保留一份原始数据以便通过 heroId 直接查找
    print(f"✅ 源数据处理完成，生成 {len(CHARACTERS_DATA) - 1} 个唯一的名称键。")

    try:
        # 加载需要被补充数据的JS文件
        with open('heroes_data_extra.js', 'r', encoding='utf-8') as f:
            js_content = f.read()
        # 使用正则表达式提取JS变量中的JSON数组部分
        match = re.search(r'=\s*(\[.*\]);', js_content, re.DOTALL)
        if not match: raise ValueError("JS数据格式不正确")
        HEROES_EXTRA_DATA = json.loads(match.group(1))
        print(f"✅ 成功加载 'heroes_data_extra.js' ({len(HEROES_EXTRA_DATA)} 条记录)")
    except Exception as e:
        print(f"❌ 严重错误: 无法加载 'heroes_data_extra.js'。错误: {e}"); return False
        
    try:
        # 加载包含服装奖励规则的 other.json 文件
        with open('./dict_gen/官方英雄数据缓存解析/CachedConfigurations/json/other_en.json', 'r', encoding='utf-8') as f:
            other_data = json.load(f)
        bonuses_list = other_data.get("otherConfig", {}).get("logic", {}).get("costumes", {}).get("costumeBonuses", [])
        COSTUME_BONUSES_DATA = {bonus['id']: bonus for bonus in bonuses_list}
        print(f"✅ 成功加载 'other_en.json' 并提取了 {len(COSTUME_BONUSES_DATA)} 套服装奖励规则。")
    except Exception as e:
        print(f"🟡 警告: 无法加载 'other_en.json'。服装奖励将不可用。错误: {e}")
    return True
def calculate_costume_bonus(hero_extra_entry, rarity, costume_bonuses_id):
    """
    根据英雄的稀有度(rarity)和服装奖励ID(costume_bonuses_id)，计算并返回对应的属性加成。
    """
    if not costume_bonuses_id or not rarity: return None, "缺少 costumeBonusesId 或 rarity"
    bonus_rule = COSTUME_BONUSES_DATA.get(costume_bonuses_id)
    if not bonus_rule or not bonus_rule.get('statBonuses'): return None, f"在 other.json 中未找到有效的 costumeBonusesId '{costume_bonuses_id}'"
    if rarity > len(bonus_rule['statBonuses']): return None, "稀有度超出奖励规则范围"
    
    rarity_bonuses = bonus_rule['statBonuses'][rarity - 1]
    bonus_levels = rarity_bonuses.get('bonusLevels')
    if not bonus_levels: return None, "稀有度对应的 bonusLevels 为空"
    
    bonus_data = None
    # 对 "classic" 和 "default" 类型的服装进行特殊处理，因为它们的奖励等级与服装数量有关
    if costume_bonuses_id == 'classic' or costume_bonuses_id == 'default':
        hero_name = hero_extra_entry.get("name", "").lower()
        costume_number = 1
        if "costume1" in hero_name: costume_number = 1
        elif "costume2" in hero_name: costume_number = 2
        elif "toon" in hero_name: costume_number = 3 if rarity >= 4 else 2
        elif "glass" in hero_name: costume_number = 4 if rarity >= 4 else 3
        
        stages_per_costume = 4 if rarity >= 4 else 3 # 4/5星英雄每套服装有4个奖励阶段, 3星是3个
        target_index = (costume_number * stages_per_costume) - 1
        
        if target_index < len(bonus_levels):
            bonus_data = bonus_levels[target_index]
        else: return None, f"计算出的索引 {target_index} 超出 '{costume_bonuses_id}' 奖励列表范围"
    else:
        # 对于其他类型的服装（如超级服装），直接取最后一个阶段的奖励
        bonus_data = bonus_levels[-1]
        
    if bonus_data:
        bonuses = {
            "attackBonus": format_percentage(bonus_data.get('attackBonusPerMil', 0)),
            "defenseBonus": format_percentage(bonus_data.get('defenseBonusPerMil', 0)),
            "healthBonus": format_percentage(bonus_data.get('healthBonusPerMil', 0)),
            "manaBonus": format_percentage(bonus_data.get('manaBonusPerMil', 0))
        }
        return bonuses, "成功"
        
    return None, "未找到有效的 bonus_data"

def main_sync_process():
    """
    主同步流程函数，负责匹配、数据合并、修正、排序和输出。
    """
    global SYNC_LOG, COSTUMES_IN_EXTRA_DATA, MATCHED_COSTUMES, BONUS_CALCULATION_FAILURES, CORRECTION_LOG_MESSAGES
    # 初始化全局变量
    SYNC_LOG, COSTUMES_IN_EXTRA_DATA, MATCHED_COSTUMES, BONUS_CALCULATION_FAILURES, CORRECTION_LOG_MESSAGES = {'unmatched': [], 'mismatched_dimension': [], 'successful': []}, set(), set(), [], []
    bonus_calculated_count = 0
    costume_keywords = ["costume1", "costume2", "toon", "glass"]

    # ==================================================================
    # --- 新增功能：预先检查并一次性报告所有重名英雄 ---
    # ==================================================================
    print("\n--- 正在预先扫描所有重名英雄... ---")
    duplicate_heroes = []
    for key, candidates in CHARACTERS_DATA.items():
        if key == '__raw__':
            continue  # 跳过内部使用的原始数据
        if len(candidates) > 1:
            # 从第一个候选项中获取我们之前存储的 fancy_name
            fancy_name = candidates[0].get('fancy_name', key) 
            duplicate_heroes.append((fancy_name, len(candidates)))
    
    if duplicate_heroes:
        print("🟡 注意: 发现以下英雄存在多个版本，将在同步时通过详细属性进行区分：")
        # 排序以保证每次运行的输出顺序稳定
        for name, count in sorted(duplicate_heroes):
            print(f"  - {name} (共 {count} 个版本)")
    else:
        print("✅ 未发现任何重名英雄。")
    # ==================================================================

    print("\n--- 阶段 2: 开始自动化数据同步 ---")

    # 遍历每一条待补充的英雄数据
    for hero_extra in HEROES_EXTRA_DATA:
        fancy_name = hero_extra.get("fancy name")
        if not fancy_name:
            SYNC_LOG['unmatched'].append(hero_extra)
            continue
            
        normalized_fancy_name = normalize_name(fancy_name)
        candidate_list = CHARACTERS_DATA.get(normalized_fancy_name)
        
        # --- 注意：此处的重复打印逻辑已被移除 ---

        if not candidate_list:
            SYNC_LOG['unmatched'].append(hero_extra)
            continue

        # --- 新的多阶段筛选逻辑 ---

        # 阶段 1: 首先根据 Rarity (稀有度) 和 Element (元素) 进行初步筛选
        potential_matches = []
        for candidate in candidate_list:
            if hero_extra.get('rarity') == candidate['data'].get('rarity') and \
               hero_extra.get('element') == candidate['data'].get('element'):
                potential_matches.append(candidate)

        final_match = None
        if len(potential_matches) == 1:
            final_match = potential_matches[0]
        elif len(potential_matches) > 1:

            # 阶段 2: 尝试使用 "AetherPower" (以太之力) 作为最终筛选条件
            if len(potential_matches) > 1:
                extra_aether_power = hero_extra.get("AetherPower")
                if extra_aether_power:
                    power_filtered_matches = [
                        p for p in potential_matches 
                        if p['data'].get('aetherGift') == extra_aether_power
                    ]
                    if len(power_filtered_matches) > 0:
                        potential_matches = power_filtered_matches
                        
            # 阶段 3: 尝试使用 "Release date" (发布日期) 作为筛选条件
            extra_release_date = hero_extra.get("Release date")
            if extra_release_date:
                date_filtered_matches = [
                    p for p in potential_matches 
                    if p['data'].get('canBeReceivedDate', '').startswith(extra_release_date)
                ]
                if len(date_filtered_matches) > 0:
                    potential_matches = date_filtered_matches
            
            if len(potential_matches) == 1:
                final_match = potential_matches[0]
            else:
                print(f"🚨 警告: 英雄 '{fancy_name}' 在所有筛选后仍存在 {len(potential_matches)} 个模糊匹配项。将跳过此英雄。")
                mismatch_details = { 
                    "hero_extra": hero_extra, 
                    "mismatches": [f"在所有筛选后仍存在 {len(potential_matches)} 个模糊匹配项"] 
                }
                SYNC_LOG['mismatched_dimension'].append(mismatch_details)

        # 如果找到了唯一的匹配项，则进行数据合并
        if final_match:
            original_id = final_match['original_id']
            matched_char = final_match['data']

            SYNC_LOG['successful'].append(hero_extra)
            is_costume = any(keyword in hero_extra.get("name", "").lower() for keyword in costume_keywords)
            if is_costume: MATCHED_COSTUMES.add(fancy_name)
            
            hero_extra['heroId'] = original_id
            hero_extra['speed'] = matched_char.get('manaSpeedId')
            hero_extra['class'] = matched_char.get('classType')
            hero_extra['baseAttack'] = matched_char.get('baseAttack')
            hero_extra['baseDefense'] = matched_char.get('baseDefense')
            hero_extra['baseHealth'] = matched_char.get('baseHealth')
            hero_extra['passiveSkills'] = matched_char.get('passiveSkills')
            hero_extra['family'] = matched_char.get('family')
            
            if 'parentHeroId' in matched_char:
                parent_hero_data = CHARACTERS_DATA['__raw__'].get(matched_char['parentHeroId'])
                if parent_hero_data:
                    hero_extra['specialId'] = parent_hero_data.get('specialId')
                    hero_extra['specialId_costume'] = matched_char.get('specialId')
                else:
                    hero_extra['specialId'] = matched_char.get('specialId')
            else:
                hero_extra['specialId'] = matched_char.get('specialId')
            
            if 'aetherGift' in matched_char: hero_extra['AetherPower'] = matched_char.get('aetherGift')
            release_date_str = matched_char.get('canBeReceivedDate')
            if release_date_str: hero_extra['Release date'] = release_date_str.split(' ')[0]

            if 'parentHeroId' in matched_char:
                hero_extra['costumeBonusPassiveSkillIds'] = matched_char.get('costumeBonusPassiveSkillIds')
                parent_hero_id = matched_char['parentHeroId']
                parent_hero_data = CHARACTERS_DATA['__raw__'].get(parent_hero_id)
                if parent_hero_data:
                    costume_bonuses_id = parent_hero_data.get('costumeBonusesId', 'default')
                    rarity = matched_char.get('rarity')
                    bonuses, reason = calculate_costume_bonus(hero_extra, rarity, costume_bonuses_id)
                    if bonuses:
                        hero_extra.update(bonuses)
                        bonus_calculated_count += 1
                    else:
                        BONUS_CALCULATION_FAILURES.append({"name": hero_extra.get("name"), "fancy_name": fancy_name, "reason": reason})
                else:
                    BONUS_CALCULATION_FAILURES.append({"name": hero_extra.get("name"), "fancy_name": fancy_name, "reason": f"未找到 parentHeroId '{parent_hero_id}'"})
            else:
                if 'costumeBonusPassiveSkillIds' in hero_extra:
                    del hero_extra['costumeBonusPassiveSkillIds']
            
            if not 'parentHeroId' in matched_char and is_costume:
                 BONUS_CALCULATION_FAILURES.append({"name": hero_extra.get("name"), "fancy_name": fancy_name, "reason": "缺少 'parentHeroId' 字段"})
        
        elif not potential_matches:
             mismatch_details = { "hero_extra": hero_extra, "mismatches": [f"在 {len(candidate_list)} 个同名候选者中均未找到匹配的 Rarity & Element"] }
             SYNC_LOG['mismatched_dimension'].append(mismatch_details)

    print(f"✅ 自动化同步完成：成功更新 {len(SYNC_LOG['successful'])} 条记录。")
    print(f"✅ 成功计算并添加了 {bonus_calculated_count} 套服装奖励。")
    if SYNC_LOG['mismatched_dimension']: print(f"🚨 发现 {len(SYNC_LOG['mismatched_dimension'])} 条维度不匹配记录 (详情见 sync_report.txt)。")
    if SYNC_LOG['unmatched']: print(f"🟡 发现 {len(SYNC_LOG['unmatched'])} 条完全未匹配记录 (详情见 sync_report.txt)。")

    print("\n--- 阶段 3: 开始执行最终修正 ---")
    manual_correction_count, global_correction_count = 0, 0
    override_lookup = {rule["name"]: rule["overrides"] for rule in MANUAL_OVERRIDE_RULES}
    for hero_extra in HEROES_EXTRA_DATA:
        hero_name = hero_extra.get("name")
        if hero_name and hero_name in override_lookup:
            overrides = override_lookup[hero_name]
            for field, new_value in overrides.items():
                old_value = hero_extra.get(field, 'N/A')
                if old_value != new_value:
                    hero_extra[field] = new_value
                    log_msg = f"[手动覆盖] '{hero_name}' -> 字段 '{field}': 从 '{old_value}' 修正为 '{new_value}'"
                    CORRECTION_LOG_MESSAGES.append(log_msg)
                    manual_correction_count += 1
        for field, corrections in GLOBAL_CORRECTIONS.items():
            current_value = hero_extra.get(field)
            if current_value in corrections:
                new_value = corrections[current_value]
                hero_extra[field] = new_value
                log_msg = f"[全局修正] '{hero_name or 'N/A'}' -> 字段 '{field}': 从 '{current_value}' 修正为 '{new_value}'"
                CORRECTION_LOG_MESSAGES.append(log_msg)
                global_correction_count += 1
    if manual_correction_count > 0: print(f"✅ 手动覆盖完成：成功应用 {manual_correction_count} 条修正 (详情见 correction_log.txt)。")
    if global_correction_count > 0: print(f"✅ 全局修正完成：成功应用 {global_correction_count} 条修正 (详情见 correction_log.txt)。")
    if not manual_correction_count and not global_correction_count: print("🟡 未应用任何修正规则。")
    
    print("\n--- 阶段 4: 开始最终排序 ---")
    reordered_list = []
    for hero_dict in HEROES_EXTRA_DATA:
        reordered_hero = OrderedDict()
        for key in DESIRED_KEY_ORDER:
            if key in hero_dict:
                reordered_hero[key] = hero_dict[key]
        for key, value in hero_dict.items():
            if key not in reordered_hero:
                reordered_hero[key] = value
        reordered_list.append(reordered_hero)
    print("✅ 所有英雄数据的键已按最终顺序重新排列。")

    print("\n--- 阶段 5: 开始执行最终数据排查 ---")
    anomalies = []
    anomaly_date = "2200-01-01"
    for hero_extra in reordered_list:
        if hero_extra.get("Release date") == anomaly_date:
            anomalies.append(hero_extra)
    if anomalies:
        print(f"🚨 警告: 发现 {len(anomalies)} 条记录的发布日期为 '{anomaly_date}' (详情见 final_check_anomalies_log.txt)。")
    else:
        print("✅ 数据排查完成：未发现发布日期异常。")

    output_file = 'heroes_data_extra_updated.js'
    print(f"\n正在生成更新后的JS文件: '{output_file}'...")
    try:
        updated_json_str = json.dumps(reordered_list, indent=4, ensure_ascii=False)
        updated_js_content = f"window.allHeroesExtra = {updated_json_str};"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(updated_js_content)
        print(f"🎉 成功写入 '{output_file}'。所有数据已同步并排序。")
    except Exception as e:
        print(f"❌ 写入更新文件时发生错误: {e}")

    # ... (日志写入部分保持不变) ...
    sync_report_file = 'sync_report.txt'
    try:
        print(f"正在生成同步报告: '{sync_report_file}'...")
        with open(sync_report_file, 'w', encoding='utf-8') as f:
            f.write(f"✅ 完全匹配并已同步: {len(SYNC_LOG['successful'])} 条\n=========================\n")
            f.write(f"\n\n🚨 维度不匹配 (名称匹配但Rarity或Element不一致): {len(SYNC_LOG['mismatched_dimension'])} 条\n=======================================================\n")
            for mismatch in SYNC_LOG['mismatched_dimension']:
                hero, reasons = mismatch['hero_extra'], ", ".join(mismatch['mismatches'])
                f.write(f"Name: {hero.get('name', 'N/A')}, Fancy Name: {hero.get('fancy name', 'N/A')} -> 原因: {reasons}\n")
            f.write(f"\n\n🟡 完全未匹配 (名称未找到): {len(SYNC_LOG['unmatched'])} 条\n===================================\n")
            for hero in SYNC_LOG['unmatched']:
                f.write(f"Name: {hero.get('name', 'N/A')}, Fancy Name: {hero.get('fancy name', 'N/A')}\n")
        print(f"✅ 成功写入 '{sync_report_file}'。")
    except Exception as e:
        print(f"❌ 写入同步报告时发生错误: {e}")
        
    write_log_file('correction_log.txt', f"共执行了 {len(CORRECTION_LOG_MESSAGES)} 条数据修正。", CORRECTION_LOG_MESSAGES, lambda msg: msg)
    write_log_file('bonus_calculation_failures_log.txt', f"共有 {len(BONUS_CALCULATION_FAILURES)} 套已匹配服装的奖励计算失败。", BONUS_CALCULATION_FAILURES, lambda fail: f"Name: {fail.get('name', 'N/A')}\n   Fancy Name: {fail.get('fancy_name', 'N/A')}\n   失败原因: {fail.get('reason', '未知')}\n")
    write_log_file('final_check_anomalies_log.txt', f"发现 {len(anomalies)} 条记录的发布日期为 '{anomaly_date}'。", anomalies, lambda h: f"Name: {h.get('name', 'N/A')}, Fancy Name: {h.get('fancy name', 'N/A')}")
    
    report_file = 'costume_matching_report.txt'
    unmatched_costumes = COSTUMES_IN_EXTRA_DATA - MATCHED_COSTUMES
    try:
        with open(report_file, 'w', encoding='utf-8') as f:
            f.write(f"✅ 成功匹配的服装 ({len(MATCHED_COSTUMES)} / {len(COSTUMES_IN_EXTRA_DATA)})\n================================\n")
            if MATCHED_COSTUMES:
                for fancy_name in sorted(list(MATCHED_COSTUMES)):
                    hero = next((h for h in HEROES_EXTRA_DATA if h.get("fancy name") == fancy_name), None)
                    f.write(f"Name: {hero.get('name', 'N/A') if hero else 'N/A'}, Fancy Name: {fancy_name}\n")
            else: f.write("无\n")
            f.write(f"\n\n🚨 未能匹配的服装 ({len(unmatched_costumes)})\n================================\n")
            if unmatched_costumes:
                for fancy_name in sorted(list(unmatched_costumes)):
                    hero = next((h for h in HEROES_EXTRA_DATA if h.get("fancy name") == fancy_name), None)
                    f.write(f"Name: {hero.get('name', 'N/A') if hero else 'N/A'}, Fancy Name: {fancy_name}\n")
            else: f.write("无\n")
        print(f"✅ 成功写入服装匹配报告: '{report_file}'。")
    except Exception as e:
        print(f"❌ 写入服装报告时发生错误: {e}")
            
    print("\n--- 所有任务处理完毕 ---")

def write_log_file(filename, header, data_list, formatter):
    """
    一个通用的日志文件写入函数。
    :param filename: 文件名
    :param header: 文件头信息
    :param data_list: 要写入的数据列表
    :param formatter: 一个函数，用于格式化列表中的每一项
    """
    if not data_list: return # 如果没有数据，则不创建文件
    try:
        print(f"正在生成日志文件: '{filename}'...")
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(header + "\n================================\n\n")
            # 对数据进行排序以保证输出的稳定性
            for item in sorted(data_list, key=lambda x: str(x)):
                f.write(formatter(item) + "\n")
        print(f"✅ 成功写入 '{filename}'。")
    except Exception as e:
        print(f"❌ 写入日志 '{filename}' 时发生错误: {e}")

# --- 脚本主入口 ---
if __name__ == "__main__":
    # 只有当所有数据源都成功加载后，才执行主流程
    if load_all_data_sources():
        main_sync_process()
    else:
        print("\n由于核心数据文件加载失败，程序已终止。")
    
    # 等待用户按键退出，以便在命令行中查看输出信息
    input("\n按任意键退出...")