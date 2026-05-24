import os
import csv
import json
import re
from pathlib import Path

# 语言配置映射
LANGUAGE_CONFIG = {
    'ChineseSimplified': 'cn',
    'ChineseTraditional': 'tc',
    'English': 'en',
    'Arabic': 'ar',
    'Danish': 'da',
    'Dutch': 'nl',
    'Finnish': 'fi',
    'French': 'fr',
    'German': 'de',
    'Indonesian': 'id',
    'Italian': 'it',
    'Japanese': 'ja',
    'Korean': 'ko',
    'Norwegian': 'no',
    'Polish': 'pl',
    'Portuguese': 'pt',
    'Russian': 'ru',
    'Spanish': 'es',
    'Swedish': 'sv',
    'Turkish': 'tr',
}

# 匹配规则：(前缀, 分组名, 排除后缀列表)
RULES = [
    ('element.plain.', 'color', []),
    ('hero.class.', 'class', ['requirements']),
    ('manaspeed.', 'speed', ['turnsleft', 'dragon', 'other']),
    ('limitbreak.gift.title.', 'aether_power', []),
    #("specials.name.", "skill_name", []),
    #("heroes.name_fancy.", "fancy_name", [])
    
]

def process_language_file(file_path: Path) -> dict:
    """处理单个语言文件，返回 {lang_code: {group: {subkey: text}}} 结构"""
    stem = file_path.stem
    lang_code = LANGUAGE_CONFIG.get(stem)
    if lang_code is None:
        print(f"警告：未找到语言代码映射，跳过文件 {file_path.name}")
        return {}

    result = {}
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            reader = csv.reader(f)
            for row in reader:
                if len(row) < 2:
                    continue
                key = row[0].strip()
                text = row[1].strip()
                # 删除方括号，保留内部内容
                text = re.sub(r'\[.*?\]', '', text)
                # 检查是否匹配任一规则
                for prefix, group, exclude_suffixes in RULES:
                    if key.startswith(prefix):
                        suffix = key[len(prefix):]
                        # 要求后缀中不包含点号（即不能有更深层级）
                        if '.' not in suffix and suffix not in exclude_suffixes:
                            if group not in result:
                                result[group] = {}
                            result[group][suffix] = text
                        break  # 一旦匹配一个规则就不再检查其他规则
    except Exception as e:
        print(f"处理文件 {file_path} 时出错: {e}")
    return {lang_code: result} if result else {}

def main():
    languages_dir = Path('./languages')
    if not languages_dir.exists() or not languages_dir.is_dir():
        print("错误：找不到 ./languages 文件夹")
        return

    all_data = {}
    for txt_file in languages_dir.glob('*.txt'):
        print(f"处理文件: {txt_file.name}")
        lang_data = process_language_file(txt_file)
        for lang, groups in lang_data.items():
            if lang not in all_data:
                all_data[lang] = {}
            for group, sub_dict in groups.items():
                if group not in all_data[lang]:
                    all_data[lang][group] = {}
                all_data[lang][group].update(sub_dict)

    # 写入 JSON 文件
    output_path = Path('base_values_dict_other.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)

    print(f"提取完成，结果已保存到 {output_path}")

if __name__ == '__main__':
    main()