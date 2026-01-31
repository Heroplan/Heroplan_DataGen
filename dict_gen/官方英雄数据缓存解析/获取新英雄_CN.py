import json
import os
import re
from datetime import datetime

# 读取JSON文件内容
def load_json(file_path):
    print(f"加载文件: {file_path}")
    if not os.path.exists(file_path):
        print(f"文件不存在: {file_path}")
        return {}
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
        print(f"加载成功，文件包含 {len(data)} 条数据")
        return data

# 读取英雄名称字典文件
def load_name_dict(txt_file_path, prefix="heroes.name."):
    print(f"加载名称字典文件: {txt_file_path}")
    name_dict = {}
    
    if not os.path.exists(txt_file_path):
        print(f"名称字典文件不存在: {txt_file_path}")
        return name_dict
    
    with open(txt_file_path, 'r', encoding='utf-8') as file:
        for line in file:
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            
            # 解析 "heroes.name.orc_skirmisher","Zudak" 格式
            match = re.match(r'"([^"]+)","([^"]+)"', line)
            if match:
                key, value = match.groups()
                # 去除指定的前缀
                if key.startswith(prefix):
                    clean_key = key[len(prefix):]  # 去掉前缀
                    name_dict[clean_key] = value
                # 同时保存原始键名
                name_dict[key] = value
    
    print(f"名称字典加载成功，包含 {len(name_dict)} 个条目")
    return name_dict

# 读取家族名称字典文件
def load_family_dict(txt_file_path):
    print(f"加载家族字典文件: {txt_file_path}")
    family_dict = {}
    
    if not os.path.exists(txt_file_path):
        print(f"家族字典文件不存在: {txt_file_path}")
        return family_dict
    
    with open(txt_file_path, 'r', encoding='utf-8') as file:
        for line in file:
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            
            # 解析 "herocard.family.title.alfheim","Alfheim Realm" 格式
            match = re.match(r'"([^"]+)","([^"]+)"', line)
            if match:
                key, value = match.groups()
                # 提取family ID（去掉前缀）
                if key.startswith("herocard.family.title."):
                    family_id = key[len("herocard.family.title."):]
                    family_dict[family_id] = value
                # 同时保存原始键名
                family_dict[key] = value
    
    print(f"家族字典加载成功，包含 {len(family_dict)} 个条目")
    return family_dict

# 从英雄名称字典中查找英雄名称
def get_name_from_dict(name_key, name_dict, dict_type="name"):
    # 如果name_key是hero_id，尝试添加前缀查找
    if dict_type == "name":
        prefixed_key = f"heroes.name.{name_key}"
    else:  # fancy_name
        prefixed_key = f"heroes.name_fancy.{name_key}"
    
    if prefixed_key in name_dict:
        return name_dict[prefixed_key]
    
    return None

# 从家族字典中查找家族名称
def get_family_display_name(family_id, family_dict):
    if family_id and family_id.startswith("zodiac_"):
        family_id = "zodiac"
    
    # 加上前缀查找
    prefixed_key = f"herocard.family.title.{family_id}"
    if prefixed_key in family_dict:
        return family_dict[prefixed_key]
    
    # 如果找不到，返回原始family_id
    return family_id

# 解析日期字符串为datetime对象用于排序
def parse_date(date_str):
    if not date_str:
        return datetime.max  # 将空日期放到最后
    try:
        return datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
    except ValueError:
        return datetime.max  # 格式错误的日期放到最后

# 检查年份是否大于等于2200
def is_year_gte_2200(date_str):
    if not date_str:
        return False
    try:
        year = int(date_str.split('-')[0])
        return year >= 2200
    except (ValueError, IndexError):
        return False

# 处理单个英雄数据
def process_hero_data(hero_id_key, hero_data, name_dict, fancy_name_dict, family_dict):
    # 获取英雄的基本数据
    color = hero_data.get("element", "")
    star = hero_data.get("rarity", 0)
    family_id = hero_data.get("family", "")
    parent_hero_id = hero_data.get("parentHeroId", "")
    can_be_received_date = hero_data.get("canBeReceivedDate", "")
    
    # 获取家族显示名称
    family_display = get_family_display_name(family_id, family_dict)
    
    # 查找英雄的名称
    name_key = parent_hero_id if parent_hero_id else hero_id_key
    name = get_name_from_dict(name_key, name_dict, "name")
    
    if not name:
        print(f"  无法为 {hero_id_key} 找到名称")
        return None
    
    # 查找英雄的fancy_name
    fancy_name = get_name_from_dict(hero_id_key, fancy_name_dict, "fancy")
    
    if not fancy_name:
        print(f"  警告: 无法为 {hero_id_key} 找到fancy_name，使用ID作为回退")
        fancy_name = hero_data.get("id", hero_id_key)  # 回退到characters_en.json中的id
    
    #print(f"  找到名称: {name}, fancy_name: {fancy_name}")
    
    # 构建新的英雄数据
    new_hero = {
        "name": name,
        "fancy_name": fancy_name,
        "color": color,
        "Release date": "",  # 固定为空字符串
        "canBeReceivedDate": can_be_received_date,  # 保留原始值
        "star": star,
        "family": family_display,  # 使用家族显示名称
        "costume_id": 1 if parent_hero_id else 0,
        "heroId": hero_id_key,  # 使用原始键名
        "Lottery_Only": 1
    }
    return new_hero

# 生成新的英雄列表
def generate_heroes_data(file_1, file_2, name_dict, fancy_name_dict, family_dict):
    print("开始生成英雄数据...")

    # 加载文件
    chars_1 = load_json(file_1)
    chars_2 = load_json(file_2)

    # 生成三份统计
    current_unique_heroes = []  # 年份<2200的独有项
    future_unique_heroes = []   # 年份>=2200的独有项
    future_all_heroes = []      # 年份>=2200的所有项
    
    # 处理所有英雄
    for hero_id_key, hero_data in chars_2.items():
        can_be_received_date = hero_data.get("canBeReceivedDate", "")
        is_future = is_year_gte_2200(can_be_received_date)
        is_unique = hero_id_key not in chars_1
        
        # 处理英雄数据
        hero_processed = process_hero_data(hero_id_key, hero_data, name_dict, fancy_name_dict, family_dict)
        if not hero_processed:
            continue
            
        if is_future:
            # 未来英雄：年份>=2200
            if is_unique:
                # 添加到未来独有列表
                future_unique_heroes.append(hero_processed)
            
            # 添加到未来所有列表（无论是否独有）
            future_all_heroes.append(hero_processed)
        else:
            # 当前英雄：年份<2200
            if is_unique:
                # 添加到当前独有列表
                current_unique_heroes.append(hero_processed)
    
    return current_unique_heroes, future_unique_heroes, future_all_heroes

# 保存数据到文件
def save_heroes_data(heroes_list, output_file, list_type="英雄"):
    # 检查是否有数据
    if not heroes_list:
        print(f"\n{list_type}列表没有找到任何英雄")
        return
    
    print(f"\n{list_type}列表共找到 {len(heroes_list)} 个英雄")

    # 按 canBeReceivedDate 排序
    print(f"按 canBeReceivedDate 排序{list_type}列表...")
    heroes_list.sort(key=lambda x: parse_date(x.get("canBeReceivedDate", "")))
    
    # 将结果写入文件
    print(f"将{list_type}数据写入 {output_file}")
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(heroes_list, file, indent=4, ensure_ascii=False)

    print(f"{list_type}数据已生成并保存到 {output_file}")
    
    # 打印排序后的英雄列表
    print(f"\n排序后的{list_type}列表:")
    for hero in heroes_list:
        date_str = hero.get("canBeReceivedDate", "无日期")
        # 颜色翻译字典
        COLOR_TRANSLATION = {
            "Red": "红",
            "Blue": "蓝", 
            "Green": "绿",
            "Yellow": "黄",
            "Purple": "紫"
        }
        # 添加颜色翻译
        color_en = hero.get("color", "")
        color_cn = COLOR_TRANSLATION.get(color_en, color_en)
        print(f"  {date_str}: {hero['name']} : {hero['fancy_name']} - {color_cn} - {hero['star']}星 - {hero['family']}")

# 文件路径
file_1 = './CachedConfigurations/json/characters_en.json'
file_2 = 'T:/FileTemp/CachedConfigurations/json/characters_en.json'
name_dict_file = '../官方语言字典生成/generated_txt/heroes_name_cn.txt'
fancy_name_dict_file = '../官方语言字典生成/generated_txt/heroes_name_fancy_cn.txt'
family_dict_file = '../官方语言字典生成/generated_txt/family_title_cn.txt'
current_unique_output = 'new_heroes_cn.json'  # 年份<2200的独有项
future_unique_output = 'future_heroes_cn.json'     # 年份>=2200的独有项
future_all_output = 'future_heroes_all_cn.json'         # 年份>=2200的所有项

# 检查文件是否存在
for file_path, desc in [
    (name_dict_file, "名称字典"), 
    (fancy_name_dict_file, "Fancy名称字典"),
    (family_dict_file, "家族字典")
]:
    if not os.path.exists(file_path):
        print(f"错误: {desc}文件不存在: {file_path}")
        print(f"当前工作目录: {os.getcwd()}")
        # 尝试相对路径
        alt_path = f'./官方语言字典生成/generated_txt/{os.path.basename(file_path)}'
        if os.path.exists(alt_path):
            print(f"尝试使用路径: {alt_path}")
            if desc == "名称字典":
                name_dict_file = alt_path
            elif desc == "Fancy名称字典":
                fancy_name_dict_file = alt_path
            else:  # 家族字典
                family_dict_file = alt_path
        else:
            print(f"请确保文件路径正确，然后重试")
            exit(1)

# 读取英雄名称字典文件
name_dict = load_name_dict(name_dict_file, prefix="heroes.name.")
fancy_name_dict = load_name_dict(fancy_name_dict_file, prefix="heroes.name_fancy.")
family_dict = load_family_dict(family_dict_file)

# 打印字典中的一些示例
print(f"\n名称字典包含 {len(name_dict)} 个条目")
print(f"\nFancy名称字典包含 {len(fancy_name_dict)} 个条目")
print(f"\n家族字典包含 {len(family_dict)} 个条目")
print("家族字典示例:")
for i, (key, value) in enumerate(list(family_dict.items())[:5]):
    print(f"  {key}: {value}")

# 生成英雄数据
current_unique, future_unique, future_all = generate_heroes_data(
    file_1, file_2, name_dict, fancy_name_dict, family_dict
)

# 保存当前独有英雄（年份<2200的独有项）
save_heroes_data(current_unique, current_unique_output, "当前独有英雄")

# 保存未来独有英雄（年份>=2200的独有项）
save_heroes_data(future_unique, future_unique_output, "未来独有英雄")

# 保存未来所有英雄（年份>=2200的所有项）
save_heroes_data(future_all, future_all_output, "未来所有英雄")

print(f"\n=== 统计汇总 ===")
print(f"当前独有英雄数量（年份<2200的独有项）: {len(current_unique)}")
print(f"未来独有英雄数量（年份>=2200的独有项）: {len(future_unique)}")
print(f"未来所有英雄数量（年份>=2200的所有项）: {len(future_all)}")
print(f"未来重复英雄数量（未来所有-未来独有）: {len(future_all) - len(future_unique)}")

input("\n按任意键退出...")