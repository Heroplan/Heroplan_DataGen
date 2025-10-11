# -*- coding: utf-8 -*-
# 【最终版】采用新规则：仅当结尾为“非标点符号”时才补全句号

import re
import json
import logging
import os
from collections import defaultdict

# --- 全局配置 ---
ORIGINAL_FILE = '../to_translate/effects_to_translate.js'
TRANSLATED_CN_FILE = 'effects_cn.js'
TRANSLATED_TC_FILE = 'effects_tc.js'

OUTPUT_DICT_CN = '../dictionaries/effects_dict_cn.json'
OUTPUT_DICT_TC = '../dictionaries/effects_dict_tc.json'

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
    split_pattern = re.compile(r'^(.*\S)\s*([\(\（][^)\）]+[\)\）])\s*([.。!?？]?)$', re.DOTALL)
    
    # 正则表达式，用于匹配结尾是否为“非标点”（字母、数字、汉字）
    ends_with_word_char = re.compile(r'[\w\u4e00-\u9fa5]$')

    original_map = {item['originalIndex']: item.get('effects', []) for item in original_data}
    translated_map = {item['originalIndex']: item.get('effects', []) for item in translated_data}

    for index in original_map:
        if index not in translated_map: continue
        
        raw_eng_effects = [text for e in original_map.get(index, []) if (text := extract_string_from_item(e)) and text.strip()]
        raw_trans_effects = [text for t in translated_map.get(index, []) if (text := extract_string_from_item(t)) and text.strip()]

        if len(raw_eng_effects) != len(raw_trans_effects):
            continue

        final_eng_effects = []
        final_trans_effects = []
        for eng_text, trans_text in zip(raw_eng_effects, raw_trans_effects):
            eng_match = split_pattern.match(eng_text.strip())
            trans_match = split_pattern.match(trans_text.strip())

            if eng_match and trans_match:
                final_eng_effects.append(eng_match.group(1).strip())
                final_eng_effects.append(eng_match.group(2).strip())
                final_trans_effects.append(trans_match.group(1).strip())
                final_trans_effects.append(trans_match.group(2).strip())
            else:
                final_eng_effects.append(eng_text)
                final_trans_effects.append(trans_text)
        
        for eng_text, trans_text in zip(final_eng_effects, final_trans_effects):
            try:
                eng_text = eng_text.strip()
                trans_text = trans_text.strip()

                # 【核心修正】使用正则表达式判断是否需要补全句号
                if trans_text and ends_with_word_char.search(trans_text):
                    if not trans_text.startswith(('(', '（')):
                        trans_text += "。"

                eng_nums = re.findall(number_pattern, eng_text)
                
                ordinal_pattern = r'^\s*\d+(st|nd|rd|th)\s*[:.]?\s*$'
                if re.fullmatch(ordinal_pattern, eng_text.strip()):
                    eng_nums = []

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
                logger.error(f"[{lang_name}] 核心处理异常，索引 {index}：{e}")
            
    return regex_dict

def analyze_effects_discrepancies(logger, original_data, cn_data, tc_data):
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
            if not (cn_item and tc_item):
                discrepancy_count += 1
                report_lines.append(f"--- Index: {index} ---\n")
                report_lines.append(f"  技能(EN): {eng_item.get('name', 'N/A')}\n")
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
            report_lines.append(f"  技能(CN): {cn_item.get('name', 'N/A')}\n")
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
    logger.info("--- 开始处理 简体中文 字典生成 ---")
    dictionary_cn = {}
    if cn_data:
        dictionary_cn = create_effects_dictionary(original_data, cn_data, "简体中文", logger)
        logger.info(f"为 简体中文 生成了 {len(dictionary_cn)} 条唯一翻译规则。")
    else:
        logger.warning("由于未能加载 简体中文 数据，跳过字典生成。")
    logger.info("--- 开始处理 繁體中文 字典生成 ---")
    dictionary_tc = {}
    if tc_data:
        dictionary_tc = create_effects_dictionary(original_data, tc_data, "繁體中文", logger)
        logger.info(f"为 繁體中文 生成了 {len(dictionary_tc)} 条唯一翻译规则。")
    else:
        logger.warning("由于未能加载 繁體中文 数据，跳过字典生成。")
    if dictionary_cn and dictionary_tc:
        if len(dictionary_cn) != len(dictionary_tc):
            logger.warning(f"!!! 字典规则数量不一致 (CN: {len(dictionary_cn)}, TC: {len(dictionary_tc)})。开始对比差异...")
            cn_keys = set(dictionary_cn.keys())
            tc_keys = set(dictionary_tc.keys())
            extra_in_cn = cn_keys - tc_keys
            if extra_in_cn:
                logger.info("--- ▼ 仅存在于【简体中文】字典的规则 ---")
                for key in extra_in_cn:
                    logger.info(f"  - Key: {key}")
                    logger.info(f"    Value: {dictionary_cn[key]}")
            extra_in_tc = tc_keys - cn_keys
            if extra_in_tc:
                logger.info("--- ▼ 仅存在于【繁體中文】字典的规则 ---")
                for key in extra_in_tc:
                    logger.info(f"  - Key: {key}")
                    logger.info(f"    Value: {dictionary_tc[key]}")
            logger.warning("!!! 对比完成。")
        else:
            logger.info("✓ 字典规则数量一致。")
    logger.info("--- 开始写入字典文件 ---")
    if dictionary_cn:
        try:
            with open(OUTPUT_DICT_CN, 'w', encoding='utf-8') as f:
                json.dump(dictionary_cn, f, ensure_ascii=False, indent=4)
            logger.info(f"简体中文 字典已成功保存到: {OUTPUT_DICT_CN}")
        except Exception as e:
            logger.error(f"为 简体中文 保存字典时发生错误: {e}")
    if dictionary_tc:
        try:
            with open(OUTPUT_DICT_TC, 'w', encoding='utf-8') as f:
                json.dump(dictionary_tc, f, ensure_ascii=False, indent=4)
            logger.info(f"繁體中文 字典已成功保存到: {OUTPUT_DICT_TC}")
        except Exception as e:
            logger.error(f"为 繁體中文 保存字典时发生错误: {e}")
    logger.info("--- 所有任务完成 ---")

if __name__ == "__main__":
    main()
    input("\n按任意键退出...")