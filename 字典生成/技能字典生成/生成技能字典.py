# -*- coding: utf-8 -*-
# 最终优化版本 (Final Optimized Version)

import re
import json
import logging
import os
from collections import defaultdict

# --- 全局配置 ---
ORIGINAL_FILE = '../../to_translate/effects_to_translate.js'
TRANSLATED_CN_FILE = 'effects_translated_cn.js'
TRANSLATED_TC_FILE = 'effects_translated_tc.js'

OUTPUT_DICT_CN = '../../dictionaries/effects_dict_cn.json'
OUTPUT_DICT_TC = '../../dictionaries/effects_dict_tc.json'

LOG_FILE = '../../logs/generate_dict.log'
STRUCTURAL_DISCREPANCY_REPORT = '../../logs/structural_discrepancy_report.txt'


def setup_logger():
    """配置日志记录器，确保每次运行都是全新的日志。"""
    logger = logging.getLogger('DictionaryGenerator')
    logger.setLevel(logging.INFO)
    # 清除旧的 handlers 防止重复输出
    if logger.hasHandlers():
        logger.handlers.clear()

    # 每次运行时删除旧的日志文件
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
    """健壮地读取 .js 文件并解析其中的JSON数组。"""
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

def extract_string_from_effect(effect_item):
    """从效果条目中安全地提取字符串。"""
    if isinstance(effect_item, str):
        return effect_item
    if isinstance(effect_item, dict) and effect_item:
        return next(iter(effect_item.values()), None)
    return None

def get_numeric_value(s):
    """从字符串中提取核心整数值用于对比，会忽略空格。"""
    if not isinstance(s, str): return s
    # 清理字符串，移除空格，以便正确提取数字
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

def create_regex_dictionary(original_effects, translated_effects, lang_name, logger):
    """
    【核心函数】使用最优的 defaultdict 映射法生成正则表达式字典。
    """
    regex_dict = {}
    # 匹配数字的模式，允许前后有空格和百分号
    number_pattern = r'([+-]?\s*\d+\s*%?)'
    
    original_map = {item['originalIndex']: item.get('effects', []) for item in original_effects}
    translated_map = {item['originalIndex']: item.get('effects', []) for item in translated_effects}

    for index in original_map:
        if index not in translated_map: continue
        
        eng_effects = [text for e in original_map.get(index, []) if (text := extract_string_from_effect(e)) and text.strip()]
        chn_effects = [text for c in translated_map.get(index, []) if (text := extract_string_from_effect(c)) and text.strip()]

        # 结构性差异已由 `analyze_structural_discrepancies` 报告，这里直接跳过即可
        if len(eng_effects) != len(chn_effects):
            continue

        for eng_text, chn_text in zip(eng_effects, chn_effects):
            eng_nums = re.findall(number_pattern, eng_text)
            
            # 特殊豁免规则：对于 "1st:", "2nd." 等简单序数词，不进行参数化，避免过度处理
            ordinal_pattern = r'^\s*\d+(st|nd|rd|th)\s*[:.]?\s*$'
            if re.fullmatch(ordinal_pattern, eng_text):
                eng_nums = [] # 强制视作无数字处理

            # --- 参数化处理逻辑 ---
            if eng_nums:
                chn_nums = re.findall(number_pattern, chn_text)
                eng_num_values = [get_numeric_value(n) for n in eng_nums]
                chn_num_values = [get_numeric_value(n) for n in chn_nums]

                # 1. 生成正则表达式的 key
                eng_parts = re.split(number_pattern, eng_text)
                regex_key_parts = [normalize_text_for_regex(p) if i % 2 == 0 else number_pattern for i, p in enumerate(eng_parts)]
                regex_key = f"^{''.join(regex_key_parts)}$"
                
                # 2. 默认使用字面值翻译，如果参数化成功再覆盖
                template_value = chn_text

                # 3. 检查是否满足参数化条件：数字数量相等，且数字集合（排序后）相同
                if len(eng_nums) == len(chn_nums) and sorted(eng_num_values) == sorted(chn_num_values):
                    # --- 最优算法核心 ---
                    # 3a. 为英文数字建立一个基于 (值, 出现次数) 的映射，指向其捕获组索引
                    eng_num_counts = defaultdict(int)
                    eng_num_to_backreference = {}
                    for i, num_str in enumerate(eng_nums):
                        num_val = get_numeric_value(num_str)
                        # key 是一个元组: (数字的值, 这个值是第几次出现)
                        key = (num_val, eng_num_counts[num_val])
                        # value 是反向引用索引 (从1开始)
                        eng_num_to_backreference[key] = i + 1
                        eng_num_counts[num_val] += 1

                    # 3b. 构建译文模板，使用上面创建的映射来查找正确的捕获组
                    chn_parts = re.split(number_pattern, chn_text)
                    template_value_parts = []
                    trans_num_counts = defaultdict(int)
                    num_idx_trans = 0
                    for part in chn_parts:
                        if num_idx_trans < len(chn_nums) and part == chn_nums[num_idx_trans]:
                            current_num_str = chn_nums[num_idx_trans]
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
                     logger.warning(f"[{lang_name}] 降级处理：索引 {index} 的数字内容不匹配，将使用字面值翻译。| 原文: '{eng_text}' | 译文: '{chn_text}'")

                if regex_key not in regex_dict:
                    regex_dict[regex_key] = template_value
            
            # --- 静态文本处理逻辑 ---
            else:
                regex_key = f"^{normalize_text_for_regex(eng_text)}$"
                if regex_key not in regex_dict:
                    regex_dict[regex_key] = chn_text
            
    return regex_dict

def analyze_structural_discrepancies(logger, original_data, cn_data, tc_data):
    """生成一份报告，列出因效果行数不匹配而被跳过的条目。"""
    logger.info("--- 开始生成结构性差异报告 ---")
    original_map = {item['originalIndex']: item for item in original_data}
    cn_map = {item['originalIndex']: item for item in cn_data if item}
    tc_map = {item['originalIndex']: item for item in tc_data if item}
    
    report_lines = []
    discrepancy_count = 0

    for index in sorted(original_map.keys()):
        eng_item = original_map.get(index, {})
        cn_item = cn_map.get(index)
        tc_item = tc_map.get(index)

        # 如果翻译条目本身就不存在，也算作一种差异
        if not cn_item or not tc_item:
            if not (cn_item and tc_item): # 只要有一个不存在
                discrepancy_count += 1
                report_lines.append(f"--- Index: {index} ---\n")
                report_lines.append(f"  技能(EN): {eng_item.get('skill', 'N/A')}\n")
                report_lines.append(f"  问题: 翻译文件中缺少此索引对应的条目。\n")
                report_lines.append(f"    - 简体中文: {'存在' if cn_item else '缺失!'}\n")
                report_lines.append(f"    - 繁體中文: {'存在' if tc_item else '缺失!'}\n\n")
            continue

        eng_effects = [text for e in eng_item.get('effects', []) if (text := extract_string_from_effect(e)) and text.strip()]
        cn_effects = [text for c in cn_item.get('effects', []) if (text := extract_string_from_effect(c)) and text.strip()]
        tc_effects = [text for t in tc_item.get('effects', []) if (text := extract_string_from_effect(t)) and text.strip()]

        len_eng, len_cn, len_tc = len(eng_effects), len(cn_effects), len(tc_effects)

        if len_eng != len_cn or len_eng != len_tc:
            discrepancy_count += 1
            report_lines.append(f"--- Index: {index} ---\n")
            report_lines.append(f"  技能(CN): {cn_item.get('skill', 'N/A')}\n")
            report_lines.append(f"  技能(TC): {tc_item.get('skill', 'N/A')}\n")
            report_lines.append(f"  问题: 效果列表的有效行数与英文原文不符。\n")
            report_lines.append(f"    - 英文行数: {len_eng}\n")
            report_lines.append(f"    - 简体行数: {len_cn} {'(不匹配!)' if len_eng != len_cn else ''}\n")
            report_lines.append(f"    - 繁體行数: {len_tc} {'(不匹配!)' if len_eng != len_tc else ''}\n\n")

    if report_lines:
        try:
            with open(STRUCTURAL_DISCREPANCY_REPORT, 'w', encoding='utf-8') as f:
                f.writelines(report_lines)
            logger.info(f"成功！结构性差异报告已保存到 {STRUCTURAL_DISCREPANCY_REPORT}，发现 {discrepancy_count} 个问题条目。请检查此文件以修正数据。")
        except Exception as e:
            logger.error(f"保存结构性差异报告时出错: {e}")
    else:
        logger.info("恭喜！未发现结构性差异，所有条目的效果行数均匹配。")


def main():
    """主执行函数，协调所有操作。"""
    logger = setup_logger()
    logger.info("--- 开始生成多语言正则表达式字典及分析报告 ---")
    
    original_data = parse_js_variable(ORIGINAL_FILE, logger)
    cn_data = parse_js_variable(TRANSLATED_CN_FILE, logger)
    tc_data = parse_js_variable(TRANSLATED_TC_FILE, logger)

    if not original_data:
        logger.error("因英文源文件解析错误，无法继续。")
        return

    # --- 1. 执行结构性差异分析 (前提是翻译文件都存在) ---
    if cn_data and tc_data:
        analyze_structural_discrepancies(logger, original_data, cn_data, tc_data)
    else:
        logger.warning("一个或两个翻译文件缺失，跳过结构性差异分析。")

    # --- 2. 分别生成简体和繁体字典 ---
    language_pairs = [
        ("简体中文", cn_data, OUTPUT_DICT_CN),
        ("繁體中文", tc_data, OUTPUT_DICT_TC)
    ]
    
    for lang_name, translated_data, output_filename in language_pairs:
        logger.info(f"--- 开始处理 {lang_name} 字典生成 ---")
        if not translated_data:
            logger.warning(f"由于未能加载 {lang_name} 数据，跳过字典生成。")
            continue
        
        dictionary = create_regex_dictionary(original_data, translated_data, lang_name, logger)
        try:
            with open(output_filename, 'w', encoding='utf-8') as f:
                json.dump(dictionary, f, ensure_ascii=False, indent=4)
            logger.info(f"成功为 {lang_name} 生成 {len(dictionary)} 条唯一翻译规则到 {output_filename}。")
        except Exception as e:
            logger.error(f"为 {lang_name} 保存字典时发生错误: {e}")
            
    logger.info("--- 所有任务完成 ---")

if __name__ == "__main__":
    main()