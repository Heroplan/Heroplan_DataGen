import json

# 加载JSON数据文件
with open('heroes_data_cn.json', 'r', encoding='utf-8') as f:
    heroes_data = json.load(f)

# 创建一个列表用于存储提取后的5星英雄数据
five_star_heroes_specified = []

# 遍历所有英雄数据
for hero in heroes_data:
    if hero.get('star') == 5:
        # 只提取您指定的项目
        specified_hero_data = {
            "name": hero.get("name"),
            "class": hero.get("class"),
            "power": hero.get("power"),
            "attack": hero.get("attack"),
            "defense": hero.get("defense"),
            "health": hero.get("health"),
            "lb1": hero.get("lb1"),
            "lb2": hero.get("lb2")
        }
        five_star_heroes_specified.append(specified_hero_data)

# 将提取到的数据写入新的JSON文件
with open('5_star_heroes_specified_fields.json', 'w', encoding='utf-8') as f:
    json.dump(five_star_heroes_specified, f, ensure_ascii=False, indent=4)

print("已成功提取5星英雄的指定数据，并保存至 '5_star_heroes_specified_fields.json'")