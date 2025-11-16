import json
import re
import os
from datetime import datetime

# ================= 请在这里配置您要排除的英雄名称 =================
EXCLUDED_HERO_NAMES = []
# =====================================================================
def log_message(message, log_file='../logs/extract_heroes_data_log.txt'):
    """将消息同时打印到控制台和日志文件"""
    print(message)
    with open(log_file, 'a', encoding='utf-8') as f:
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        f.write(f"[{timestamp}] {message}\n")

def _clean_and_normalize_string(s):
    """
    [辅助函数] 专门用于清理单个字符串中的多余格式。
    - 移除首尾多余的空格。
    - 移除包裹整个字符串的单引号。
    - 将源数据中用作换行的 ' ' 替换为单个空格。
    """
    if not isinstance(s, str):
        return s
    
    # 1. 移除首尾空格
    cleaned_s = s.strip()
    
    # 2. 如果字符串被单引号包裹，则移除它们
    if cleaned_s.startswith("'") and cleaned_s.endswith("'"):
        cleaned_s = cleaned_s[1:-1]
        
    # 3. 将源数据中奇怪的 ' ' 拼接符替换为标准空格
    #    这个操作会把 'word' 'word' 变成 'word word'
    cleaned_s = cleaned_s.replace("' '", " ")
    
    # 4. 最后再清理一次，以防上面的操作产生新的首尾空格
    return cleaned_s.strip()


def process_and_split_multiline_strings(input_list):
    """
    处理一个列表，将其中的字符串按特定规则拆分。（最终修正版）
    该版本整合了强大的清理功能和精确的拆分逻辑。
    """
    if not isinstance(input_list, list):
        return [] 

    processed_list = []
    for item in input_list:
        # --- 步骤 1: 对每个条目进行彻底的清理 ---
        cleaned_item = _clean_and_normalize_string(item)
        
        # 如果清理后为空，则直接跳过
        if not cleaned_item:
            continue

        # --- 步骤 2: 对清理后的字符串应用精确的拆分逻辑 ---
        
        # 使用正则表达式查找作为“分隔符”的 ' * '
        if re.search(r'(?<=\S)\s\*\s', cleaned_item):
            parts = re.split(r'\s\*\s', cleaned_item)
            
            # 再次清理分割后的每个部分，以防万一
            non_empty_parts = [_clean_and_normalize_string(p) for p in parts if _clean_and_normalize_string(p)]
            
            if not non_empty_parts:
                continue

            processed_list.append(non_empty_parts[0])
            for part in non_empty_parts[1:]:
                processed_list.append(f"* {part}")

        # 如果不含分隔符，则按换行符处理
        elif '\n' in cleaned_item:
            lines = cleaned_item.splitlines()
            for line in lines:
                cleaned_line = line.strip()
                if cleaned_line:
                    processed_list.append(cleaned_line)
        # 否则，直接添加清理后的单行
        else:
            processed_list.append(cleaned_item)
            
    return processed_list

def extract_all_without_uniqueness_check(
    input_file='heroes_data_en.js', 
    output_file='default_output.js',
    log_file='logs/extract_heroes_data_log.txt',
    extract_key='effects'
):
    """
    【无唯一性检查版】
    提取所有英雄（无论目标键是否为空），从0开始重新编号并完全覆盖输出文件。
    """
    # 确保日志目录存在
    if not os.path.exists('../logs'):
        os.makedirs('../logs')
    log_message(f"--- 运行提取任务 (提取目标: {extract_key}, 无唯一性检查) ---")
    exclusion_set = set(EXCLUDED_HERO_NAMES)

    # --- 1. 读取源数据 ---
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            js_content = f.read()
        match = re.search(r'=\s*(\[[\s\S]*\])\s*;?', js_content)
        if not match:
            log_message(f"❌ 读取源文件 '{input_file}' 失败: 找不到JS数组。")
            return
        all_heroes = json.loads(match.group(1))
        log_message(f"✔️ 已读取源文件，共 {len(all_heroes)} 个英雄。")
    except FileNotFoundError:
        log_message(f"❌ 读取源文件 '{input_file}' 失败: 文件未找到。")
        return
    except Exception as e:
        log_message(f"❌ 读取或解析源文件 '{input_file}' 时出错: {e}")
        return

    # --- 2. 将所有英雄（除被排除的之外）直接加入列表 ---
    heroes_to_add = []
    for hero in all_heroes:
        if hero.get("name") in exclusion_set:
            continue
        
        # ★★★ 已删除“if not hero.get(extract_key):”判断 ★★★
        # 现在所有英雄都会被处理

        heroes_to_add.append(hero)

    if not heroes_to_add:
        log_message(f"\n✅ 源文件中没有可添加的英雄 (可能都已在排除列表中)。")
        return
        
    # --- 3. 从 0 开始，为所有英雄分配新序号并创建条目 ---
    log_message(f"✨ 将处理全部 {len(heroes_to_add)} 个条目，从 Index 0 开始重新编号并生成新文件...")
    
    new_entries = []
    next_display_index = 0
    for hero in heroes_to_add:
        hero_name = hero.get("name", "") # 获取英雄名称
        skill_name = hero.get("skill", "") # Original skill name, though not used in output directly
        
        # 使用 hero.get(extract_key, []) 来安全地获取数据，如果不存在则返回空列表
        data_to_extract = hero.get(extract_key, [])
        processed_data = process_and_split_multiline_strings(data_to_extract)
        
        entry = {
            "originalIndex": next_display_index,
            "name": hero_name,  # 添加英雄名称
            extract_key: processed_data
        }
    
        new_entries.append(entry)
        next_display_index += 1

    # --- 4. 完全覆盖并写入新文件 ---
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("const allTranslations = \n")
        json.dump(new_entries, f, ensure_ascii=False, indent=4)
        f.write(";")
            
    log_message(f"\n🎉 操作完成！已将 {len(new_entries)} 个条目全新写入到 '{output_file}'。")


if __name__ == '__main__':
    log_message("--- 开始执行批量提取任务 (模式：无唯一性检查，覆盖写入) ---")
    
    # 任务1：提取 'effects' 到 to_translate 目录
    log_message("\n--- [任务 1/4]: 正在处理 'effects' (to_translate) ---")
    extract_all_without_uniqueness_check(
        input_file='heroes_data_en.js',
        output_file='to_translate/effects_to_translate.js',
        log_file='logs/extract_heroes_data_log.txt',
        extract_key='effects'
    )
    
    # 任务2：提取 'passives' 到 to_translate 目录
    log_message("\n--- [任务 2/4]: 正在处理 'passives' (to_translate) ---")
    extract_all_without_uniqueness_check(
        input_file='heroes_data_en.js',
        output_file='to_translate/passives_to_translate.js',
        log_file='logs/extract_heroes_data_log.txt',
        extract_key='passives'
    )

    # 任务3：提取 'effects' 到 translated 目录 (用于生成英文数据)
    log_message("\n--- [任务 3/4]: 正在处理 'effects' (translated) ---")
    extract_all_without_uniqueness_check(
        input_file='heroes_data_cn.js',
        output_file='translated/effects_en.js',
        log_file='logs/extract_heroes_data_log.txt',
        extract_key='effects'
    )
    
    # 任务4：提取 'passives' 到 translated 目录 (用于生成英文数据)
    log_message("\n--- [任务 4/4]: 正在处理 'passives' (translated) ---")
    extract_all_without_uniqueness_check(
        input_file='heroes_data_cn.js',
        output_file='translated/passives_en.js',
        log_file='logs/extract_heroes_data_log.txt',
        extract_key='passives'
    )

    log_message("\n--- 所有任务执行完毕 ---")
    input("\n按任意键退出...")
