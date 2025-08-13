# -*- coding: utf-8 -*-
import os
import re
import math
import yaml
import json
import unicodedata
import logging
from tqdm import tqdm

# --- 文本标准化函数 ---
def normalize_for_hero_name(text):
    """专用于英雄名称的规范化，会移除空格和部分标点。"""
    if not isinstance(text, str): return ""
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')
    text = re.sub(r"[\s.'´\[\]-]", "", text)
    return text.lower()

def normalize_for_generic_lookup(text):
    """通用值的规范化，移除空格和部分标点。"""
    if not isinstance(text, str): return ""
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')
    text = re.sub(r"[\s.'´\[\]-]", "", text)
    return text.lower()

def format_skill_description(description_str):
    """
    根据复杂的嵌套规则格式化长技能描述字符串。
    仅当字符串同时包含 ':' 和 '*' 时才执行格式化。
    """
    if not isinstance(description_str, str) or not description_str or ':' not in description_str or '*' not in description_str:
        return [description_str]

    parts = description_str.split(' * ')
    final_lines = []

    if parts[0]:
        first_part_lines = parts[0].replace(': ', ':\n').split('\n')
        final_lines.extend([line.strip() for line in first_part_lines if line.strip()])

    if len(parts) > 1:
        for part in parts[1:]:
            part = part.strip()
            if not part: continue
            
            line = "* " + part
            
            last_period_index = line.rfind('.')
            last_colon_index = line.rfind(':')

            if last_colon_index > last_period_index and last_period_index != -1:
                actual_bullet = line[:last_period_index + 1].strip()
                sub_heading = line[last_period_index + 1:].strip()
                final_lines.append(actual_bullet)
                if sub_heading:
                    final_lines.append(sub_heading)
            else:
                final_lines.append(line)
                
    return final_lines

# --- 内置拼写纠正字典 ---
# --- 新增功能：YML英雄名字纠正字典 ---
# 在此添加YML文件中的错误英雄名及其正确的名字
# 格式为: "YML中的错误名字": "正确的名字"
hero_name_corrections = {
    "Ascension Mimic Blue": "Ascension Mimic Ice",
    # 在这里继续添加其他需要纠正的英雄名字
}

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
    "Ruler of the Seas": "Ruler of Seas","Essense of Queen Nitocris":"Essence of Queen Nitocris","Forged fom Gold":"Forged from Gold","Mending Stiches":"Mending Stitches"
}
tolerant_typo_corrections = {normalize_for_generic_lookup(k): v for k, v in typo_corrections.items()}

# --- 字典键修正 (Key Correction) ---
key_corrections = {'Kalø': 'Kalo'}

# --- 配置 ---
HEROES_DATA_DIR = '../heroplan_data/data/heroes'
DICTIONARY_DIR = 'dictionaries'
HEROES_DATA_EXTRA_FILE = 'heroes_data_extra.js'
HEROES_DATA_EXTRA_CN_FILE = 'heroes_data_extra_skill_cn.json'
OUTPUT_JS_FILE_CN = 'heroes_data_cn.js'
OUTPUT_JS_FILE_TC = 'heroes_data_tc.js'
OUTPUT_JS_FILE_EN = 'heroes_data_en.js'
HERO_STATS_FILE = '../突破数据爬取/hero_stats.json'
EXTRA_HEROES_JSON_FILE = 'extra_heroes.json'


# --- 全局变量 ---
LANGUAGES = ['cn', 'tc', 'en']
translations = {}
hero_map_processed = {}
hero_keys_sorted = []
heroes_extra_lookup = {}
hero_stats_lookup = {}
heroes_extra_cn_lookup = {}
appearance_map_zh = {"costume": "C1", "costume1": "C1", "costume2": "C2", "costume3": "C3", "toon": "卡通", "glass": "玻璃"}
appearance_map_en = {"costume": "C1", "costume1": "C1", "costume2": "C2", "costume3": "C3", "toon": "Toon", "glass": "Glass"}

SKILL_CATEGORY_ORDER = ["基础技能", "特殊效果", "增益效果", "负面效果"]

SIMPLE_DICT_CONFIG = {
    'hero_names': 'heroes_name_dict', 
    'types': 'types_dict', 
    'skill_types': 'skill_types_dict',
    'skillname': 'skill_name_dict', 
    'heroes_name_fancy': 'heroes_name_fancy_dict',
    'aether_powers': 'aether_power_dict',
    'skill_types_cn': 'skill_types_cn_dict',
}
BASE_DICT_FILE_STEM = 'base_values_dict'

SPECIAL_COSTUME_HEROES = {
    "azar", "balthazar", "bane", "belith", "berden", "brienne", "carver",
    "dawa", "friartuck", "ganju", "graymane", "gunnar", "hawkmoon",
    "isshtak", "jahangir", "kailani", "karil", "nashgar", "oberon",
    "prisca", "renfeld", "tyrum", "ulmer", "valen"
}

STATS_NAME_CORRECTIONS = {
    'Kalø': 'Kalo'
}

IGNORABLE_SUFFIXES = {'dark', 'holy', 'ice', 'nature', 'red'}


# --- 功能函数 ---
def setup_logging():
    log_dir = 'logs'
    if not os.path.exists(log_dir): os.makedirs(log_dir)
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        filename=os.path.join(log_dir, "generation.log"),
        encoding='utf-8',
        filemode='w'
    )
    console = logging.StreamHandler()
    console.setLevel(logging.INFO)
    console.setFormatter(logging.Formatter('%(levelname)s - %(message)s'))
    logging.getLogger('').addHandler(console)
    failure_logger = logging.getLogger('failures')
    failure_logger.setLevel(logging.WARNING)
    failure_handler = logging.FileHandler(os.path.join(log_dir, "translation_failures.log"), mode='w', encoding='utf-8')
    failure_handler.setFormatter(logging.Formatter('%(asctime)s - %(message)s'))
    failure_logger.addHandler(failure_handler)

def clean_string_for_output(text):
    if not isinstance(text, str): return text
    return text.replace('[', '').replace(']', '')

def calculate_power(attack, defense, hp, star):
    if not all(isinstance(i, (int, float)) for i in [attack, defense, hp, star]): return 0
    star_power_map = {1: 0, 2: 10, 3: 30, 4: 50, 5: 90}
    power = (0.35 * attack) + (0.28 * defense) + (0.14 * hp) + (5 * 7) + star_power_map.get(star, 0)
    return math.floor(power)

def strip_ignorable_suffix(name):
    if not isinstance(name, str) or ' ' not in name: return name
    parts = name.split(' ')
    if len(parts) > 1 and parts[-1].lower() in IGNORABLE_SUFFIXES:
        return ' '.join(parts[:-1])
    return name

# 新增辅助函数：将英雄全名转换为爬虫所需的格式
def _convert_name_to_stat_format(hero_name_full):
    """
    将脚本内部使用的英雄全名 (例如 'Chao toon', 'Roz costume1') 
    转换为用于爬虫目标 name.json 的格式 (例如 'Chao C3', 'Roz C')。
    """
    parts = hero_name_full.split()
    base_name = hero_name_full
    suffix = ""

    if len(parts) > 1:
        # 识别出全名中的后缀部分
        possible_suffixes = {"costume1", "costume2", "toon", "glass"}
        raw_suffix = parts[-1].lower()
        if raw_suffix in possible_suffixes:
            base_name = ' '.join(parts[:-1])
            suffix = raw_suffix

    if not suffix:
        return base_name # 如果没有后缀，直接返回基础名称

    output_key = hero_name_full # 默认返回原始全名以防万一
    normalized_base = normalize_for_hero_name(base_name)

    # 根据是否为特殊英雄（S1普通英雄）应用不同的皮肤后缀规则
    if normalized_base in SPECIAL_COSTUME_HEROES:
        if suffix == "costume1": output_key = f"{base_name} C"
        elif suffix == "toon": output_key = f"{base_name} C2"
        elif suffix == "glass": output_key = f"{base_name} C3"
    else: # 其他所有英雄的规则
        if suffix == "costume1": output_key = f"{base_name} C"
        elif suffix == "costume2": output_key = f"{base_name} C2"
        elif suffix == "toon": output_key = f"{base_name} C3"
        elif suffix == "glass": output_key = f"{base_name} C4"
    
    return output_key

# 新增核心功能：将缺失数据的英雄名追加到 name.json
def append_unmatched_heroes_to_name_json(unmatched_names, file_path):
    """
    当YML英雄在hero_stats.json中未匹配到属性时，将其名字追加到指定的name.json文件中。
    """
    if not unmatched_names:
        logging.info("所有YML英雄均已在 hero_stats.json 中找到匹配，无需更新 name.json。")
        return

    logging.info(f"检测到 {len(unmatched_names)} 个YML英雄缺少属性数据，准备更新 '{file_path}'...")
    
    # 确定目标文件的完整路径，即使脚本从不同目录运行也能找到
    target_file = os.path.join(os.path.dirname(__file__), file_path) if not os.path.isabs(file_path) else file_path
    os.makedirs(os.path.dirname(target_file), exist_ok=True)

    # 读取现有数据
    try:
        if os.path.exists(target_file) and os.path.getsize(target_file) > 0:
            with open(target_file, 'r', encoding='utf-8') as f:
                existing_names = json.load(f)
            if not isinstance(existing_names, list):
                logging.warning(f"'{target_file}' 的内容不是一个列表。将从空列表开始。")
                existing_names = []
        else:
            existing_names = []
    except (json.JSONDecodeError, FileNotFoundError) as e:
        logging.error(f"读取或解析 '{target_file}' 时出错: {e}。将从空列表开始。")
        existing_names = []

    # 准备新数据并去重
    existing_names_set = set(existing_names)
    names_to_add_count = 0

    for raw_name in set(unmatched_names): # 使用 set 去除本次运行中重复的缺失名
        converted_name = _convert_name_to_stat_format(raw_name)
        if converted_name not in existing_names_set:
            existing_names.append(converted_name)
            existing_names_set.add(converted_name)
            names_to_add_count += 1
            logging.info(f"准备向 name.json 添加: '{converted_name}' (源于: '{raw_name}')")

    # 如果有新数据，则写回文件
    if names_to_add_count > 0:
        try:
            with open(target_file, 'w', encoding='utf-8') as f:
                json.dump(existing_names, f, ensure_ascii=False, indent=4)
            print(f"\n成功！已将 {names_to_add_count} 个缺失的英雄名追加到 '{target_file}'。")
            logging.info(f"成功！已将 {names_to_add_count} 个缺失的英雄名追加到 '{target_file}'。")
        except Exception as e:
            logging.error(f"写入 '{target_file}' 时失败: {e}")
            print(f"\n错误: 写入数据到 '{target_file}' 时失败。")
    else:
        logging.info("name.json 文件已包含所有本次检测到的缺失英雄，无需更新。")


def load_hero_stats():
    global hero_stats_lookup
    if not os.path.exists(HERO_STATS_FILE):
        logging.warning(f"警告: 英雄属性文件未找到: {HERO_STATS_FILE}")
        return
    print(f"正在加载 {HERO_STATS_FILE}...")
    try:
        with open(HERO_STATS_FILE, 'r', encoding='utf-8') as f:
            stats_data = json.load(f)
    except Exception as e:
        logging.error(f"加载或解析 '{HERO_STATS_FILE}' 时出错: {e}")
        return
    stats_suffix_map = {" C": " costume1", " C2": " costume2", " C3": " toon", " C4": " glass"}
    temp_lookup = {}
    for raw_name, stats in stats_data.items():
        processed_name = STATS_NAME_CORRECTIONS.get(raw_name, raw_name)
        processed_name = strip_ignorable_suffix(processed_name)
        base_name, suffix_in = processed_name, ""
        for s in [" C", " C2", " C3", " C4"]:
            if processed_name.endswith(s):
                suffix_in, base_name = s, processed_name[:-len(s)]
                break
        base_name_normalized = normalize_for_hero_name(base_name)
        suffix_out = ""
        if base_name_normalized in SPECIAL_COSTUME_HEROES:
            if suffix_in == " C2": suffix_out = " toon"
            elif suffix_in == " C3": suffix_out = " glass"
        if not suffix_out:
            suffix_out = stats_suffix_map.get(suffix_in, "")
        corrected_name = base_name + suffix_out
        normalized_key = normalize_for_hero_name(corrected_name)
        temp_lookup[normalized_key] = {'stats': stats, 'original_name': raw_name}
    hero_stats_lookup = temp_lookup
    logging.info(f"成功加载并规范化 {len(hero_stats_lookup)} 条英雄属性数据。")
    print(f"英雄属性数据加载完成，共 {len(hero_stats_lookup)} 条。")


def load_all_dictionaries(dictionary_base_dir):
    global hero_map_processed, hero_keys_sorted
    print("正在加载所有字典...")
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
                except Exception as e: logging.error(f"加载字典文件 '{filepath}' 时出错: {e}")

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
                    if key not in translations: translations[key] = {lang: {} for lang in LANGUAGES}
                    translations[key][lang] = value_dict
            except Exception as e: logging.error(f"加载基础数据文件 '{filepath}' 时出错: {e}")
            
    print("正在创建宽容匹配字典...")
    for key in list(translations.keys()):
        if key.endswith('_tolerant'): continue
        tolerant_key = f"{key}_tolerant"
        translations[tolerant_key] = {lang: {} for lang in LANGUAGES}
        for lang in LANGUAGES:
            if key == 'skill_types_cn':
                translations[tolerant_key][lang] = {ik: v for ik, v in translations.get(key, {}).get(lang, {}).items()}
            else:
                translations[tolerant_key][lang] = {normalize_for_generic_lookup(ik): v for ik, v in translations.get(key, {}).get(lang, {}).items()}

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
    if not isinstance(name_en, str): return {lang: str(name_en) for lang in LANGUAGES}
    original_name_no_accents_full = unicodedata.normalize('NFKD', name_en).encode('ascii', 'ignore').decode('utf-8')
    normalized_input = normalize_for_hero_name(original_name_no_accents_full)
    found_hero_base_translations, original_base_name_no_accents = None, ""
    for norm_key in hero_keys_sorted:
        if normalized_input.startswith(norm_key):
            original_base_name_no_accents, found_hero_base_translations = hero_map_processed[norm_key]
            break
    if found_hero_base_translations:
        suffix_part = name_en[len(original_base_name_no_accents):].strip()
        cleaned_english_name = clean_string_for_output(original_base_name_no_accents)
        final_names = {}
        for lang in LANGUAGES:
            if lang == 'en': base_name_trans = cleaned_english_name
            else:
                cn_base = clean_string_for_output(found_hero_base_translations.get(lang, ''))
                base_name_trans = f"{cn_base} ({cleaned_english_name})".strip() if cn_base else cleaned_english_name
            translated_suffix = ""
            if suffix_part:
                current_map = appearance_map_en if lang == 'en' else appearance_map_zh 
                normalized_suffix_part = suffix_part.lower().replace(" ", "")
                translated_suffix = current_map.get(normalized_suffix_part, suffix_part)
            final_names[lang] = f"{base_name_trans} {translated_suffix}".strip() if translated_suffix else base_name_trans
        return final_names
    cleaned_full_name = clean_string_for_output(original_name_no_accents_full)
    logging.getLogger('failures').warning(f"英雄名未匹配: '{name_en}' (规范化为: '{normalized_input}')")
    return {lang: cleaned_full_name for lang in LANGUAGES}

def translate_single_value(value, dict_key):
    if not isinstance(value, str) or not value: return {lang: value for lang in LANGUAGES}
    normalized_value = normalize_for_generic_lookup(value)
    translations_out, found_any = {}, False
    for lang in LANGUAGES:
        tolerant_map = translations.get(f"{dict_key}_tolerant", {}).get(lang, {})
        translated = tolerant_map.get(normalized_value)
        if translated is not None:
            translations_out[lang], found_any = translated, True
        else:
            translations_out[lang] = value
    if not found_any:
        logging.getLogger('failures').warning(f"翻译缺失: 字典='{dict_key}', 值='{value}' (规范化为: '{normalized_value}')")
    return translations_out

def correct_and_translate_skill(skill_name_raw):
    if not skill_name_raw: return {lang: skill_name_raw for lang in LANGUAGES}
    normalized_for_typo_lookup = normalize_for_generic_lookup(skill_name_raw)
    corrected_skill_name = tolerant_typo_corrections.get(normalized_for_typo_lookup, skill_name_raw)
    return translate_single_value(corrected_skill_name, 'skillname')

def translate_list(items_list, dict_key):
    if not isinstance(items_list, list): return {lang: items_list for lang in LANGUAGES}
    translated_items = {lang: [] for lang in LANGUAGES}
    for item in items_list:
        if isinstance(item, str) and item:
            normalized_item = normalize_for_generic_lookup(item)
            found_in_any_lang = any(normalized_item in translations.get(f"{dict_key}_tolerant", {}).get(lang_check, {}) for lang_check in LANGUAGES)
            if not found_in_any_lang:
                logging.getLogger('failures').warning(f"列表翻译缺失: 字典='{dict_key}', 值='{item}' (规范化为: '{normalized_item}')")
            for lang in LANGUAGES:
                tolerant_map = translations.get(f"{dict_key}_tolerant", {}).get(lang, {})
                translated_items[lang].append(tolerant_map.get(normalized_item, item))
        else:
            for lang in LANGUAGES: translated_items[lang].append(item)
    return translated_items

def flatten_list(nested_list):
    if not isinstance(nested_list, list): return [nested_list] if nested_list is not None else []
    flat_list = []
    for item in nested_list:
        if isinstance(item, list): flat_list.extend(flatten_list(item))
        elif isinstance(item, dict):
            for key, value in item.items(): flat_list.append(f"{key}: {value}")
        elif item is not None: flat_list.append(item)
    return flat_list

def load_heroes_data_extra():
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
        json_str = re.sub(r',\s*([\]}])', r'\1', json_str) 
        data = json.loads(json_str)
        for entry in data:
            if name_raw := entry.get('name'):
                lookup_name = name_raw
                heroes_extra_lookup[normalize_for_hero_name(lookup_name)] = entry
    except Exception as e: logging.error(f"处理 '{HEROES_DATA_EXTRA_FILE}' 时发生未知错误: {e}", exc_info=True)

def load_heroes_data_extra_cn():
    global heroes_extra_cn_lookup
    if not os.path.exists(HEROES_DATA_EXTRA_CN_FILE):
        logging.warning(f"警告: 中文额外数据文件未找到: {HEROES_DATA_EXTRA_CN_FILE}")
        return
    try:
        with open(HEROES_DATA_EXTRA_CN_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        logging.error(f"加载或解析 '{HEROES_DATA_EXTRA_CN_FILE}' 时出错: {e}")
        return
    stats_suffix_map = {" C": " costume1", " C2": " costume2", " C3": " toon", " C4": " glass"}
    temp_lookup = {}
    for name_raw, entry in data.items():
        processed_name = strip_ignorable_suffix(name_raw)
        base_name, suffix_in = processed_name, ""
        for s in [" C", " C2", " C3", " C4"]:
            if processed_name.endswith(s):
                suffix_in, base_name = s, processed_name[:-len(s)]
                break
        base_name_normalized = normalize_for_hero_name(base_name)
        suffix_out = ""
        if base_name_normalized in SPECIAL_COSTUME_HEROES:
            if suffix_in == " C2": suffix_out = " toon"
            elif suffix_in == " C3": suffix_out = " glass"
        if not suffix_out:
            suffix_out = stats_suffix_map.get(suffix_in, "")
        corrected_name = f"{base_name}{suffix_out}".strip() if not suffix_out.startswith(' ') else f"{base_name}{suffix_out}"
        normalized_key = normalize_for_hero_name(corrected_name)
        temp_lookup[normalized_key] = entry
    heroes_extra_cn_lookup = temp_lookup
    logging.info(f"成功加载并规范化 {len(heroes_extra_cn_lookup)} 条中文额外数据。")


def generate_js_data_with_translation(heroes_base_dir, output_path_cn, output_path_tc, output_path_en):
    all_hero_data = {lang: [] for lang in LANGUAGES}
    missing_extra_info = []
    missing_cn_skill_info = []
    unmatched_yml_heroes = []
    unmatched_stats_keys = set(hero_stats_lookup.keys())
    original_index_counter = 0
    processed_hero_names = set()

    print("开始扫描英雄文件...")
    hero_files_to_process = []
    for color in ['blue', 'green', 'purple', 'red', 'yellow']:
        for star in range(1, 6):
            star_path = os.path.join(heroes_base_dir, color, str(star))
            if os.path.isdir(star_path):
                for filename in os.listdir(star_path):
                    if filename.endswith('.yml') and 'costume' not in filename.lower():
                        hero_files_to_process.append({'filepath': os.path.join(star_path, filename), 'color': color, 'star': star})
    
    print(f"扫描完成，共找到 {len(hero_files_to_process)} 个英雄文件。开始处理...")
    for hero_info in tqdm(hero_files_to_process, desc="处理英雄进度"):
        try:
            filepath, current_color, current_star = hero_info['filepath'], hero_info['color'], hero_info['star']
            with open(filepath, 'r', encoding='utf-8') as f:
                hero_data = yaml.safe_load(f.read().replace('\t', '    '))
            if not hero_data or 'name' not in hero_data: continue
            
            hero_name_raw = hero_data.get('name')
            
            corrected_name = hero_name_corrections.get(hero_name_raw, hero_name_raw)
            if corrected_name != hero_name_raw:
                logging.info(f"YML英雄名已纠正: '{hero_name_raw}' -> '{corrected_name}' (文件: {os.path.basename(filepath)})")
                hero_name_raw = corrected_name
            
            processed_hero_names.add(normalize_for_hero_name(hero_name_raw))
            hero_family = hero_data.get('family')
            source_to_translate = hero_data.get('source')
            
            if hero_family == 'slime': source_to_translate = 'superelemental'
            elif hero_family == 'opera': source_to_translate = 'opera'
            elif hero_family in ['defendersofatlantis', 'nightmaresofatlantis']: source_to_translate = 'untoldtales1'
            elif hero_family in ['nidavellir', 'myrkheim']: source_to_translate = 'untoldtales2'
            elif hero_family in ['plainshunter', 'myrkhjunglehuntereim', 'abysshunter', 'junglehunter']: source_to_translate = 'monsterisland'
            elif hero_family in ['fox']: source_to_translate = 'covenant'
            elif hero_family in ['wildcat']: source_to_translate = 'wilderness'
            elif hero_family in ['beowulf']: source_to_translate = 'beowulf'
            elif hero_family in ['astralelves', 'astraldwarfs']: source_to_translate = 'astral'
            elif hero_family in ['gargoyle']: source_to_translate = 'gargoyle'
            elif hero_family in ['investigator', 'cultist']: source_to_translate = 'shadow'
            elif hero_family in ['mystery']: source_to_translate = 'tavernoflegendssecret'
            elif hero_family in ['avalon', 'corellia', 'grimforest', 'guardiansteltoc', 'wonderland']: source_to_translate = 'challengefestival1'
            elif hero_family in ['villains', 'starfall', 'slayer', 'bard', 'pets']: source_to_translate = 'challengefestival2'

            extra = heroes_extra_lookup.get(normalize_for_hero_name(hero_name_raw), {})
            # --- 修改: 检测到缺失时，保存名字、颜色和星级 ---
            if not extra: 
                missing_extra_info.append({
                    "name": hero_name_raw,
                    "color": current_color,
                    "star": current_star
                })
            
            name_trans = translate_name(hero_name_raw)
            fancy_name_trans = translate_single_value(extra.get('fancy name', ''), 'heroes_name_fancy')
            aether_power_trans = translate_single_value(extra.get('AetherPower', ''), 'aether_powers')
            color_trans = translate_single_value(current_color, 'base_values')
            class_trans = translate_single_value(hero_data.get('class'), 'base_values')
            speed = 'slayer' if hero_family == 'slayer' else hero_data.get('speed')
            speed_trans = translate_single_value(speed, 'base_values')
            skill_trans = correct_and_translate_skill(hero_data.get('skill'))
            source_trans = translate_single_value(source_to_translate, 'source_values')
            types_trans = translate_list(flatten_list(hero_data.get('types', [])), 'types')
            skill_types_trans = translate_list(extra.get('skill_types', []), 'skill_types')

            raw_effects = flatten_list(hero_data.get('effects', []))
            formatted_effects = []
            for effect in raw_effects:
                formatted_effects.extend(format_skill_description(effect))

            common_data = {
                'Release date': extra.get('Release date', ''), 
                'specialId': extra.get('specialId', ''),
                'passiveSkills': extra.get('passiveSkills', ''),
                'heroId': extra.get('heroId', ''),
                'star': current_star, 
                'power': hero_data.get('power'), 
                'attack': hero_data.get('attack'), 
                'defense': hero_data.get('defense'), 
                'health': hero_data.get('health'), 
                'effects': formatted_effects, 
                'passives': flatten_list(hero_data.get('passives', [])), 
                'family': hero_family, 
                'costume_id': 0, 
                'originalIndex': original_index_counter
            }
            lb_data = {}

            if current_star not in [1, 2]:
                name_for_lookup = strip_ignorable_suffix(hero_name_raw)
                normalized_name = normalize_for_hero_name(name_for_lookup)
                stats_entry = hero_stats_lookup.get(normalized_name)
                if stats_entry:
                    unmatched_stats_keys.discard(normalized_name)
                    stats = stats_entry['stats']
                    base_stats = stats.get('base', {})
                    if base_stats: common_data.update({'attack': base_stats.get('Attack'), 'defense': base_stats.get('Defense'), 'health': base_stats.get('Life'), 'power': calculate_power(base_stats.get('Attack'), base_stats.get('Defense'), base_stats.get('Life'), current_star)})
                    lb1_stats = stats.get('lb1')
                    if lb1_stats: lb_data['lb1'] = {'power': calculate_power(lb1_stats.get('Attack'), lb1_stats.get('Defense'), lb1_stats.get('Life'), current_star), 'attack': lb1_stats.get('Attack'), 'defense': lb1_stats.get('Defense'), 'health': lb1_stats.get('Life')}
                    lb2_stats = stats.get('lb2')
                    if lb2_stats: lb_data['lb2'] = {'power': calculate_power(lb2_stats.get('Attack'), lb2_stats.get('Defense'), lb2_stats.get('Life'), current_star), 'attack': lb2_stats.get('Attack'), 'defense': lb2_stats.get('Defense'), 'health': lb2_stats.get('Life')}
                else:
                    unmatched_yml_heroes.append(hero_name_raw)
            
            cn_skill_info_for_hero = []
            cn_lookup_key = normalize_for_hero_name(strip_ignorable_suffix(hero_name_raw))
            cn_extra_data = heroes_extra_cn_lookup.get(cn_lookup_key, {})
            if not cn_extra_data and current_star not in [1, 2]:
                missing_cn_skill_info.append(hero_name_raw)

            for cn_category in SKILL_CATEGORY_ORDER:
                if cn_category in cn_extra_data:
                    cn_values_raw = cn_extra_data[cn_category]
                    translated_values_cn, translated_values_tc, translated_values_en = [], [], []
                    values_to_process = cn_values_raw if isinstance(cn_values_raw, list) else [cn_values_raw]
                    for val in values_to_process:
                        translated_values_cn.append(translations.get('skill_types_cn_tolerant', {}).get('cn', {}).get(val, val))
                        translated_values_tc.append(translations.get('skill_types_cn_tolerant', {}).get('tc', {}).get(val, val))
                        translated_values_en.append(translations.get('skill_types_cn_tolerant', {}).get('en', {}).get(val, val))
                    if translated_values_cn or translated_values_tc or translated_values_en:
                        cn_skill_info_for_hero.append({'cn': {cn_category: translated_values_cn}, 'tc': {cn_category: translated_values_tc}, 'en': {cn_category: translated_values_en}})

            for lang in LANGUAGES:
                hero_entry = {
                    'name': name_trans[lang], 'fancy_name': fancy_name_trans[lang], 'AetherPower': aether_power_trans[lang],
                    'color': color_trans[lang], 'class': class_trans[lang], 'speed': speed_trans[lang],
                    'skill': skill_trans[lang], 'types': types_trans[lang], 'skill_types': skill_types_trans[lang],
                    'source': source_trans[lang], **common_data, **lb_data
                }
                if cn_skill_info_for_hero:
                    hero_entry['cn_skill_info'] = [entry[lang] for entry in cn_skill_info_for_hero]
                else:
                    hero_entry['cn_skill_info'] = []
                all_hero_data[lang].append(hero_entry)
            original_index_counter += 1

            for key in hero_data:
                if key.startswith('costume') and isinstance(hero_data[key], dict):
                    costume_data = hero_data[key]
                    yml_suffix = costume_data.get('design', key)
                    if yml_suffix == "costume": yml_suffix = "costume1"
                    
                    base_name_normalized = normalize_for_hero_name(hero_name_raw)
                    final_suffix = yml_suffix 
                    if base_name_normalized in SPECIAL_COSTUME_HEROES:
                        if yml_suffix == 'costume2': final_suffix = 'toon'
                        elif yml_suffix == 'costume3': final_suffix = 'glass'
                    else:
                        if yml_suffix == 'costume3': final_suffix = 'toon'
                        elif yml_suffix == 'costume4': final_suffix = 'glass'

                    costume_id = int(re.match(r'costume(\d*)', key).group(1) or 1)
                    yml_costume_full_name = f"{hero_name_raw} {final_suffix}".strip()
                    
                    extra_c = heroes_extra_lookup.get(normalize_for_hero_name(yml_costume_full_name), {})
                    # --- 修改: 检测到缺失时，保存名字、颜色和星级 ---
                    if not extra_c:
                        missing_extra_info.append({
                            "name": yml_costume_full_name,
                            "color": current_color,
                            "star": current_star
                        })
                    
                    name_trans_c = translate_name(yml_costume_full_name)
                    fancy_name_trans_c = translate_single_value(extra_c.get('fancy name', ''), 'heroes_name_fancy')
                    aether_power_trans_c = translate_single_value(extra_c.get('AetherPower', ''), 'aether_powers')
                    class_trans_c = translate_single_value(costume_data.get('class'), 'base_values')
                    skill_trans_c = correct_and_translate_skill(costume_data.get('skill'))
                    types_trans_c = translate_list(flatten_list(costume_data.get('types', [])), 'types')
                    skill_types_trans_c = translate_list(extra_c.get('skill_types', []), 'skill_types')
                    source_trans_c = source_trans
                    if hero_data.get('source') == 'season1':
                        source_trans_c = translate_single_value('costume', 'source_values')

                    raw_effects_c = flatten_list(costume_data.get('effects', []))
                    formatted_effects_c = []
                    for effect in raw_effects_c:
                        formatted_effects_c.extend(format_skill_description(effect))
                    
                    common_data_c = {
                        'Release date': extra_c.get('Release date', ''), 
                        'specialId': extra_c.get('specialId', ''),
                        'passiveSkills': extra_c.get('passiveSkills', ''),
                        'costumeBonusPassiveSkillIds': extra_c.get('costumeBonusPassiveSkillIds', ''),
                        'heroId': extra_c.get('heroId', ''),
                        'star': current_star, 
                        'power': costume_data.get('power'), 
                        'attack': costume_data.get('attack'), 
                        'defense': costume_data.get('defense'), 
                        'health': costume_data.get('health'), 
                        'effects': formatted_effects_c, 
                        'passives': flatten_list(costume_data.get('passives', [])), 
                        'family': hero_family, 
                        'costume_id': costume_id, 
                        'originalIndex': original_index_counter
                    }
                    lb_data_c = {}
                    
                    if current_star not in [1, 2]:
                        name_for_lookup_c = strip_ignorable_suffix(yml_costume_full_name)
                        normalized_name_c = normalize_for_hero_name(name_for_lookup_c)
                        stats_entry_c = hero_stats_lookup.get(normalized_name_c)
                        if stats_entry_c:
                            unmatched_stats_keys.discard(normalized_name_c)
                            stats_c = stats_entry_c['stats']
                            base_stats_c = stats_c.get('base', {})
                            if base_stats_c: common_data_c.update({'attack': base_stats_c.get('Attack'), 'defense': base_stats_c.get('Defense'), 'health': base_stats_c.get('Life'), 'power': calculate_power(base_stats_c.get('Attack'), base_stats_c.get('Defense'), base_stats_c.get('Life'), current_star)})
                            lb1_stats_c, lb2_stats_c = stats_c.get('lb1'), stats_c.get('lb2')
                            if lb1_stats_c: lb_data_c['lb1'] = {'power': calculate_power(lb1_stats_c.get('Attack'), lb1_stats_c.get('Defense'), lb1_stats_c.get('Life'), current_star), 'attack': lb1_stats_c.get('Attack'), 'defense': lb1_stats_c.get('Defense'), 'health': lb1_stats_c.get('Life')}
                            if lb2_stats_c: lb_data_c['lb2'] = {'power': calculate_power(lb2_stats_c.get('Attack'), lb2_stats_c.get('Defense'), lb2_stats_c.get('Life'), current_star), 'attack': lb2_stats_c.get('Attack'), 'defense': lb2_stats_c.get('Defense'), 'health': lb2_stats_c.get('Life')}
                        else:
                            unmatched_yml_heroes.append(yml_costume_full_name)

                    cn_skill_info_for_costume = []
                    cn_lookup_key_c = normalize_for_hero_name(yml_costume_full_name)
                    cn_extra_data_c = heroes_extra_cn_lookup.get(cn_lookup_key_c, {})
                    if not cn_extra_data_c and current_star not in [1, 2]:
                         missing_cn_skill_info.append(yml_costume_full_name)
                    
                    for cn_category in SKILL_CATEGORY_ORDER:
                        if cn_category in cn_extra_data_c:
                            cn_values_raw = cn_extra_data_c[cn_category]
                            translated_values_cn, translated_values_tc, translated_values_en = [], [], []
                            values_to_process = cn_values_raw if isinstance(cn_values_raw, list) else [cn_values_raw]
                            for val in values_to_process:
                                translated_values_cn.append(translations.get('skill_types_cn_tolerant', {}).get('cn', {}).get(val, val))
                                translated_values_tc.append(translations.get('skill_types_cn_tolerant', {}).get('tc', {}).get(val, val))
                                translated_values_en.append(translations.get('skill_types_cn_tolerant', {}).get('en', {}).get(val, val))
                            if translated_values_cn or translated_values_tc or translated_values_en:
                                cn_skill_info_for_costume.append({'cn': {cn_category: translated_values_cn}, 'tc': {cn_category: translated_values_tc}, 'en': {cn_category: translated_values_en}})

                    for lang in LANGUAGES:
                        hero_entry_c = {
                            'name': name_trans_c[lang], 'fancy_name': fancy_name_trans_c[lang], 'AetherPower': aether_power_trans_c[lang],
                            'color': color_trans[lang], 'class': class_trans_c[lang], 'speed': speed_trans[lang],
                            'skill': skill_trans_c[lang], 'types': types_trans_c[lang], 'skill_types': skill_types_trans_c[lang],
                            'source': source_trans_c[lang], **common_data_c, **lb_data_c
                        }
                        if cn_skill_info_for_costume:
                            hero_entry_c['cn_skill_info'] = [entry[lang] for entry in cn_skill_info_for_costume]
                        else:
                            hero_entry_c['cn_skill_info'] = []
                        all_hero_data[lang].append(hero_entry_c)
                    original_index_counter += 1
        except Exception as e:
            logging.error(f"处理文件 '{os.path.basename(filepath)}' 时发生严重错误: {e}", exc_info=True)
            
    print(f"\n正在从 {EXTRA_HEROES_JSON_FILE} 加载并处理附加英雄数据...")
    extra_heroes_list = []
    if os.path.exists(EXTRA_HEROES_JSON_FILE):
        try:
            with open(EXTRA_HEROES_JSON_FILE, 'r', encoding='utf-8') as f:
                extra_heroes_list = json.load(f)
            print(f"成功加载 {len(extra_heroes_list)} 个附加英雄。")
        except Exception as e:
            logging.error(f"加载或解析 '{EXTRA_HEROES_JSON_FILE}' 时出错: {e}")
    else:
        logging.warning(f"警告: 附加英雄JSON文件未找到: {EXTRA_HEROES_JSON_FILE}")

    for hero_data in tqdm(extra_heroes_list, desc="处理附加英雄进度"):
        try:
            hero_name_raw = hero_data.get('name', '')
            if not hero_name_raw: continue
            normalized_name_to_check = normalize_for_hero_name(hero_name_raw)
            if normalized_name_to_check in processed_hero_names:
                print(f"\n提示: 检测到重复英雄 '{hero_name_raw}'。将跳过添加。")
                logging.warning(f"检测到重复英雄 '{hero_name_raw}'，该英雄已存在于YML数据中，将跳过从 {EXTRA_HEROES_JSON_FILE} 添加。")
                continue
            normalized_name_extra = normalize_for_hero_name(strip_ignorable_suffix(hero_name_raw))
            unmatched_stats_keys.discard(normalized_name_extra)
            current_star = hero_data.get('star', 0)
            name_trans = translate_name(hero_name_raw)
            fancy_name_trans = translate_single_value(hero_data.get('fancy_name', ''), 'heroes_name_fancy')
            aether_power_trans = translate_single_value(hero_data.get('AetherPower', ''), 'aether_powers')
            color_trans = translate_single_value(hero_data.get('color', ''), 'base_values')
            class_trans = translate_single_value(hero_data.get('class', ''), 'base_values')
            speed_trans = translate_single_value(hero_data.get('speed', ''), 'base_values')
            skill_trans = correct_and_translate_skill(hero_data.get('skill', ''))
            source_trans = translate_single_value(hero_data.get('source', ''), 'source_values')
            types_trans = translate_list(hero_data.get('types', []), 'types')
            skill_types_trans = translate_list(hero_data.get('skill_types', []), 'skill_types')
            
            raw_effects_extra = hero_data.get('effects', [])
            formatted_effects_extra = []
            for effect in raw_effects_extra:
                formatted_effects_extra.extend(format_skill_description(effect))
            
            common_data = {
                'Release date': hero_data.get('Release date', ''), 
                'specialId': hero_data.get('specialId', ''),
                'heroId': hero_data.get('heroId', ''),
                'star': current_star, 
                'power': hero_data.get('power'), 
                'attack': hero_data.get('attack'), 
                'defense': hero_data.get('defense'), 
                'health': hero_data.get('health'), 
                'effects': formatted_effects_extra, 
                'passives': hero_data.get('passives', []), 
                'family': hero_data.get('family', ''), 
                'costume_id': hero_data.get('costume_id', 0), 
                'originalIndex': original_index_counter
            }
            lb_data = {'lb1': hero_data.get('lb1'), 'lb2': hero_data.get('lb2')}
            lb_data = {k: v for k, v in lb_data.items() if v is not None}

            cn_skill_info_for_extra_hero = []
            cn_lookup_key_e = normalize_for_hero_name(strip_ignorable_suffix(hero_name_raw))
            cn_extra_data_e = heroes_extra_cn_lookup.get(cn_lookup_key_e, {})
            if not cn_extra_data_e and current_star not in [1, 2]:
                missing_cn_skill_info.append(hero_name_raw)

            for cn_category in SKILL_CATEGORY_ORDER:
                if cn_category in cn_extra_data_e:
                    cn_values_raw = cn_extra_data_e[cn_category]
                    translated_values_cn, translated_values_tc, translated_values_en = [], [], []
                    values_to_process = cn_values_raw if isinstance(cn_values_raw, list) else [cn_values_raw]
                    for val in values_to_process:
                        translated_values_cn.append(translations.get('skill_types_cn_tolerant', {}).get('cn', {}).get(val, val))
                        translated_values_tc.append(translations.get('skill_types_cn_tolerant', {}).get('tc', {}).get(val, val))
                        translated_values_en.append(translations.get('skill_types_cn_tolerant', {}).get('en', {}).get(val, val))
                    if translated_values_cn or translated_values_tc or translated_values_en:
                        cn_skill_info_for_extra_hero.append({'cn': {cn_category: translated_values_cn}, 'tc': {cn_category: translated_values_tc}, 'en': {cn_category: translated_values_en}})

            for lang in LANGUAGES:
                hero_entry = {
                    'name': name_trans[lang], 'fancy_name': fancy_name_trans[lang], 'AetherPower': aether_power_trans[lang],
                    'color': color_trans[lang], 'class': class_trans[lang], 'speed': speed_trans[lang],
                    'skill': skill_trans[lang], 'types': types_trans[lang], 'skill_types': skill_types_trans[lang],
                    'source': source_trans[lang], **common_data, **lb_data
                }
                if cn_skill_info_for_extra_hero:
                    hero_entry['cn_skill_info'] = [entry[lang] for entry in cn_skill_info_for_extra_hero]
                else:
                    hero_entry['cn_skill_info'] = []
                all_hero_data[lang].append(hero_entry)
            original_index_counter += 1
        except Exception as e:
            logging.error(f"处理来自JSON的英雄 '{hero_data.get('name', 'N/A')}' 时发生错误: {e}", exc_info=True)
    
    if unmatched_yml_heroes:
        logging.warning("\n--- 以下YML英雄未在 hero_stats.json 中匹配到属性 ---")
        for name in sorted(unmatched_yml_heroes):
            logging.warning(f"- {name} (规范化查询名称: {normalize_for_hero_name(strip_ignorable_suffix(name))})")
        append_unmatched_heroes_to_name_json(unmatched_yml_heroes, '../突破数据爬取/name.json')

    if unmatched_stats_keys:
        logging.warning("\n--- 以下 hero_stats.json 中的条目未被使用 ---")
        for key in sorted(list(unmatched_stats_keys)):
            original_stat_name = hero_stats_lookup[key]['original_name']
            logging.warning(f"- {original_stat_name} (规范化为: {key})")

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
    return missing_extra_info, unmatched_yml_heroes, list(unmatched_stats_keys), missing_cn_skill_info

# --- 修改: 函数现在接收更详细的英雄信息，并添加element和rarity ---
def append_missing_heroes_to_extra_data(missing_heroes_list, file_path):
    """
    当检测到有英雄缺少额外数据时，自动生成包含element和rarity的空白条目，
    并追加到 heroes_data_extra.js 文件中。
    """
    if not missing_heroes_list:
        logging.info("没有在 heroes_data_extra.js 中检测到缺失的英雄数据。")
        return

    logging.info(f"检测到 {len(missing_heroes_list)} 个缺失的英雄数据，准备自动追加到 '{file_path}'...")
    
    existing_data = []
    existing_names = set()
    try:
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                js_content = f.read()
            
            match = re.search(r'=\s*(\[[\s\S]*?\])\s*;', js_content)
            if match:
                json_str = match.group(1)
                json_str = re.sub(r',\s*([\]}])', r'\1', json_str)
                existing_data = json.loads(json_str)
                existing_names = {entry.get('name') for entry in existing_data if entry.get('name')}
            else:
                logging.warning(f"在 '{file_path}' 中未找到数据数组。将创建一个新的数组。")
    except Exception as e:
        logging.error(f"读取或解析 '{file_path}' 时出错: {e}。将以一个空列表开始。")
        existing_data = []

    blank_entries = []
    processed_names_this_run = set()
    for hero_info in missing_heroes_list:
        name = hero_info.get("name")
        if not name or name in existing_names or name in processed_names_this_run:
            continue
        
        processed_names_this_run.add(name)
        blank_entries.append({
            "name": name,
            "fancy name": "",
            "element": hero_info.get("color", "").capitalize(),
            "rarity": hero_info.get("star", 0),
            "Release date": "",
            "AetherPower": "",
            "skill_types": []
        })

    if not blank_entries:
        logging.info(f"文件 '{file_path}' 已包含所有检测到的缺失英雄，无需更新。")
        return

    updated_data = existing_data + blank_entries
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            json_string = json.dumps(updated_data, indent=4, ensure_ascii=False)
            f.write(f"window.allHeroesExtra = {json_string};")
        print(f"成功！已将 {len(blank_entries)} 个新的空白英雄条目追加到 '{file_path}'。")
        logging.info(f"成功！已将 {len(blank_entries)} 个新的空白英雄条目追加到 '{file_path}'。")
    except Exception as e:
        logging.error(f"写入更新后的数据到 '{file_path}' 时失败: {e}")


def append_missing_heroes_to_cn_skill_data(missing_names_list, file_path):
    """
    检测缺失中文技能分类数据的英雄，并将其以空白格式追加到指定的JSON文件中。
    会自动处理服装名称，将其转换为 'C', 'C2', 'C3', 'C4' 后缀格式。
    在写入前会严格校验文件格式，防止意外清空。
    """
    if not missing_names_list:
        return
        
    logging.info(f"检测到 {len(missing_names_list)} 个英雄可能在 '{file_path}' 中缺少条目。正在检查并准备追加...")
    
    existing_data = {}
    # --- 新增修改：开始文件格式校验 ---
    if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                loaded_json = json.load(f)
            
            # 确保加载的是一个字典
            if not isinstance(loaded_json, dict):
                error_msg = f"文件 '{file_path}' 内容格式不正确，应为一个JSON对象(字典)，但检测到类型为 {type(loaded_json).__name__}。"
                logging.critical(error_msg)
                print(f"\n严重错误: {error_msg}")
                print("请手动修复该文件，然后重新运行脚本。为防止数据丢失，操作已中止。")
                return # 中止函数执行
            
            existing_data = loaded_json

        except json.JSONDecodeError as e:
            # 如果JSON格式损坏，则中止
            error_msg = f"文件 '{file_path}' 格式错误，不是有效的JSON: {e}"
            logging.critical(error_msg)
            print(f"\n严重错误: {error_msg}")
            print("请手动修复该文件，然后重新运行脚本。为防止数据丢失，操作已中止。")
            return # 中止函数执行
    # --- 新增修改：结束文件格式校验 ---

    new_entries_count = 0
    for hero_name_full in sorted(list(set(missing_names_list))):
        parts = hero_name_full.split()
        base_name = hero_name_full
        suffix = ""
        
        if len(parts) > 1:
            possible_suffixes = {"costume1", "costume2", "toon", "glass"}
            if parts[-1].lower() in possible_suffixes:
                base_name = ' '.join(parts[:-1])
                suffix = parts[-1].lower()

        output_key = ""
        normalized_base = normalize_for_hero_name(base_name)
        
        if not suffix:
            output_key = base_name
        elif normalized_base in SPECIAL_COSTUME_HEROES:
            if suffix == "Costume1": output_key = f"{base_name} C"
            elif suffix == "Toon": output_key = f"{base_name} C2"
            elif suffix == "Glass": output_key = f"{base_name} C3"
        else:
            if suffix == "Costume1": output_key = f"{base_name} C"
            elif suffix == "Costume2": output_key = f"{base_name} C2"
            elif suffix == "Toon": output_key = f"{base_name} C3"
            elif suffix == "Glass": output_key = f"{base_name} C4"
        
        if not output_key:
            logging.warning(f"无法为 '{hero_name_full}' 确定输出键名。已跳过。")
            continue

        if output_key not in existing_data:
            existing_data[output_key] = {
                "基础技能": [],
                "特殊效果": [],
                "增益效果": [],
                "负面效果": []
            }
            new_entries_count += 1
            logging.info(f"准备为 '{hero_name_full}' 添加新条目，键名为 '{output_key}'。")

    if new_entries_count > 0:
        try:
            sorted_data = dict(sorted(existing_data.items()))
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(sorted_data, f, ensure_ascii=False, indent=4)
            print(f"成功！已将 {new_entries_count} 个新的空白英雄条目追加到 '{file_path}'。")
            logging.info(f"成功！已将 {new_entries_count} 个新的空白英雄条目追加到 '{file_path}'。")
        except Exception as e:
            logging.error(f"写入更新后的数据到 '{file_path}' 时失败: {e}")
    else:
        logging.info(f"无需向 '{file_path}' 追加新条目，文件已是最新。")


if __name__ == '__main__':
    setup_logging()
    load_hero_stats()
    load_heroes_data_extra()
    load_heroes_data_extra_cn() 
    load_all_dictionaries(DICTIONARY_DIR) 

    if os.path.isdir(HEROES_DATA_DIR):
        missing_extra, unmatched_yml, unmatched_stats, missing_cn_info = generate_js_data_with_translation(
            HEROES_DATA_DIR, 
            OUTPUT_JS_FILE_CN, 
            OUTPUT_JS_FILE_TC, 
            OUTPUT_JS_FILE_EN
        )
        failure_log_path = os.path.join('logs', 'translation_failures.log')
        if os.path.exists(failure_log_path) and os.path.getsize(failure_log_path) > 0:
            print(f"\n警告: 检测到翻译失败。详情请查看日志文件: {failure_log_path}")
        
        if missing_extra:
            logging.warning("\n--- 以下英雄未找到 heroes_data_extra.js 中的额外数据 ---")
            for info in missing_extra:
                logging.warning(f"缺失额外数据的英雄: {info}")
            append_missing_heroes_to_extra_data(missing_extra, HEROES_DATA_EXTRA_FILE)
            print(f"\n请注意: {HEROES_DATA_EXTRA_FILE} 已更新。")
            print("建议重新运行此脚本，以确保所有数据（包括刚刚添加的）都被正确加载和处理。")
        
        if missing_cn_info:
            logging.warning(f"\n--- 发现 {len(set(missing_cn_info))} 个3-5星英雄在 {HEROES_DATA_EXTRA_CN_FILE} 中缺少数据 ---")
            append_missing_heroes_to_cn_skill_data(missing_cn_info, HEROES_DATA_EXTRA_CN_FILE)
            print(f"\n请注意: {HEROES_DATA_EXTRA_CN_FILE} 已更新。")
            print("建议重新运行此脚本，以确保所有数据（包括刚刚添加的）都被正确加载和处理。")

        if unmatched_yml:
            print(f"警告: {len(unmatched_yml)} 个本地英雄文件未能在 hero_stats.json 中找到匹配属性。详情请查看 generation.log 文件。")
        if unmatched_stats:
            print(f"警告: hero_stats.json 中有 {len(unmatched_stats)} 个条目未被使用。详情请查看 generation.log 文件。")
    else:
        logging.critical(f"错误: 英雄数据目录不存在: '{HEROES_DATA_DIR}'")
        print(f"错误: 英雄数据目录不存在: '{HEROES_DATA_DIR}'")