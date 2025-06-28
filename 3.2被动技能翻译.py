# -*- coding: utf-8 -*-
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

    # 文件日志处理器
    file_handler = logging.FileHandler(log_file_name, mode='w', encoding='utf-8')
    file_handler.setLevel(logging.INFO)
    file_formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(file_formatter)

    # 控制台日志处理器
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
        self.dictionary = self._load_dictionary(dictionary_path)
        if self.dictionary:
            self.compiled_rules = []
            for key, value in self.dictionary.items():
                try:
                    self.compiled_rules.append((re.compile(key, re.DOTALL), value))
                except re.error as e:
                    self.logger.warning(f"警告 [{self.language_code}]：无法编译正则表达式 '{key}': {e}")
            self.logger.info(f"翻译器 [{self.language_code}] 已初始化，共加载 {len(self.compiled_rules)} 条翻译规则。")
        else:
            self.compiled_rules = []

    def _load_dictionary(self, file_path):
        """加载JSON字典文件。"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            self.logger.error(f"加载字典 {file_path} 时出错: {e}")
        return None

    def format_spacing(self, text):
        """对包含数字和星号的文本进行最终的空格排版美化。"""
        if not text: return text
        text = re.sub(r'(\d)\s+(%)', r'\1\2', text)
        number_pattern = r'([+-]?\d+%?)'
        text = re.sub(number_pattern, r' \1 ', text)
        text = re.sub(r'\s{2,}', ' ', text)
        text = re.sub(r'\s([,.:;!?%：，。！？\)])', r'\1', text)
        text = re.sub(r'([\(（])\s', r'\1', text)
        text = re.sub(r'([^\d%])\s+([,，])', r'\1\2', text)
        text = re.sub(r'([^\s])(\*)', r'\1 \2', text)
        text = re.sub(r'(\*)([^\s])', r'\1 \2', text)
        text = re.sub(r'\s{2,}', ' ', text)
        return text.strip()

    def translate(self, english_text):
        """翻译单个字符串，如果找不到规则则返回None。"""
        if not isinstance(english_text, str) or not self.compiled_rules: return None
        for compiled_regex, template in self.compiled_rules:
            match = compiled_regex.fullmatch(english_text)
            if match:
                raw_result = compiled_regex.sub(template, english_text)
                final_result = self.format_spacing(raw_result)
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
        
        # 增加预处理逻辑以提高健壮性
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
            split_parts = [part.strip() for part in re.split(split_pattern, text) if part.strip()]
            expanded_list.extend(split_parts)
    return expanded_list

def main():
    """主函数，执行被动技能的双语批量翻译流程。"""
    # 确保日志目录存在
    if not os.path.exists('../logs'):
        os.makedirs('../logs')
    logger = setup_logger('../logs/passives_bilingual_translation_log.log', 'PassivesBilingualTranslator')
    logger.info("--- 开始被动技能双语批量翻译任务 ---")

    dict_file_cn = 'dictionaries/passives_dict_cn.json'
    dict_file_tc = 'dictionaries/passives_dict_tc.json'
    input_file = 'to_translate/passives_to_translate.js'
    
    # 确保输出目录存在
    if not os.path.exists('translated'):
        os.makedirs('translated')
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
        
    logger.info("开始逐条翻译 'passives' 字段...")
    translated_data_cn = copy.deepcopy(original_data)
    translated_data_tc = copy.deepcopy(original_data)
    
    total_strings, translated_count_cn, failed_count_cn = 0, 0, 0
    translated_count_tc, failed_count_tc = 0, 0

    for item_index, item in enumerate(original_data):
        if 'passives' not in item or not isinstance(item['passives'], list):
            continue

        strings_to_translate = expand_passive_list(item['passives'])
        
        final_passives_cn = []
        final_passives_tc = []

        for i, string_to_translate in enumerate(strings_to_translate):
            # (核心修改) 在处理前，先清理字符串两端多余的引号和空格
            if isinstance(string_to_translate, str):
                string_to_translate = string_to_translate.strip("'\" ")
            
            # 如果清理后字符串为空，则跳过
            if not string_to_translate:
                continue

            total_strings += 1
            
            # --- 处理简体中文 ---
            translated_string_cn = translator_cn.translate(string_to_translate)
            if translated_string_cn is None:
                failed_count_cn += 1
                logger.warning(f"[翻译失败-CN] 索引 {item['originalIndex']}, 部分 {i+1}: 未匹配到规则。")
                logger.warning(f"  - 原文: {string_to_translate}")
                final_passives_cn.append(string_to_translate)
            else:
                translated_count_cn += 1
                final_passives_cn.append(translated_string_cn)

            # --- 处理繁体中文 ---
            translated_string_tc = translator_tc.translate(string_to_translate)
            if translated_string_tc is None:
                failed_count_tc += 1
                logger.warning(f"[翻译失败-TC] 索引 {item['originalIndex']}, 部分 {i+1}: 未匹配到规则。")
                if translated_string_cn is None:
                     logger.warning(f"  - 原文: {string_to_translate}")
                final_passives_tc.append(string_to_translate)
            else:
                translated_count_tc += 1
                final_passives_tc.append(translated_string_tc)

        translated_data_cn[item_index]['passives'] = final_passives_cn
        translated_data_tc[item_index]['passives'] = final_passives_tc

    # 分别写入两个结果文件
    logger.info(f"翻译处理完成。正在写入简体中文结果到 {output_file_cn}...")
    try:
        translated_json_string_cn = json.dumps(translated_data_cn, ensure_ascii=False, indent=4)
        prefix_cn = prefix.replace('allTranslations', 'translatedPassivesCN') if 'allTranslations' in prefix else prefix
        final_content_cn = prefix_cn + translated_json_string_cn + suffix
        with open(output_file_cn, 'w', encoding='utf-8') as f:
            f.write(final_content_cn)
        logger.info(f"简体中文结果已成功保存到: {output_file_cn}")
    except Exception as e:
        logger.error(f"写入简体中文输出文件时发生错误: {e}")

    logger.info(f"正在写入繁体中文结果到 {output_file_tc}...")
    try:
        translated_json_string_tc = json.dumps(translated_data_tc, ensure_ascii=False, indent=4)
        prefix_tc = prefix.replace('allTranslations', 'translatedPassivesTC') if 'allTranslations' in prefix else prefix
        final_content_tc = prefix_tc + translated_json_string_tc + suffix
        with open(output_file_tc, 'w', encoding='utf-8') as f:
            f.write(final_content_tc)
        logger.info(f"繁体中文结果已成功保存到: {output_file_tc}")
    except Exception as e:
        logger.error(f"写入繁体中文输出文件时发生错误: {e}")

    # 生成详细的双语报告
    logger.info("--- 双语翻译任务报告 ---")
    logger.info(f"总处理字符串条目数: {total_strings}")
    logger.info("--- 简体中文 (CN) ---")
    logger.info(f"  成功翻译: {translated_count_cn}")
    logger.info(f"  失败 (未匹配): {failed_count_cn}")
    if total_strings > 0:
        accuracy_cn = (translated_count_cn / total_strings) * 100
        logger.info(f"  成功率: {accuracy_cn:.2f}%")
    
    logger.info("--- 繁体中文 (TC) ---")
    logger.info(f"  成功翻译: {translated_count_tc}")
    logger.info(f"  失败 (未匹配): {failed_count_tc}")
    if total_strings > 0:
        accuracy_tc = (translated_count_tc / total_strings) * 100
        logger.info(f"  成功率: {accuracy_tc:.2f}%")

    if failed_count_cn > 0 or failed_count_tc > 0:
        logger.warning(f"有条目翻译失败，详情请见以上日志。")
    logger.info("--- 被动技能双语翻译任务结束 ---")

if __name__ == "__main__":
    main()
