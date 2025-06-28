import os
import re
import yaml
import json
import unicodedata
import logging
from tqdm import tqdm

# --- 文本标准化函数 (无变化) ---
def normalize_for_hero_name(text):
    if not isinstance(text, str): return ""
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')
    text = re.sub(r"[\s.'´\[\]-]", "", text)
    return text.lower()

def normalize_for_generic_lookup(text):
    if not isinstance(text, str): return ""
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')
    text = re.sub(r"[-.'´\[\]]", "", text)
    return text.lower()

# --- 内置拼写纠正字典 (无变化) ---
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

# --- 配置 (*** 已修改 ***) ---
HEROES_DATA_DIR = '../heroplan_data/data/heroes'
DICTIONARY_DIR = 'dictionaries'
HEROES_DATA_EXTRA_FILE = 'heroes_data_extra.js'
OUTPUT_JS_FILE_CN = 'heroes_data_cn.js'
OUTPUT_JS_FILE_TC = 'heroes_data_tc.js'
OUTPUT_JS_FILE_EN = 'heroes_data_en.js'

# *** 修改点: 新增 'types' 字典配置, 并确保 'skill_types' 存在 ***
SIMPLE_DICT_CONFIG = {
    'hero_names': 'heroes_name_dict',
    'types': 'types_dict',                  # 新增: 用于翻译 'types' 字段
    'skill_types': 'skill_types_dict',      # 用于翻译 'skill_types' 字段
    'skillname': 'skill_name_dict',
    'heroes_name_fancy': 'heroes_name_fancy_dict',
    'aether_powers': 'aether_power_dict',
}
BASE_DICT_FILE_STEM = 'base_values_dict'

# --- 全局变量 (无变化) ---
LANGUAGES = ['cn', 'tc', 'en']
translations = {}
hero_map_processed = {}
hero_keys_sorted = []
heroes_extra_lookup = {}
appearance_map_zh = {"costume": "C1", "costume1": "C1", "costume2": "C2", "costume3": "C3", "toon": "卡通", "glass": "玻璃"}
appearance_map_en = {"costume": "C1", "costume1": "C1", "costume2": "C2", "costume3": "C3", "toon": "Toon", "glass": "Glass"}


# --- 功能函数 ---

def setup_logging():
    # 确保日志目录存在
    if not os.path.exists('../logs'):
        os.makedirs('../logs')
    logging.basicConfig(filename="logs/skill_generation.log", level=logging.INFO, format='%(message)s', encoding='utf-8')
    console = logging.StreamHandler()
    console.setLevel(logging.INFO)
    console.setFormatter(logging.Formatter('%(message)s'))
    logging.getLogger('').addHandler(console)

def clean_string_for_output(text):
    if not isinstance(text, str): return text
    return text.replace('[', '').replace(']', '')

def load_all_dictionaries(dictionary_base_dir):
    """(无变化)"""
    global hero_map_processed, hero_keys_sorted
    print("正在加载所有字典...")

    print("正在加载简单字典...")
    for key, file_stem in SIMPLE_DICT_CONFIG.items():
        translations[key] = {lang: {} for lang in LANGUAGES}
        for lang in LANGUAGES:
            filepath = os.path.join(dictionary_base_dir, f"{file_stem}_{lang}.json")
            if os.path.exists(filepath):
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        translations[key][lang] = json.load(f)
                except Exception as e:
                    print(f"警告: 加载字典文件 '{filepath}' 时出错: {e}")

    print("正在加载基础数据字典...")
    for lang in LANGUAGES:
        filepath = os.path.join(dictionary_base_dir, f"{BASE_DICT_FILE_STEM}_{lang}.json")
        if os.path.exists(filepath):
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    base_data = json.load(f)
                for key, value_dict in base_data.items():
                    if key not in translations:
                        translations[key] = {lang: {} for lang in LANGUAGES}
                    translations[key][lang] = value_dict
            except Exception as e:
                print(f"警告: 加载基础数据文件 '{filepath}' 时出错: {e}")
        else:
            if lang in ['cn', 'tc']:
                print(f"警告: 基础数据文件未找到: '{filepath}'")

    print("正在创建宽容匹配字典...")
    for key in list(translations.keys()):
        translations[f"{key}_tolerant"] = {lang: {} for lang in LANGUAGES}
        for lang in LANGUAGES:
            translations[f"{key}_tolerant"][lang] = {
                normalize_for_generic_lookup(ik): v for ik, v in translations.get(key, {}).get(lang, {}).items()
            }
            
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
    """(无变化)"""
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

            if translated_suffix:
                final_names[lang] = f"{base_name_trans} {translated_suffix}".strip()
            else:
                final_names[lang] = base_name_trans
        
        return final_names
        
    cleaned_full_name = clean_string_for_output(original_name_no_accents_full)
    return {lang: cleaned_full_name for lang in LANGUAGES}


def translate_single_value(value, dict_key):
    """(无变化)"""
    if not isinstance(value, str):
        return {lang: value for lang in LANGUAGES}
        
    normalized_value = normalize_for_generic_lookup(value)
    translations_out = {}
    for lang in LANGUAGES:
        tolerant_map = translations.get(f"{dict_key}_tolerant", {}).get(lang, {})
        translations_out[lang] = tolerant_map.get(normalized_value, value)
    return translations_out

def correct_and_translate_skill(skill_name_raw):
    """(无变化)"""
    if not skill_name_raw:
        return {lang: skill_name_raw for lang in LANGUAGES}
    normalized_for_typo_lookup = normalize_for_generic_lookup(skill_name_raw)
    corrected_skill_name = tolerant_typo_corrections.get(normalized_for_typo_lookup, skill_name_raw)
    return translate_single_value(corrected_skill_name, 'skillname')

def translate_list(items_list, dict_key):
    """(已修改) 通用列表翻译函数，取代原有的 translate_list_of_skills。"""
    if not isinstance(items_list, list):
        return {lang: items_list for lang in LANGUAGES}
        
    translated_items = {lang: [] for lang in LANGUAGES}
    
    for item in items_list:
        if isinstance(item, str):
            normalized_item = normalize_for_generic_lookup(item)
            for lang in LANGUAGES:
                # 使用传入的 dict_key 查找对应的宽容匹配字典
                tolerant_map = translations.get(f"{dict_key}_tolerant", {}).get(lang, {})
                translated_items[lang].append(tolerant_map.get(normalized_item, item))
        else:
            # 处理非字符串项，例如数字
            for lang in LANGUAGES:
                translated_items[lang].append(item)
                
    return translated_items

def flatten_list(nested_list):
    """(无变化)"""
    if not isinstance(nested_list, list): return [nested_list] if nested_list is not None else []
    flat_list = []
    for item in nested_list:
        if isinstance(item, list): flat_list.extend(flatten_list(item))
        elif isinstance(item, dict):
            for key, value in item.items(): flat_list.append(f"{key}: {value}")
        elif item is not None: flat_list.append(item)
    return flat_list

def load_heroes_data_extra():
    """(无变化)"""
    global heroes_extra_lookup
    if not os.path.exists(HEROES_DATA_EXTRA_FILE): return
    try:
        with open(HEROES_DATA_EXTRA_FILE, 'r', encoding='utf-8') as f:
            js_content = f.read()
            match = re.search(r'=\s*(\[[\s\S]*?\])\s*;', js_content)
        if match:
            json_str = match.group(1)
            json_str = re.sub(r',\s*([\]}])', r'\1', json_str)
            for entry in json.loads(json_str):
                if name_raw := entry.get('name'):
                    heroes_extra_lookup[normalize_for_hero_name(name_raw)] = entry
    except Exception as e: print(f"错误: 解析 '{HEROES_DATA_EXTRA_FILE}' 时出错: {e}")


def generate_js_data_with_translation(heroes_base_dir, output_path_cn, output_path_tc, output_path_en):
    """(已修改) 更新数据打包逻辑，以正确使用 `types` 和 `skill_types` 的翻译字典。"""
    all_hero_data = {lang: [] for lang in LANGUAGES}
    missing_extra = []
    original_index_counter = 0

    print("开始扫描和解析英雄数据并生成独立的简繁英文件...")
    for color in tqdm(['blue', 'green', 'purple', 'red', 'yellow'], desc="处理进度"):
        for star in range(1, 6):
            star_path = os.path.join(heroes_base_dir, color, str(star))
            if not os.path.isdir(star_path): continue
            for filename in [f for f in os.listdir(star_path) if f.endswith('.yml') and 'costume' not in f.lower()]:
                try:
                    with open(os.path.join(star_path, filename), 'r', encoding='utf-8') as f:
                        hero_data = yaml.safe_load(f.read().replace('\t', '    '))
                    hero_name_raw = hero_data.get('name')
                    extra = heroes_extra_lookup.get(normalize_for_hero_name(hero_name_raw), {})
                    if not extra: missing_extra.append(f"基础英雄: '{hero_name_raw}' (未找到 heroes_data_extra 数据)")

                    # --- 翻译部分 ---
                    name_trans = translate_name(hero_name_raw)
                    fancy_name_trans = translate_single_value(extra.get('fancy name', ''), 'heroes_name_fancy')
                    aether_power_trans = translate_single_value(extra.get('AetherPower', ''), 'aether_powers')
                    color_trans = translate_single_value(color, 'base_values')
                    class_trans = translate_single_value(hero_data.get('class'), 'base_values')
                    speed = 'slayer' if hero_data.get('family') == 'slayer' else hero_data.get('speed')
                    speed_trans = translate_single_value(speed, 'base_values')
                    skill_raw = hero_data.get('skill') or ('Rending Dagger' if hero_name_raw == 'Aurum' else None)
                    skill_trans = correct_and_translate_skill(skill_raw)
                    source_trans = translate_single_value(hero_data.get('source'), 'source_values')
                    
                    # --- *** 修改点 1 开始 *** ---
                    # `types` 始终来自 yml 文件, 使用 'types' 字典翻译
                    types_trans = translate_list(flatten_list(hero_data.get('types', [])), 'types')
                    
                    # `skill_types` 是一个独立字段，来自 extra data (JS文件), 使用 'skill_types' 字典翻译
                    skill_types_source = extra.get('skill_types', []) # 如果不存在则默认为空列表
                    skill_types_trans = translate_list(skill_types_source, 'skill_types')
                    # --- *** 修改点 1 结束 *** ---
                    
                    # --- 数据打包 ---
                    common_data = {'Release date': extra.get('Release date', ''), 'star': star, 'power': hero_data.get('power'), 'attack': hero_data.get('attack'), 'defense': hero_data.get('defense'), 'health': hero_data.get('health'), 'effects': flatten_list(hero_data.get('effects', [])), 'passives': flatten_list(hero_data.get('passives', [])), 'family': hero_data.get('family'), 'image': hero_data.get('image'), 'costume_id': 0, 'originalIndex': original_index_counter}
                    
                    for lang in LANGUAGES:
                        record = {
                            'name': name_trans[lang],
                            'fancy_name': fancy_name_trans[lang],
                            'AetherPower': aether_power_trans[lang],
                            'color': color_trans[lang],
                            'class': class_trans[lang],
                            'speed': speed_trans[lang],
                            'skill': skill_trans[lang],
                            'types': types_trans[lang],                   # 使用 types_trans
                            'skill_types': skill_types_trans[lang],       # 使用 skill_types_trans
                            'source': source_trans[lang],
                            **common_data
                        }
                        all_hero_data[lang].append(record)

                    original_index_counter += 1

                    for key in hero_data:
                        if key.startswith('costume') and isinstance(hero_data[key], dict):
                            costume_data = hero_data[key]
                            suffix = costume_data.get('design', key)
                            if suffix == "costume": suffix = "costume1"
                            costume_id = int(re.match(r'costume(\d*)', key).group(1) or 1)
                            full_name = f"{hero_name_raw} {suffix}".strip()
                            extra_c = heroes_extra_lookup.get(normalize_for_hero_name(full_name), {})
                            if not extra_c: missing_extra.append(f"时装英雄: '{full_name}' (未找到 heroes_data_extra 数据)")
                            
                            # --- 时装翻译部分 ---
                            name_trans_c = translate_name(full_name)
                            fancy_name_trans_c = translate_single_value(extra_c.get('fancy name', ''), 'heroes_name_fancy')
                            aether_power_trans_c = translate_single_value(extra_c.get('AetherPower', ''), 'aether_powers')
                            class_trans_c = translate_single_value(costume_data.get('class'), 'base_values')
                            costume_skill_raw = costume_data.get('skill')
                            skill_trans_c = correct_and_translate_skill(costume_skill_raw)
                            
                            # --- *** 修改点 2 开始 *** ---
                            # 对时装执行相同的逻辑
                            types_trans_c = translate_list(flatten_list(costume_data.get('types', [])), 'types')
                            skill_types_source_c = extra_c.get('skill_types', [])
                            skill_types_trans_c = translate_list(skill_types_source_c, 'skill_types')
                            # --- *** 修改点 2 结束 *** ---
                            
                            # --- 时装数据打包 ---
                            common_data_c = {'Release date': extra_c.get('Release date', ''), 'star': star, 'power': costume_data.get('power'), 'attack': costume_data.get('attack'), 'defense': costume_data.get('defense'), 'health': costume_data.get('health'), 'effects': flatten_list(costume_data.get('effects', [])), 'passives': flatten_list(costume_data.get('passives', [])), 'family': hero_data.get('family'), 'image': costume_data.get('image'), 'costume_id': costume_id, 'originalIndex': original_index_counter}
                            
                            for lang in LANGUAGES:
                                record_c = {
                                    'name': name_trans_c[lang],
                                    'fancy_name': fancy_name_trans_c[lang],
                                    'AetherPower': aether_power_trans_c[lang],
                                    'color': color_trans[lang],
                                    'class': class_trans_c[lang],
                                    'speed': speed_trans[lang],
                                    'skill': skill_trans_c[lang],
                                    'types': types_trans_c[lang],               # 使用 types_trans_c
                                    'skill_types': skill_types_trans_c[lang],   # 使用 skill_types_trans_c
                                    'source': source_trans[lang],
                                    **common_data_c
                                }
                                all_hero_data[lang].append(record_c)
                            
                            original_index_counter += 1
                except Exception as e:
                    print(f"\n处理文件 '{filename}' 时发生严重错误: {e}")

    # --- 写入文件 ---
    output_map = {
        'cn': output_path_cn,
        'tc': output_path_tc,
        'en': output_path_en,
    }
    lang_names = {
        'cn': '简体中文',
        'tc': '繁体中文',
        'en': '英文原文',
    }

    print("\n开始写入独立的JS文件...")
    for lang, path in output_map.items():
        try:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(f"window.allHeroes = {json.dumps(all_hero_data[lang], ensure_ascii=False, indent=4)};")
            print(f"完成！{lang_names[lang]}文件 '{path}' 已更新，共 {len(all_hero_data[lang])} 条数据。")
        except Exception as e:
            print(f"写入{lang_names[lang]}文件时发生错误: {e}")

    if missing_extra:
        logging.warning("\n--- 以下英雄未找到 heroes_data_extra.js 中的额外数据 ---")
        for info in missing_extra: logging.warning(info)


if __name__ == '__main__':
    setup_logging()
    load_heroes_data_extra()
    load_all_dictionaries(DICTIONARY_DIR) 

    if os.path.isdir(HEROES_DATA_DIR):
        generate_js_data_with_translation(HEROES_DATA_DIR, OUTPUT_JS_FILE_CN, OUTPUT_JS_FILE_TC, OUTPUT_JS_FILE_EN)
    else:
        print(f"错误: 英雄数据目录不存在: '{HEROES_DATA_DIR}'")
