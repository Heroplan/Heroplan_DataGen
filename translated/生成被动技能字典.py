# -*- coding: utf-8 -*-
# 【被动技能-最终整合版】已集成所有高级字典生成规则

import re
import json
import logging
import os
from collections import defaultdict

# --- 全局配置 ---
ORIGINAL_FILE = '../to_translate/passives_to_translate.js'
TRANSLATED_CN_FILE = 'passives_cn.js'
TRANSLATED_TC_FILE = 'passives_tc.js'

OUTPUT_DICT_CN = '../dictionaries/passives_dict_cn.json'
OUTPUT_DICT_TC = '../dictionaries/passives_dict_tc.json'

LOG_FILE = '../../logs/passives_generate_log.log'
STRUCTURAL_DISCREPANCY_REPORT = '../../logs/passives_structural_discrepancy_report.txt'


def setup_logger():
    logger = logging.getLogger('PassivesDictionaryGenerator')
    logger.setLevel(logging.INFO)
    if logger.hasHandlers():
        logger.handlers.clear()
    
    log_dir = os.path.dirname(LOG_FILE)
    if log_dir and not os.path.exists(log_dir):
        os.makedirs(log_dir)

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
    if isinstance(item, str): return item
    if isinstance(item, dict) and item: return next(iter(item.values()), None)
    return None

def expand_passive_list(raw_passives):
    """
    将包含 '*' 的字符串拆分为多个条目。
    - 规则1: 如果字符串只包含 '*' 和空格 (如 " ****" 或 "* * *"), 则不分割。
    - 规则2: 如果字符串包含其他字符 (如 "Effect 1 * Effect 2"), 
             则按单个 '*' (r'\s+(?=\*(?!\*))') 分割，忽略 '**' 或 '***'。
    """
    expanded_list = []
    
    # 规则2: 用于分割普通技能的正则表达式 (匹配单个*, 忽略**)
    split_pattern = r'\s+(?=\*(?!\*))'
    
    # 规则1: 用于检查纯星号标题行的正则表达式
    # ^[\s\*]+$ 意味着从头到尾只包含空格或星号
    star_header_pattern = re.compile(r'^[\s\*]+$')

    for item in raw_passives:
        text = extract_string_from_item(item)
        if not text:
            continue
            
        stripped_text = text.strip()
        if not stripped_text:
            continue

        # 检查是否为 "纯星号标题行"
        # 1. 字符串中必须包含 '*'
        # 2. 字符串必须只由 '*' 和空格组成
        if '*' in stripped_text and star_header_pattern.match(stripped_text):
            # 这是标题行 (如 " ****" 或 "* * *")，不要分割
            expanded_list.append(stripped_text)
        else:
            # 这是普通技能描述，按规则2分割
            split_parts = [part.strip() for part in re.split(split_pattern, text) if part.strip()]
            expanded_list.extend(split_parts)
            
    return expanded_list

def get_numeric_value(s):
    if not isinstance(s, str): return s
    cleaned_s = s.replace(" ", "")
    nums = re.findall(r'-?\d+', cleaned_s)
    return int(nums[0]) if nums else 0

def normalize_text_for_regex(text):
    """为正则表达式准备文本，使其更健壮。"""
    if not text: return ""
    escaped_text = re.escape(text)
    escaped_text = re.sub(r"['’]", "['’]?", escaped_text)
    escaped_text = re.sub(r'\\\s+', r'\\s+', escaped_text)
    escaped_text = escaped_text.replace(r'\,', r',?\s*').replace(r'\.', r'\.?\s*')
    return escaped_text

def create_passives_dictionary(original_data, translated_data, lang_name, logger):
    """为被动技能生成翻译字典，已集成所有高级规则。"""
    regex_dict = {}
    number_pattern = r'([+-]?\s*\d+\s*%?)'
    split_pattern = re.compile(r'^(.*\S)\s*([\(\（][^)\）]+[\)\）])\s*([.。!?？]?)$', re.DOTALL)
    ends_with_word_char = re.compile(r'[\w\u4e00-\u9fa5]$')

    original_map = {item['heroId']: item.get('passives', []) for item in original_data}
    translated_map = {item['heroId']: item.get('passives', []) for item in translated_data}

    for index in original_map:
        if index not in translated_map: continue
        
        eng_passives = expand_passive_list(original_map.get(index, []))
        trans_passives = expand_passive_list(translated_map.get(index, []))

        if len(eng_passives) != len(trans_passives):
            continue

        for eng_text_raw, trans_text_raw in zip(eng_passives, trans_passives):
            eng_match = split_pattern.match(eng_text_raw.strip())
            trans_match = split_pattern.match(trans_text_raw.strip())

            temp_eng_parts = []
            temp_trans_parts = []

            if eng_match and trans_match:
                temp_eng_parts.append(eng_match.group(1).strip())
                temp_eng_parts.append(eng_match.group(2).strip())
                temp_trans_parts.append(trans_match.group(1).strip())
                temp_trans_parts.append(trans_match.group(2).strip())
            else:
                temp_eng_parts.append(eng_text_raw)
                temp_trans_parts.append(trans_text_raw)

            for eng_text, trans_text in zip(temp_eng_parts, temp_trans_parts):
                try:
                    eng_text = eng_text.strip()
                    trans_text = trans_text.strip()

                    if trans_text and ends_with_word_char.search(trans_text):
                        if not trans_text.startswith(('(', '（')):
                            trans_text += "。"

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
                                if backreference_index: return f"\\{backreference_index}"
                                return match.group(0)
                            template_value = re.sub(number_pattern, replacer, trans_text)
                        else:
                            logger.warning(f"[{lang_name}] 降级处理：索引 {index} 的数字内容不匹配。| 原文: '{eng_text}' | 译文: '{trans_text}'")
                        regex_dict[regex_key] = template_value
                    else:
                        regex_key = f"^{normalize_text_for_regex(eng_text)}$"
                        regex_dict[regex_key] = trans_text
                except Exception as e:
                    logger.error(f"[{lang_name}] 核心处理异常，索引 {index}，文本 '{eng_text[:50]}...': {e}")
            
    return regex_dict

def analyze_passives_discrepancies(logger, original_data, cn_data, tc_data):
    """分析中英文被动技能列表的行数差异。"""
    logger.info("--- 开始生成被动技能(passives)的结构性差异报告 ---")
    original_map = {item['heroId']: item for item in original_data}
    cn_map = {item['heroId']: item for item in cn_data if item}
    tc_map = {item['heroId']: item for item in tc_data if item}
    
    report_lines = []
    discrepancy_count = 0
    for index in sorted(original_map.keys()):
        eng_item = original_map.get(index, {})
        cn_item = cn_map.get(index)
        tc_item = tc_map.get(index)
        if not cn_item or not tc_item: continue

        eng_passives = expand_passive_list(eng_item.get('passives', []))
        cn_passives = expand_passive_list(cn_item.get('passives', []))
        tc_passives = expand_passive_list(tc_item.get('passives', []))

        len_eng, len_cn, len_tc = len(eng_passives), len(cn_passives), len(tc_passives)
        if len_eng != len_cn or len_eng != len_tc:
            discrepancy_count += 1
            report_lines.append(f"--- Index: {index} ---\n")
            report_lines.append(f"  技能(CN): {cn_item.get('name', 'N/A')}\n")
            report_lines.append(f"  问题: 展开后的被动技能行数与英文原文不符。\n")
            report_lines.append(f"    - 英文行数: {len_eng}\n")
            report_lines.append(f"    - 简体行数: {len_cn} {'(不匹配!)' if len_eng != len_cn else ''}\n")
            report_lines.append(f"    - 繁體行数: {len_tc} {'(不匹配!)' if len_eng != len_tc else ''}\n\n")
    if report_lines:
        try:
            with open(STRUCTURAL_DISCREPANCY_REPORT, 'w', encoding='utf-8') as f:
                f.writelines(report_lines)
            logger.info(f"成功！结构性差异报告已保存到 {STRUCTURAL_DISCREPANCY_REPORT}，发现 {discrepancy_count} 个问题条目。")
        except Exception as e:
            logger.error(f"保存结构性差异报告时出错: {e}")
    else:
        logger.info("恭喜！未发现被动技能的结构性差异。")

def main():
    logger = setup_logger()
    logger.info("--- 开始生成被动技能（Passives）的多语言正则表达式字典 ---")
    original_data = parse_js_variable(ORIGINAL_FILE, logger)
    cn_data = parse_js_variable(TRANSLATED_CN_FILE, logger)
    tc_data = parse_js_variable(TRANSLATED_TC_FILE, logger)

    if not original_data:
        logger.error("因英文源文件解析错误，无法继续。")
        return

    if cn_data and tc_data:
        analyze_passives_discrepancies(logger, original_data, cn_data, tc_data)

    language_pairs = [("简体中文", cn_data, OUTPUT_DICT_CN), ("繁體中文", tc_data, OUTPUT_DICT_TC)]
    dictionaries = {}

    for lang_name, translated_data, output_filename in language_pairs:
        logger.info(f"--- 开始处理 {lang_name} 字典生成 ---")
        if not translated_data:
            logger.warning(f"由于未能加载 {lang_name} 数据，跳过字典生成。")
            dictionaries[lang_name] = None
            continue
        
        dictionary = create_passives_dictionary(original_data, translated_data, lang_name, logger)
        dictionaries[lang_name] = dictionary
        logger.info(f"成功为 {lang_name} 生成 {len(dictionary)} 条唯一翻译规则。")
    
    dict_cn = dictionaries.get("简体中文")
    dict_tc = dictionaries.get("繁體中文")
    if dict_cn is not None and dict_tc is not None:
        if len(dict_cn) != len(dict_tc):
            logger.warning(f"!!! 字典规则数量不一致 (CN: {len(dict_cn)}, TC: {len(dict_tc)})。开始对比差异...")
            cn_keys, tc_keys = set(dict_cn.keys()), set(dict_tc.keys())
            extra_in_cn, extra_in_tc = cn_keys - tc_keys, tc_keys - cn_keys
            if extra_in_cn:
                logger.info("--- ▼ 仅存在于【简体中文】字典的规则 ---")
                for key in extra_in_cn: logger.info(f"  - Key: {key}\n    Value: {dict_cn[key]}")
            if extra_in_tc:
                logger.info("--- ▼ 仅存在于【繁體中文】字典的规则 ---")
                for key in extra_in_tc: logger.info(f"  - Key: {key}\n    Value: {dict_tc[key]}")
            logger.warning("!!! 对比完成。")
        else:
            logger.info("✓ 字典规则数量一致。")

    for lang_name, _, output_filename in language_pairs:
        dictionary_to_save = dictionaries.get(lang_name)
        if dictionary_to_save is not None:
            try:
                with open(output_filename, 'w', encoding='utf-8') as f:
                    json.dump(dictionary_to_save, f, ensure_ascii=False, indent=4)
                logger.info(f"{lang_name} 字典已成功保存到: {output_filename}")
            except Exception as e:
                logger.error(f"为 {lang_name} 保存字典时发生错误: {e}")
            
    logger.info("--- 所有任务完成 ---")

if __name__ == "__main__":
    main()
    input("\n按任意键退出...")