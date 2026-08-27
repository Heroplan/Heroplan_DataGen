# -*- coding: utf-8 -*-
# 【自适应规则版】支持元素占位符，生成包含 {ElementN} 的正则规则
# - 数字提取时排除元素占位符中的序号数字
# - 中文元素匹配：仅替换核心词（如“烈火”），保留后缀“系”，实现自然区分
# - 支持排除特定短语（如 Fire Bolt, Fire Tiger）
# - 修复：捕获组编号冲突，统一为单个捕获组，确保 group(1) 始终为核心词

import re
import json
import logging
import os
from collections import defaultdict

# ========== 元素映射配置（核心词+可选“系”） ==========
ELEMENTS_EN = ['Ice', 'Nature', 'Dark', 'Fire', 'Holy']

# 每种语言的核心词列表（用于构建统一捕获组）
ELEMENTS_CORE_WORDS = {
    'CN': ['冰雪', '自然', '暗黑', '烈火', '神圣'],
    'TC': ['冰雪', '自然', '暗黑', '烈火', '神聖']
}

# 英文元素正则（用于提取）
ELEMENTS_PATTERN = re.compile(r'\b(' + '|'.join(ELEMENTS_EN) + r')\b', re.IGNORECASE)

# ---- 排除短语（其中的元素词不视为元素） ----
ELEMENTS_EXCLUDE_PHRASES = ['Fire Bolt', 'Fire Tiger']  # 可扩展
# ==================================================

# --- 全局配置 ---
ORIGINAL_FILE = '../to_translate/effects_to_translate.js'
TRANSLATED_CN_FILE = 'effects_cn.js'
TRANSLATED_TC_FILE = 'effects_tc.js'

OUTPUT_DICT_CN = '../dictionaries/effects_dict_cn.json'
OUTPUT_DICT_TC = '../dictionaries/effects_dict_tc.json'

LOG_FILE = '../../logs/effects_generate_log.log'
STRUCTURAL_DISCREPANCY_REPORT = '../../logs/effects_structural_discrepancy_report.txt'

def merge_and_save_dict(filepath, new_dict, logger=None):
    """合并并保存字典。"""
    old_dict = {}
    if os.path.exists(filepath):
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                old_dict = json.load(f)
            if logger:
                logger.info(f"已读取旧字典，含 {len(old_dict)} 条规则。")
        except Exception as e:
            if logger:
                logger.warning(f"读取旧字典失败，将直接覆盖。错误: {e}")
            old_dict = {}
    
    old_dict.update(new_dict)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(old_dict, f, ensure_ascii=False, indent=4)
    
    if logger:
        logger.info(f"合并后字典共 {len(old_dict)} 条规则，已保存至 {filepath}")

def setup_logger():
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

def get_numeric_value(s):
    if not isinstance(s, str): return s
    cleaned_s = re.sub(r'\s', '', s)
    nums = re.findall(r'-?\d+', cleaned_s)
    return int(nums[0]) if nums else 0

def normalize_text_for_regex(text):
    if not text: return ""
    escaped_text = re.escape(text)
    escaped_text = re.sub(r"['’]", "['’]?", escaped_text)
    escaped_text = re.sub(r'\\\s+', r'\\s+', escaped_text)
    escaped_text = escaped_text.replace(r'\,', r',?\s*').replace(r'\.', r'\.?\s*')
    return escaped_text

def extract_and_replace_elements(text):
    """
    提取英文元素并替换为 {ElementN}（排除短语中的元素）。
    返回 (新文本, 元素顺序列表)
    """
    if not text:
        return text, []
    
    # 找出排除短语的区间
    exclude_pattern = re.compile(r'\b(' + '|'.join(re.escape(p) for p in ELEMENTS_EXCLUDE_PHRASES) + r')\b', re.IGNORECASE)
    exclude_intervals = [(m.start(), m.end()) for m in exclude_pattern.finditer(text)]
    
    # 找到所有元素匹配，过滤掉落在排除区间内的
    matches = list(ELEMENTS_PATTERN.finditer(text))
    filtered = []
    for m in matches:
        start = m.start()
        excluded = any(es <= start < ee for es, ee in exclude_intervals)
        if not excluded:
            filtered.append(m)
    
    if not filtered:
        return text, []
    
    element_order = [m.group(0) for m in filtered]
    # 构建替换字典：位置 -> 占位符
    pos_map = {m.start(): f'{{Element{i+1}}}' for i, m in enumerate(filtered)}
    def repl(m):
        return pos_map.get(m.start(), m.group(0))
    new_text = ELEMENTS_PATTERN.sub(repl, text)
    return new_text, element_order

def create_effects_dictionary(original_data, translated_data, lang_name, logger):
    """生成带元素占位符的翻译字典（数字处理时忽略占位符内的数字）。"""
    regex_dict = {}
    number_pattern = r'([+-]?\s*\d+\s*%?)'
    split_pattern = re.compile(r'^(.*\S)\s*([\(\（][^)\）]+[\)\）])\s*([.。!?？]?)$', re.DOTALL)
    ends_with_word_char = re.compile(r'[\w\u4e00-\u9fa5]$')

    lang_code = 'CN' if '简体' in lang_name else 'TC'

    # ---- 构建中文元素正则（统一捕获组） ----
    core_words = ELEMENTS_CORE_WORDS.get(lang_code, [])
    if core_words:
        # 按长度降序，避免重叠（如“冰雪”和“冰雪系”，但核心词不会重叠，但以防万一）
        core_words_sorted = sorted(core_words, key=len, reverse=True)
        combined_pattern = f"({'|'.join(core_words_sorted)})(?:系)?"
        elem_regex = re.compile(combined_pattern)
    else:
        elem_regex = None

    original_map = {item['heroId']: item.get('effects', []) for item in original_data}
    translated_map = {item['heroId']: item.get('effects', []) for item in translated_data}

    for index in original_map:
        if index not in translated_map:
            continue
        
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

                # ---- 英文元素 -> 占位符 ----
                eng_replaced, element_order = extract_and_replace_elements(eng_text)

                if element_order and elem_regex:
                    # 提取译文中所有匹配（含捕获组）
                    matches = list(elem_regex.finditer(trans_text))
                    if len(matches) == len(element_order):
                        counter = 0
                        def repl_cn(m):
                            nonlocal counter
                            if counter < len(element_order):
                                placeholder = f'{{Element{counter+1}}}'
                                core = m.group(1)  # 现在始终为核心词
                                if core is None:
                                    logger.warning(f"[{lang_name}] 元素替换异常：捕获组为空，原文: '{eng_text}' 译文: '{trans_text}'，匹配内容: '{m.group(0)}'")
                                    return m.group(0)
                                full = m.group(0)
                                new_full = full.replace(core, placeholder, 1)  # 只替换核心词
                                counter += 1
                                return new_full
                            else:
                                return m.group(0)
                        trans_replaced = elem_regex.sub(repl_cn, trans_text)
                        if counter != len(element_order):
                            logger.warning(f"[{lang_name}] 元素替换数量不一致，预期 {len(element_order)}，实际 {counter}。原文: '{eng_text}' 译文: '{trans_text}'。降级保留原译文。")
                            trans_replaced = trans_text
                    else:
                        logger.warning(f"[{lang_name}] 元素匹配数量不一致，英文 {len(element_order)} 个，中文 {len(matches)} 个。原文: '{eng_text}' 译文: '{trans_text}'。降级保留原译文。")
                        trans_replaced = trans_text
                else:
                    eng_replaced = eng_text
                    trans_replaced = trans_text

                # ---- 句号补全 ----
                if trans_replaced and ends_with_word_char.search(trans_replaced):
                    if not trans_replaced.startswith(('(', '（')):
                        trans_replaced += "。"

                # ---- 数字处理（需排除元素占位符中的数字） ----
                # 1. 提取元素占位符，生成临时标记（不含数字）
                all_placeholders = re.findall(r'\{Element\d+\}', eng_replaced)
                seen_placeholders = []
                for p in all_placeholders:
                    if p not in seen_placeholders:
                        seen_placeholders.append(p)
                placeholder_map = {}
                for idx, p in enumerate(seen_placeholders):
                    letter = chr(ord('A') + idx)
                    placeholder_map[p] = f'__ELEM_{letter}__'
                temp_to_orig = {v: k for k, v in placeholder_map.items()}

                def apply_placeholder_map(text):
                    for orig, temp in placeholder_map.items():
                        text = text.replace(orig, temp)
                    return text

                eng_no_elem = apply_placeholder_map(eng_replaced)
                trans_no_elem = apply_placeholder_map(trans_replaced)

                # 2. 检查是否为序数词（如 "1st: "），如果是则忽略数字
                ordinal_pattern = r'^\s*\d+(st|nd|rd|th)\s*[:.]?\s*$'
                if re.fullmatch(ordinal_pattern, eng_no_elem.strip()):
                    eng_nums = []
                else:
                    eng_nums = re.findall(number_pattern, eng_no_elem)

                if eng_nums:
                    trans_nums = re.findall(number_pattern, trans_no_elem)
                    eng_num_values = [get_numeric_value(n) for n in eng_nums]
                    trans_num_values = [get_numeric_value(n) for n in trans_nums]

                    # 构建正则key（使用 eng_no_elem 分割，数字部分替换为 number_pattern，
                    # 非数字部分恢复占位符并转义）
                    eng_parts = re.split(number_pattern, eng_no_elem)
                    regex_key_parts = []
                    for k, part in enumerate(eng_parts):
                        if k % 2 == 0:  # 非数字片段
                            # 恢复临时标记为原始占位符
                            for temp, orig in temp_to_orig.items():
                                part = part.replace(temp, orig)
                            regex_key_parts.append(normalize_text_for_regex(part))
                        else:  # 数字片段
                            regex_key_parts.append(number_pattern)
                    regex_key = f"^{''.join(regex_key_parts)}$"

                    # 数字替换逻辑（基于 trans_no_elem）
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
                        template_value = re.sub(number_pattern, replacer, trans_no_elem)
                    else:
                        # 降级：数字不匹配，直接使用译文（不进行数字后向引用）
                        logger.warning(f"[{lang_name}] 降级处理：索引 {index} 的数字内容不匹配。| 原文: '{eng_replaced}' | 译文: '{trans_replaced}'")
                        template_value = trans_no_elem

                    # 恢复临时标记为原始占位符
                    for temp, orig in temp_to_orig.items():
                        template_value = template_value.replace(temp, orig)

                    regex_dict[regex_key] = template_value
                else:
                    # 无数字，直接使用带占位符的原文和译文
                    regex_key = f"^{normalize_text_for_regex(eng_replaced)}$"
                    regex_dict[regex_key] = trans_replaced

            except Exception as e:
                logger.error(f"[{lang_name}] 核心处理异常，索引 {index}：{e}")

    return regex_dict

def check_untouched_translations(logger, original_data, translated_data, lang_name):
    """检查漏翻译（比较原始文本，不受占位符影响）。"""
    logger.info(f"--- 开始检查【{lang_name}】可能漏翻译的技能效果文本 ---")
    
    untouched_entries = []
    bracket_only_entries = []
    
    original_map = {item['heroId']: item.get('passives', []) for item in original_data}
    translated_map = {item['heroId']: item.get('passives', []) for item in translated_data}
    
    def extract_outside_parentheses(text):
        return re.sub(r'\([^()]*\)|（[^（）]*）', '', text).strip()
    
    for hero_id in original_map:
        if hero_id not in translated_map:
            continue
        
        eng_effects = [extract_string_from_item(e) for e in original_map.get(hero_id, [])]
        trans_effects = [extract_string_from_item(t) for t in translated_map.get(hero_id, [])]
        
        min_len = min(len(eng_effects), len(trans_effects))
        for i in range(min_len):
            eng_text = eng_effects[i] if i < len(eng_effects) else None
            trans_text = trans_effects[i] if i < len(trans_effects) else None
            
            if eng_text and trans_text:
                eng_stripped = eng_text.strip()
                trans_stripped = trans_text.strip()
                if len(eng_stripped) > 5:
                    if eng_stripped == trans_stripped:
                        hero_name = next((item.get('name', 'N/A') for item in translated_data if item['heroId'] == hero_id), 'N/A')
                        untouched_entries.append({
                            'heroId': hero_id,
                            'name': hero_name,
                            'english': eng_stripped,
                            'translation': trans_stripped,
                        })
                    else:
                        eng_outside = extract_outside_parentheses(eng_stripped)
                        trans_outside = extract_outside_parentheses(trans_stripped)
                        if eng_outside and trans_outside and eng_outside == trans_outside:
                            hero_name = next((item.get('name', 'N/A') for item in translated_data if item['heroId'] == hero_id), 'N/A')
                            bracket_only_entries.append({
                                'heroId': hero_id,
                                'name': hero_name,
                                'english': eng_stripped,
                                'translation': trans_stripped,
                            })
    
    if untouched_entries:
        logger.warning(f"  >>> 发现 {len(untouched_entries)} 条技能效果文本完全未翻译（与原文相同）。")
        for entry in untouched_entries:
            logger.warning(f"英雄ID: {entry['heroId']}, 名称: {entry['name']}\n原文: {entry['english']}\n译文: {entry['translation']}\n")
    else:
        logger.info(f"  √ 未发现完全未翻译的条目。")
    
    if bracket_only_entries:
        logger.warning(f"  >>> 发现 {len(bracket_only_entries)} 条技能效果文本仅括号内被翻译，主句未翻译。")
        for entry in bracket_only_entries:
            logger.warning(f"英雄ID: {entry['heroId']}, 名称: {entry['name']}\n原文: {entry['english']}\n译文: {entry['translation']}\n")
    else:
        logger.info(f"  √ 未发现仅括号内翻译的条目。")

def analyze_effects_discrepancies(logger, original_data, cn_data, tc_data):
    logger.info("--- 开始生成技能(effects)的结构性差异报告 ---")
    original_map = {item['heroId']: item for item in original_data}
    cn_map = {item['heroId']: item for item in cn_data if item}
    tc_map = {item['heroId']: item for item in tc_data if item}
    
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
    if cn_data:
        check_untouched_translations(logger, original_data, cn_data, "简体中文")
    if tc_data:
        check_untouched_translations(logger, original_data, tc_data, "繁體中文")
    
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
            merge_and_save_dict(OUTPUT_DICT_CN, dictionary_cn, logger)
            logger.info(f"简体中文 字典已合并保存到: {OUTPUT_DICT_CN}")
        except Exception as e:
            logger.error(f"为 简体中文 保存字典时发生错误: {e}")
    if dictionary_tc:
        try:
            merge_and_save_dict(OUTPUT_DICT_TC, dictionary_tc, logger)
            logger.info(f"繁體中文 字典已合并保存到: {OUTPUT_DICT_TC}")
        except Exception as e:
            logger.error(f"为 繁體中文 保存字典时发生错误: {e}")
    logger.info("--- 所有任务完成 ---")

if __name__ == "__main__":
    main()
    input("\n按任意键退出...")