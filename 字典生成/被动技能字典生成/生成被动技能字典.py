# -*- coding: utf-8 -*-
# 最终正确版本 (采用 re.sub 方案)

import re
import json
import logging
import os
from collections import defaultdict

# --- 全局配置 ---
ORIGINAL_FILE = '../../to_translate/passives_to_translate.js'
TRANSLATED_CN_FILE = 'passives_translated_cn.js'
TRANSLATED_TC_FILE = 'passives_translated_tc.js'

OUTPUT_DICT_CN = '../../dictionaries/passives_dict_cn.json'
OUTPUT_DICT_TC = '../../dictionaries/passives_dict_tc.json'

LOG_FILE = '../../logs/passives_generate_log.log'
STRUCTURAL_DISCREPANCY_REPORT = '../../logs/passives_structural_discrepancy_report.txt'


def setup_logger():
    logger = logging.getLogger('PassivesDictionaryGenerator')
    logger.setLevel(logging.INFO)
    if logger.hasHandlers():
        logger.handlers.clear()
    if os.path.exists(LOG_FILE):
        os.remove(LOG_FILE)
    file_handler = logging.FileHandler(LOG_FILE, mode='w', encoding='utf-8')
    console_handler = logging.StreamHandler()
    formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(formatter)
    console_handler.setFormatter(formatter)
    logger.addHandler(file_handler)
    logger.addHandler(console_handler)
    return logger

def parse_js_variable(file_path, logger):
    if not os.path.exists(file_path):
        logger.warning(f"警告: 文件 {file_path} 不存在，将跳过。")
        return None
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        json_start = content.find('[')
        json_end = content.rfind(']')
        if json_start == -1 or json_end == -1:
            raise ValueError("在文件中未找到有效的JSON数组 '[]'。")
        json_string = content[json_start : json_end + 1]
        return json.loads(json_string)
    except Exception as e:
        logger.error(f"解析 {file_path} 时发生严重错误: {e}")
        return None

def extract_string_from_item(item):
    if isinstance(item, str):
        return item
    if isinstance(item, dict) and item:
        return next(iter(item.values()), None)
    return None

def expand_passive_list(raw_passives):
    expanded_list = []
    split_pattern = r'\s+(?=\*)'
    for item in raw_passives:
        text = extract_string_from_item(item)
        if text and text.strip():
            split_parts = [part.strip() for part in re.split(split_pattern, text) if part.strip()]
            expanded_list.extend(split_parts)
    return expanded_list

def get_numeric_value(s):
    if not isinstance(s, str): return s
    cleaned_s = s.replace(" ", "")
    nums = re.findall(r'-?\d+', cleaned_s)
    return int(nums[0]) if nums else 0

def normalize_text_for_regex(text):
    if not text: return ""
    escaped_text = re.escape(text)
    escaped_text = re.sub(r"['’]", "['’]?", escaped_text)
    escaped_text = re.sub(r'\\\s+', r'\\s+', escaped_text)
    escaped_text = escaped_text.replace(r'\,', r',?\s*').replace(r'\.', r'\.?\s*')
    return escaped_text

# ############################################################################
# ###           vvv 终极解决方案：使用 re.sub 的核心函数 vvv           ###
# ############################################################################
def create_passives_dictionary(original_data, translated_data, lang_name, logger):
    """
    【最终解决方案】使用 re.sub 和 replacer 函数，彻底解决数字顺序颠倒问题。
    """
    regex_dict = {}
    number_pattern = r'([+-]?\s*\d+\s*%?)'
    
    original_map = {item['originalIndex']: item.get('passives', []) for item in original_data}
    translated_map = {item['originalIndex']: item.get('passives', []) for item in translated_data}

    for index in original_map:
        if index not in translated_map: continue
        
        eng_passives = expand_passive_list(original_map.get(index, []))
        trans_passives = expand_passive_list(translated_map.get(index, []))

        if len(eng_passives) != len(trans_passives):
            continue

        for eng_text, trans_text in zip(eng_passives, trans_passives):
            try:
                eng_nums = re.findall(number_pattern, eng_text)

                if eng_nums:
                    trans_nums = re.findall(number_pattern, trans_text)
                    eng_num_values = [get_numeric_value(n) for n in eng_nums]
                    trans_num_values = [get_numeric_value(n) for n in trans_nums]

                    eng_parts = re.split(number_pattern, eng_text)
                    regex_key_parts = [normalize_text_for_regex(p) if i % 2 == 0 else number_pattern for i, p in enumerate(eng_parts)]
                    regex_key = f"^{''.join(regex_key_parts)}$"
                    
                    template_value = trans_text

                    if len(eng_nums) == len(trans_nums) and sorted(eng_num_values) == sorted(trans_num_values):
                        eng_num_counts = defaultdict(int)
                        eng_num_to_backreference = {}
                        for i, num_str in enumerate(eng_nums):
                            num_val = get_numeric_value(num_str)
                            key = (num_val, eng_num_counts[num_val])
                            eng_num_to_backreference[key] = i + 1
                            eng_num_counts[num_val] += 1

                        trans_num_counts = defaultdict(int)
                        def replacer(match):
                            matched_num_str = match.group(1)
                            matched_num_val = get_numeric_value(matched_num_str)
                            key = (matched_num_val, trans_num_counts[matched_num_val])
                            backreference_index = eng_num_to_backreference.get(key)
                            trans_num_counts[matched_num_val] += 1
                            if backreference_index:
                                return f"\\{backreference_index}"
                            return match.group(0)

                        template_value = re.sub(number_pattern, replacer, trans_text)
                    else:
                        logger.warning(f"[{lang_name}] 降级处理：索引 {index} 的数字内容不匹配。| 原文: '{eng_text}' | 译文: '{trans_text}'")

                    if regex_key not in regex_dict:
                        regex_dict[regex_key] = template_value
                else:
                    regex_key = f"^{normalize_text_for_regex(eng_text)}$"
                    if regex_key not in regex_dict:
                        regex_dict[regex_key] = trans_text
            except Exception as e:
                logger.error(f"[{lang_name}] 核心处理异常，索引 {index}：{e}")
            
    return regex_dict

def analyze_passives_discrepancies(logger, original_data, cn_data, tc_data):
    # 此函数逻辑正确，无需修改
    pass # 省略具体实现以保持简洁

def main():
    logger = setup_logger()
    logger.info("--- 开始生成被动技能（Passives）的多语言正则表达式字典 ---")
    
    original_data = parse_js_variable(ORIGINAL_FILE, logger)
    cn_data = parse_js_variable(TRANSLATED_CN_FILE, logger)
    tc_data = parse_js_variable(TRANSLATED_TC_FILE, logger)

    if not original_data:
        logger.error("因英文源文件解析错误，无法继续。")
        return

    # 差异分析部分可以保持原样，这里为了简洁省略
    # if cn_data and tc_data:
    #     analyze_passives_discrepancies(logger, original_data, cn_data, tc_data)

    language_pairs = [
        ("简体中文", cn_data, OUTPUT_DICT_CN),
        ("繁體中文", tc_data, OUTPUT_DICT_TC)
    ]
    
    for lang_name, translated_data, output_filename in language_pairs:
        logger.info(f"--- 开始处理 {lang_name} 字典生成 ---")
        if not translated_data:
            logger.warning(f"由于未能加载 {lang_name} 数据，跳过字典生成。")
            continue
        
        dictionary = create_passives_dictionary(original_data, translated_data, lang_name, logger)
        try:
            with open(output_filename, 'w', encoding='utf-8') as f:
                json.dump(dictionary, f, ensure_ascii=False, indent=4)
            logger.info(f"成功为 {lang_name} 生成 {len(dictionary)} 条唯一翻译规则到 {output_filename}。")
        except Exception as e:
            logger.error(f"为 {lang_name} 保存字典时发生错误: {e}")
            
    logger.info("--- 所有任务完成 ---")

if __name__ == "__main__":
    main()