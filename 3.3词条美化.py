import os
import re  # <-- 需要导入 're' 模块

# --- 1. 用户配置区 ---
# (您的所有字典配置保持不变，这里省略以保持简洁)
ROOT_DIR = r'./translated/'

# 通用字典
COMMOM_DICT_CONFIG = {
    '否则：': '[#!]否则：[#]', 
    '否則：': '[#!]否則：[#]',
    'Otherwise:': '[#!]Otherwise:[#]', 
    '暗黑系': '[##elementpurple]暗黑系[#]',
    '自然系': '[##elementgreen]自然系[#]',
    '烈火系': '[##elementred]烈火系[#]',
    '神圣系': '[##elementyellow]神圣系[#]',
    '神聖系': '[##elementyellow]神聖系[#]',
    '冰雪系': '[##elementblue]冰雪系[#]',
    '暗黑': '[##elementpurple]暗黑[#]',
    '自然': '[##elementgreen]自然[#]',
    '烈火': '[##elementred]烈火[#]',
    '神圣': '[##elementyellow]神圣[#]',
    '神聖': '[##elementyellow]神聖[#]',
    '冰雪': '[##elementblue]冰雪[#]',
    '冰霜': '[##elementblue]冰霜[#]',
    'Dark': '[##elementpurple]Dark[#]',
    'Nature': '[##elementgreen]Nature[#]',
    'Fire': '[##elementred]Fire[#]',
    'Holy': '[##elementyellow]Holy[#]',
    'Ice': '[##elementblue]Ice[#]',
    '莽夫乱拳': '[#!]莽夫乱拳[#]',
    '莽夫亂拳': '[#!]莽夫亂拳[#]',
    'Mindless Attack': '[#!]Mindless Attack[#]',
    '盲目治疗': '[#!]盲目治疗[#]',
    '莽夫治療': '[#!]莽夫治療[#]',
    'Mindless Heal': '[#!]Mindless Heal[#]',
    '无限回合': '[#!]无限回合[#]',
    '叠加（最多 10 层）：': '[#!]叠加（最多 10 层）：[#]',
    '疊加（上限： 10 ）：': '[#!]疊加（上限： 10 ）：[#]',
    'Stack (Max: 10):': '[#!]Stack (Max: 10):[#]',
    '缚魂': '[#!]缚魂[#]',
    '靈魂绑定': '[#!]靈魂绑定[#]',
    'Soul Bound': '[#!]Soul Bound[#]',
    '贪婪': '[#!]贪婪[#]',
    '貪婪': '[#!]貪婪[#]',
    'Greed': '[#!]Greed[#]',
    '沉睡': '[#!]沉睡[#]',
    '深沉睡眠': '[#!]深沉睡眠[#]',
    '衰退': '[##elementred]衰退[#]',
    '枯萎': '[##elementred]枯萎[#]',
    'Wither': '[##elementred]Wither[#]',
    '法力': '[#!]法力[#]',
    '法力生成': '[#!]法力生成[#]',
    '法力產出': '[#!]法力產出[#]',
    'Mana generation': '[#!]Mana generation[#]',
    'mana generation': '[#!]mana generation[#]',
    'Mana': '[#!]Mana[#]',
    'mana': '[#!]mana[#]',
    '精准度': '[##elementyellow]精准度[#]',
    '精準度': '[##elementyellow]精準度[#]',
    'accuracy': '[##elementyellow]accuracy[#]',
    '必定命中': '[##elementyellow]必定命中[#]',
    'never misses': '[##elementyellow]never misses[#]',
    '成长恩赐': '[#!]成长恩赐[#]',
    '成長恩惠': '[#!]成長恩惠[#]',
    '成长': '[#!]成长[#]',
    '成長': '[#!]成長[#]',
    'Growth': '[#!]Growth[#]',
    'Growth Boon': '[#!]Growth Boon[#]',
    '暴击几率': '[##elementred]暴击几率[#]',
    '暴擊率': '[##elementred]暴擊率[#]',
    '暴击': '[##elementred]暴击[#]',
    '暴擊': '[##elementred]暴擊[#]',
    'critical': '[##elementred]critical[#]',
    '状态异常免疫': '[#!]状态异常免疫[#]',
    '狀態異常免疫': '[#!]狀態異常免疫[#]',
    'immune to new status ailments': '[#!]immune to new status ailments[#]',
    '增益状态效果免疫': '[##elementred]增益状态效果免疫[#]',
    '免疫新的狀態效果增益': '[##elementred]免疫新的狀態效果增益[#]',
    'immune to new status effect buffs': '[##elementred]immune to new status effect buffs[#]',
    '闪避': '[#!]闪避[#]',
    '閃避': '[#!]閃避[#]',
    'dodge': '[#!]dodge[#]',
    '无视防御增益': '[#!]无视防御增益[#]',
    '無視防禦增益': '[#!]無視防禦增益[#]',
    'bypasses': '[#!]bypasses[#]',
    '嘲讽': '[##elementred]嘲讽[#]',
    '嘲諷': '[##elementred]嘲諷[#]',
    'Taunt': '[##elementred]Taunt[#]',
    '沉默': '[##elementred]沉默[#]',
    'silenced': '[##elementred]silenced[#]',
    '安全净化': '[##elementgreen]安全净化[#]',
    '安全淨化': '[##elementgreen]安全淨化[#]',
    'Safely cleanses': '[##elementgreen]Safely cleanses[#]',
    '安全驱散': '[##elementgreen]安全驱散[#]',
    '安全驅散': '[##elementgreen]安全驅散[#]',
    'Safely dispels': '[##elementgreen]Safely dispels[#]',
    '净化': '[##elementgreen]净化[#]',
    '淨化': '[##elementgreen]淨化[#]',
    'Cleanses': '[##elementgreen]Cleanses[#]',
    '驱散': '[#!]驱散[#]',
    '驅散': '[#!]驅散[#]',
    'Dispels': '[#!]Dispels[#]',
    '复活': '[##elementgreen]复活[#]',
    '復活': '[##elementgreen]復活[#]',
    'revived': '[##elementgreen]revived[#]',
    'revive': '[##elementgreen]revive[#]',
    '伤害减少': '[##elementyellow]伤害减少[#]',
    '傷害減少': '[##elementyellow]傷害減少[#]',
    '伤害降低': '[##elementyellow]伤害降低[#]',
    '傷害降低': '[##elementyellow]傷害降低[#]',
    'drop any received damage': '[##elementyellow]drop any received damage[#]',
    'reduce all received damage': '[##elementyellow]reduce all received damage[#]',
    '完全移除': '[#!]完全移除[#]',
    '完整移除': '[#!]完整移除[#]',
    'Full Removal': '[#!]Full Removal[#]',
    '无法驱散': '[#!]无法驱散[#]',
    '無法驅散': '[#!]無法驅散[#]',
    'can\'t be dispelled': '[#!]can\'t be dispelled[#]',
    '无法净化': '[##elementred]无法净化[#]',
    '無法淨化': '[##elementred]無法淨化[#]',
    'uncleansable': '[##elementred]uncleansable[#]',
    '麻木': '[##elementred]麻木[#]',
    '麻痺': '[##elementred]麻痺[#]',
    'Paralyzed': '[##elementred]Paralyzed[#]',
    '诅咒伤害': '[#!]诅咒伤害[#]',
    '詛咒傷害': '[#!]詛咒傷害[#]',
    'Curse damage': '[#!]Curse damage[#]',
    '剧毒伤害': '[##elementpurple]剧毒伤害[#]',
    '劇毒傷害': '[##elementpurple]劇毒傷害[#]',
    'Poison damage': '[##elementpurple]Poison damage[#]',
    '腐蚀剧毒': '[##elementpurple]腐蚀剧毒[#]',
    '腐蝕劇毒': '[##elementpurple]腐蝕劇毒[#]',
    'Corrosive Poison': '[##elementpurple]Corrosive Poison[#]',
    '燃烧伤害': '[##elementred]燃烧伤害[#]',
    '燃燒傷害': '[##elementred]燃燒傷害[#]',
    'Burn damage': '[##elementred]Burn damage[#]',
    '腐蚀燃烧': '[##elementred]腐蚀燃烧[#]',
    '腐蝕燃燒': '[##elementred]腐蝕燃燒[#]',
    'Corrosive Burn': '[##elementred]Corrosive Burn[#]',
    '奔涌流血伤害': '[##elementred]奔涌流血伤害[#]',
    '重傷流血傷害': '[##elementred]重傷流血傷害[#]',
    'Surge Bleed damage': '[##elementred]Surge Bleed damage[#]',
    '流血伤害': '[##elementred]流血伤害[#]',
    '流血傷害': '[##elementred]流血傷害[#]',
    'Bleed damage': '[##elementred]Bleed damage[#]',
    '沙系伤害': '[##elementyellow]沙系伤害[#]',
    '沙系傷害': '[##elementyellow]沙系伤害[#]',
    'Sand damage': '[##elementyellow]Sand damage[#]',
    '水系伤害': '[##elementblue]水系伤害[#]',
    '水系傷害': '[##elementblue]水系傷害[#]',
    'Water damage': '[##elementblue]Water damage[#]',
    '冰冻伤害': '[##elementblue]冰冻伤害[#]',
    '冰霜傷害': '[##elementblue]冰霜傷害[#]',
    'Frost damage': '[##elementblue]Frost damage[#]',
    '腐蚀冰冻': '[##elementblue]腐蚀冰冻[#]',
    '腐蝕冰霜': '[##elementblue]腐蝕冰霜[#]',
    'Corrosive Frost': '[##elementblue]Corrosive Frost[#]',
}

# 专属字典
EFFECTS_DICT = {
    # 在这里添加effects专属字典
}

FAMILIES_BONUS_DICT = {
    # 在这里添加families_bonus专属字典
}

PASSIVES_DICT = {
    # 在这里添加passives专属字典
    '剧毒': '[##elementpurple]剧毒[#]',
    '劇毒': '[##elementpurple]劇毒[#]',
    '燃烧': '[##elementred]燃烧[#]',
    '燃焼': '[##elementred]燃焼[#]',
    '流血': '[##elementred]流血[#]',
    '沙系': '[##elementyellow]沙系[#]',
    '水系': '[##elementblue]水系[#]',
    '冰冻': '[##elementblue]冰冻[#]',
    '冰霜': '[##elementblue]冰霜[#]',
}

# --- 2. 脚本核心逻辑 (已更新) ---

def process_file(filepath, common_dict, specific_dict):
    """
    处理单个文件，应用通用字典和专属字典进行替换。
    【新功能】此函数现在逐行处理，并会完全跳过包含 '"name":' 的行。
    """
    print(f"--- 正在处理文件: {filepath} ---")
    
    try:
        # 逐行读取文件内容到一个列表中
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"[!] 错误: 文件未找到 {filepath}")
        return
    except Exception as e:
        print(f"[!] 错误: 读取文件失败 {filepath} - {e}")
        return

    # 将原始行列表连接成字符串，用于最后的比较
    original_content = "".join(lines)
    
    # 合并字典 (专属字典的优先级高于通用字典)
    combined_dict = {**common_dict, **specific_dict}
    
    if not combined_dict:
        print("  > 字典为空，跳过。")
        return

    # --- 预编译正则表达式以提高效率 ---
    all_keys = sorted(list(combined_dict.keys()), key=len, reverse=True)
    if not all_keys:
        print("  > 字典键为空，跳过替换。")
        return
    regex_pattern = r'|'.join(re.escape(key) for key in all_keys)
    regex = re.compile(regex_pattern)

    # --- 预准备保护逻辑所需的值 ---
    all_values = sorted(list(set(combined_dict.values())), key=len, reverse=True)

    # --- 核心修改：逐行处理 ---
    processed_lines = []
    total_replacements = 0
    protected_count = 0

    for line in lines:
        # 【关键检查】如果行包含 "name":，则不进行任何处理，直接保留原样
        if '"name":' in line:
            processed_lines.append(line)
            continue  # 跳到下一行

        # --- 对不包含 "name": 的行执行替换逻辑 ---
        temp_line = line
        
        # 步骤 1: 保护该行中已存在的目标格式
        protection_map = {}
        placeholder_count = 0
        for value in all_values:
            if value in temp_line:
                while value in temp_line:
                    placeholder = f"__PROTECTED_{placeholder_count}__"
                    temp_line = temp_line.replace(value, placeholder, 1)
                    protection_map[placeholder] = value
                    placeholder_count += 1
        
        if placeholder_count > 0:
            protected_count += placeholder_count

        # 步骤 2: 使用 re.sub 执行替换
        replacement_stats = {'count': 0}
        def replacer(match):
            key = match.group(0)
            value = combined_dict[key]
            replacement_stats['count'] += 1
            return value

        replaced_line = regex.sub(replacer, temp_line)
        total_replacements += replacement_stats['count']

        # 步骤 3: 恢复被保护的内容
        final_line = replaced_line
        sorted_placeholders = sorted(protection_map.keys(), key=len, reverse=True)
        for placeholder in sorted_placeholders:
            final_line = final_line.replace(placeholder, protection_map[placeholder])
        
        # 将处理完的行添加到结果列表中
        processed_lines.append(final_line)

    # --- 日志和回写 ---
    if protected_count > 0:
        print(f"  > 已保护 {protected_count} 个已存在的词条...")
    
    if total_replacements > 0:
        print(f"  > 替换: 共执行了 {total_replacements} 次新替换。")
    
    if total_replacements == 0 and protected_count == 0:
        print(f"  > 未找到可替换或已保护的内容。")
        return

    final_content = "".join(processed_lines)

    if final_content != original_content:
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(final_content)
            print(f"  > [成功] 文件已更新: {filepath}")
        except Exception as e:
            print(f"[!] 错误: 写入文件失败 {filepath} - {e}")
    else:
        print(f"  > 文件内容无需更改。")

def main():
    """
    脚本主入口
    """
    if not os.path.isdir(ROOT_DIR):
        print(f"[!] 致命错误: 目录不存在: {ROOT_DIR}")
        print("请检查 ROOT_DIR 变量是否设置正确。")
        return

    print(f"开始处理目录: {ROOT_DIR}\n")

    # 定义文件和专属字典的映射关系
    file_map = {
        'effects': {
            'files': ['effects_cn.js', 'effects_en.js', 'effects_tc.js'],
            'dict': EFFECTS_DICT
        },
        'families_bonus': {
            'files': ['families_bonus_cn.js', 'families_bonus_en.js', 'families_bonus_tc.js'],
            'dict': FAMILIES_BONUS_DICT
        },
        'passives': {
            'files': ['passives_cn.js', 'passives_en.js', 'passives_tc.js'],
            'dict': PASSIVES_DICT
        }
    }

    # 遍历映射并处理文件
    for group_name, info in file_map.items():
        print(f"\n===== 处理 {group_name} 组 =====")
        specific_dict = info['dict']
        for filename in info['files']:
            filepath = os.path.join(ROOT_DIR, filename)
            
            # 检查文件是否存在
            if os.path.isfile(filepath):
                process_file(filepath, COMMOM_DICT_CONFIG, specific_dict)
            else:
                print(f"--- 跳过: 文件未找到 {filepath} ---")

    print("\n===== 所有任务已完成 =====")

# --- 脚本执行 ---
if __name__ == "__main__":
    main()
    input("\n按任意键退出...")