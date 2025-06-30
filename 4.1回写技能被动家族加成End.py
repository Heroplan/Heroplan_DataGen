# -*- coding: utf-8 -*-
import json
import re
import os
import logging

def setup_logger(log_file, logger_name):
    """
    配置日志记录器。
    """
    logger = logging.getLogger(logger_name)
    logger.setLevel(logging.INFO)
    if logger.hasHandlers():
        logger.handlers.clear()

    # 文件日志
    file_handler = logging.FileHandler(log_file, mode='w', encoding='utf-8')
    file_handler.setLevel(logging.INFO)
    file_formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(file_formatter)

    # 控制台日志
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)
    console_formatter = logging.Formatter('%(message)s')
    console_handler.setFormatter(console_formatter)

    logger.addHandler(file_handler)
    logger.addHandler(console_handler)
    return logger

def load_js_data(file_path, logger):
    """
    从JS文件中加载数据，可以处理数组 [...] 和对象 {...}。
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        match = re.search(r'=\s*([\s\S]*?);', content, re.DOTALL)
        if not match:
            logger.error(f"错误: 在 {file_path} 中未找到 '... = data;' 结构。")
            return None
        return json.loads(match.group(1).strip())
    except FileNotFoundError:
        logger.error(f"错误: 找不到文件 {file_path}")
        return None
    except Exception as e:
        logger.error(f"读取或解析 {file_path} 时发生错误: {e}")
        return None

def run_cumulative_update(lang_code, config, tasks, logger):
    """
    第一步：执行累积更新，并将更新后的内容写回原始的JS文件。
    """
    lang_upper = lang_code.upper()
    main_file = config['source']
    output_files = config['outputs']
    
    logger.info(f"\n==================== [步骤 1: 累积更新JS] 语言: [{lang_upper}] ====================")
    
    # 加载主数据文件并保留其原始结构
    try:
        with open(main_file, 'r', encoding='utf-8') as f:
            main_content_raw = f.read()
        match_main = re.search(r'(=)\s*(\[[\s\S]*\])\s*(;?)', main_content_raw)
        if not match_main:
            logger.error(f"错误: 在主文件 {main_file} 中找不到 '... = [...]' 结构。跳过 [{lang_upper}]。")
            return False
        
        all_heroes_in_memory = json.loads(match_main.group(2))
    except (FileNotFoundError, json.JSONDecodeError) as e:
        logger.error(f"加载主文件 {main_file} 失败: {e}。跳过 [{lang_upper}]。")
        return False

    # 在内存中累积合并翻译
    for task in tasks:
        field_name = task['field']
        translated_file_path = os.path.join('translated', f"{task['translated_stem']}_{lang_code.lower()}.js")
        logger.info(f"--- 正在为 [{lang_upper}] 合并 '{field_name}' 字段 ---")

        if not os.path.exists(translated_file_path):
            logger.warning(f"警告 [{lang_upper}]: 跳过 '{field_name}'，找不到翻译文件: {translated_file_path}")
            continue

        translated_data = load_js_data(translated_file_path, logger)
        if not translated_data:
            logger.warning(f"警告 [{lang_upper}]: 跳过 '{field_name}'，翻译文件加载或解析失败。")
            continue
        
        translation_map = {item.get('originalIndex'): item.get(field_name) for item in translated_data if item.get('originalIndex') is not None}
        
        update_count = 0
        for hero in all_heroes_in_memory:
            if (hero_originalIndex := hero.get('originalIndex')) in translation_map:
                if (translated_field_data := translation_map[hero_originalIndex]) is not None:
                    hero[field_name] = translated_field_data
                    update_count += 1
        logger.info(f"在内存中为 [{lang_upper}] 更新了 {update_count} 个英雄的 '{field_name}' 字段。")
    
    # 将更新后的内容写回所有指定的JS输出文件
    logger.info(f"--- [{lang_upper}] 开始将累积更新写回 .js 文件 ---")
    try:
        final_json_string = json.dumps(all_heroes_in_memory, ensure_ascii=False, indent=4)
        final_content = "window.allHeroes = \n" + final_json_string + ";"

        for output_file in output_files:
            output_dir = os.path.dirname(output_file)
            if output_dir and not os.path.exists(output_dir):
                os.makedirs(output_dir)
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(final_content)
            logger.info(f"✅ 成功！[{lang_upper}] 的JS文件已更新: '{output_file}'")
        return True
    except Exception as e:
        logger.error(f"写回JS文件时发生错误: {e}")
        return False

def run_final_json_merge(lang_code, logger):
    """
    第二步：使用上一步更新后的文件，与其他文件合并，生成最终的压缩版JSON。
    """
    lang_upper = lang_code.upper()
    logger.info(f"\n==================== [步骤 2: 生成JSON] 语言: [{lang_upper}] ====================")

    # 定义所有需要合并的源文件路径（注意：这里使用了上一步更新后的文件）
    updated_heroes_file = f'heroes_data_{lang_code}.js'
    families_bonus_file = f'translated/families_bonus_{lang_code}.js'
    family_values_file = f'family_values_{lang_code}.js'

    logger.info(f"加载更新后的英雄数据: '{updated_heroes_file}'")
    logger.info(f"加载家族加成数据: '{families_bonus_file}'")
    logger.info(f"加载家族名称数据: '{family_values_file}'")

    # 加载所有数据
    all_heroes = load_js_data(updated_heroes_file, logger)
    families_bonus = load_js_data(families_bonus_file, logger)
    family_values = load_js_data(family_values_file, logger)

    if any(data is None for data in [all_heroes, families_bonus, family_values]):
        logger.error(f"[{lang_upper}] 因一个或多个源文件加载失败，无法生成最终JSON文件。")
        return

    # 合并数据
    combined_data = {
        'allHeroes': all_heroes,
        'families_bonus': families_bonus,
        'family_values': family_values
    }

    # 定义最终输出路径和文件名
    output_dir = '../Heroplan.github.io'
    output_file = os.path.join(output_dir, f'data_{lang_code}.json')

    # 写入压缩版的JSON文件
    try:
        os.makedirs(output_dir, exist_ok=True)
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(combined_data, f, ensure_ascii=False, indent=None, separators=(',', ':'))
        logger.info(f"🎉 最终成功！[{lang_upper}] 的压缩JSON文件已生成: '{output_file}'")
    except Exception as e:
        logger.error(f"写入最终JSON文件 '{output_file}' 时发生错误: {e}")


def main():
    """
    主函数，按顺序执行两个主要步骤。
    """
    # ------------------- 配置 -------------------
    if not os.path.exists('logs'):
        os.makedirs('logs')
    logger = setup_logger('../logs/full_process_log.log', 'FullProcess')
    
    TASKS = [
        {'field': 'effects', 'translated_stem': 'effects'},
        {'field': 'passives', 'translated_stem': 'passives'},
    ]

    LANG_CONFIG = {
        'cn': {
            'source': 'heroes_data_cn.js',
            'outputs': ['heroes_data_cn.js']
        },
        'tc': {
            'source': 'heroes_data_tc.js',
            'outputs': ['heroes_data_tc.js']
        },
        'en': {
            'source': 'heroes_data_en.js',
            'outputs': ['heroes_data_en.js']
        }
    }

    # ------------------- 执行 -------------------
    logger.info("===== 开始执行数据处理两步流程 =====")
    
    for lang_code, config in LANG_CONFIG.items():
        # 执行第一步
        update_successful = run_cumulative_update(lang_code, config, TASKS, logger)
        
        # 如果第一步成功，则执行第二步
        if update_successful:
            run_final_json_merge(lang_code, logger)
        else:
            logger.error(f"由于步骤1失败，已跳过语言 [{lang_code.upper()}] 的步骤2。")

    logger.info("\n===== 所有流程执行完毕 =====")

if __name__ == '__main__':
    main()