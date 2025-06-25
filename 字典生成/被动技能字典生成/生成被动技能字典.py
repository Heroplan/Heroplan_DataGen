# -*- coding: utf-8 -*-
# 最终优化版本 (Final Optimized Version for Passives)

import re
import json
import logging
from collections import defaultdict

# --- 全局配置 ---
LOG_FILE = '../../logs/passives_generate_bilingual_log.log'
# 新增：专属的结构性差异报告文件名
STRUCTURAL_DISCREPANCY_REPORT = '../logs/passives_structural_discrepancy_report.txt'


def setup_logger(log_file_name, logger_name):
    """配置日志记录器，同时输出到控制台和文件。"""
    logger = logging.getLogger(logger_name)
    logger.setLevel(logging.INFO)
    if logger.hasHandlers():
        logger.handlers.clear()

    file_handler = logging.FileHandler(log_file_name, mode='w', encoding='utf-8')
    file_handler.setLevel(logging.INFO)
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)
    formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(formatter)
    console_handler.setFormatter(formatter)
    logger.addHandler(file_handler)
    logger.addHandler(console_handler)
    return logger

def parse_js_variable(file_path, logger):
    """读取包含单个变量赋值的 .js 文件，并将其数据解析为 Python 对象。"""
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
        logger.error(f"解析 {file_path} 时发生意外错误: {e}")
        return None

def extract_string_from_item(item):
    """从效果或被动技能条目中智能提取字符串。"""
    if isinstance(item, str):
        return item
    if isinstance(item, dict) and item:
        return next(iter(item.values()), None)
    return None

def expand_passive_list(raw_passives):
    """展开被动技能列表，将包含 '*' 的字符串拆分为多个条目。"""
    expanded_list = []
    split_pattern = r'\s+(?=\*)' 
    for item in raw_passives:
        text = extract_string_from_item(item)
        if text and text.strip():
            split_parts = [part.strip() for part in re.split(split_pattern, text) if part.strip()]
            expanded_list.extend(split_parts)
    return expanded_list

def get_numeric_value(s):
    """从字符串中提取整数值，用于比较。"""
    if not isinstance(s, str): return s
    nums = re.findall(r'-?\d+', s)
    return int(nums[0]) if nums else 0

def normalize_text_for_regex(text):
    """为正则表达式键准备文本片段，使其更健壮。"""
    escaped_text = re.escape(text)
    escaped_text = re.sub(r"['’]", "['’]?", escaped_text)
    escaped_text = re.sub(r'\\\s+', r'\\s+', escaped_text)
    escaped_text = escaped_text.replace(r'\,', r',?\s*').replace(r'\.', r'\.?\s*')
    return escaped_text

# --- 新增功能：结构性差异诊断 ---
def analyze_passives_discrepancies(logger, original_data, cn_data, tc_data):
    """
    生成一份报告，列出因展开后被动技能数量不匹配而被跳过的条目。
    这是需要人工修复的“待办清单”。
    """
    logger.info(f"--- 开始生成被动技能的结构性差异报告 ---")
    original_map = {item['originalIndex']: item.get('passives', []) for item in original_data}
    cn_map = {item['originalIndex']: item.get('passives', []) for item in cn_data if item}
    tc_map = {item['originalIndex']: item.get('passives', []) for item in tc_data if item}
    
    report_lines = []
    discrepancy_count = 0

    for index in sorted(original_map.keys()):
        eng_passives_raw = original_map.get(index, [])
        cn_passives_raw = cn_map.get(index)
        tc_passives_raw = tc_map.get(index)

        # 如果翻译文件中连条目都没有，直接报告
        if cn_passives_raw is None or tc_passives_raw is None:
            discrepancy_count += 1
            report_lines.append(f"--- Index: {index} ---\n")
            report_lines.append(f"  问题: 翻译文件中缺少此索引对应的条目。\n")
            report_lines.append(f"    - 简体中文: {'存在' if cn_passives_raw is not None else '缺失!'}\n")
            report_lines.append(f"    - 繁體中文: {'存在' if tc_passives_raw is not None else '缺失!'}\n\n")
            continue

        # 核心对比逻辑：比较展开后的列表长度
        eng_passives_expanded = expand_passive_list(eng_passives_raw)
        cn_passives_expanded = expand_passive_list(cn_passives_raw)
        tc_passives_expanded = expand_passive_list(tc_passives_raw)

        len_eng = len(eng_passives_expanded)
        len_cn = len(cn_passives_expanded)
        len_tc = len(tc_passives_expanded)

        if len_eng != len_cn or len_eng != len_tc:
            discrepancy_count += 1
            report_lines.append(f"--- Index: {index} ---\n")
            report_lines.append(f"  问题: 展开后的被动技能数量与原文不符。\n")
            # 为方便定位，显示未展开的原始文本
            report_lines.append(f"    - 英文原文 (未展开): {eng_passives_raw}\n")
            report_lines.append(f"    - 简体译文 (未展开): {cn_passives_raw}\n")
            report_lines.append(f"    - 繁體译文 (未展开): {tc_passives_raw}\n")
            # 显示对比结果
            report_lines.append(f"    - 英文数量 (展开后): {len_eng}\n")
            report_lines.append(f"    - 简体数量 (展开后): {len_cn} {'(不匹配!)' if len_eng != len_cn else ''}\n")
            report_lines.append(f"    - 繁體数量 (展开后): {len_tc} {'(不匹配!)' if len_eng != len_tc else ''}\n\n")

    if report_lines:
        try:
            with open(STRUCTURAL_DISCREPANCY_REPORT, 'w', encoding='utf-8') as f:
                f.writelines(report_lines)
            logger.info(f"成功！结构性差异报告已保存到 {STRUCTURAL_DISCREPANCY_REPORT}，发现 {discrepancy_count} 个问题条目。请检查此文件以修正数据。")
        except Exception as e:
            logger.error(f"保存结构性差异报告时出错: {e}")
    else:
        logger.info("恭喜！未发现结构性差异，所有条目的被动技能数量均匹配。")


def generate_single_dictionary(original_data, translated_data, lang_code, logger):
    """
    【最优解】从原文和一种译文数据中生成字典。
    """
    regex_dict = {}
    number_pattern = r'([+-]?\d+\s*%?)'
    
    original_map = {item['originalIndex']: item.get('passives', []) for item in original_data}
    translated_map = {item['originalIndex']: item.get('passives', []) for item in translated_data}

    for index in original_map:
        if index not in translated_map:
            continue
        
        eng_passives = expand_passive_list(original_map.get(index, []))
        trans_passives = expand_passive_list(translated_map.get(index, []))

        # 结构性错误已由分析报告处理，这里直接跳过即可
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

                        trans_parts = re.split(number_pattern, trans_text)
                        template_value_parts = []
                        trans_num_counts = defaultdict(int)
                        num_idx_trans = 0
                        for part in trans_parts:
                            if num_idx_trans < len(trans_nums) and part == trans_nums[num_idx_trans]:
                                current_num_str = trans_nums[num_idx_trans]
                                current_num_val = get_numeric_value(current_num_str)
                                key = (current_num_val, trans_num_counts[current_num_val])
                                backreference_index = eng_num_to_backreference.get(key)
                                template_value_parts.append(f"\\{backreference_index}")
                                trans_num_counts[current_num_val] += 1
                                num_idx_trans += 1
                            else:
                                template_value_parts.append(part)
                        template_value = "".join(template_value_parts)
                    else:
                        logger.warning(f"[{lang_code}] 降级处理：索引 {index} 的数字内容不匹配，将使用字面值翻译。| 原文: '{eng_text}' | 译文: '{trans_text}'")

                    if regex_key not in regex_dict:
                        regex_dict[regex_key] = template_value
                else:
                    regex_key = f"^{normalize_text_for_regex(eng_text)}$"
                    if regex_key not in regex_dict:
                        regex_dict[regex_key] = trans_text
            
            except Exception as e:
                logger.error(f"严重错误 [{lang_code}]：索引 {index} 生成规则时发生意外: {e} | 原文: {eng_text}")
                continue
            
    return regex_dict

def main():
    """主函数，用于编排所有操作。"""
    logger = setup_logger(LOG_FILE, 'PassivesBilingualGenerator')
    logger.info("--- 开始生成被动技能（Passives）的双语正则表达式字典 ---")
    
    original_file = '../../to_translate/passives_to_translate.js'
    translated_file_cn = 'passives_translated_cn.js'
    translated_file_tc = 'passives_translated_tc.js'
    output_filename_cn = '../../dictionaries/passives_dict_cn.json'
    output_filename_tc = '../../dictionaries/passives_dict_tc.json'
    
    logger.info(f"正在解析源文件: {original_file}")
    original_data = parse_js_variable(original_file, logger)
    
    logger.info(f"正在解析简体中文翻译文件: {translated_file_cn}")
    translated_data_cn = parse_js_variable(translated_file_cn, logger)

    logger.info(f"正在解析繁体中文翻译文件: {translated_file_tc}")
    translated_data_tc = parse_js_variable(translated_file_tc, logger)

    if not original_data or not translated_data_cn or not translated_data_tc:
        logger.error("因一个或多个文件解析错误，无法继续。")
        return

    # --- 1. 首先执行结构性差异分析，生成修复报告 ---
    # 修正后
    analyze_passives_discrepancies(logger, original_data, translated_data_cn, translated_data_tc)

    # --- 2. 接着，为每种语言生成字典 ---
    logger.info("--- 正在为简体中文(CN)生成字典 ---")
    dictionary_cn = generate_single_dictionary(original_data, translated_data_cn, 'CN', logger)
    
    logger.info("--- 正在为繁体中文(TC)生成字典 ---")
    dictionary_tc = generate_single_dictionary(original_data, translated_data_tc, 'TC', logger)
    
    # --- 3. 保存字典文件 ---
    logger.info(f"正在保存简体中文字典到 {output_filename_cn}...")
    try:
        with open(output_filename_cn, 'w', encoding='utf-8') as f:
            json.dump(dictionary_cn, f, ensure_ascii=False, indent=4)
        logger.info(f"成功为简体中文(CN)被动技能生成 {len(dictionary_cn)} 条唯一翻译规则。")
    except Exception as e:
        logger.error(f"保存简体中文字典时发生错误: {e}")

    logger.info(f"正在保存繁体中文字典到 {output_filename_tc}...")
    try:
        with open(output_filename_tc, 'w', encoding='utf-8') as f:
            json.dump(dictionary_tc, f, ensure_ascii=False, indent=4)
        logger.info(f"成功为繁体中文(TC)被动技能生成 {len(dictionary_tc)} 条唯一翻译规则。")
    except Exception as e:
        logger.error(f"保存繁体中文字典时发生错误: {e}")

    logger.info("--- 字典生成任务报告 ---")
    logger.info(f"简体中文字典(CN)规则总数: {len(dictionary_cn)}")
    logger.info(f"繁体中文字典(TC)规则总数: {len(dictionary_tc)}")
    logger.info("--- 所有任务完成 ---")


if __name__ == "__main__":
    main()