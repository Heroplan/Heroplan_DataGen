# -*- coding: utf-8 -*-
# 【自适应规则版】支持元素占位符，按出现顺序生成 {ElementN}
# 修改：元素映射改为核心词（不带"系"），并添加排除短语，与生成字典保持一致

import re
import json
import logging
import copy
import os

# ========== 元素映射配置（使用核心词，不带"系"） ==========
ELEMENTS_EN = ['Ice', 'Nature', 'Dark', 'Fire', 'Holy']
ELEMENTS_TRANS = {
    'CN': {
        'ice': '冰雪',
        'nature': '自然',
        'dark': '暗黑',
        'fire': '烈火',
        'holy': '神圣'
    },
    'TC': {
        'ice': '冰雪',
        'nature': '自然',
        'dark': '暗黑',
        'fire': '烈火',
        'holy': '神聖'
    }
}
ELEMENTS_PATTERN = re.compile(r'\b(' + '|'.join(ELEMENTS_EN) + r')\b', re.IGNORECASE)

# ---- 排除短语（其中的元素词不视为元素，不生成占位符） ----
ELEMENTS_EXCLUDE_PHRASES = ['Fire Bolt', 'Fire Tiger']  # 与生成字典保持一致
# =================================

def setup_logger(log_file_name, logger_name):
    """配置日志记录器。"""
    logger = logging.getLogger(logger_name)
    logger.setLevel(logging.INFO)
    if logger.hasHandlers():
        logger.handlers.clear()
    
    log_dir = os.path.dirname(log_file_name)
    if log_dir and not os.path.exists(log_dir):
        os.makedirs(log_dir)

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

def extract_and_replace_elements(text, lang, reverse=False, element_order=None):
    """
    提取文本中的元素并替换为占位符（或反向替换）。
    - reverse=False: 将英文元素替换为 {ElementN}（排除短语中的元素），返回 (新文本, 元素顺序列表)
    - reverse=True:  将占位符替换为对应的中文核心词（不带"系"），需提供 element_order
    """
    if not text:
        return text, []
    if reverse:
        # 反向替换：将 {ElementN} 替换为对应中文核心词
        if not element_order:
            return text, []
        lang_map = ELEMENTS_TRANS.get(lang, {})
        placeholder_pattern = re.compile(r'\{Element(\d+)\}')
        def repl(m):
            num = int(m.group(1))
            if 1 <= num <= len(element_order):
                en_word = element_order[num-1]  # 原始英文词
                cn_word = lang_map.get(en_word.lower(), en_word)  # 核心词
                return cn_word
            return m.group(0)
        new_text = placeholder_pattern.sub(repl, text)
        return new_text, element_order
    else:
        # 正向提取：找出所有元素匹配，但过滤掉排除短语中的
        exclude_pattern = re.compile(r'\b(' + '|'.join(re.escape(p) for p in ELEMENTS_EXCLUDE_PHRASES) + r')\b', re.IGNORECASE)
        exclude_intervals = [(m.start(), m.end()) for m in exclude_pattern.finditer(text)]
        
        matches = list(ELEMENTS_PATTERN.finditer(text))
        filtered = []
        for m in matches:
            start = m.start()
            excluded = any(es <= start < ee for es, ee in exclude_intervals)
            if not excluded:
                filtered.append(m)
        
        if not filtered:
            return text, []
        
        element_order = [m.group(0) for m in filtered]  # 按出现顺序
        # 构建位置->占位符映射
        pos_map = {m.start(): f'{{Element{i+1}}}' for i, m in enumerate(filtered)}
        def repl(m):
            return pos_map.get(m.start(), m.group(0))
        new_text = ELEMENTS_PATTERN.sub(repl, text)
        return new_text, element_order

class Translator:
    """封装翻译逻辑，加载字典、执行翻译和进行最终的格式美化。"""
    def __init__(self, dictionary_path, logger, language_code):
        self.logger = logger
        self.language_code = language_code
        self.dictionary = None
        if dictionary_path:
            self.dictionary = self._load_dictionary(dictionary_path)
        
        if self.dictionary:
            self.compiled_rules = []
            for key, value in self.dictionary.items():
                try:
                    self.compiled_rules.append((re.compile(key, re.DOTALL), value))
                except re.error as e:
                    self.logger.warning(f"警告 [{self.language_code}]: 无法编译正则表达式 '{key}': {e}")
            self.logger.info(f"翻译器 [{self.language_code}] 已初始化，共加载 {len(self.compiled_rules)} 条规则。")
        else:
            self.compiled_rules = []

    def _load_dictionary(self, file_path):
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            self.logger.error(f"加载字典 {file_path} 时出错: {e}")
        return None

    @staticmethod
    def format_spacing(text):
        if not text: return text
        text = text.strip()
        text = re.sub(r'(\d+)([xX])', r'\1\2 ', text)
        text = re.sub(r'([+-]?\d+%?)(?![xX])', r' \1 ', text)
        text = re.sub(r'\s{2,}', ' ', text)
        text = re.sub(r'\s([.:;!?%：，。！？\)])', r'\1', text)
        text = re.sub(r'([\(（])\s', r'\1', text)
        text = re.sub(r'([^\d%])\s+([,，])', r'\1\2', text)
        text = re.sub(r'([.。！？])\1+', r'\1', text)
        text = re.sub(r'(\d)\s*-\s*(\d)', r'\1 - \2', text)
        return text.strip()

    def translate(self, english_text):
        """翻译单个字符串，支持元素占位符自适应。"""
        if not isinstance(english_text, str) or not self.compiled_rules:
            return None
        english_text_cleaned = english_text.strip()
        if not english_text_cleaned:
            return None

        # 1. 提取元素并替换为占位符（排除短语）
        text_with_placeholders, element_order = extract_and_replace_elements(
            english_text_cleaned, self.language_code, reverse=False
        )

        # 2. 用字典翻译（带占位符的文本）
        matched = False
        for compiled_regex, template in self.compiled_rules:
            if compiled_regex.fullmatch(text_with_placeholders):
                raw_result = compiled_regex.sub(template, text_with_placeholders)
                matched = True
                break
        if not matched:
            # 如果没有匹配，尝试用原文本（不带占位符）匹配（兼容旧字典）
            for compiled_regex, template in self.compiled_rules:
                if compiled_regex.fullmatch(english_text_cleaned):
                    raw_result = compiled_regex.sub(template, english_text_cleaned)
                    matched = True
                    break
        if not matched:
            return None

        # 3. 如果存在元素占位符，将其替换回对应的中文核心词
        if element_order:
            final_result, _ = extract_and_replace_elements(
                raw_result, self.language_code, reverse=True, element_order=element_order
            )
        else:
            final_result = raw_result

        # 4. 格式美化
        final_result = Translator.format_spacing(final_result)
        return final_result

def parse_js_variable(file_path, logger, is_source=True):
    """读取并解析 .js 文件。"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        json_start = content.find('[')
        json_end = content.rfind(']')
        if json_start == -1 or json_end == -1:
            raise ValueError("未在文件中找到有效的 '[]'。")
        json_string = content[json_start : json_end + 1]
        data = json.loads(json_string)

        if is_source:
            prefix = content[:json_start]
            suffix = content[json_end + 1:]
            return data, prefix, suffix
        else:
            return data
    except Exception as e:
        logger.error(f"解析文件 {file_path} 时出错: {e}")
        if is_source:
            return None, None, None
        else:
            return None

def extract_string_from_item(item):
    """从效果条目中智能提取字符串。"""
    if isinstance(item, str): return item
    if isinstance(item, dict) and item: return next(iter(item.values()), None)
    return None

def expand_passive_list(raw_passives):
    """展开被动技能列表（通用函数）。"""
    expanded_list = []
    split_pattern = r'\s+(?=\*(?!\*))'
    star_header_pattern = re.compile(r'^[\s\*]+$')

    for item in raw_passives:
        text = extract_string_from_item(item)
        if not text:
            continue
        cleaned_text = text.strip("'\" ")
        if not cleaned_text:
            continue

        if '*' in cleaned_text and star_header_pattern.match(cleaned_text):
            expanded_list.append(cleaned_text)
        else:
            split_parts = [part.strip() for part in re.split(split_pattern, cleaned_text) if part.strip()]
            expanded_list.extend(split_parts)
    return expanded_list

def extract_outside_parentheses(text):
    """去除括号及其内部内容，返回括号外的部分（主句）。"""
    return re.sub(r'\([^()]*\)|（[^（）]*）', '', text).strip()

def check_untouched_translations(logger, original_data, translated_data, field_name, lang_name):
    """检查漏翻译（已包含元素占位符处理，但比较时使用原始文本，故无需修改）。"""
    logger.info(f"--- 开始检查【{lang_name}】可能漏翻译的 {field_name} 条目 ---")
    untouched_entries = []
    main_untouched = []
    paren_untouched = []

    MIN_LENGTH = 3
    split_pattern = re.compile(r'^(.*\S)\s*([\(\（][^)\）]+[\)\）])\s*([.。!?？]?)$', re.DOTALL)

    for idx, orig_item in enumerate(original_data):
        if field_name not in orig_item:
            continue
        if idx >= len(translated_data) or field_name not in translated_data[idx]:
            continue

        trans_item = translated_data[idx]
        orig_list = orig_item[field_name]
        trans_list = trans_item[field_name]

        orig_expanded = expand_passive_list(orig_list) if orig_list else []
        trans_expanded = [extract_string_from_item(t) for t in trans_list if t and extract_string_from_item(t)]
        trans_expanded = [s.strip() for s in trans_expanded if s and s.strip()]

        orig_expanded = [s.strip() for s in orig_expanded if s and s.strip()]
        trans_expanded = [s.strip() for s in trans_expanded if s and s.strip()]

        if len(orig_expanded) != len(trans_expanded):
            logger.warning(f"[{lang_name}] 条目 {idx} 原始展开长度与翻译后长度不一致，跳过检查。")
            continue

        hero_name = trans_item.get('name', 'N/A')
        hero_id = orig_item.get('heroId', 'N/A')

        for o_str, t_str in zip(orig_expanded, trans_expanded):
            if len(o_str) < MIN_LENGTH:
                continue

            if o_str == t_str:
                outside = extract_outside_parentheses(o_str)
                if outside.strip():
                    untouched_entries.append({
                        'heroId': hero_id,
                        'name': hero_name,
                        'english': o_str,
                        'translation': t_str,
                        'type': '整句未翻译'
                    })
                continue

            o_match = split_pattern.match(o_str)
            t_match = split_pattern.match(t_str)

            if o_match and t_match:
                o_main, o_paren, _ = o_match.groups()
                t_main, t_paren, _ = t_match.groups()

                if o_main.strip() and t_main.strip() and len(o_main.strip()) >= MIN_LENGTH:
                    if o_main.strip() == t_main.strip():
                        main_untouched.append({
                            'heroId': hero_id,
                            'name': hero_name,
                            'english': o_str,
                            'translation': t_str,
                            'type': '主句未翻译'
                        })
                if o_paren.strip() and t_paren.strip() and len(o_paren.strip()) >= MIN_LENGTH:
                    if o_paren.strip() == t_paren.strip():
                        paren_untouched.append({
                            'heroId': hero_id,
                            'name': hero_name,
                            'english': o_str,
                            'translation': t_str,
                            'type': '括号内容未翻译'
                        })
            else:
                pass

    all_reports = []
    if untouched_entries:
        all_reports.extend(untouched_entries)
    if main_untouched:
        all_reports.extend(main_untouched)
    if paren_untouched:
        all_reports.extend(paren_untouched)

    if all_reports:
        logger.warning(f"  >>> 发现 {len(all_reports)} 处漏翻译问题。")
        for entry in all_reports:
            logger.warning(f"[{entry['type']}] 英雄ID: {entry['heroId']}, 名称: {entry['name']}")
            logger.warning(f"原文: {entry['english']}")
            logger.warning(f"译文: {entry['translation']}\n")
    else:
        logger.info(f"  √ 未发现漏翻译条目。")

def main():
    logger = setup_logger('../logs/effects_bilingual_translation_log.log', 'EffectsBilingualTranslator')
    logger.info("--- 开始技能词条双语批量翻译任务 ---")

    dict_file_cn = 'dictionaries/effects_dict_cn.json'
    dict_file_tc = 'dictionaries/effects_dict_tc.json'
    input_file = 'to_translate/effects_to_translate.js'
    output_file_cn = 'translated/effects_cn.js'
    output_file_tc = 'translated/effects_tc.js'

    translator_cn = Translator(dict_file_cn, logger, 'CN')
    translator_tc = Translator(dict_file_tc, logger, 'TC')

    if not translator_cn.dictionary and not translator_tc.dictionary:
        logger.error("任务中止，因为一个或两个字典未能加载。")
        return

    logger.info(f"正在加载源文件: {input_file}")
    original_data, prefix, suffix = parse_js_variable(input_file, logger, is_source=True)
    if original_data is None:
        logger.error("任务中止，因为源文件未能加载。")
        return

    logger.info("开始进行简繁双语翻译...")
    translated_data_cn = copy.deepcopy(original_data)
    translated_data_tc = copy.deepcopy(original_data)

    total_items, translated_items_cn, failed_items_cn = 0, 0, 0
    translated_items_tc, failed_items_tc = 0, 0

    split_pattern = re.compile(r'^(.*\S)\s*([\(\（][^)\）]+[\)\）])\s*([.。!?？]?)$', re.DOTALL)
    ending_punctuation = {'.', '!', '?', '。', '！', '？', ':', '：'}

    for item_index, item in enumerate(original_data):
        if 'effects' not in item or not isinstance(item['effects'], list):
            continue

        original_effects = [s for s in (extract_string_from_item(e) for e in item['effects']) if s and s.strip()]
        if not original_effects:
            continue
        total_items += 1

        # ---- 简体中文 ----
        is_cn_item_fully_translated = True
        translated_effects_cn = []
        for effect_str in original_effects:
            match = split_pattern.match(effect_str.strip())
            final_translation = None
            paren_failed = False

            if match:
                main_part, paren_part, _ = match.groups()
                trans_main = translator_cn.translate(main_part)
                trans_paren = translator_cn.translate(paren_part)

                if trans_main:
                    main_final = trans_main
                else:
                    main_final = main_part
                    logger.warning(f"[CN主句翻译失败] 索引 {item['heroId']} 主句部分: '{main_part}'")

                if trans_paren:
                    paren_final = trans_paren
                else:
                    paren_final = paren_part
                    paren_failed = True
                    logger.warning(f"[CN括号翻译失败] 索引 {item['heroId']} 括号部分: '{paren_part}'")

                if main_final.strip() and main_final.strip()[-1] not in ending_punctuation:
                    final_translation = Translator.format_spacing(main_final + "。" + paren_final)
                else:
                    final_translation = Translator.format_spacing(main_final + paren_final)

                if trans_main is None or paren_failed:
                    is_cn_item_fully_translated = False
            else:
                final_translation = translator_cn.translate(effect_str)
                if final_translation is None:
                    logger.warning(f"[CN翻译失败] 索引 {item['heroId']} 整句: '{effect_str}'")

            if final_translation:
                translated_effects_cn.append(final_translation)
            else:
                is_cn_item_fully_translated = False
                translated_effects_cn.append(effect_str)

        translated_data_cn[item_index]['effects'] = translated_effects_cn
        if is_cn_item_fully_translated:
            translated_items_cn += 1
        else:
            failed_items_cn += 1

        # ---- 繁体中文 ----
        is_tc_item_fully_translated = True
        translated_effects_tc = []
        for effect_str in original_effects:
            match = split_pattern.match(effect_str.strip())
            final_translation = None
            paren_failed = False

            if match:
                main_part, paren_part, _ = match.groups()
                trans_main = translator_tc.translate(main_part)
                trans_paren = translator_tc.translate(paren_part)

                if trans_main:
                    main_final = trans_main
                else:
                    main_final = main_part
                    logger.warning(f"[TC主句翻译失败] 索引 {item['heroId']} 主句部分: '{main_part}'")

                if trans_paren:
                    paren_final = trans_paren
                else:
                    paren_final = paren_part
                    paren_failed = True
                    logger.warning(f"[TC括号翻译失败] 索引 {item['heroId']} 括号部分: '{paren_part}'")

                if main_final.strip() and main_final.strip()[-1] not in ending_punctuation:
                    final_translation = Translator.format_spacing(main_final + "。" + paren_final)
                else:
                    final_translation = Translator.format_spacing(main_final + paren_final)

                if trans_main is None or paren_failed:
                    is_tc_item_fully_translated = False
            else:
                final_translation = translator_tc.translate(effect_str)
                if final_translation is None:
                    logger.warning(f"[TC翻译失败] 索引 {item['heroId']} 整句: '{effect_str}'")

            if final_translation:
                translated_effects_tc.append(final_translation)
            else:
                is_tc_item_fully_translated = False
                translated_effects_tc.append(effect_str)

        translated_data_tc[item_index]['effects'] = translated_effects_tc
        if is_tc_item_fully_translated:
            translated_items_tc += 1
        else:
            failed_items_tc += 1

    logger.info(f"翻译处理完成。正在写入结果文件...")
    try:
        output_dir_cn = os.path.dirname(output_file_cn)
        if output_dir_cn and not os.path.exists(output_dir_cn):
            os.makedirs(output_dir_cn)
        translated_json_string_cn = json.dumps(translated_data_cn, ensure_ascii=False, indent=4)
        prefix_cn = prefix.replace('allTranslations', 'translatedEffectsCN') if 'allTranslations' in prefix else prefix
        with open(output_file_cn, 'w', encoding='utf-8') as f:
            f.write(prefix_cn + translated_json_string_cn + suffix)
        logger.info(f"简体中文结果已成功保存到: {output_file_cn}")
    except Exception as e:
        logger.error(f"写入简体中文输出文件时发生错误: {e}")

    try:
        output_dir_tc = os.path.dirname(output_file_tc)
        if output_dir_tc and not os.path.exists(output_dir_tc):
            os.makedirs(output_dir_tc)
        translated_json_string_tc = json.dumps(translated_data_tc, ensure_ascii=False, indent=4)
        prefix_tc = prefix.replace('allTranslations', 'translatedEffectsTC') if 'allTranslations' in prefix else prefix
        with open(output_file_tc, 'w', encoding='utf-8') as f:
            f.write(prefix_tc + translated_json_string_tc + suffix)
        logger.info(f"繁体中文结果已成功保存到: {output_file_tc}")
    except Exception as e:
        logger.error(f"写入繁体中文输出文件时发生错误: {e}")

    logger.info("--- 开始漏翻译检查 ---")
    check_untouched_translations(logger, original_data, translated_data_cn, 'effects', 'CN')
    check_untouched_translations(logger, original_data, translated_data_tc, 'effects', 'TC')
    logger.info("--- 漏翻译检查完成 ---")

    logger.info("--- 双语翻译任务报告 ---")
    logger.info(f"总处理独立技能条目数: {total_items}")
    logger.info("--- 简体中文 (CN) ---")
    logger.info(f"  成功翻译: {translated_items_cn}")
    logger.info(f"  失败 (未匹配): {failed_items_cn}")
    if total_items > 0:
        accuracy_cn = (translated_items_cn / total_items) * 100
        logger.info(f"  成功率: {accuracy_cn:.2f}%")

    logger.info("--- 繁体中文 (TC) ---")
    logger.info(f"  成功翻译: {translated_items_tc}")
    logger.info(f"  失败 (未匹配): {failed_items_tc}")
    if total_items > 0:
        accuracy_tc = (translated_items_tc / total_items) * 100
        logger.info(f"  成功率: {accuracy_tc:.2f}%")

    logger.info("--- 技能词条双语翻译任务结束 ---")

if __name__ == "__main__":
    main()
    input("\n按任意键退出...")