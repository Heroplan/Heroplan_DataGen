import json

def correct_groupings(data):
    for hero_name, hero_data in data.items():
        # 移除 effects 字段（如果存在）
        if "effects" in hero_data:
            del hero_data["effects"]
    return data

# 读取JSON文件
with open('heroes_data_extra_skill_cn_with_effects.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 矫正分组
corrected_data = correct_groupings(data)

# 写回文件，保持格式
with open('heroes_data_extra_skill_cn.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_data, f, ensure_ascii=False, indent=4, separators=(',', ': '))

print("移除effects完成！")