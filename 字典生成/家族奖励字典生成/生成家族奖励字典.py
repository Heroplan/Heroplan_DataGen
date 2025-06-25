# -*- coding: utf-8 -*-
# 最终优化版本 (Final Optimized Version for Family Bonus)

import re
import json
import logging
from collections import defaultdict

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

def generate_single_dictionary(original_data, translated_data, lang_code, logger):
    """
    【最优解】从原文和一种译文数据中生成 {regex_key: translation_template} 字典。
    统一了所有数字不匹配情况的降级策略，优先保证规则的准确性和安全性。
    """
    regex_dict = {}
    number_pattern = r'([+-]?\d+\s*%?)'
    
    original_map = {item['originalIndex']: item.get('bonus', []) for item in original_data}
    translated_map = {item['originalIndex']: item.get('bonus', []) for item in translated_data}

    for index in original_map:
        if index not in translated_map:
            continue
        
        eng_bonus_list = original_map.get(index, [])
        trans_bonus_list = translated_map.get(index, [])

        if len(eng_bonus_list) != len(trans_bonus_list):
            logger.warning(f"警告 [{lang_code}]：索引 {index} 的家族奖励数量不匹配（英文 {len(eng_bonus_list)} vs 译文 {len(trans_bonus_list)}），已跳过。")
            continue

        for eng_text, trans_text in zip(eng_bonus_list, trans_bonus_list):
            if not eng_text or not trans_text:
                continue
            
            try:
                eng_nums = re.findall(number_pattern, eng_text)

                if eng_nums:
                    trans_nums = re.findall(number_pattern, trans_text)
                    
                    # --- 核心逻辑：先构建参数化key，然后尝试填充最优的value ---

                    # 1. 无论数字是否匹配，都先构建参数化的正则表达式 Key
                    eng_parts = re.split(number_pattern, eng_text)
                    regex_key_parts = [normalize_text_for_regex(p) if i % 2 == 0 else number_pattern for i, p in enumerate(eng_parts)]
                    regex_key = f"^{''.join(regex_key_parts)}$"

                    # 2. 默认使用字面值(静态规则)作为翻译模板，这是最安全的降级方案
                    template_value = trans_text
                    
                    # 3. 检查是否满足最优参数化条件
                    eng_num_values = [get_numeric_value(n) for n in eng_nums]
                    trans_num_values = [get_numeric_value(n) for n in trans_nums]
                    
                    if len(eng_nums) == len(trans_nums) and sorted(eng_num_values) == sorted(trans_num_values):
                        # --- 仅在数字完全匹配时，才执行智能映射，覆盖默认的 template_value ---
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
                    
                    # --- 移除了“强制参数化”逻辑，不满足条件时自动使用上面的默认值 ---
                    elif trans_nums: # 如果译文中有数字但不满足条件，则记录警告
                        logger.warning(f"[{lang_code}] 降级处理：索引 {index} 的数字内容不匹配，将使用字面值翻译。| 原文: '{eng_text}' | 译文: '{trans_text}'")

                    if regex_key not in regex_dict:
                        regex_dict[regex_key] = template_value

                else: # 如果原文无数字，则生成纯静态规则
                    regex_key = f"^{normalize_text_for_regex(eng_text)}$"
                    if regex_key not in regex_dict:
                        regex_dict[regex_key] = trans_text
            
            except Exception as e:
                logger.error(f"严重错误 [{lang_code}]：索引 {index} 生成规则时发生意外: {e} | 原文: {eng_text}")
                continue
            
    return regex_dict

def main():
    """主函数，用于编排双语家族奖励字典的生成和保存。"""
    logger = setup_logger('../../logs/families_bonus_generate_log.log', 'FamiliesBonusGenerator')
    logger.info("--- 开始生成家族奖励（Family Bonus）的双语正则表达式字典 ---")
    
    original_file = '../../to_translate/families_bonus_to_translate.js'
    translated_file_cn = 'families_bonus_translated_cn.js'
    translated_file_tc = 'families_bonus_translated_tc.js'
    output_filename_cn = '../../dictionaries/families_bonus_dict_cn.json'
    output_filename_tc = '../../dictionaries/families_bonus_dict_tc.json'
    
    logger.info(f"正在解析源文件: {original_file}")
    original_data = parse_js_variable(original_file, logger)
    
    logger.info(f"正在解析简体中文翻译文件: {translated_file_cn}")
    translated_data_cn = parse_js_variable(translated_file_cn, logger)

    logger.info(f"正在解析繁体中文翻译文件: {translated_file_tc}")
    translated_data_tc = parse_js_variable(translated_file_tc, logger)

    if not original_data or not translated_data_cn or not translated_data_tc:
        logger.error("因一个或多个文件解析错误，无法继续。")
        return

    logger.info("--- 正在为简体中文(CN)生成字典 ---")
    dictionary_cn = generate_single_dictionary(original_data, translated_data_cn, 'CN', logger)
    
    logger.info("--- 正在为繁体中文(TC)生成字典 ---")
    dictionary_tc = generate_single_dictionary(original_data, translated_data_tc, 'TC', logger)
    
    logger.info(f"正在保存简体中文字典到 {output_filename_cn}...")
    try:
        with open(output_filename_cn, 'w', encoding='utf-8') as f:
            json.dump(dictionary_cn, f, ensure_ascii=False, indent=4)
        logger.info(f"成功为简体中文(CN)家族奖励生成 {len(dictionary_cn)} 条唯一翻译规则。")
    except Exception as e:
        logger.error(f"保存简体中文字典时发生错误: {e}")

    logger.info(f"正在保存繁体中文字典到 {output_filename_tc}...")
    try:
        with open(output_filename_tc, 'w', encoding='utf-8') as f:
            json.dump(dictionary_tc, f, ensure_ascii=False, indent=4)
        logger.info(f"成功为繁体中文(TC)家族奖励生成 {len(dictionary_tc)} 条唯一翻译规则。")
    except Exception as e:
        logger.error(f"保存繁体中文字典时发生错误: {e}")

    logger.info("--- 字典生成任务报告 ---")
    logger.info(f"简体中文字典(CN)规则总数: {len(dictionary_cn)}")
    logger.info(f"繁体中文字典(TC)规则总数: {len(dictionary_tc)}")
    logger.info("--- 字典生成完成 ---")

if __name__ == "__main__":
    main()