# -*- coding: utf-8 -*-
import os
import yaml
import re
import json # 引入 json 模块

# --- [新增] 家族名称修正字典 ---
# 此字典用于将从YAML文件名中提取的旧家族名映射到新的、正确的新名称。
family_name_corrections = {
    "avalon": "knight",
    "magiccarpet": "magic_carpet",
    "outlaws": "outlaw",
    "springvale": "easter",
    "morlovia": "halloween",
    "christmas": "winter",
    "2017": "hotm2017",
    "2018": "hotm2018",
    "2019": "hotm2019",
    "2020": "hotm2020",
    "2021": "hotm2021",
    "2022": "hotm2022",
    "2023": "hotm2023",
    "2024": "hotm2024",
    "2025": "hotm2025",
    "sakura": "japanese",
    "grimforest": "fable",
    "guardiansteltoc": "guardian",
    "underwild": "abyss",
    "plainshunter": "plains_hunter",
    "superelemental": "super_elemental",
    "pets": "mighty_pet",
    "starfall": "circus",
    "lunaryear": "zodiac",
    "junglehunter": "jungle_hunter",
    "abysshunter": "abyss_hunter",
    "defendersofatlantis": "tales1_goodies",
    "nightmaresofatlantis": "tales1_baddies",
    "slayer": "slayers",
    "astralelves": "astral_elves",
    "garrisonguard": "garrison",
    "woodlandfaun": "faun",
    "astraldwarfs": "astrald_warfs",
    "moth": "moths",
    "wildcat": "wild_cat"
}

def extract_family_name(filename):
    """从文件名中提取家族名称（格式为：数字-名称.yml）"""
    match = re.match(r'^\d+-(.+)\.yml$', filename)
    if match:
        return match.group(1)
    return None

def process_families():
    # 定义家族数据目录和输出JS文件路径
    families_dir = '../heroplan_data/data/families'
    output_js_to_translate = 'to_translate/families_bonus_to_translate.js'
    output_js_en_backup = 'translated/families_bonus_en.js'
    
    all_families_data = [] # 存储所有从YAML读取的家族数据
    
    # 1. 遍历家族目录中的每个YAML文件，读取数据到内存
    for filename in sorted(os.listdir(families_dir)): # 使用 sorted() 保证顺序一致
        if filename.endswith('.yml'):
            filepath = os.path.join(families_dir, filename)
            family_name = extract_family_name(filename)
            
            if family_name:
                # --- [修改] 应用名称修正字典 ---
                # 如果旧名称在字典中，则使用新名称，否则保留原名
                family_name = family_name_corrections.get(family_name, family_name)

                with open(filepath, 'r', encoding='utf-8') as file:
                    data = yaml.safe_load(file)
                    
                    if 'bonus' in data:
                        family_data = {
                            "name": family_name,
                            "bonus": data['bonus']
                        }
                        all_families_data.append(family_data)
    
    # 2. 在内存中处理数据，为每一项添加 originalIndex
    final_data_with_index = []
    for i, family in enumerate(all_families_data):
        indexed_family = {
            "originalIndex": i,
            "name": family["name"],
            "bonus": family["bonus"]
        }
        final_data_with_index.append(indexed_family)
        
    # 3. 使用 json.dumps 生成格式化且安全的JS数组字符串
    #    indent=4 用于美化格式，ensure_ascii=False 保证中文正常显示
    json_string = json.dumps(final_data_with_index, indent=4, ensure_ascii=False)
    
    # 4. 构建完整的JS文件内容
    final_js_content = f"window.families_bonus = {json_string};\n"

    # 5. 将完全相同的内容写入两个目标文件
    try:
        os.makedirs(os.path.dirname(output_js_to_translate), exist_ok=True)
        os.makedirs(os.path.dirname(output_js_en_backup), exist_ok=True)
        
        with open(output_js_to_translate, 'w', encoding='utf-8') as f:
            f.write(final_js_content)
        print(f"成功创建待翻译文件: {output_js_to_translate}")

        with open(output_js_en_backup, 'w', encoding='utf-8') as f:
            f.write(final_js_content)
        print(f"成功创建英文备份文件: {output_js_en_backup}")

    except Exception as e:
        print(f"写入文件时发生错误: {e}")


if __name__ == '__main__':
    process_families()