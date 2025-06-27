# -*- coding: utf-8 -*-
# 最终正确版本 (用于技能 Effects) - 已添加序数词豁免规则

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

LOG_FILE = '../../logs/effects_generate_log.log'
STRUCTURAL_DISCREPANCY_REPORT = '../../logs/effects_structural_discrepancy_report.txt'


def setup_logger():
    """配置日志记录器。"""
    logger = logging.getLogger('EffectsDictionaryGenerator')
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

def extract_string_from_item(item):
    """从条目中安全地提取字符串。"""
    if isinstance(item, str):
        return item
    if isinstance(item, dict) and item:
        return next(iter(item.values()), None)
    return None

def get_numeric_value(s):
    """从字符串中提取核心整数值用于对比，会忽略所有空白字符。"""
    if not isinstance(s, str): return s
    cleaned_s = re.sub(r'\s', '', s)
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

def create_effects_dictionary(original_data, translated_data, lang_name, logger):
    """
    【核心函数】为技能(effects)生成健壮的翻译字典。
    """
    regex_dict = {}
    number_pattern = r'([+-]?\s*\d+\s*%?)'
    
    original_map = {item['originalIndex']: item.get('effects', []) for item in original_data}
    translated_map = {item['originalIndex']: item.get('effects', []) for item in translated_data}

    for index in original_map:
        if index not in translated_map: continue
        
        eng_effects = [text for e in original_map.get(index, []) if (text := extract_string_from_item(e)) and text.strip()]
        trans_effects = [text for t in translated_map.get(index, []) if (text := extract_string_from_item(t)) and text.strip()]

        if len(eng_effects) != len(trans_effects): continue

        for eng_text, trans_text in zip(eng_effects, trans_effects):
            try:
                eng_nums = re.findall(number_pattern, eng_text)
                
                # #######################################################
                # ### vvv 新增：序数词豁免规则 vvv ###
                # #######################################################
                # 定义一个匹配 "1st", "2nd", "3rd", "4th" 等格式的正则表达式
                ordinal_pattern = r'^\s*\d+(st|nd|rd|th)\s*[:.]?\s*$'
                # 如果整个英文字符串匹配这个格式，则清空找到的数字，强制其走静态文本逻辑
                if re.fullmatch(ordinal_pattern, eng_text.strip()):
                    eng_nums = []
                # #######################################################
                # ### ^^^ 新增：序数词豁免规则 ^^^ ###
                # #######################################################

                if eng_nums:
                    trans_nums = re.findall(number_pattern, trans_text)
                    eng_num_values = [get_numeric_value(n) for n in eng_nums]
                    trans_num_values = [get_numeric_value(n) for n in trans_nums]

                    eng_parts = re.split(number_pattern, eng_text)
                    regex_key_parts = [normalize_text_for_regex(p) if k % 2 == 0 else number_pattern for k, p in enumerate(eng_parts)]
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

# analyze_effects_discrepancies 和 main 函数与上一版相同，此处省略以保持简洁...
def analyze_effects_discrepancies(logger, original_data, cn_data, tc_data):
    """生成一份报告，列出因效果行数不匹配而被跳过的条目。"""
    logger.info("--- 开始生成技能(effects)的结构性差异报告 ---")
    original_map = {item['originalIndex']: item for item in original_data}
    cn_map = {item['originalIndex']: item for item in cn_data if item}
    tc_map = {item['originalIndex']: item for item in tc_data if item}
    
    report_lines = []
    discrepancy_count = 0

    for index in sorted(original_map.keys()):
        eng_item = original_map.get(index, {})
        cn_item = cn_map.get(index)
        tc_item = tc_map.get(index)

        if not cn_item or not tc_item:
            if not (cn_item and tc_item): # 只要有一个不存在
                discrepancy_count += 1
                report_lines.append(f"--- Index: {index} ---\n")
                report_lines.append(f"  技能(EN): {eng_item.get('skill', 'N/A')}\n")
                report_lines.append(f"  问题: 翻译文件中缺少此索引对应的条目。\n")
                report_lines.append(f"    - 简体中文: {'存在' if cn_item else '缺失!'}\n")
                report_lines.append(f"    - 繁體中文: {'存在' if tc_item else '缺失!'}\n\n")
            continue

        eng_effects = [text for e in eng_item.get('effects', []) if (text := extract_string_from_item(e)) and text.strip()]
        cn_effects = [text for c in cn_item.get('effects', []) if (text := extract_string_from_item(c)) and text.strip()]
        tc_effects = [text for t in tc_item.get('effects', []) if (text := extract_string_from_item(t)) and text.strip()]

        len_eng, len_cn, len_tc = len(eng_effects), len(cn_effects), len(tc_effects)

        if len_eng != len_cn or len_eng != len_tc:
            discrepancy_count += 1
            report_lines.append(f"--- Index: {index} ---\n")
            report_lines.append(f"  技能(CN): {cn_item.get('skill', 'N/A')}\n")
            report_lines.append(f"  问题: 效果列表的有效行数与英文原文不符。\n")
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
        logger.info("恭喜！未发现结构性差异，所有条目的效果行数均匹配。")

def main():
    logger = setup_logger()
    logger.info("--- 开始生成技能（Effects）的多语言正则表达式字典 ---")
    
    original_data = parse_js_variable(ORIGINAL_FILE, logger)
    cn_data = parse_js_variable(TRANSLATED_CN_FILE, logger)
    tc_data = parse_js_variable(TRANSLATED_TC_FILE, logger)

    if not original_data:
        logger.error("因英文源文件解析错误，无法继续。")
        return

    if cn_data and tc_data:
        analyze_effects_discrepancies(logger, original_data, cn_data, tc_data)

    language_pairs = [
        ("简体中文", cn_data, OUTPUT_DICT_CN),
        ("繁體中文", tc_data, OUTPUT_DICT_TC)
    ]
    
    for lang_name, translated_data, output_filename in language_pairs:
        logger.info(f"--- 开始处理 {lang_name} 字典生成 ---")
        if not translated_data:
            logger.warning(f"由于未能加载 {lang_name} 数据，跳过字典生成。")
            continue
        
        dictionary = create_effects_dictionary(original_data, translated_data, lang_name, logger)
        try:
            with open(output_filename, 'w', encoding='utf-8') as f:
                json.dump(dictionary, f, ensure_ascii=False, indent=4)
            logger.info(f"成功为 {lang_name} 生成 {len(dictionary)} 条唯一翻译规则到 {output_filename}。")
        except Exception as e:
            logger.error(f"为 {lang_name} 保存字典时发生错误: {e}")
            
    logger.info("--- 所有任务完成 ---")

if __name__ == "__main__":
    main()