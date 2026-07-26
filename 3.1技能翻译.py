# -*- coding: utf-8 -*-
# 【最终版】强制拆分翻译，确保括号结构保留，括号失败时保留原文但条目计入失败
# 新增：遗漏翻译检查，仅报告原文==译文且主句非空的情况

import re
import json
import logging
import copy
import os

def setup_logger(log_file_name, logger_name):
    """配置日志记录器，用于记录批量翻译过程。"""
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
        
        # 先处理倍数：数字+x（忽略大小写），在x后面加空格（除非已是行尾或后面是标点）
        text = re.sub(r'(\d+)([xX])', r'\1\2 ', text)
        
        # 处理普通数字（不包括后面已经跟x的数字），前后加空格
        text = re.sub(r'([+-]?\d+%?)(?![xX])', r' \1 ', text)
        
        # 后续原有的空格清理
        text = re.sub(r'\s{2,}', ' ', text)
        text = re.sub(r'\s([.:;!?%：，。！？\)])', r'\1', text)
        text = re.sub(r'([\(（])\s', r'\1', text)
        text = re.sub(r'([^\d%])\s+([,，])', r'\1\2', text)
        text = re.sub(r'([.。！？])\1+', r'\1', text)
        text = re.sub(r'(\d)\s*-\s*(\d)', r'\1 - \2', text)
        
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

def parse_js_variable(file_path, logger, is_source=True):
    """读取并解析 .js 文件。"""
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
    """从效果条目中智能提取字符串。"""
    if isinstance(item, str): return item
    if isinstance(item, dict) and item: return next(iter(item.values()), None)
    return None

def expand_passive_list(raw_passives):
    """
    展开被动技能列表（通用函数，也可用于effects），将包含 '*' 的字符串拆分为多个条目。
    - 规则1: 如果字符串只包含 '*' 和空格 (如 " ****" 或 "* * *"), 则不分割。
    - 规则2: 如果字符串包含其他字符 (如 "Effect 1 * Effect 2"), 
             则按单个 '*' (r'\s+(?=\*(?!\*))') 分割，忽略 '**' 或 '***'。
    """
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
    """
    检查翻译后的数据中，是否有条目完全未被翻译（与原文完全相同），
    但排除整条都在括号内的情况（即括号外无内容），且原文长度至少为3个字符。
    """
    logger.info(f"--- 开始检查【{lang_name}】可能漏翻译的 {field_name} 条目 ---")
    untouched_entries = []

    # 最小长度阈值（字符数），可自定义
    MIN_LENGTH = 3

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

        for o_str, t_str in zip(orig_expanded, trans_expanded):
            if o_str == t_str:
                # ---- 新增：跳过长度小于阈值的条目（如单独的 '*'） ----
                if len(o_str) < MIN_LENGTH:
                    continue
                outside = extract_outside_parentheses(o_str)
                if outside.strip():
                    hero_name = trans_item.get('name', 'N/A')
                    untouched_entries.append({
                        'heroId': orig_item.get('heroId', 'N/A'),
                        'name': hero_name,
                        'english': o_str,
                        'translation': t_str
                    })

    if untouched_entries:
        logger.warning(f"  >>> 发现 {len(untouched_entries)} 条 {field_name} 条目完全未翻译（与原文相同）。")
        for entry in untouched_entries:
            logger.warning(f"英雄ID: {entry['heroId']}, 名称: {entry['name']}\n原文: {entry['english']}\n译文: {entry['translation']}\n")
    else:
        logger.info(f"  √ 未发现完全未翻译的 {field_name} 条目。")
        
def main():
    """主函数，实现翻译后合并的核心逻辑"""
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
        if 'effects' not in item or not isinstance(item['effects'], list): continue

        original_effects = [s for s in (extract_string_from_item(e) for e in item['effects']) if s and s.strip()]
        if not original_effects: continue
        total_items += 1
        
        # --- 简体中文翻译流程 ---
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

        # --- 繁体中文翻译流程 (逻辑同上) ---
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
        if output_dir_cn and not os.path.exists(output_dir_cn): os.makedirs(output_dir_cn)
        translated_json_string_cn = json.dumps(translated_data_cn, ensure_ascii=False, indent=4)
        prefix_cn = prefix.replace('allTranslations', 'translatedEffectsCN') if 'allTranslations' in prefix else prefix
        with open(output_file_cn, 'w', encoding='utf-8') as f: f.write(prefix_cn + translated_json_string_cn + suffix)
        logger.info(f"简体中文结果已成功保存到: {output_file_cn}")
    except Exception as e: logger.error(f"写入简体中文输出文件时发生错误: {e}")

    try:
        output_dir_tc = os.path.dirname(output_file_tc)
        if output_dir_tc and not os.path.exists(output_dir_tc): os.makedirs(output_dir_tc)
        translated_json_string_tc = json.dumps(translated_data_tc, ensure_ascii=False, indent=4)
        prefix_tc = prefix.replace('allTranslations', 'translatedEffectsTC') if 'allTranslations' in prefix else prefix
        with open(output_file_tc, 'w', encoding='utf-8') as f: f.write(prefix_tc + translated_json_string_tc + suffix)
        logger.info(f"繁体中文结果已成功保存到: {output_file_tc}")
    except Exception as e: logger.error(f"写入繁体中文输出文件时发生错误: {e}")

    # --- 新增：遗漏翻译检查 ---
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