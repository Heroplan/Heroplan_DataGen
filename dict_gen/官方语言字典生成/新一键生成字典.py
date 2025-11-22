import re
import json
import os
import unicodedata
from collections import defaultdict

# --- 全局配置 ---
LANGUAGES_DIR = 'languages'
DICTIONARY_DIR = '../../dictionaries'
DEBUG_LOG_FILE = '../../logs/translation_debug.log'
INTERMEDIATE_TXT_DIR = 'generated_txt'

# 语言配置字典：语言文件名前缀 -> 语言代码后缀
LANGUAGE_CONFIG = {
    'Arabic': 'ar',
    'ChineseSimplified': 'cn',
    'ChineseTraditional': 'tc',
    'Danish': 'da',
    'Dutch': 'nl',
    'English': 'en',
    'Finnish': 'fi',
    'French': 'fr',
    'German': 'de',
    'Indonesian': 'id',
    'Italian': 'it',
    'Japanese': 'ja',
    'Korean': 'ko',
    'Norwegian': 'no',
    'Polish': 'pl',
    'Portuguese': 'pt',
    'Russian': 'ru',
    'Spanish': 'es',
    'Swedish': 'sv',
    'Turkish': 'tr',
}

EXTRACTION_RULES = {
    "heroes.name.": "heroes_name",
    "heroes.name_fancy": "heroes_name_fancy", 
    "specials.v2": "skill",
    "herocard.passive_skill": "passive_skill",
    "specials.name": "skill_name",
    "limitbreak.gift.title.": "aether_power",
    "herocard.family": "family_bonus",
    "familybonuses": "family_bonus",
    "herocard.family.title.":"family_title",
    "lottery.title.":"lottery_title",
    "event.name.":"event_name",
    "quests.name.":"quests_name",
    "quests.special_rule.name":"quests_name",
}

ORIGINAL_KEY_LONG = "familybonuses.description.long.resist_mana_reduction_and_mana_debuffs_with_mana_on_resist.statuseffectdebuffs.addmana.single.allies"
ORIGINAL_KEY_SHORT = "familybonuses.description.short.resist_mana_reduction_and_mana_debuffs_with_mana_on_resist.statuseffectdebuffs.addmana.single.allies"
NEW_KEY_LONG = "familybonuses.description.long.resist_mana_reduction_and_mana_debuffs_with_mana_on_resist_fauns.statuseffectdebuffs.addmana.single.allies"
NEW_KEY_SHORT = "familybonuses.description.short.resist_mana_reduction_and_mana_debuffs_with_mana_on_resist_fauns.statuseffectdebuffs.addmana.single.allies"

# --- 文本与文件处理函数 ---

def normalize_text_characters(text):
    """标准化文本字符，处理Unicode变体和常见标点符号。"""
    normalized_text = unicodedata.normalize('NFD', text)
    cleaned_text = ''.join(c for c in normalized_text if unicodedata.category(c) != 'Mn')
    replacements = {
        '』': "'", '『': "'", '「': '"', '」': '"', '〝': '"',
        '‐': '-', '—': '-', '–': '-', '…': '...',
        '™': '', '®': '', '©': ''
    }
    for old, new in replacements.items():
        cleaned_text = cleaned_text.replace(old, new)
    cleaned_text = ''.join(c for c in cleaned_text if c.isprintable() or c in ['\n', '\t'])
    return cleaned_text.strip()

def find_language_file(directory, prefix):
    """在目录中通过前缀查找文件。"""
    try:
        for filename in os.listdir(directory):
            if filename.startswith(prefix):
                print(f"找到文件: '{filename}' 对应前缀 '{prefix}'")
                return os.path.join(directory, filename)
    except FileNotFoundError:
        return None
    print(f"警告: 在目录 '{directory}' 中未找到以 '{prefix}' 开头的文件。")
    return None

def parse_source_text(text_content, filename_for_log):
    """解析文本内容，返回键值对字典，并处理换行符。"""
    parsed_data = {}
    matches = re.finditer(r'\"([^"]+)\",\"((?:.|\n)*?)\"(?:\n|$)', text_content, re.DOTALL)
    for match in matches:
        label, value = match.group(1), match.group(2)
        safe_value = value.replace('\\n', '\n')
        parsed_data[label] = safe_value.strip()
    return parsed_data

def process_language_file(file_path, is_json=False):
    """统一处理语言文件（JSON或TXT），返回清理后的内容和解析后的数据。"""
    content = ""
    try:
        if is_json:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            content = data.get("m_Script", "")
        else:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
    except Exception as e:
        print(f"读取或解析文件 '{file_path}' 时出错: {e}")
        return "", {}

    if not content:
        print(f"警告: 文件 '{file_path}' 中内容为空或未找到有效数据。")
        return "", {}

    # 使用更通用的正则表达式，删除所有[]及其内部内容
    cleaned_content = re.sub(r'\[.*?\]', '', content)
    parsed_data = parse_source_text(cleaned_content, file_path)
    
    return cleaned_content, parsed_data

def create_translation_map(english_data_subset, target_language_data_subset, analysis_type_name, lang_code):
    """生成翻译字典和调试信息。"""
    name_map, debug_info = {}, {'duplicates': defaultdict(list), 'unmatched_english': [], 'unmatched_target_language': []}
    target_lang_labels_in_subset = set(target_language_data_subset.keys())
    all_english_values_in_subset = defaultdict(list)
    
    for label, eng_value_raw in english_data_subset.items():
        eng_normalized = normalize_text_characters(eng_value_raw)
        all_english_values_in_subset[eng_normalized.lower()].append((label, eng_value_raw, eng_normalized))
    
    matched_target_lang_labels = set()
    for eng_key, eng_entries in all_english_values_in_subset.items():
        if len(eng_entries) > 1:
            debug_info['duplicates'][eng_key] = eng_entries
        
        found_match = False
        for label, eng_raw, eng_norm in eng_entries:
            if label in target_lang_labels_in_subset:
                target_lang_value = normalize_text_characters(target_language_data_subset[label])
                name_map[eng_norm] = target_lang_value
                matched_target_lang_labels.add(label)
                found_match = True
                break
        if not found_match:
            debug_info['unmatched_english'].append((eng_entries[0][0], eng_entries[0][1]))
    
    debug_info['unmatched_target_language'] = [(label, val) for label, val in target_language_data_subset.items() if label not in matched_target_lang_labels]
    return name_map, debug_info

# --- 文件保存与调试信息函数 ---
def save_debug_info(debug_info, analysis_type, lang_code):
    with open(DEBUG_LOG_FILE, 'a', encoding='utf-8') as f:
        f.write(f"\n\n=== {analysis_type} ({lang_code}) 翻译分析调试信息 ===\n")
        if debug_info['duplicates']:
            f.write("\n--- 重复的英文名称（标准化后相同） ---\n")
            for eng_key, entries in debug_info['duplicates'].items():
                f.write(f"\n'{eng_key}' 有以下变体:\n")
                for label, raw, norm in entries: f.write(f"- [{label}] 原始: '{raw}' 标准化: '{norm}'\n")
            f.write(f"\n总重复组数: {len(debug_info['duplicates'])}\n")
        else: f.write("\n--- 无重复英文名称 ---\n")
        if debug_info['unmatched_english']:
            f.write("\n--- 未匹配的英文条目 ---\n")
            for label, name in debug_info['unmatched_english']: f.write(f"- [{label}] {name}\n")
            f.write(f"总数: {len(debug_info['unmatched_english'])}\n")
        else: f.write("\n--- 无未匹配英文条目 ---\n")
        if debug_info['unmatched_target_language']:
            f.write(f"\n--- 未使用的{lang_code}翻译 ---\n")
            for label, name in debug_info['unmatched_target_language']: f.write(f"- [{label}] {name}\n")
            f.write(f"总数: {len(debug_info['unmatched_target_language'])}\n")
        else: f.write(f"\n--- 无未使用的{lang_code}翻译 ---\n")

def save_translation_map(name_map, map_filename):
    os.makedirs(DICTIONARY_DIR, exist_ok=True)
    full_path = os.path.join(DICTIONARY_DIR, map_filename)
    with open(full_path, 'w', encoding='utf-8') as f:
        json.dump(name_map, f, ensure_ascii=False, indent=2)
    print(f"翻译字典已保存到 {full_path}")

def copy_and_rename_entries_in_file(file_path):
    print(f"--- 正在处理文件 {file_path} 进行familybonus复制和重命名操作 ---")
    try:
        with open(file_path, 'r+', encoding='utf-8') as f:
            lines = f.readlines()
            f.seek(0); f.truncate()
            found_long_entry, found_short_entry = None, None
            processed_lines, seen_lines = [], set()
            for line in lines:
                stripped = line.strip()
                if not stripped: continue
                if stripped.startswith(f'"{ORIGINAL_KEY_LONG}"'): found_long_entry = stripped
                elif stripped.startswith(f'"{ORIGINAL_KEY_SHORT}"'): found_short_entry = stripped
                if stripped not in seen_lines:
                    processed_lines.append(stripped)
                    seen_lines.add(stripped)
            added_count = 0
            if found_long_entry:
                new_entry = found_long_entry.replace(f'"{ORIGINAL_KEY_LONG}"', f'"{NEW_KEY_LONG}"', 1)
                if new_entry not in seen_lines:
                    processed_lines.append(new_entry); seen_lines.add(new_entry); added_count += 1
                    print(f"已将 '{ORIGINAL_KEY_LONG}' 复制到 '{NEW_KEY_LONG}'。")
            if found_short_entry:
                new_entry = found_short_entry.replace(f'"{ORIGINAL_KEY_SHORT}"', f'"{NEW_KEY_SHORT}"', 1)
                if new_entry not in seen_lines:
                    processed_lines.append(new_entry); seen_lines.add(new_entry); added_count += 1
                    print(f"已将 '{ORIGINAL_KEY_SHORT}' 复制到 '{NEW_KEY_SHORT}'。")
            f.write('\n'.join(processed_lines) + '\n')
            if added_count > 0: print(f"成功更新文件 {file_path} 并添加了 {added_count} 个新词条。")
            else: print(f"文件 {file_path} 中没有添加新的词条。")
    except Exception as e:
        print(f"处理文件 {file_path} familybonus复制/重命名时出错: {e}")

# --- 主程序入口 ---
if __name__ == "__main__":
    if os.path.exists(DEBUG_LOG_FILE): os.remove(DEBUG_LOG_FILE)
    os.makedirs(DICTIONARY_DIR, exist_ok=True)
    os.makedirs(LANGUAGES_DIR, exist_ok=True)
    os.makedirs(INTERMEDIATE_TXT_DIR, exist_ok=True)

    print("=== 多语言文本提取、复制与翻译字典生成工具 ===")
    
    print("\n--- 正在搜索并处理语言文件 ---")
    
    # 查找英文文件（必须存在）
    english_file = find_language_file(LANGUAGES_DIR, 'English')
    if not english_file:
        print(f"错误: 在 '{LANGUAGES_DIR}' 目录中未找到英文源文件。脚本终止。")
        exit(1)

    # 处理英文文件
    full_english_content, full_english_data = process_language_file(english_file, is_json=False)
    print(f"英文文件 '{english_file}' 清理和解析完成，共 {len(full_english_data)} 条目。")

    # 动态查找和处理所有配置的语言文件
    language_files = {}
    for lang_prefix, lang_suffix in LANGUAGE_CONFIG.items():
        lang_file = find_language_file(LANGUAGES_DIR, lang_prefix)
        if lang_file:
            content, data = process_language_file(lang_file, is_json=False)
            if data:
                language_files[lang_prefix] = {
                    'file_path': lang_file,
                    'content': content,
                    'data': data,
                    'suffix': lang_suffix
                }
                print(f"{lang_prefix}文件 '{lang_file}' 清理和解析完成，共 {len(data)} 条目。")
        else:
            print(f"警告: 未找到{lang_prefix}语言文件")

    processed_output_types = set()
    for label_prefix, output_type in EXTRACTION_RULES.items():
        if output_type in processed_output_types: continue
        processed_output_types.add(output_type)

        print(f"\n--- 正在处理 '{output_type}' 类型数据 ---")
        
        prefixes = [lp for lp, ot in EXTRACTION_RULES.items() if ot == output_type]
        
        # 提取英文子集
        en_subset = {k: v for k, v in full_english_data.items() if any(k.startswith(p) for p in prefixes)}
        en_lines = [m.group(0) for m in re.finditer(r'\"([^"]+)\",\"((?:.|\n)*?)\"(?:\n|$)', full_english_content) 
                   if any(m.group(1).startswith(p) for p in prefixes)]

        # 为英文生成中间文件
        if en_lines:
            en_output_path = os.path.join(INTERMEDIATE_TXT_DIR, f"{output_type}_en.txt")
            with open(en_output_path, 'w', encoding='utf-8') as f:
                f.write("".join(en_lines))
            print(f"已提取 {len(en_lines)} 条英文条目到文件 {en_output_path}")
            
            # 对familybonus类型进行复制重命名操作
            if output_type == "family_bonus":
                copy_and_rename_entries_in_file(en_output_path)

        if not en_subset: 
            print(f"警告: 在英文文件中未找到 '{output_type}' 类型的条目")
            continue

        # 为每种配置的语言处理数据
        match_results = []
        for lang_prefix, lang_info in language_files.items():
            lang_suffix = lang_info['suffix']
            lang_data = lang_info['data']
            lang_content = lang_info['content']
            
            # 提取目标语言子集
            target_subset = {k: v for k, v in lang_data.items() if any(k.startswith(p) for p in prefixes)}
            target_lines = [m.group(0) for m in re.finditer(r'\"([^"]+)\",\"((?:.|\n)*?)\"(?:\n|$)', lang_content) 
                           if any(m.group(1).startswith(p) for p in prefixes)]

            # 生成目标语言的中间文件
            if target_lines:
                target_output_path = os.path.join(INTERMEDIATE_TXT_DIR, f"{output_type}_{lang_suffix}.txt")
                with open(target_output_path, 'w', encoding='utf-8') as f:
                    f.write("".join(target_lines))
                print(f"已提取 {len(target_lines)} 条{lang_prefix}条目到文件 {target_output_path}")
                
                # 对familybonus类型进行复制重命名操作
                if output_type == "family_bonus":
                    copy_and_rename_entries_in_file(target_output_path)

            # 创建翻译映射
            translation_map, debug_info = create_translation_map(en_subset, target_subset, output_type, lang_prefix)
            
            # 保存翻译字典
            dict_filename = f"{output_type}_dict_{lang_suffix}.json"
            save_translation_map(translation_map, dict_filename)
            
            # 保存调试信息
            save_debug_info(debug_info, output_type, lang_prefix)
            
            match_results.append(f"{lang_prefix}: {len(translation_map)}条")

        # 输出匹配结果
        if match_results:
            print(f"[{output_type} 匹配结果] " + ", ".join(match_results))
        else:
            print(f"[{output_type} 匹配结果] 无匹配的语言文件")

    print("\n所有任务处理完成！")