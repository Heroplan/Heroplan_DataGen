# -*- coding: utf-8 -*-
# 【被动技能-纯翻译最终版】集成所有高级翻译规则

import re
import json
import logging
import copy
import os

def setup_logger(log_file_name, logger_name):
    """配置日志记录器，同时输出到控制台和文件。"""
    logger = logging.getLogger(logger_name)
    logger.setLevel(logging.INFO)
    if logger.hasHandlers():
        logger.handlers.clear()
    
    log_dir = os.path.dirname(log_file_name)
    if log_dir and not os.path.exists(log_dir):
        os.makedirs(log_dir)

    file_handler = logging.FileHandler(log_file_name, mode='w', encoding='utf-8')
    file_handler.setLevel(logging.INFO)
    file_formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(file_formatter)

    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)
    console_formatter = logging.Formatter('%(message)s')
    console_handler.setFormatter(console_formatter)

    logger.addHandler(file_handler)
    logger.addHandler(console_handler)
    return logger

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
            self.logger.info(f"翻译器 [{self.language_code}] 已初始化，共加载 {len(self.compiled_rules)} 条翻译规则。")
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
        """(静态方法) 对文本进行最终的排版美化，已包含对星号的处理。"""
        if not text: return text
        text = text.strip()
        text = re.sub(r'(\d)\s+(%)', r'\1\2', text)
        number_pattern = r'([+-]?\d+%?)'
        text = re.sub(number_pattern, r' \1 ', text)
        text = re.sub(r'\s{2,}', ' ', text)
        text = re.sub(r'\s([,.:;!?%：，。！？\)])', r'\1', text)
        text = re.sub(r'([\(（])\s', r'\1', text)
        text = re.sub(r'([^\d%])\s+([,，])', r'\1\2', text)
        text = re.sub(r'([^\s])(\*)', r'\1 \2', text)
        text = re.sub(r'(\*)([^\s])', r'\1 \2', text)
        text = re.sub(r'([.。！？])\1+', r'\1', text)
        text = re.sub(r'\s{2,}', ' ', text)
        return text.strip()

    def translate(self, english_text):
        """翻译单个字符串，如果找不到规则则返回None。"""
        if not isinstance(english_text, str) or not self.compiled_rules: return None
        english_text_cleaned = english_text.strip()
        for compiled_regex, template in self.compiled_rules:
            match = compiled_regex.fullmatch(english_text_cleaned)
            if match:
                raw_result = compiled_regex.sub(template, english_text_cleaned)
                final_result = Translator.format_spacing(raw_result)
                return final_result
        return None

def parse_js_variable(file_path, logger):
    """读取并解析 .js 文件，并返回数据、文件前缀和后缀。"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        json_start = content.find('[')
        json_end = content.rfind(']')
        if json_start == -1 or json_end == -1: raise ValueError("未在文件中找到有效的 '[]'。")
        prefix = content[:json_start]
        suffix = content[json_end + 1:]
        
        json_string_raw = content[json_start : json_end + 1]
        text = re.sub(r"//.*", "", json_string_raw)
        text = re.sub(r"/\*[\s\S]*?\*/", "", text)
        text = re.sub(r",\s*(\}|\])", r"\1", text)
        
        data = json.loads(text)
        return data, prefix, suffix
    except Exception as e:
        logger.error(f"解析文件 {file_path} 时出错: {e}")
        return None, None, None

def extract_string_from_item(item):
    """从效果或被动技能条目中智能提取字符串。"""
    if isinstance(item, str): return item
    if isinstance(item, dict) and item: return next(iter(item.values()), None)
    return None

def expand_passive_list(raw_passives):
    """展开被动技能列表，将包含 '*' 的字符串拆分为多个条目。"""
    expanded_list = []
    split_pattern = r'\s+(?=\*)'
    for item in raw_passives:
        text = extract_string_from_item(item)
        if text and text.strip():
            # (核心修改) 在处理前，先清理字符串两端多余的引号和空格
            text = text.strip("'\" ")
            if not text: continue
            split_parts = [part.strip() for part in re.split(split_pattern, text) if part.strip()]
            expanded_list.extend(split_parts)
    return expanded_list

def main():
    """主函数，执行被动技能的双语批量翻译流程。"""
    logger = setup_logger('../logs/passives_bilingual_translation_log.log', 'PassivesBilingualTranslator')
    logger.info("--- 开始被动技能双语批量翻译任务 ---")

    dict_file_cn = 'dictionaries/passives_dict_cn.json'
    dict_file_tc = 'dictionaries/passives_dict_tc.json'
    input_file = 'to_translate/passives_to_translate.js'
    output_file_cn = 'translated/passives_cn.js'
    output_file_tc = 'translated/passives_tc.js'

    translator_cn = Translator(dict_file_cn, logger, 'CN')
    translator_tc = Translator(dict_file_tc, logger, 'TC')

    if not translator_cn.dictionary:
        logger.warning("简体中文字典未能加载，简体中文的翻译将全部失败。")
    if not translator_tc.dictionary:
        logger.warning("繁体中文字典未能加载，繁体中文的翻译将全部失败。")
        
    logger.info(f"正在加载源文件: {input_file}")
    original_data, prefix, suffix = parse_js_variable(input_file, logger)
    if original_data is None:
        logger.error("任务中止，因为源文件未能加载。")
        return
        
    logger.info("开始进行翻译...")
    translated_data_cn = copy.deepcopy(original_data)
    translated_data_tc = copy.deepcopy(original_data)
    
    total_items, translated_items_cn, failed_items_cn = 0, 0, 0
    translated_items_tc, failed_items_tc = 0, 0

    split_pattern = re.compile(r'^(.*\S)\s*([\(\（][^)\）]+[\)\）])\s*([.。!?？]?)$', re.DOTALL)
    ending_punctuation = {'.', '!', '?', '。', '！', '？', ':', '：'}

    for item_index, item in enumerate(original_data):
        if 'passives' not in item or not isinstance(item['passives'], list): continue

        original_passives_expanded = expand_passive_list(item['passives'])
        if not original_passives_expanded: continue
        total_items += 1

        # --- 简体中文翻译 ---
        is_cn_item_fully_translated = True
        translated_passives_cn = []
        for passive_str in original_passives_expanded:
            match = split_pattern.match(passive_str.strip())
            final_translation = None
            if match:
                main_part, paren_part, _ = match.groups()
                trans_main = translator_cn.translate(main_part)
                trans_paren = translator_cn.translate(paren_part)
                if trans_main and trans_paren:
                    if trans_main.strip() and trans_main.strip()[-1] not in ending_punctuation:
                        final_translation = Translator.format_spacing(trans_main + "。" + trans_paren)
                    else:
                        final_translation = Translator.format_spacing(trans_main + trans_paren)
                else: # 如果任一部分翻译失败
                    is_cn_item_fully_translated = False
                    if not trans_main: logger.warning(f"[CN翻译失败] 索引 {item['originalIndex']} 主句部分: '{main_part}'")
                    if not trans_paren: logger.warning(f"[CN翻译失败] 索引 {item['originalIndex']} 括号部分: '{paren_part}'")
            else:
                final_translation = translator_cn.translate(passive_str)
            
            if final_translation:
                translated_passives_cn.append(final_translation)
            else:
                is_cn_item_fully_translated = False
                # 只有在非括号匹配情况下才记录整句失败，避免重复记录
                if not match: logger.warning(f"[CN翻译失败] 索引 {item['originalIndex']} 整句: '{passive_str}'")
                translated_passives_cn.append(passive_str)
        
        translated_data_cn[item_index]['passives'] = translated_passives_cn
        if is_cn_item_fully_translated: translated_items_cn += 1
        else: failed_items_cn += 1

        # --- 繁体中文翻译 ---
        is_tc_item_fully_translated = True
        translated_passives_tc = []
        for passive_str in original_passives_expanded:
            match = split_pattern.match(passive_str.strip())
            final_translation = None
            if match:
                main_part, paren_part, _ = match.groups()
                trans_main = translator_tc.translate(main_part)
                trans_paren = translator_tc.translate(paren_part)
                if trans_main and trans_paren:
                    if trans_main.strip() and trans_main.strip()[-1] not in ending_punctuation:
                        final_translation = Translator.format_spacing(trans_main + "。" + trans_paren)
                    else:
                        final_translation = Translator.format_spacing(trans_main + trans_paren)
                else:
                    is_tc_item_fully_translated = False
                    if not trans_main: logger.warning(f"[TC翻译失败] 索引 {item['originalIndex']} 主句部分: '{main_part}'")
                    if not trans_paren: logger.warning(f"[TC翻译失败] 索引 {item['originalIndex']} 括号部分: '{paren_part}'")
            else:
                final_translation = translator_tc.translate(passive_str)
            
            if final_translation:
                translated_passives_tc.append(final_translation)
            else:
                is_tc_item_fully_translated = False
                if not match: logger.warning(f"[TC翻译失败] 索引 {item['originalIndex']} 整句: '{passive_str}'")
                translated_passives_tc.append(passive_str)

        translated_data_tc[item_index]['passives'] = translated_passives_tc
        if is_tc_item_fully_translated: translated_items_tc += 1
        else: failed_items_tc += 1

    logger.info(f"翻译处理完成。正在写入结果文件...")
    try:
        output_dir_cn = os.path.dirname(output_file_cn)
        if output_dir_cn and not os.path.exists(output_dir_cn): os.makedirs(output_dir_cn)
        translated_json_string_cn = json.dumps(translated_data_cn, ensure_ascii=False, indent=4)
        prefix_cn = prefix.replace('allTranslations', 'translatedPassivesCN') if 'allTranslations' in prefix else prefix
        with open(output_file_cn, 'w', encoding='utf-8') as f:
            f.write(prefix_cn + translated_json_string_cn + suffix)
        logger.info(f"简体中文结果已成功保存到: {output_file_cn}")
    except Exception as e:
        logger.error(f"写入简体中文输出文件时发生错误: {e}")

    try:
        output_dir_tc = os.path.dirname(output_file_tc)
        if output_dir_tc and not os.path.exists(output_dir_tc): os.makedirs(output_dir_tc)
        translated_json_string_tc = json.dumps(translated_data_tc, ensure_ascii=False, indent=4)
        prefix_tc = prefix.replace('allTranslations', 'translatedPassivesTC') if 'allTranslations' in prefix else prefix
        with open(output_file_tc, 'w', encoding='utf-8') as f:
            f.write(prefix_tc + translated_json_string_tc + suffix)
        logger.info(f"繁体中文结果已成功保存到: {output_file_tc}")
    except Exception as e:
        logger.error(f"写入繁体中文输出文件时发生错误: {e}")

    logger.info("--- 双语翻译任务报告 ---")
    logger.info(f"总处理独立被动技能条目数: {total_items}")
    logger.info("--- 简体中文 (CN) ---")
    logger.info(f"  成功翻译: {translated_items_cn}")
    logger.info(f"  失败 (未匹配): {failed_items_cn}")
    if total_items > 0: logger.info(f"  成功率: {(translated_items_cn / total_items) * 100:.2f}%")
    
    logger.info("--- 繁体中文 (TC) ---")
    logger.info(f"  成功翻译: {translated_items_tc}")
    logger.info(f"  失败 (未匹配): {failed_items_tc}")
    if total_items > 0: logger.info(f"  成功率: {(translated_items_tc / total_items) * 100:.2f}%")

    logger.info("--- 被动技能双语翻译任务结束 ---")

if __name__ == "__main__":
    main()
    input("\n按任意键退出...")