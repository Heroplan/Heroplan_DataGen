# -*- coding: utf-8 -*-
import os
import re
import yaml
import json
import unicodedata
import logging
from tqdm import tqdm

# --- 文本标准化函数 ---
def normalize_for_hero_name(text):
    """专用于英雄名称的规范化，会移除空格。"""
    if not isinstance(text, str): return ""
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')
    text = re.sub(r"[\s.'´\[\]-]", "", text)
    return text.lower()

def normalize_for_generic_lookup(text):
    """通用值的规范化，保留空格。"""
    if not isinstance(text, str): return ""
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')
    text = re.sub(r"[-.'´\[\]]", "", text)
    return text.lower()

# --- 内置拼写纠正字典 ---
typo_corrections = {
    "Racoon Bite": "Raccoon Bite", "Slash of the four Blades": "Slash of Four Blades",
    "Enchanted Symptony": "Enchanted Symphony", "Veridant Minor": "Verdant Mirror",
    "Remendies and Diseases": "Remedies and Diseases", "Flute of Echantment": "Flute of Enchantment",
    "Mallett Swing of the Beast": "Mallet Swing of the Beast", "Poem of Morass": "Poem of the Morass",
    "Sand Gate": "Sand Gale", "Poison-Tipped-Arrow": "Poison-Tipped Arrow",
    "Elegent Pulverizer": "Elegant Pulverizer", "Wand of the Mana Control": "Wand of Mana Control",
    "Raven's Vigil": "Ravens' Vigil", "Slime Croated Sword": "Slime Coated Sword",
    "Summoning the Ballerinas": "Summoning of Ballerinas", "Gentleman's Tranformation": "Gentleman's Transformation",
    "Excorcizing Arrow": "Exorcizing Arrow", "Vampire Heist": "Vampiric Heist",
    "Trickter's Lullaby": "Trickster's Lullaby", "Advanture Awaits!": "Adventure Awaits!",
    "Mark of the Prey": "Mark the Prey", "Magnificient Meal": "Magnificent Meal",
    "Slash of the Seven Blades": "Slash of Seven Blades", "Slash of the Seven Daggers": "Slash of Seven Daggers",
    "Blade of Bundalkhand": "Blade of Bundelkhand", "Holly Aura": "Holy Aura",
    "Strike of Thousand Howls": "Strike of a Thousand Howls", "Judgement of Sun": "Judgment of Sun",
    "Ruler of the Seas": "Ruler of Seas",
}
tolerant_typo_corrections = {normalize_for_generic_lookup(k): v for k, v in typo_corrections.items()}

# --- 新增：字典键修正 (Key Correction) ---
# 用于在加载后、处理前，修正从JSON文件中读到的错误的原始键。
# 键是错误的形式，值是正确形式。
key_corrections = {
    'Kalø': 'Kalo',  # 修正1: 将包含“空集符号(∅)”和“不换行空格”的错误键，修正为包含正确字母(ø)且无空格的键
}

# --- 配置 ---
HEROES_DATA_DIR = '../heroplan_data/data/heroes'
DICTIONARY_DIR = 'dictionaries'
HEROES_DATA_EXTRA_FILE = 'heroes_data_extra.js'
OUTPUT_JS_FILE_CN = 'heroes_data_cn.js'
OUTPUT_JS_FILE_TC = 'heroes_data_tc.js'
OUTPUT_JS_FILE_EN = 'heroes_data_en.js'

SIMPLE_DICT_CONFIG = {
    'hero_names': 'heroes_name_dict',
    'types': 'types_dict',
    'skill_types': 'skill_types_dict',
    'skillname': 'skill_name_dict',
    'heroes_name_fancy': 'heroes_name_fancy_dict',
    'aether_powers': 'aether_power_dict',
}
BASE_DICT_FILE_STEM = 'base_values_dict'

# --- 全局变量 ---
LANGUAGES = ['cn', 'tc', 'en']
translations = {}
hero_map_processed = {}
hero_keys_sorted = []
heroes_extra_lookup = {}
appearance_map_zh = {"costume": "C1", "costume1": "C1", "costume2": "C2", "costume3": "C3", "toon": "卡通", "glass": "玻璃"}
appearance_map_en = {"costume": "C1", "costume1": "C1", "costume2": "C2", "costume3": "C3", "toon": "Toon", "glass": "Glass"}


# --- 功能函数 ---

def setup_logging():
    """设置日志记录器，同时输出到控制台和文件。"""
    log_dir = 'logs'
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)
    logging.basicConfig(filename=os.path.join(log_dir, "generation.log"), level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s', encoding='utf-8', filemode='w')
    console = logging.StreamHandler()
    console.setLevel(logging.INFO)
    console.setFormatter(logging.Formatter('%(levelname)s - %(message)s'))
    logging.getLogger('').addHandler(console)

def clean_string_for_output(text):
    """清理最终输出字符串中的特定字符。"""
    if not isinstance(text, str): return text
    return text.replace('[', '').replace(']', '')

def load_all_dictionaries(dictionary_base_dir):
    """(已修改) 加载所有字典，应用键修正，并创建用于模糊匹配的“宽容”版本。"""
    global hero_map_processed, hero_keys_sorted
    print("正在加载所有字典...")

    # --- 加载简单字典并应用键修正 ---
    for key, file_stem in SIMPLE_DICT_CONFIG.items():
        translations[key] = {lang: {} for lang in LANGUAGES}
        for lang in LANGUAGES:
            filepath = os.path.join(dictionary_base_dir, f"{file_stem}_{lang}.json")
            if os.path.exists(filepath):
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        original_data = json.load(f)
                    
                    corrected_data = {key_corrections.get(k, k): v for k, v in original_data.items()}
                    translations[key][lang] = corrected_data
                except Exception as e:
                    logging.error(f"加载字典文件 '{filepath}' 时出错: {e}")

    # --- 加载基础数据字典并应用键修正 ---
    for lang in LANGUAGES:
        filepath = os.path.join(dictionary_base_dir, f"{BASE_DICT_FILE_STEM}_{lang}.json")
        if os.path.exists(filepath):
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    original_base_data = json.load(f)
                
                corrected_base_data = {}
                for base_key, value_dict in original_base_data.items():
                    corrected_base_key = key_corrections.get(base_key, base_key)
                    corrected_value_dict = {key_corrections.get(k, k): v for k, v in value_dict.items()}
                    corrected_base_data[corrected_base_key] = corrected_value_dict

                for key, value_dict in corrected_base_data.items():
                    if key not in translations:
                        translations[key] = {lang: {} for lang in LANGUAGES}
                    translations[key][lang] = value_dict
            except Exception as e:
                logging.error(f"加载基础数据文件 '{filepath}' 时出错: {e}")

    # --- 基于修正后的数据创建宽容字典 ---
    print("正在创建宽容匹配字典...")
    for key in list(translations.keys()):
        if key.endswith('_tolerant'): continue
        tolerant_key = f"{key}_tolerant"
        translations[tolerant_key] = {lang: {} for lang in LANGUAGES}
        for lang in LANGUAGES:
            translations[tolerant_key][lang] = {
                normalize_for_generic_lookup(ik): v for ik, v in translations.get(key, {}).get(lang, {}).items()
            }
            
    # --- 基于修正后的数据预处理英雄名 ---
    print("正在预处理英雄名称以供快速查找...")
    temp_hero_map = {}
    all_hero_keys = set()
    for lang in LANGUAGES:
        all_hero_keys.update(translations.get('hero_names', {}).get(lang, {}).keys())
        
    for k in all_hero_keys:
        norm_k = normalize_for_hero_name(k)
        original_k_no_accents = unicodedata.normalize('NFKD', k).encode('ascii', 'ignore').decode('utf-8')
        trans_dict = {lang: translations.get('hero_names', {}).get(lang, {}).get(k, '').strip() for lang in LANGUAGES}
        temp_hero_map[norm_k] = (original_k_no_accents, trans_dict)
        
    hero_map_processed = temp_hero_map
    hero_keys_sorted = sorted(hero_map_processed.keys(), key=len, reverse=True)
    print("所有字典加载和预处理完成。")

def translate_name(name_en):
    """翻译英雄名，如果完全找不到则记录日志。"""
    if not isinstance(name_en, str):
        return {lang: str(name_en) for lang in LANGUAGES}
        
    original_name_no_accents_full = unicodedata.normalize('NFKD', name_en).encode('ascii', 'ignore').decode('utf-8')
    normalized_input = normalize_for_hero_name(original_name_no_accents_full)
    found_hero_base_translations, original_base_name_no_accents = None, ""
    
    for norm_key in hero_keys_sorted:
        if normalized_input.startswith(norm_key):
            original_base_name_no_accents, found_hero_base_translations = hero_map_processed[norm_key]
            break
            
    if found_hero_base_translations:
        suffix = original_name_no_accents_full[len(original_base_name_no_accents):].strip()
        cleaned_english_name = clean_string_for_output(original_base_name_no_accents)
        final_names = {}
        for lang in LANGUAGES:
            if lang == 'en':
                base_name_trans = cleaned_english_name
            else:
                cn_base = clean_string_for_output(found_hero_base_translations.get(lang, ''))
                base_name_trans = f"{cn_base} ({cleaned_english_name})".strip() if cn_base else cleaned_english_name
            translated_suffix = ""
            if suffix:
                current_map = appearance_map_en if lang == 'en' else appearance_map_zh
                translated_suffix = current_map.get(suffix.lower(), suffix)
            final_names[lang] = f"{base_name_trans} {translated_suffix}".strip() if translated_suffix else base_name_trans
        return final_names
        
    cleaned_full_name = clean_string_for_output(original_name_no_accents_full)
    logging.warning(f"[英雄名未匹配] 在字典中找不到英雄: '{name_en}' (规范化为: '{normalized_input}')")
    return {lang: cleaned_full_name for lang in LANGUAGES}


def translate_single_value(value, dict_key):
    """翻译单个值，当翻译未命中时，记录日志。"""
    if not isinstance(value, str) or not value:
        return {lang: value for lang in LANGUAGES}
        
    normalized_value = normalize_for_generic_lookup(value)
    translations_out = {}
    found_any = False
    
    for lang in LANGUAGES:
        tolerant_map = translations.get(f"{dict_key}_tolerant", {}).get(lang, {})
        translated = tolerant_map.get(normalized_value)
        if translated is not None:
            translations_out[lang] = translated
            found_any = True
        else:
            translations_out[lang] = value

    if not found_any and dict_key not in ['heroes_name_fancy', 'aether_powers']:
        logging.warning(f"[翻译缺失] 在字典 '{dict_key}' 中找不到值: '{value}' (规范化为: '{normalized_value}')")
        
    return translations_out

def correct_and_translate_skill(skill_name_raw):
    """修正拼写错误并翻译技能名。"""
    if not skill_name_raw:
        return {lang: skill_name_raw for lang in LANGUAGES}
    normalized_for_typo_lookup = normalize_for_generic_lookup(skill_name_raw)
    corrected_skill_name = tolerant_typo_corrections.get(normalized_for_typo_lookup, skill_name_raw)
    return translate_single_value(corrected_skill_name, 'skillname')

def translate_list(items_list, dict_key):
    """通用列表翻译函数，增加日志记录功能。"""
    if not isinstance(items_list, list):
        return {lang: items_list for lang in LANGUAGES}
        
    translated_items = {lang: [] for lang in LANGUAGES}
    
    for item in items_list:
        if isinstance(item, str) and item:
            normalized_item = normalize_for_generic_lookup(item)
            
            found_in_any_lang = any(normalized_item in translations.get(f"{dict_key}_tolerant", {}).get(lang_check, {}) for lang_check in LANGUAGES)
            
            if not found_in_any_lang:
                logging.warning(f"[列表翻译缺失] 在字典 '{dict_key}' 中找不到值: '{item}' (规范化为: '{normalized_item}')")

            for lang in LANGUAGES:
                tolerant_map = translations.get(f"{dict_key}_tolerant", {}).get(lang, {})
                translated_items[lang].append(tolerant_map.get(normalized_item, item))
        else:
            for lang in LANGUAGES:
                translated_items[lang].append(item)
                
    return translated_items

def flatten_list(nested_list):
    """将嵌套列表或字典平铺为单层列表。"""
    if not isinstance(nested_list, list): return [nested_list] if nested_list is not None else []
    flat_list = []
    for item in nested_list:
        if isinstance(item, list): flat_list.extend(flatten_list(item))
        elif isinstance(item, dict):
            for key, value in item.items(): flat_list.append(f"{key}: {value}")
        elif item is not None: flat_list.append(item)
    return flat_list

def load_heroes_data_extra():
    """(已修正) 加载包含额外英雄数据的JS文件，使用更安全的解析方式。"""
    global heroes_extra_lookup
    if not os.path.exists(HEROES_DATA_EXTRA_FILE):
        logging.warning(f"警告: 额外数据文件未找到: {HEROES_DATA_EXTRA_FILE}")
        return
        
    try:
        with open(HEROES_DATA_EXTRA_FILE, 'r', encoding='utf-8') as f:
            js_content = f.read()
        
        match = re.search(r'=\s*(\[[\s\S]*?\])\s*;', js_content)
        if not match:
            logging.error(f"在 '{HEROES_DATA_EXTRA_FILE}' 中找不到 'window.allHeroesExtra =' 或类似的数组结构。")
            return

        json_str = match.group(1)
        json_str = re.sub(r',\s*([\]}])', r'\1', json_str) # 移除结尾多余的逗号
        
        data = json.loads(json_str)
        for entry in data:
            if name_raw := entry.get('name'):
                heroes_extra_lookup[normalize_for_hero_name(name_raw)] = entry

    except json.JSONDecodeError as e:
        logging.error(f"解析 '{HEROES_DATA_EXTRA_FILE}' 时发生JSON解码错误。这通常意味着文件内容不是严格的JSON格式。错误信息: {e}")
    except Exception as e:
        logging.error(f"处理 '{HEROES_DATA_EXTRA_FILE}' 时发生未知错误: {e}", exc_info=True)


def generate_js_data_with_translation(heroes_base_dir, output_path_cn, output_path_tc, output_path_en):
    """(已修正) 修复了因循环结构改变导致的 color 和 star 丢失问题。"""
    all_hero_data = {lang: [] for lang in LANGUAGES}
    missing_extra_info = []
    original_index_counter = 0

    print("开始扫描英雄文件...")
    hero_files_to_process = []
    # 步骤一：扫描文件，但这次将 color 和 star 与路径一起打包存储
    for color in ['blue', 'green', 'purple', 'red', 'yellow']:
        for star in range(1, 6):
            star_path = os.path.join(heroes_base_dir, color, str(star))
            if os.path.isdir(star_path):
                for filename in os.listdir(star_path):
                    if filename.endswith('.yml') and 'costume' not in filename.lower():
                        hero_files_to_process.append({
                            'filepath': os.path.join(star_path, filename),
                            'color': color,
                            'star': star
                        })

    print(f"扫描完成，共找到 {len(hero_files_to_process)} 个英雄文件。开始处理...")
    
    # 步骤二：遍历打包好的信息
    for hero_info in tqdm(hero_files_to_process, desc="处理英雄进度"):
        try:
            # 从打包信息中正确地取出 color 和 star
            filepath = hero_info['filepath']
            current_color = hero_info['color']
            current_star = hero_info['star']

            with open(filepath, 'r', encoding='utf-8') as f:
                hero_data = yaml.safe_load(f.read().replace('\t', '    '))
            
            if not hero_data or 'name' not in hero_data: continue

            hero_name_raw = hero_data.get('name')
            extra = heroes_extra_lookup.get(normalize_for_hero_name(hero_name_raw), {})
            if not extra: missing_extra_info.append(f"基础英雄: '{hero_name_raw}'")

            # --- 翻译部分 (使用正确的 color 和 star 变量) ---
            name_trans = translate_name(hero_name_raw)
            fancy_name_trans = translate_single_value(extra.get('fancy name', ''), 'heroes_name_fancy')
            aether_power_trans = translate_single_value(extra.get('AetherPower', ''), 'aether_powers')
            color_trans = translate_single_value(current_color, 'base_values') # <-- 修正点
            class_trans = translate_single_value(hero_data.get('class'), 'base_values')
            speed = 'slayer' if hero_data.get('family') == 'slayer' else hero_data.get('speed')
            speed_trans = translate_single_value(speed, 'base_values')
            skill_trans = correct_and_translate_skill(hero_data.get('skill'))
            source_trans = translate_single_value(hero_data.get('source'), 'source_values')
            types_trans = translate_list(flatten_list(hero_data.get('types', [])), 'types')
            skill_types_trans = translate_list(extra.get('skill_types', []), 'skill_types')
            
            # --- 数据打包 (使用正确的 star 变量) ---
            common_data = {
                'Release date': extra.get('Release date', ''), 'star': current_star, # <-- 修正点
                'power': hero_data.get('power'), 'attack': hero_data.get('attack'), 
                'defense': hero_data.get('defense'), 'health': hero_data.get('health'), 
                'effects': flatten_list(hero_data.get('effects', [])), 
                'passives': flatten_list(hero_data.get('passives', [])), 
                'family': hero_data.get('family'), 'image': hero_data.get('image'), 
                'costume_id': 0, 'originalIndex': original_index_counter
            }
            
            for lang in LANGUAGES:
                all_hero_data[lang].append({
                    'name': name_trans[lang], 'fancy_name': fancy_name_trans[lang],
                    'AetherPower': aether_power_trans[lang], 'color': color_trans[lang],
                    'class': class_trans[lang], 'speed': speed_trans[lang],
                    'skill': skill_trans[lang], 'types': types_trans[lang],
                    'skill_types': skill_types_trans[lang], 'source': source_trans[lang],
                    **common_data
                })
            original_index_counter += 1

            # --- 处理时装 (使用正确的 star 变量) ---
            for key in hero_data:
                if key.startswith('costume') and isinstance(hero_data[key], dict):
                    costume_data = hero_data[key]
                    suffix = costume_data.get('design', key)
                    if suffix == "costume": suffix = "costume1"
                    costume_id = int(re.match(r'costume(\d*)', key).group(1) or 1)
                    full_name = f"{hero_name_raw} {suffix}".strip()
                    extra_c = heroes_extra_lookup.get(normalize_for_hero_name(full_name), {})
                    if not extra_c: missing_extra_info.append(f"时装英雄: '{full_name}'")
                    
                    name_trans_c = translate_name(full_name)
                    fancy_name_trans_c = translate_single_value(extra_c.get('fancy name', ''), 'heroes_name_fancy')
                    aether_power_trans_c = translate_single_value(extra_c.get('AetherPower', ''), 'aether_powers')
                    class_trans_c = translate_single_value(costume_data.get('class'), 'base_values')
                    skill_trans_c = correct_and_translate_skill(costume_data.get('skill'))
                    types_trans_c = translate_list(flatten_list(costume_data.get('types', [])), 'types')
                    skill_types_trans_c = translate_list(extra_c.get('skill_types', []), 'skill_types')
                    
                    common_data_c = {
                        'Release date': extra_c.get('Release date', ''), 'star': current_star, # <-- 修正点
                        'power': costume_data.get('power'), 'attack': costume_data.get('attack'), 
                        'defense': costume_data.get('defense'), 'health': costume_data.get('health'), 
                        'effects': flatten_list(costume_data.get('effects', [])), 
                        'passives': flatten_list(costume_data.get('passives', [])), 
                        'family': hero_data.get('family'), 'image': costume_data.get('image'), 
                        'costume_id': costume_id, 'originalIndex': original_index_counter
                    }
                    
                    for lang in LANGUAGES:
                        all_hero_data[lang].append({
                            'name': name_trans_c[lang], 'fancy_name': fancy_name_trans_c[lang],
                            'AetherPower': aether_power_trans_c[lang], 'color': color_trans[lang],
                            'class': class_trans_c[lang], 'speed': speed_trans[lang],
                            'skill': skill_trans_c[lang], 'types': types_trans_c[lang],
                            'skill_types': skill_types_trans_c[lang], 'source': source_trans[lang],
                            **common_data_c
                        })
                    original_index_counter += 1
        except Exception as e:
            logging.error(f"处理文件 '{os.path.basename(filepath)}' 时发生严重错误: {e}", exc_info=True)

    # --- 写入文件 ---
    output_map = {'cn': output_path_cn, 'tc': output_path_tc, 'en': output_path_en}
    lang_names = {'cn': '简体中文', 'tc': '繁体中文', 'en': '英文原文'}

    print("\n开始写入独立的JS文件...")
    for lang, path in output_map.items():
        try:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(f"window.allHeroes = {json.dumps(all_hero_data[lang], ensure_ascii=False, indent=4)};")
            print(f"完成！{lang_names[lang]}文件 '{path}' 已更新，共 {len(all_hero_data[lang])} 条数据。")
        except Exception as e:
            logging.error(f"写入{lang_names[lang]}文件时发生错误: {e}")

    if missing_extra_info:
        logging.warning("\n--- 以下英雄未找到 heroes_data_extra.js 中的额外数据 ---")
        for info in missing_extra_info: logging.warning(info)

if __name__ == '__main__':
    setup_logging()
    load_heroes_data_extra()
    load_all_dictionaries(DICTIONARY_DIR) 

    if os.path.isdir(HEROES_DATA_DIR):
        generate_js_data_with_translation(HEROES_DATA_DIR, OUTPUT_JS_FILE_CN, OUTPUT_JS_FILE_TC, OUTPUT_JS_FILE_EN)
    else:
        logging.critical(f"错误: 英雄数据目录不存在: '{HEROES_DATA_DIR}'")
        print(f"错误: 英雄数据目录不存在: '{HEROES_DATA_DIR}'")