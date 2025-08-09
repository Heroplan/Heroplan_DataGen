import json
import re
import os
from collections import OrderedDict

# --- 配置 ---
INPUT_FILE = 'heroes_data_extra.js'
OUTPUT_FILE = 'heroes_data_extra_sorted.js'

# --- 在这里定义你想要的最终键顺序 ---
# 根据你提供的示例，我们定义如下顺序
DESIRED_KEY_ORDER = [
    "name",
    "fancy name",
    "element",
    "rarity",
    "Release date",
    "AetherPower",
    "skill_types",
    "heroId",
    "baseAttack",
    "baseDefense",
    "baseHealth",
    "specialId",
    "specialId_costume",
    "passiveSkills",
    "costumeBonusPassiveSkillIds",
    # 为了防止数据丢失，将可能存在的其他键也按逻辑顺序加入
    "attackBonus",
    "defenseBonus",
    "healthBonus",
    "manaBonus"
]

def sort_hero_data():
    """
    读取、排序并写回英雄数据。
    """
    print(f"--- 开始处理文件：'{INPUT_FILE}' ---")

    # 1. 检查输入文件是否存在
    if not os.path.exists(INPUT_FILE):
        print(f"❌ 错误：输入文件 '{INPUT_FILE}' 在当前目录下未找到。")
        return

    # 2. 读取JavaScript文件内容
    try:
        with open(INPUT_FILE, 'r', encoding='utf-8') as f:
            js_content = f.read()
    except Exception as e:
        print(f"❌ 读取文件时发生错误: {e}")
        return

    # 3. 使用正则表达式提取JSON数组部分
    match = re.search(r'=\s*(\[[\s\S]*?\])\s*;', js_content)
    if not match:
        print(f"❌ 错误：在 '{INPUT_FILE}' 文件中未能找到 'window.allHeroesExtra = [...]' 格式的数据。")
        return

    # 4. 解析JSON数据
    try:
        heroes_list = json.loads(match.group(1))
        print(f"✅ 成功读取并解析了 {len(heroes_list)} 条英雄数据。")
    except json.JSONDecodeError as e:
        print(f"❌ 文件中的JSON数据格式有误，无法解析: {e}")
        return

    # 5. 遍历并排序每个英雄的字典
    reordered_list = []
    for hero_dict in heroes_list:
        # 使用OrderedDict来保证键的顺序
        reordered_hero = OrderedDict()
        
        # 按照预设顺序添加键
        for key in DESIRED_KEY_ORDER:
            if key in hero_dict:
                reordered_hero[key] = hero_dict[key]
        
        # 添加未在预设顺序中的其他键，防止数据丢失
        for key, value in hero_dict.items():
            if key not in reordered_hero:
                reordered_hero[key] = value
        
        reordered_list.append(reordered_hero)

    print("✅ 所有英雄数据的键已按指定顺序重新排列。")

    # 6. 生成新的JS文件内容
    try:
        # 将排序后的列表转换为格式化的JSON字符串
        json_string = json.dumps(reordered_list, indent=4, ensure_ascii=False)
        output_content = f"window.allHeroesExtra = {json_string};"
        
        # 写入新文件
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(output_content)
        
        print(f"🎉 成功！已将排序后的数据写入到新文件：'{OUTPUT_FILE}'")
        print("你可以检查这个新文件，确认无误后用它替换原始文件。")

    except Exception as e:
        print(f"❌ 写入输出文件时发生错误: {e}")


if __name__ == '__main__':
    sort_hero_data()
    # 在Windows上运行时，此行可以防止命令行窗口立即关闭
    # os.system("pause")