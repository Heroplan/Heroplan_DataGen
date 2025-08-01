import json
import re
import datetime
import unicodedata
import os
import sys

# ==============================================================================
# --- 用户配置区：在这里添加您的所有自定义规则 ---
# ==============================================================================
MANUAL_OVERRIDE_RULES = [
    {
        "name": "Isarnia Glass", 
        "overrides": {
            "AetherPower": "Regen",
            "Release date": "2025-06-18",
            "baseAttack": 406,
            "baseDefense": 302,
            "baseHealth": 574,
            "attackBonus": "75%",
            "defenseBonus": "75%",
            "healthBonus": "78%",
            "manaBonus": "5%"
        }
    },
    { "name": "Ascension Mimic", "overrides": { "Release date": "2025-07-04" } },
    { "name": "Ascension Mimic Ice", "overrides": { "Release date": "2025-07-26" } },
    { "name": "Cyprian Glass", "overrides": {
            "AetherPower": "Counterattack",
            "Release date": "2025-04-23" 
        } 
    }
]
GLOBAL_CORRECTIONS = {
    "AetherPower": { "Counterattack1": "Pain Return" }
}
# ==============================================================================

# --- 全局变量 ---
CHARACTERS_DATA = {}
HEROES_EXTRA_DATA = []
COSTUME_BONUSES_DATA = {}
UNMATCHED_LOG = []
COSTUMES_IN_EXTRA_DATA = set()
MATCHED_COSTUMES = set()
BONUS_CALCULATION_FAILURES = []
CORRECTION_LOG_MESSAGES = []

# --- 核心函数 ---

def normalize_name(text):
    if not isinstance(text, str): return ""
    return unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')

def format_percentage(per_mil_value):
    if not isinstance(per_mil_value, (int, float)): return "0%"
    percentage = per_mil_value / 10.0
    return f"{int(percentage)}%" if percentage == int(percentage) else f"{percentage:.1f}%"

def load_all_data_sources():
    global CHARACTERS_DATA, HEROES_EXTRA_DATA, COSTUME_BONUSES_DATA
    print("--- 正在预加载所有数据源... ---")
    try:
        with open('characters_en.json', 'r', encoding='utf-8') as f:
            raw_chars = json.load(f)
            CHARACTERS_DATA = {normalize_name(name): data for name, data in raw_chars.items()}
            CHARACTERS_DATA['__raw__'] = raw_chars
        print(f"✅ 成功加载 'characters_en.json' ({len(CHARACTERS_DATA) - 1} 条记录)")
    except Exception as e:
        print(f"❌ 严重错误: 无法加载 'characters_en.json'。错误: {e}")
        return False
    try:
        with open('heroes_data_extra.js', 'r', encoding='utf-8') as f:
            js_content = f.read()
        match = re.search(r'=\s*(\[.*\]);', js_content, re.DOTALL)
        if not match: raise ValueError("JS数据格式不正确")
        HEROES_EXTRA_DATA = json.loads(match.group(1))
        print(f"✅ 成功加载 'heroes_data_extra.js' ({len(HEROES_EXTRA_DATA)} 条记录)")
    except Exception as e:
        print(f"❌ 严重错误: 无法加载 'heroes_data_extra.js'。错误: {e}")
        return False
    try:
        with open('other.json', 'r', encoding='utf-8') as f:
            other_data = json.load(f)
        bonuses_list = other_data.get("otherConfig", {}).get("logic", {}).get("costumes", {}).get("costumeBonuses", [])
        COSTUME_BONUSES_DATA = {bonus['id']: bonus for bonus in bonuses_list}
        print(f"✅ 成功加载 'other.json' 并提取了 {len(COSTUME_BONUSES_DATA)} 套服装奖励规则。")
    except Exception as e:
        print(f"🟡 警告: 无法加载 'other.json'。服装奖励将不可用。错误: {e}")
    return True

def calculate_costume_bonus(hero_extra_entry, rarity, costume_bonuses_id):
    if not costume_bonuses_id or not rarity: return None, "缺少 costumeBonusesId 或 rarity"
    bonus_rule = COSTUME_BONUSES_DATA.get(costume_bonuses_id)
    if not bonus_rule or not bonus_rule.get('statBonuses'): return None, f"在 other.json 中未找到有效的 costumeBonusesId '{costume_bonuses_id}'"
    if rarity > len(bonus_rule['statBonuses']): return None, "稀有度超出奖励规则范围"
    rarity_bonuses = bonus_rule['statBonuses'][rarity - 1]
    bonus_levels = rarity_bonuses.get('bonusLevels')
    if not bonus_levels: return None, "稀有度对应的 bonusLevels 为空"
    bonus_data = None
    if costume_bonuses_id == 'classic' or costume_bonuses_id == 'default':
        hero_name = hero_extra_entry.get("name", "").lower()
        costume_number = 1
        if "costume1" in hero_name: costume_number = 1
        elif "costume2" in hero_name: costume_number = 2
        elif "toon" in hero_name: costume_number = 3 if rarity >= 4 else 2
        elif "glass" in hero_name: costume_number = 4 if rarity >= 4 else 3
        stages_per_costume = 4 if rarity >= 4 else 3
        target_index = (costume_number * stages_per_costume) - 1
        if target_index < len(bonus_levels):
            bonus_data = bonus_levels[target_index]
        else: return None, f"计算出的索引 {target_index} 超出 '{costume_bonuses_id}' 奖励列表范围"
    else:
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
    global UNMATCHED_LOG, COSTUMES_IN_EXTRA_DATA, MATCHED_COSTUMES, BONUS_CALCULATION_FAILURES, CORRECTION_LOG_MESSAGES
    UNMATCHED_LOG, COSTUMES_IN_EXTRA_DATA, MATCHED_COSTUMES, BONUS_CALCULATION_FAILURES, CORRECTION_LOG_MESSAGES = [], set(), set(), [], []
    updated_count, bonus_calculated_count = 0, 0
    costume_keywords = ["costume1", "costume2", "toon", "glass"]

    for hero_extra in HEROES_EXTRA_DATA:
        fancy_name = hero_extra.get("fancy name")
        hero_name_lower = hero_extra.get("name", "").lower()
        is_costume = any(keyword in hero_name_lower for keyword in costume_keywords)
        if is_costume and fancy_name: COSTUMES_IN_EXTRA_DATA.add(fancy_name)
        if not fancy_name:
            UNMATCHED_LOG.append(hero_extra)
            continue
        normalized_fancy_name = normalize_name(fancy_name)
        matched_char = CHARACTERS_DATA.get(normalized_fancy_name)
        if matched_char:
            updated_count += 1
            if is_costume: MATCHED_COSTUMES.add(fancy_name)
            hero_extra['baseAttack'] = matched_char.get('baseAttack')
            hero_extra['baseDefense'] = matched_char.get('baseDefense')
            hero_extra['baseHealth'] = matched_char.get('baseHealth')
            if 'aetherGift' in matched_char: hero_extra['AetherPower'] = matched_char.get('aetherGift')
            release_date_str = matched_char.get('canBeReceivedDate')
            if release_date_str: hero_extra['Release date'] = release_date_str.split(' ')[0]
            if 'parentHeroId' in matched_char:
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
            elif is_costume:
                 BONUS_CALCULATION_FAILURES.append({"name": hero_extra.get("name"), "fancy_name": fancy_name, "reason": "缺少 'parentHeroId' 字段"})
        else:
            UNMATCHED_LOG.append(hero_extra)
    print(f"✅ 自动化同步完成：成功更新 {updated_count} 条记录。")
    print(f"✅ 成功计算并添加了 {bonus_calculated_count} 套服装奖励。")

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

    # --- 新增：阶段 4: 最终数据排查 ---
    print("\n--- 阶段 4: 开始执行最终数据排查 ---")
    anomalies = []
    anomaly_date = "2200-01-01"
    for hero_extra in HEROES_EXTRA_DATA:
        if hero_extra.get("Release date") == anomaly_date:
            anomalies.append(hero_extra)
    
    if anomalies:
        print(f"🚨 警告: 发现 {len(anomalies)} 条记录的发布日期为 '{anomaly_date}' (详情见 final_check_anomalies_log.txt)。")
    else:
        print("✅ 数据排查完成：未发现发布日期异常。")

    # --- 阶段 5: 写入文件与日志 ---
    output_file = 'heroes_data_extra_updated.js'
    print(f"\n正在生成更新后的JS文件: '{output_file}'...")
    try:
        updated_json_str = json.dumps(HEROES_EXTRA_DATA, indent=4, ensure_ascii=False)
        updated_js_content = f"window.allHeroesExtra = {updated_json_str};"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(updated_js_content)
        print(f"✅ 成功写入 '{output_file}'。")
    except Exception as e:
        print(f"❌ 写入更新文件时发生错误: {e}")

    # --- 写入所有日志文件 ---
    write_log_file('unmatched_heroes_log.txt', f"共有 {len(UNMATCHED_LOG)} 条记录未在 characters_en.json 中找到匹配项。", UNMATCHED_LOG, lambda h: f"Name: {h.get('name', 'N/A')}, Fancy Name: {h.get('fancy name', 'N/A')}")
    write_log_file('correction_log.txt', f"共执行了 {len(CORRECTION_LOG_MESSAGES)} 条数据修正。", CORRECTION_LOG_MESSAGES, lambda msg: msg)
    write_log_file('bonus_calculation_failures_log.txt', f"共有 {len(BONUS_CALCULATION_FAILURES)} 套已匹配服装的奖励计算失败。", BONUS_CALCULATION_FAILURES, lambda fail: f"Name: {fail.get('name', 'N/A')}\n  Fancy Name: {fail.get('fancy_name', 'N/A')}\n  失败原因: {fail.get('reason', '未知')}\n")
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
    if not data_list: return
    try:
        print(f"正在生成日志文件: '{filename}'...")
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(header + "\n================================\n\n")
            for item in sorted(data_list, key=lambda x: str(x)):
                f.write(formatter(item) + "\n")
        print(f"✅ 成功写入 '{filename}'。")
    except Exception as e:
        print(f"❌ 写入日志 '{filename}' 时发生错误: {e}")

if __name__ == "__main__":
    if load_all_data_sources():
        main_sync_process()
    else:
        print("\n由于核心数据文件加载失败，程序已终止。")
    
    input("按 Enter 键退出...")