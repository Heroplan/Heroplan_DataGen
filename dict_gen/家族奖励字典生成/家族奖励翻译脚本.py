# -*- coding: utf-8 -*-
import re
import json
import logging
import copy

def setup_logger(log_file_name, logger_name):
    """配置日志记录器，用于记录批量翻译过程。"""
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

    def format_spacing(self, text):
        """对包含数字的文本进行最终的空格排版美化。"""
        if not text: return text
        number_pattern = r'([+-]?\d+%?)'
        text = re.sub(number_pattern, r' \1 ', text)
        text = re.sub(r'\s{2,}', ' ', text)
        text = re.sub(r'\s([.:;!?%：，。！？\)])', r'\1', text)
        text = re.sub(r'([\(（])\s', r'\1', text)
        text = re.sub(r'([^\d%])\s+([,，])', r'\1\2', text)
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

def parse_js_variable(file_path, logger, is_source=True):
    """(已更新) 读取并解析 .js 文件。"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        json_start = content.find('[')
        json_end = content.rfind(']')
        if json_start == -1 or json_end == -1: raise ValueError("未在文件中找到有效的 '[]'。")
        
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
    """从条目中智能提取字符串。"""
    if isinstance(item, str): return item
    if isinstance(item, dict) and item: return next(iter(item.values()), None)
    return None

# ##################################################################
# ###           【新增】校验函数 (适用于Family Bonus)            ###
# ##################################################################
def validate_translations(script_output_data, manual_data, lang_code, logger):
    """将脚本翻译结果与人工翻译（标准答案）进行对比。"""
    logger.info(f"--- [{lang_code}] 开始校验脚本翻译结果与人工翻译的一致性 ---")
    
    if not manual_data:
        logger.warning(f"[{lang_code}] 未能加载人工翻译文件，跳过校验。")
        return

    manual_map = {item['originalIndex']: item.get('bonus', []) for item in manual_data}
    mismatch_count = 0

    for item in script_output_data:
        index = item['originalIndex']
        if index not in manual_map:
            continue

        script_bonuses = item.get('bonus', [])
        
        manual_bonuses_raw = manual_map.get(index, [])
        manual_bonuses = [text for text in (extract_string_from_item(b) for b in manual_bonuses_raw) if text and text.strip()]

        if script_bonuses != manual_bonuses:
            mismatch_count += 1
            if len(script_bonuses) != len(manual_bonuses):
                logger.warning(f"[{lang_code}] 校验失败 (数量不匹配) - 索引 {index}")
                logger.warning(f"  - 脚本结果 ({len(script_bonuses)}条): {script_bonuses}")
                logger.warning(f"  - 人工翻译 ({len(manual_bonuses)}条): {manual_bonuses}")
            else:
                for i, (script_str, manual_str) in enumerate(zip(script_bonuses, manual_bonuses)):
                    if script_str != manual_str:
                        logger.warning(f"[{lang_code}] 校验失败 (内容不匹配) - 索引 {index}, 奖励 {i+1}")
                        logger.warning(f"  - 脚本结果: '{script_str}'")
                        logger.warning(f"  - 人工翻译: '{manual_str}'")
    
    if mismatch_count == 0:
        logger.info(f"--- [{lang_code}] 校验通过！脚本翻译结果与人工翻译完全一致。 ---")
    else:
        logger.error(f"--- [{lang_code}] 校验完成。共发现 {mismatch_count} 处不一致。详情请见以上日志。 ---")

def main():
    """主函数，执行家族奖励的双语批量翻译及校验流程。"""
    logger = setup_logger('../../logs/families_bonus_bilingual_translation_log.log', 'FamiliesBonusBilingualTranslator')
    logger.info("--- 开始家族奖励（Family Bonus）双语批量翻译任务 ---")

    dict_file_cn = '../../dictionaries/families_bonus_dict_cn.json'
    dict_file_tc = '../../dictionaries/families_bonus_dict_tc.json'
    input_file = '../../to_translate/families_bonus_to_translate.js'
    output_file_cn = 'families_bonus_cn.js'
    output_file_tc = 'families_bonus_tc.js'
    
    # 【新增】定义人工翻译文件路径
    manual_translation_cn = 'families_bonus_translated_cn.js'
    manual_translation_tc = 'families_bonus_translated_tc.js'

    translator_cn = Translator(dict_file_cn, logger, 'CN')
    translator_tc = Translator(dict_file_tc, logger, 'TC')

    if not translator_cn.dictionary or not translator_tc.dictionary:
        logger.error("任务中止，因为一个或两个字典未能加载。")
        return
        
    logger.info(f"正在加载源文件: {input_file}")
    original_data, prefix, suffix = parse_js_variable(input_file, logger, is_source=True)
    if original_data is None:
        logger.error("任务中止，因为源文件未能加载。")
        return

    # 【新增】加载人工翻译文件用于最终校验
    logger.info(f"正在加载简体中文人工翻译文件: {manual_translation_cn}")
    manual_data_cn = parse_js_variable(manual_translation_cn, logger, is_source=False)
    logger.info(f"正在加载繁体中文人工翻译文件: {manual_translation_tc}")
    manual_data_tc = parse_js_variable(manual_translation_tc, logger, is_source=False)

    logger.info("开始逐条翻译 'bonus' 字段...")
    translated_data_cn = copy.deepcopy(original_data)
    translated_data_tc = copy.deepcopy(original_data)
    
    total_strings, translated_count_cn, failed_count_cn = 0, 0, 0
    translated_count_tc, failed_count_tc = 0, 0

    for item_index, item in enumerate(original_data):
        if 'bonus' not in item or not isinstance(item['bonus'], list): continue

        bonus_raw = item['bonus']
        translated_bonus_list_cn = []
        translated_bonus_list_tc = []
        
        valid_bonus_count = sum(1 for b in bonus_raw if extract_string_from_item(b) and extract_string_from_item(b).strip())
        if valid_bonus_count > 0:
            total_strings += 1

        for i, bonus_item in enumerate(bonus_raw):
            string_to_translate = extract_string_from_item(bonus_item)
            if string_to_translate is None or not string_to_translate.strip():
                continue
            
            # --- 处理简体中文 ---
            translated_string_cn = translator_cn.translate(string_to_translate)
            if translated_string_cn is None:
                if i == 0: failed_count_cn += 1
                logger.warning(f"[翻译失败-CN] 索引 {item['originalIndex']}, 奖励 {i+1}: 未匹配到规则。原文: {string_to_translate}")
                translated_bonus_list_cn.append(string_to_translate)
            else:
                if i == 0: translated_count_cn += 1
                translated_bonus_list_cn.append(translated_string_cn)

            # --- 处理繁体中文 ---
            translated_string_tc = translator_tc.translate(string_to_translate)
            if translated_string_tc is None:
                if i == 0: failed_count_tc += 1
                if translated_string_cn is None:
                    logger.warning(f"[翻译失败-TC] 索引 {item['originalIndex']}, 奖励 {i+1}: 未匹配到规则。")
                translated_bonus_list_tc.append(string_to_translate)
            else:
                if i == 0: translated_count_tc += 1
                translated_bonus_list_tc.append(translated_string_tc)

        translated_data_cn[item_index]['bonus'] = translated_bonus_list_cn
        translated_data_tc[item_index]['bonus'] = translated_bonus_list_tc

    logger.info(f"翻译处理完成。正在写入结果文件...")
    try:
        translated_json_string_cn = json.dumps(translated_data_cn, ensure_ascii=False, indent=4)
        prefix_cn = prefix.replace('allTranslations', 'translatedFamiliesBonusCN') if 'allTranslations' in prefix else prefix
        with open(output_file_cn, 'w', encoding='utf-8') as f:
            f.write(prefix_cn + translated_json_string_cn + suffix)
        logger.info(f"简体中文结果已成功保存到: {output_file_cn}")
    except Exception as e:
        logger.error(f"写入简体中文输出文件时发生错误: {e}")

    try:
        translated_json_string_tc = json.dumps(translated_data_tc, ensure_ascii=False, indent=4)
        prefix_tc = prefix.replace('allTranslations', 'translatedFamiliesBonusTC') if 'allTranslations' in prefix else prefix
        with open(output_file_tc, 'w', encoding='utf-8') as f:
            f.write(prefix_tc + translated_json_string_tc + suffix)
        logger.info(f"繁体中文结果已成功保存到: {output_file_tc}")
    except Exception as e:
        logger.error(f"写入繁体中文输出文件时发生错误: {e}")

    # ##################################################################
    # ###           【新增】执行最终校验                         ###
    # ##################################################################
    validate_translations(translated_data_cn, manual_data_cn, 'CN', logger)
    validate_translations(translated_data_tc, manual_data_tc, 'TC', logger)

    logger.info("--- 双语翻译任务报告 ---")
    logger.info(f"总处理独立家族奖励条目数: {total_strings}")
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

    logger.info("--- 家族奖励翻译任务结束 ---")

if __name__ == "__main__":
    main()