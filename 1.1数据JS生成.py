# -*- coding: utf-8 -*-
import subprocess
import sys
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
# 在此添加YML文件中的错误英雄名及其正确的名字
hero_name_corrections = {
    "Ascension Mimic Blue": "Ascension Mimic Ice",
}

# --- family修正字典 ---
family_corrections = {
    "zodiac_dragon": "zodiac",
    "zodiac_ox": "zodiac",
    "zodiac_rabbit": "zodiac",
    "zodiac_rat": "zodiac",
    "zodiac_snake": "zodiac",
    "zodiac_tiger": "zodiac",
    "zodiac_horse": "zodiac",
    "theinstitute": "institute",
    "astraldemons": "astral_demons",
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
EXTRA_HEROES_JSON_FILE = 'extra_heroes.json'

# --- 属性计算参数 (来自 计算英雄满级属性.py) ---
RARITY_PARAMS = {
    5: {"m1": 4, "m2": 265, "lb1": 20, "lb2": 40},  # 5星
    4: {"m1": 5, "m2": 225, "lb1": 23, "lb2": 46},  # 4星
    3: {"m1": 6, "m2": 123, "lb1": 29, "lb2": 58},  # 3星
    2: {"m1": 7, "m2": 93, "lb1": 0, "lb2": 0},    # 2星
    1: {"m1": 8, "m2": 31, "lb1": 0, "lb2": 0}     # 1星
}

# --- 全局变量 ---
LANGUAGES = ['cn', 'tc', 'en']
translations = {}
hero_map_processed = {}
hero_keys_sorted = []
heroes_extra_lookup = {}
heroes_extra_cn_lookup = {}
appearance_map_zh = {"costume": "C1", "costume1": "C1", "costume2": "C2", "costume3": "C3", "toon": "卡通", "glass": "玻璃", "stylish": "英姿"}
appearance_map_en = {"costume": "C1", "costume1": "C1", "costume2": "C2", "costume3": "C3", "toon": "Toon", "glass": "Glass", "stylish": "Stylish"}

SKILL_CATEGORY_ORDER = ["基础技能", "特殊效果", "增益效果", "负面效果"]
# --- 官方技能名（按语言，TXT）---
SKILL_NAME_TXT_DIR = r'./dict_gen/官方语言字典生成/generated_txt'
skill_name_by_lang = {}

SIMPLE_DICT_CONFIG = {
    'hero_names': 'heroes_name_dict', 
    'types': 'types_dict', 
    'skill_types': 'skill_types_dict',
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

IGNORABLE_SUFFIXES = {'dark', 'holy', 'ice', 'nature', 'fire', 'red'}
# 新增全局变量
HERO_NAME_TO_ID_MAP = {}
HERO_ID_TO_FANCY_MAP = {}

def load_hero_name_mappings():
    """从txt文件加载英雄名称到ID和fancy name的映射"""
    global HERO_NAME_TO_ID_MAP, HERO_ID_TO_FANCY_MAP
    
    # 加载英雄名称到ID的映射
    heroes_name_en_file = './dict_gen/官方语言字典生成/generated_txt/heroes_name_en.txt'
    if os.path.exists(heroes_name_en_file):
        with open(heroes_name_en_file, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and ',' in line:
                    key, value = line.split(',', 1)
                    key = key.strip().strip('"')
                    value = value.strip().strip('"')
                    # key格式: "heroes.name.institute_wilcox"
                    hero_id = key.split('.')[-1]  # 提取institute_wilcox
                    HERO_NAME_TO_ID_MAP[value] = hero_id  # Wilcox -> institute_wilcox
        print(f"✅ 已加载 {len(HERO_NAME_TO_ID_MAP)} 条英雄名称到ID的映射")
    else:
        print(f"❌ 未找到英雄名称映射文件: {heroes_name_en_file}")
    
    # 加载英雄ID到fancy name的映射
    heroes_name_fancy_en_file = './dict_gen/官方语言字典生成/generated_txt/heroes_name_fancy_en.txt'
    if os.path.exists(heroes_name_fancy_en_file):
        with open(heroes_name_fancy_en_file, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and ',' in line:
                    key, value = line.split(',', 1)
                    key = key.strip().strip('"')
                    value = value.strip().strip('"')
                    # key格式: "heroes.name_fancy.institute_wilcox"
                    hero_id = key.split('.')[-1]  # 提取institute_wilcox
                    HERO_ID_TO_FANCY_MAP[hero_id] = value  # institute_wilcox -> Hotshot Physicist
        print(f"✅ 已加载 {len(HERO_ID_TO_FANCY_MAP)} 条英雄ID到fancy name的映射")
    else:
        print(f"❌ 未找到英雄fancy名称映射文件: {heroes_name_fancy_en_file}")

# --- 新增：百分比解析函数 ---
def parse_percentage(val):
    """将 '5%' 转换为 0.05，如果无效则返回 0.0"""
    if not isinstance(val, str) or '%' not in val:
        return 0.0
    try:
        return float(val.replace('%', '').strip()) / 100.0
    except:
        return 0.0

# --- 属性计算函数 (修改版：支持 bonuses) ---
def calculate_base_stats(base_attack, base_defense, base_health, rarity, bonuses=None):
    """
    计算基础加成后的属性（Max Level不含LB），并应用加成（如果有）。
    bonuses 格式: {'attack': 0.05, 'defense': 0.05, ...}
    """
    if bonuses is None: bonuses = {}
    params = RARITY_PARAMS.get(rarity, {"m1": 0, "m2": 0, "lb1": 0, "lb2": 0})
    m1, m2 = params["m1"], params["m2"]
    
    def calc_attribute(base_value, bonus_pct):
        # 1. 基础成长计算
        val = base_value + (base_value * m1 / 1000 * m2)
        # 2. 应用百分比加成 (Base * (1 + Bonus))
        final_val = val * (1 + bonus_pct)
        return int(final_val)
    
    return {
        "attack": calc_attribute(base_attack, bonuses.get('attack', 0)),
        "defense": calc_attribute(base_defense, bonuses.get('defense', 0)),
        "health": calc_attribute(base_health, bonuses.get('health', 0))
    }

def calculate_lb_stats(base_attack, base_defense, base_health, rarity, level, bonuses=None):
    """
    计算LB属性，并应用加成（如果有）。
    level: 2 for LB1, 3 for LB2
    """
    if bonuses is None: bonuses = {}
    params = RARITY_PARAMS.get(rarity, {"m1": 0, "m2": 0, "lb1": 0, "lb2": 0})
    m1, m2, lb1_val, lb2_val = params["m1"], params["m2"], params["lb1"], params["lb2"]
    
    def calc_attribute(base_value, bonus_pct):
        # 第一步：基础加成计算
        val = base_value + (base_value * m1 / 1000 * m2)
        # 第二步：LB1加成
        if level >= 2:
            val += (base_value * lb1_val / 1000 * 8)
        # 第三步：LB2加成
        if level >= 3:
            val += (base_value * lb2_val / 1000 * 8)
        
        # 第四步：应用百分比加成
        final_val = val * (1 + bonus_pct)
        return int(final_val)
    
    return {
        "attack": calc_attribute(base_attack, bonuses.get('attack', 0)),
        "defense": calc_attribute(base_defense, bonuses.get('defense', 0)),
        "health": calc_attribute(base_health, bonuses.get('health', 0))
    }


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
    # 注意：这里的 attack/defense/hp 应该是包含加成后的最终值，计算出的Power才准确
    power = (0.35 * attack) + (0.28 * defense) + (0.14 * hp) + (5 * 7) + star_power_map.get(star, 0)
    return math.floor(power)

def strip_ignorable_suffix(name):
    if not isinstance(name, str) or ' ' not in name: return name
    parts = name.split(' ')
    if len(parts) > 1 and parts[-1].lower() in IGNORABLE_SUFFIXES:
        return ' '.join(parts[:-1])
    return name

def load_skill_name_txt_dict():
    """
    加载官方技能名：
    skill_name_cn.txt / skill_name_tc.txt / skill_name_en.txt
    """
    global skill_name_by_lang
    skill_name_by_lang = {}

    for lang in LANGUAGES:
        skill_name_by_lang[lang] = {}
        path = os.path.join(SKILL_NAME_TXT_DIR, f"skill_name_{lang}.txt")

        if not os.path.exists(path):
            logging.warning(f"[skill] 未找到技能字典: {path}")
            continue

        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or "," not in line:
                    continue

                # "specials.name.xxx","Skill Name"
                key, val = line.split(",", 1)
                key = key.strip().strip('"')
                val = val.strip().strip('"')

                skill_name_by_lang[lang][key] = val

        logging.info(
            f"[skill] 已加载 {lang} 技能 {len(skill_name_by_lang[lang])} 条"
        )
        
def get_skill_name(special_id, lang):
    """
    唯一技能获取方式：
    specialId + lang → 官方技能名
    """
    if not special_id:
        return ""

    key = f"specials.name.{special_id}"
    skill = skill_name_by_lang.get(lang, {}).get(key)

    if not skill:
        logging.getLogger("failures").warning(
            f"[skill][{lang}] 缺失技能名: {key}"
        )
        return ""

    return skill

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
    stats_suffix_map = {" C": " costume1", " C2": " costume2", " C3": " toon", " C4": " glass", " C5": " stylish"}
    temp_lookup = {}
    for name_raw, entry in data.items():
        processed_name = strip_ignorable_suffix(name_raw)
        base_name, suffix_in = processed_name, ""
        for s in [" C", " C2", " C3", " C4", " C5"]:
            if processed_name.endswith(s):
                suffix_in, base_name = s, processed_name[:-len(s)]
                break
        base_name_normalized = normalize_for_hero_name(base_name)
        suffix_out = ""
        if base_name_normalized in SPECIAL_COSTUME_HEROES:
            if suffix_in == " C2": suffix_out = " toon"
            elif suffix_in == " C3": suffix_out = " glass"
            elif suffix_in == " C4": suffix_out = " stylish"
        if not suffix_out:
            suffix_out = stats_suffix_map.get(suffix_in, "")
        corrected_name = f"{base_name}{suffix_out}".strip() if not suffix_out.startswith(' ') else f"{base_name}{suffix_out}"
        normalized_key = normalize_for_hero_name(corrected_name)
        temp_lookup[normalized_key] = entry
    heroes_extra_cn_lookup = temp_lookup
    logging.info(f"成功加载并规范化 {len(heroes_extra_cn_lookup)} 条中文额外数据。")

def fix_name_brackets(heroes_data):
    """
    修复名字中的括号问题，将右括号外的部分移动到括号内
    但只针对特定的元素名称：'dark', 'holy', 'ice', 'nature', 'fire', 'red'
    例如："纹章拟态兽 (Emblem Mimic) Ice" -> "纹章拟态兽 (Emblem Mimic Ice)"
    """
    target_elements = {'dark', 'holy', 'ice', 'nature', 'fire', 'red'}
    
    for hero in heroes_data:
        name = hero.get('name', '')
        if '(' in name and ')' in name:
            # 找到右括号的位置
            right_bracket_pos = name.find(')')
            # 如果右括号后面还有内容
            if right_bracket_pos < len(name) - 1:
                # 获取括号内的内容
                bracket_content_start = name.find('(')
                bracket_content = name[bracket_content_start + 1:right_bracket_pos]
                
                # 获取右括号后的内容
                after_bracket = name[right_bracket_pos + 1:].strip()
                
                # 只有当括号后的内容是指定的元素时才进行处理
                if after_bracket and after_bracket.lower() in target_elements:
                    # 获取括号前的内容
                    before_bracket = name[:bracket_content_start].strip()
                    
                    # 重新组合：前部分 + 括号后内容 + 括号内容
                    fixed_name = f"{before_bracket} ({bracket_content} {after_bracket})".strip()
                    hero['name'] = fixed_name
    
    return heroes_data

def generate_js_data_with_translation(heroes_base_dir, output_path_cn, output_path_tc, output_path_en):
    all_hero_data = {lang: [] for lang in LANGUAGES}
    missing_extra_info = []
    missing_cn_skill_info = []
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
            
            # --- 从 heroes_data_extra.js 获取 family 并应用修正 ---
            extra = heroes_extra_lookup.get(normalize_for_hero_name(hero_name_raw), {})
            hero_family = extra.get('family', '')
            hero_family = family_corrections.get(hero_family, hero_family) # <--- 应用修正
            
            source_to_translate = hero_data.get('source')
            
            if hero_family == 'slime': source_to_translate = 'superelemental'
            elif hero_family == 'opera': source_to_translate = 'opera'
            elif hero_family == 'mimic': source_to_translate = 'mimic'
            elif hero_family in ['tales1_goodies', 'tales1_baddies']: source_to_translate = 'untoldtales1'
            elif hero_family in ['nidavellir', 'myrkheim']: source_to_translate = 'untoldtales2'
            elif hero_family in ['plains_hunter',  'abyss_hunter', 'jungle_hunter']: source_to_translate = 'monsterisland'
            elif hero_family in ['titan_hunter']: source_to_translate = 'titanhunter'
            elif hero_family in ['fox']: source_to_translate = 'covenant'
            elif hero_family in ['wild_cat']: source_to_translate = 'wilderness'
            elif hero_family in ['beowulf']: source_to_translate = 'beowulf'
            elif hero_family in ['halloween']: source_to_translate = 'morlovia'
            elif hero_family in ['fleur_de_sang']: source_to_translate = 'halloween2025'
            elif hero_family in ['astral_elves', 'astral_dwarfs','astral_demons']: source_to_translate = 'astral'
            elif hero_family in ['gargoyle']: source_to_translate = 'gargoyle'
            elif hero_family in ['investigator', 'cultist','forsaken','institute']: source_to_translate = 'shadow'
            elif hero_family in ['sand', 'beachparty']: source_to_translate = 'beachparty'
            elif hero_family in ['mystery']: source_to_translate = 'tavernoflegendssecret'
            elif hero_family in ['knight', 'pirate', 'fable', 'guardian', 'wonderland']: source_to_translate = 'challengefestival1'
            elif hero_family in ['villains', 'circus', 'slayers', 'bard', 'mighty_pet']: source_to_translate = 'challengefestival2'
            elif hero_family in ['musketeer', 'beauty_beast']: source_to_translate = 'musketeer'
            elif hero_family in ['shady_scoundrels']: source_to_translate = 'blackfriday'
            elif hero_family in ['mahayoddha']: source_to_translate = 'temple'
            elif hero_family in ['vegetable']: source_to_translate = 'farmland'
            elif hero_family in ['fortune']: source_to_translate = 'lunarnewyear2026'
            elif hero_family in ['rodent']: source_to_translate = 'birthday'
            elif hero_family in ['ronin']: source_to_translate = 'ninja'

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
            class_trans = translate_single_value(extra.get('class'), 'base_values')
            speed = 'slayer' if hero_family == 'slayer' else extra.get('speed')
            speed_trans = translate_single_value(speed, 'base_values')
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

            # --- 本地计算属性逻辑 ---
            # 尝试从 extra 数据中获取基础原始属性值
            base_attack_raw = extra.get('baseAttack', 0)
            base_defense_raw = extra.get('baseDefense', 0)
            base_health_raw = extra.get('baseHealth', 0)

            # --- 原版英雄通常没有attackBonus，但为了代码健壮性，这里检查一下 ---
            # 如果没有，默认为 0.0
            main_bonuses = {
                'attack': parse_percentage(extra.get('attackBonus')),
                'defense': parse_percentage(extra.get('defenseBonus')),
                'health': parse_percentage(extra.get('healthBonus')),
            }

            if base_attack_raw > 0:
                # 1. 计算基础加成后的属性 (Max Level)
                base_stats = calculate_base_stats(base_attack_raw, base_defense_raw, base_health_raw, current_star, bonuses=main_bonuses)
                common_data['attack'] = base_stats['attack']
                common_data['defense'] = base_stats['defense']
                common_data['health'] = base_stats['health']
                common_data['power'] = calculate_power(base_stats['attack'], base_stats['defense'], base_stats['health'], current_star)

                # 2. 计算 LB 属性 (LB1 & LB2)
                # LB1 (level=2)
                lb1_calc = calculate_lb_stats(base_attack_raw, base_defense_raw, base_health_raw, current_star, 2, bonuses=main_bonuses)
                lb_data['lb1'] = {
                    'attack': lb1_calc['attack'],
                    'defense': lb1_calc['defense'],
                    'health': lb1_calc['health'],
                    'power': calculate_power(lb1_calc['attack'], lb1_calc['defense'], lb1_calc['health'], current_star)
                }

                # LB2 (level=3)
                lb2_calc = calculate_lb_stats(base_attack_raw, base_defense_raw, base_health_raw, current_star, 3, bonuses=main_bonuses)
                lb_data['lb2'] = {
                    'attack': lb2_calc['attack'],
                    'defense': lb2_calc['defense'],
                    'health': lb2_calc['health'],
                    'power': calculate_power(lb2_calc['attack'], lb2_calc['defense'], lb2_calc['health'], current_star)
                }
            # --------------------------------------------------

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
                    'skill': get_skill_name(extra.get('specialId'),lang), 'types': types_trans[lang], 'skill_types': skill_types_trans[lang],
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
                        elif yml_suffix == 'costume4': final_suffix = 'stylish'
                    else:
                        if yml_suffix == 'costume3': final_suffix = 'toon'
                        elif yml_suffix == 'costume4': final_suffix = 'glass'
                        elif yml_suffix == 'costume5': final_suffix = 'stylish'

                    costume_id = int(re.match(r'costume(\d*)', key).group(1) or 1)
                    if base_name_normalized in SPECIAL_COSTUME_HEROES and costume_id >= 5:
                        costume_id = costume_id - 1
                    yml_costume_full_name = f"{hero_name_raw} {final_suffix}".strip()
                    
                    extra_c = heroes_extra_lookup.get(normalize_for_hero_name(yml_costume_full_name), {})
                    # --- 为皮肤英雄获取 family 并应用修正 ---
                    costume_family = extra_c.get('family', hero_family)
                    costume_family = family_corrections.get(costume_family, costume_family) # <--- 应用修正
                    
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
                    class_trans_c = translate_single_value(extra_c.get('class'), 'base_values')
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
                        'specialId': extra_c.get('specialId_costume', ''),
                        'parent_specialId': extra_c.get('specialId', ''),
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
                        'family': costume_family,
                        'costume_id': costume_id, 
                        'originalIndex': original_index_counter
                    }
                    lb_data_c = {}
                    
                    # --- 本地计算属性逻辑 (皮肤) ---
                    # 尝试从 extra_c 数据中获取基础原始属性值
                    base_attack_raw_c = extra_c.get('baseAttack', 0)
                    base_defense_raw_c = extra_c.get('baseDefense', 0)
                    base_health_raw_c = extra_c.get('baseHealth', 0)
                    
                    # --- 提取服装 Bonus ---
                    costume_bonuses = {
                        'attack': parse_percentage(extra_c.get('attackBonus')),
                        'defense': parse_percentage(extra_c.get('defenseBonus')),
                        'health': parse_percentage(extra_c.get('healthBonus')),
                    }

                    if base_attack_raw_c > 0:
                        # 1. 计算基础加成后的属性 (Max Level) - 传入 bonuses
                        base_stats_c = calculate_base_stats(base_attack_raw_c, base_defense_raw_c, base_health_raw_c, current_star, bonuses=costume_bonuses)
                        common_data_c['attack'] = base_stats_c['attack']
                        common_data_c['defense'] = base_stats_c['defense']
                        common_data_c['health'] = base_stats_c['health']
                        common_data_c['power'] = calculate_power(base_stats_c['attack'], base_stats_c['defense'], base_stats_c['health'], current_star)

                        # 2. 计算 LB 属性 (LB1 & LB2) - 传入 bonuses
                        # LB1 (level=2)
                        lb1_calc_c = calculate_lb_stats(base_attack_raw_c, base_defense_raw_c, base_health_raw_c, current_star, 2, bonuses=costume_bonuses)
                        lb_data_c['lb1'] = {
                            'attack': lb1_calc_c['attack'],
                            'defense': lb1_calc_c['defense'],
                            'health': lb1_calc_c['health'],
                            'power': calculate_power(lb1_calc_c['attack'], lb1_calc_c['defense'], lb1_calc_c['health'], current_star)
                        }

                        # LB2 (level=3)
                        lb2_calc_c = calculate_lb_stats(base_attack_raw_c, base_defense_raw_c, base_health_raw_c, current_star, 3, bonuses=costume_bonuses)
                        lb_data_c['lb2'] = {
                            'attack': lb2_calc_c['attack'],
                            'defense': lb2_calc_c['defense'],
                            'health': lb2_calc_c['health'],
                            'power': calculate_power(lb2_calc_c['attack'], lb2_calc_c['defense'], lb2_calc_c['health'], current_star)
                        }
                    # --------------------------------------------------

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
                            'skill': get_skill_name(extra_c.get('specialId_costume'),lang), 'types': types_trans_c[lang], 'skill_types': skill_types_trans_c[lang],
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
            
            current_star = hero_data.get('star', 0)
            
            # --- 为附加英雄获取 family 并应用修正 ---
            hero_family_extra = hero_data.get('family', '')
            hero_family_extra = family_corrections.get(hero_family_extra, hero_family_extra) # <--- 应用修正
            
            name_trans = translate_name(hero_name_raw)
            fancy_name_trans = translate_single_value(hero_data.get('fancy_name', ''), 'heroes_name_fancy')
            aether_power_trans = translate_single_value(hero_data.get('AetherPower', ''), 'aether_powers')
            color_trans = translate_single_value(hero_data.get('color', ''), 'base_values')
            class_trans = translate_single_value(extra.get('class', ''), 'base_values')
            speed_trans = translate_single_value(extra.get('speed', ''), 'base_values')
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
                'family': hero_family_extra, 
                'costume_id': hero_data.get('costume_id', 0), 
                'originalIndex': original_index_counter
            }
            # 如果附加数据本身已经有了lb1/lb2，则直接使用，否则可考虑在这里添加同样的计算逻辑
            # 目前保持原逻辑读取JSON中的值
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
                    'skill': get_skill_name(hero_data.get('specialId'),lang), 'types': types_trans[lang], 'skill_types': skill_types_trans[lang],
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
    
    # 在写入文件之前添加修复括号的步骤
    print("正在修复名字中的括号问题...")
    for lang in LANGUAGES:
        all_hero_data[lang] = fix_name_brackets(all_hero_data[lang])
    
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
    return missing_extra_info, missing_cn_skill_info

def append_missing_heroes_to_extra_data(missing_heroes_list, file_path):
    """当检测到有英雄缺少额外数据时，自动生成包含完整信息的条目"""
    if not missing_heroes_list:
        logging.info("没有在 heroes_data_extra.js 中检测到缺失的英雄数据。")
        return

    logging.info(f"检测到 {len(missing_heroes_list)} 个缺失的英雄数据，准备自动追加到 '{file_path}'...")
    
    # 加载 extra_heroes.json 数据用于匹配
    extra_heroes_data = []
    if os.path.exists(EXTRA_HEROES_JSON_FILE):
        try:
            with open(EXTRA_HEROES_JSON_FILE, 'r', encoding='utf-8') as f:
                extra_heroes_data = json.load(f)
            logging.info(f"成功加载 {len(extra_heroes_data)} 条 extra_heroes.json 数据")
            
            # 打印所有 extra_heroes.json 中的英雄名称用于调试
            logging.info("extra_heroes.json 中的英雄名称:")
            for hero in extra_heroes_data:
                logging.info(f"  - {hero.get('name')}")
        except Exception as e:
            logging.error(f"加载 '{EXTRA_HEROES_JSON_FILE}' 时出错: {e}")
    
    # 创建名称映射字典（规范化名称 -> 完整条目）
    extra_heroes_map = {}
    for hero in extra_heroes_data:
        name = hero.get("name", "")
        if name:
            # 创建多种可能的规范化键名
            normalized_name = normalize_for_hero_name(name)
            extra_heroes_map[normalized_name] = hero
            
            # 添加 costume 格式转换的键名
            if " C" in name:
                # 将 "Porthos C1" 转换为 "Porthos costume1"
                costume_name = name.replace(" C1", " costume1")
                costume_name = name.replace(" C2", " costume2")
                costume_normalized = normalize_for_hero_name(costume_name)
                extra_heroes_map[costume_normalized] = hero
                logging.info(f"添加映射: {name} -> {costume_name} (规范化: {costume_normalized})")
    
    # 打印所有映射键用于调试
    logging.info("extra_heroes_map 中的键:")
    for key in extra_heroes_map.keys():
        logging.info(f"  - '{key}'")
    
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
                existing_names = {normalize_for_hero_name(entry.get('name', '')) for entry in existing_data if entry.get('name')}
            else:
                logging.warning(f"在 '{file_path}' 中未找到数据数组。将创建一个新的数组。")
    except Exception as e:
        logging.error(f"读取或解析 '{file_path}' 时出错: {e}。将以一个空列表开始。")
        existing_data = []

    blank_entries = []
    processed_names_this_run = set()
    
    for hero_info in missing_heroes_list:
        name = hero_info.get("name")
        if not name:
            continue
            
        normalized_name = normalize_for_hero_name(name)
        logging.info(f"处理英雄: '{name}' (规范化: '{normalized_name}')")
        
        # 检查是否已存在或已处理
        if normalized_name in existing_names or normalized_name in processed_names_this_run:
            logging.info(f"英雄 '{name}' 已存在或已处理，跳过")
            continue
        
        processed_names_this_run.add(normalized_name)
        
        # 首先尝试从 extra_heroes.json 中匹配
        matched_hero = None
        
        # 尝试直接匹配
        matched_hero = extra_heroes_map.get(normalized_name)
        if matched_hero:
            logging.info(f"直接匹配成功: '{name}' -> '{matched_hero.get('name')}'")
        
        # 如果直接匹配失败，尝试 costume 格式转换匹配
        if not matched_hero:
            # 处理 costume 格式：将 "costume1" 转换为 "C1" 格式
            if "costume" in name.lower():
                # 将 "Porthos costume1" 转换为 "Porthos C1"
                c_name = name.replace("costume", "C").replace("costume1", "C1").replace("costume2", "C2").replace("costume3", "C3")
                c_normalized = normalize_for_hero_name(c_name)
                matched_hero = extra_heroes_map.get(c_normalized)
                if matched_hero:
                    logging.info(f"通过格式转换匹配成功: '{name}' -> '{c_name}'")
        
        # 如果还没有匹配，尝试更宽松的匹配
        if not matched_hero:
            # 尝试移除所有空格和特殊字符后的匹配
            simplified_name = re.sub(r'[^a-zA-Z0-9]', '', name).lower()
            for key, hero_entry in extra_heroes_map.items():
                simplified_key = re.sub(r'[^a-zA-Z0-9]', '', key).lower()
                if simplified_name == simplified_key:
                    matched_hero = hero_entry
                    logging.info(f"通过简化匹配成功: '{name}' -> '{hero_entry.get('name')}'")
                    break
        
        if matched_hero:
            # 使用 extra_heroes.json 中的完整信息
            new_entry = {
                "name": name,  # 保持原始名称格式
                "fancy name": matched_hero.get("fancy_name", ""),
                "element": hero_info.get("color", "").capitalize(),
                "rarity": hero_info.get("star", 0),
                "Release date": matched_hero.get("Release date", ""),
                "AetherPower": "",
                "skill_types": [],
                "heroId": matched_hero.get("heroId", ""),
                "family": matched_hero.get("family", ""),
            }
            blank_entries.append(new_entry)
            logging.info(f"从 extra_heroes.json 成功匹配英雄: '{name}' -> fancy_name: '{matched_hero.get('fancy_name', '')}'")
        else:
            # 如果没有匹配到，使用原来的映射方式
            hero_id = HERO_NAME_TO_ID_MAP.get(name)
            fancy_name = HERO_ID_TO_FANCY_MAP.get(hero_id) if hero_id else ""
            
            if not hero_id:
                logging.warning(f"未找到英雄 '{name}' 的ID映射，使用默认处理")
                hero_id = ""
            
            if not fancy_name:
                logging.warning(f"未找到英雄ID '{hero_id}' 的fancy name映射")
                fancy_name = ""
            
            blank_entries.append({
                "name": name,
                "fancy name": fancy_name,
                "element": hero_info.get("color", "").capitalize(),
                "rarity": hero_info.get("star", 0),
                "Release date": "",
                "AetherPower": "",
                "skill_types": [],
                "heroId": hero_id
            })
            logging.info(f"使用默认方式添加英雄: '{name}'")

    if not blank_entries:
        logging.info(f"文件 '{file_path}' 已包含所有检测到的缺失英雄，无需更新。")
        return

    updated_data = existing_data + blank_entries
    
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            json_string = json.dumps(updated_data, indent=4, ensure_ascii=False)
            f.write(f"window.allHeroesExtra = {json_string};")
        print(f"成功！已将 {len(blank_entries)} 个新的完整英雄条目追加到 '{file_path}'。")
        logging.info(f"成功！已将 {len(blank_entries)} 个新的完整英雄条目追加到 '{file_path}'。")
        
        # 成功添加后，从 extra_heroes.json 中移除已处理的条目
        remove_processed_heroes_from_extra(blank_entries)
        
    except Exception as e:
        logging.error(f"写入更新后的数据到 '{file_path}' 时失败: {e}")

def remove_processed_heroes_from_extra(processed_entries):
    """从 extra_heroes.json 中移除已成功处理的英雄"""
    if not processed_entries or not os.path.exists(EXTRA_HEROES_JSON_FILE):
        return
        
    try:
        with open(EXTRA_HEROES_JSON_FILE, 'r', encoding='utf-8') as f:
            extra_heroes = json.load(f)
        
        # 创建已处理英雄的名称集合（规范化用于匹配）
        processed_names = set()
        for entry in processed_entries:
            name = entry.get("name", "")
            if name:
                # 创建多种可能的规范化名称用于匹配
                normalized_name = normalize_for_hero_name(name)
                processed_names.add(normalized_name)
                
                # 添加 costume 格式转换的匹配
                if "costume" in name.lower():
                    # 将 "Porthos costume1" 转换为 "Porthos C1"
                    c_name = name.replace("costume", "C").replace("costume1", "C1").replace("costume2", "C2").replace("costume3", "C3")
                    processed_names.add(normalize_for_hero_name(c_name))
        
        # 过滤掉已处理的英雄
        original_count = len(extra_heroes)
        extra_heroes_updated = []
        
        for hero in extra_heroes:
            hero_name = hero.get("name", "")
            hero_normalized = normalize_for_hero_name(hero_name)
            
            if hero_normalized not in processed_names:
                # 检查 costume 格式转换
                if " C" in hero_name:
                    c_name = hero_name.replace(" C", " costume")
                    c_normalized = normalize_for_hero_name(c_name)
                    if c_normalized not in processed_names:
                        extra_heroes_updated.append(hero)
                    else:
                        logging.info(f"移除已处理的英雄 (通过转换匹配): {hero_name}")
                else:
                    extra_heroes_updated.append(hero)
            else:
                logging.info(f"移除已处理的英雄: {hero_name}")
        
        removed_count = original_count - len(extra_heroes_updated)
        if removed_count > 0:
            with open(EXTRA_HEROES_JSON_FILE, 'w', encoding='utf-8') as f:
                json.dump(extra_heroes_updated, f, ensure_ascii=False, indent=4)
            print(f"✅ 已从 {EXTRA_HEROES_JSON_FILE} 中移除 {removed_count} 个已处理的英雄条目")
            logging.info(f"✅ 已从 {EXTRA_HEROES_JSON_FILE} 中移除 {removed_count} 个已处理的英雄条目")
            
            # 打印被移除的英雄名称
            print("被移除的英雄:")
            for entry in processed_entries:
                print(f"  - {entry.get('name')}")
        else:
            print("ℹ️ 没有需要从 extra_heroes.json 中移除的英雄条目")
            
    except Exception as e:
        logging.error(f"从 {EXTRA_HEROES_JSON_FILE} 移除已处理英雄时出错: {e}")

def append_missing_heroes_to_cn_skill_data(missing_names_list, file_path):
    """
    检测缺失中文技能分类数据的英雄，并将其以空白格式追加到指定的JSON文件中。
    """
    if not missing_names_list:
        return
        
    logging.info(f"检测到 {len(missing_names_list)} 个英雄可能在 '{file_path}' 中缺少条目。正在检查并准备追加...")
    
    existing_data = {}
    if os.path.exists(file_path) and os.path.getsize(file_path) > 0:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                loaded_json = json.load(f)
            if not isinstance(loaded_json, dict):
                error_msg = f"文件 '{file_path}' 内容格式不正确，应为一个JSON对象(字典)。"
                logging.critical(error_msg)
                print(f"\n严重错误: {error_msg}")
                return 
            existing_data = loaded_json
        except json.JSONDecodeError as e:
            error_msg = f"文件 '{file_path}' 格式错误，不是有效的JSON: {e}"
            logging.critical(error_msg)
            print(f"\n严重错误: {error_msg}")
            return

    new_entries_count = 0
    # 简单的转换函数，用于将全名转换为CN技能文件的key格式 (C/C2/C3等)
    def _simple_convert_key(name):
        parts = name.split()
        if len(parts) > 1 and parts[-1].lower() in {"costume", "costume1", "costume2", "costume3", "toon", "glass", "stylish"}:
            base = " ".join(parts[:-1])
            suffix_raw = parts[-1].lower()
            suffix_map = {
                "costume": " C", "costume1": " C", 
                "costume2": " C2", "toon": " C3", 
                "costume3": " C3", "glass": " C4", "stylish": " C5"
            }
            # 特殊英雄的 C2/C3 映射可能不同，这里简化处理，尽量匹配现有 key 格式
            return f"{base}{suffix_map.get(suffix_raw, '')}"
        return name

    for hero_name_full in sorted(list(set(missing_names_list))):
        output_key = _simple_convert_key(hero_name_full)
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


# ===================== 配置区域 =====================
MAX_AUTO_RERUN = 2  # 最大重试次数（包括第一次运行）

def run_update_hero_base_info():
    """运行1.2更新英雄基础信息.py，使用--auto参数跳过交互"""
    try:
        subprocess.check_call([sys.executable, "1.2更新英雄基础信息.py", "--auto"])
        return True
    except Exception as e:
        print(f"❌ 运行 1.2更新英雄基础信息.py 时出错: {e}")
        return False

def load_heroes_data_extra_json():
    """从heroes_data_extra.js加载数据"""
    with open(HEROES_DATA_EXTRA_FILE, "r", encoding="utf-8") as f:
        js = f.read()
    m = re.search(r'=\s*(\[[\s\S]*?\])\s*;', js)
    if not m:
        return []
    return json.loads(re.sub(r',\s*([\]}])', r'\1', m.group(1)))

def auto_clean_extra_heroes(extra_heroes_path):
    """清理extra_heroes.json，移除已处理的英雄"""
    if not os.path.exists(extra_heroes_path):
        return
    
    with open(extra_heroes_path, encoding="utf-8") as f:
        extra = json.load(f)

    updated = load_heroes_data_extra_json()
    hero_ids = {h.get("heroId") for h in updated if h.get("heroId")}

    cleaned = [h for h in extra if h.get("heroId") not in hero_ids]

    if len(cleaned) != len(extra):
        with open(extra_heroes_path, "w", encoding="utf-8") as f:
            json.dump(cleaned, f, ensure_ascii=False, indent=4)
        print(f"✅ 已清理 {len(extra) - len(cleaned)} 个已处理的英雄条目")

def run_single_generation():
    """单次运行生成流程"""
    # 重新加载数据
    load_heroes_data_extra()
    load_heroes_data_extra_cn()
    
    # 生成JS文件
    missing_extra, missing_cn_info = generate_js_data_with_translation(
        HEROES_DATA_DIR, 
        OUTPUT_JS_FILE_CN, 
        OUTPUT_JS_FILE_TC, 
        OUTPUT_JS_FILE_EN
    )
    
    return missing_extra, missing_cn_info

def main():
    """主函数，包含重试逻辑"""
    setup_logging()
    
    # 新增：加载英雄名称映射
    load_hero_name_mappings()
    
    # 初始加载数据
    load_heroes_data_extra()
    load_heroes_data_extra_cn() 
    load_all_dictionaries(DICTIONARY_DIR) 
    load_skill_name_txt_dict()

    rerun_count = 0
    need_rerun = False
    
    while rerun_count < MAX_AUTO_RERUN:
        print(f"\n=== 第 {rerun_count + 1} 次运行 ===")
        
        if rerun_count > 0:
            # 重新加载数据（对于重试运行）
            load_heroes_data_extra()
            load_heroes_data_extra_cn()
        
        # 生成JS数据
        missing_extra, missing_cn_info = generate_js_data_with_translation(
            HEROES_DATA_DIR, 
            OUTPUT_JS_FILE_CN, 
            OUTPUT_JS_FILE_TC, 
            OUTPUT_JS_FILE_EN
        )
        
        failure_log_path = os.path.join('logs', 'translation_failures.log')
        if os.path.exists(failure_log_path) and os.path.getsize(failure_log_path) > 0:
            print(f"\n警告: 检测到翻译失败。详情请查看日志文件: {failure_log_path}")
        
        # 处理缺失数据
        if missing_extra:
            logging.warning("\n--- 以下英雄未找到 heroes_data_extra.js 中的额外数据 ---")
            for info in missing_extra:
                logging.warning(f"缺失额外数据的英雄: {info}")
            
            # 自动追加缺失英雄
            append_missing_heroes_to_extra_data(missing_extra, HEROES_DATA_EXTRA_FILE)
            need_rerun = True
        
        if missing_cn_info:
            logging.warning(f"\n--- 发现 {len(set(missing_cn_info))} 个3-5星英雄在 {HEROES_DATA_EXTRA_CN_FILE} 中缺少数据 ---")
            append_missing_heroes_to_cn_skill_data(missing_cn_info, HEROES_DATA_EXTRA_CN_FILE)
            need_rerun = True
        
        # 检查是否需要重试
        if not need_rerun or rerun_count >= MAX_AUTO_RERUN - 1:
            break
            
        # 执行修复流程
        print("\n--- 检测到新添加的英雄，开始自动修复流程 ---")
        
        # 运行1.2更新脚本
        print("第1步：运行 1.2更新英雄基础信息.py...")
        if not run_update_hero_base_info():
            print("❌ 修复流程中断")
            break
            
        # 清理extra_heroes.json
        print("第2步：清理 extra_heroes.json...")
        auto_clean_extra_heroes(EXTRA_HEROES_JSON_FILE)
        
        rerun_count += 1
        need_rerun = False  # 重置标志
    
    print("🎉 自动化流程完成！")

if __name__ == '__main__':
    if not os.path.isdir(HEROES_DATA_DIR):
        logging.critical(f"错误: 英雄数据目录不存在: '{HEROES_DATA_DIR}'")
        print(f"错误: 英雄数据目录不存在: '{HEROES_DATA_DIR}'")
        input("\n按任意键退出...")
        sys.exit(1)
    
    main()
    input("\n按任意键退出...")