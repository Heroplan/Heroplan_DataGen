import json

# 定义正确的分组规则：键是项目名称，值是正确的分组名
CORRECTION_RULES = {
    "叠加：攻击力↑": "增益效果",
    # 可以在这里添加更多的纠正规则
    # "错误放置的项目": "正确的分组名"
}

def correct_groupings(data):
    for hero_name, hero_data in data.items():
        # 检查所有可能的分组
        for group_name in ["基础技能", "特殊效果", "增益效果", "负面效果"]:
            if group_name not in hero_data:
                continue
            
            # 创建副本以便安全地修改列表
            items = hero_data[group_name][:]
            
            for item in items:
                # 检查这个项目是否需要移动到其他分组
                if item in CORRECTION_RULES and CORRECTION_RULES[item] != group_name:
                    # 从当前分组移除
                    hero_data[group_name].remove(item)
                    # 添加到正确的分组
                    correct_group = CORRECTION_RULES[item]
                    if correct_group not in hero_data:
                        hero_data[correct_group] = []
                    hero_data[correct_group].append(item)
    
    return data

# 读取JSON文件
with open('heroes_data_extra_skill_cn.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 矫正分组
corrected_data = correct_groupings(data)

# 写回文件，保持格式
with open('heroes_data_extra_skill_cn.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_data, f, ensure_ascii=False, indent=4, separators=(',', ': '))

print("分组矫正完成！")