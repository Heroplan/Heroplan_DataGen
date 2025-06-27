# -*- coding: utf-8 -*-
import re
import json
import logging
import copy

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

class Translator:
    """封装翻译逻辑，加载字典、执行翻译和进行最终的格式美化。"""
    # (新增) language_code 用于日志区分
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
        # 确保星号前后有空格
        text = re.sub(r'([^\s])(\*)', r'\1 \2', text)
        text = re.sub(r'(\*)([^\s])', r'\1 \2', text)
        text = re.sub(r'\s{2,}', ' ', text)
        return text.strip()

    def translate(self, english_text):
        """翻译单个字符串，如果找不到规则则返回None。"""
        if not isinstance(english_text, str) or not self.compiled_rules: return None
        for compiled_regex, template in self.compiled_rules:
            # 使用 fullmatch 确保整个字符串都被匹配，防止部分匹配
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
            json_string = content[json_start : json_end + 1]
            data = json.loads(json_string)
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
    logger = setup_logger('passives_bilingual_translation_log.log', 'PassivesBilingualTranslator')
    logger.info("--- 开始被动技能双语批量翻译任务 ---")

    # (修改) 定义简繁双语的输入输出文件
    dict_file_cn = '../../dictionaries/passives_dict_cn.json'
    dict_file_tc = '../../dictionaries/passives_dict_tc.json'
    input_file = 'passives_to_translate.js'
    output_file_cn = 'passives_cn.js'
    output_file_tc = 'passives_tc.js'

    # (修改) 分别为简繁创建翻译器实例
    translator_cn = Translator(dict_file_cn, logger, 'CN')
    translator_tc = Translator(dict_file_tc, logger, 'TC')

    if not translator_cn.dictionary or not translator_tc.dictionary:
        logger.error("任务中止，因为一个或两个字典未能加载。")
        return
        
    logger.info(f"正在加载源文件: {input_file}")
    original_data, prefix, suffix = parse_js_variable(input_file, logger)
    if original_data is None:
        logger.error("任务中止，因为源文件未能加载。")
        return
        
    logger.info("开始逐条翻译 'passives' 字段 (将按规则拆分条目、移除空行并格式化空格)...")
    # (修改) 创建两份数据副本
    translated_data_cn = copy.deepcopy(original_data)
    translated_data_tc = copy.deepcopy(original_data)
    
    # (修改) 为两种语言分别设置统计计数器
    total_strings, translated_count_cn, failed_count_cn = 0, 0, 0
    translated_count_tc, failed_count_tc = 0, 0

    # (修改) 使用 enumerate 同时遍历原始数据和索引
    for item_index, item in enumerate(original_data):
        if 'passives' not in item or not isinstance(item['passives'], list):
            continue

        passives_raw = item['passives']
        
        # 1. 对原文进行拆分，得到需要翻译的字符串列表
        strings_to_translate = expand_passive_list(passives_raw)
        
        # 2. 准备两个空列表，用于存放翻译结果
        final_passives_cn = []
        final_passives_tc = []

        # 3. 遍历拆分后的字符串列表进行双语翻译
        for i, string_to_translate in enumerate(strings_to_translate):
            total_strings += 1
            
            # --- 处理简体中文 ---
            translated_string_cn = translator_cn.translate(string_to_translate)
            if translated_string_cn is None:
                failed_count_cn += 1
                logger.warning(f"[翻译失败-CN] 索引 {item['originalIndex']}, 被动技能部分 {i+1}: 未匹配到规则。")
                logger.warning(f"  - 原文: {string_to_translate}")
                final_passives_cn.append(string_to_translate)
            else:
                translated_count_cn += 1
                final_passives_cn.append(translated_string_cn)

            # --- 处理繁体中文 ---
            translated_string_tc = translator_tc.translate(string_to_translate)
            if translated_string_tc is None:
                failed_count_tc += 1
                logger.warning(f"[翻译失败-TC] 索引 {item['originalIndex']}, 被动技能部分 {i+1}: 未匹配到规则。")
                # 仅当简体也失败时，才打印原文，避免日志重复
                if translated_string_cn is None:
                     logger.warning(f"  - 原文: {string_to_translate}")
                final_passives_tc.append(string_to_translate)
            else:
                translated_count_tc += 1
                final_passives_tc.append(translated_string_tc)

        # 4. 将翻译好的列表分别更新到两份数据中
        translated_data_cn[item_index]['passives'] = final_passives_cn
        translated_data_tc[item_index]['passives'] = final_passives_tc

    # (修改) 分别写入两个结果文件
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

    # (修改) 生成详细的双语报告
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