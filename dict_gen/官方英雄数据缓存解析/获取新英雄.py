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

# 从英雄名称字典中查找英雄名称
def get_name_from_dict(name_key, name_dict, dict_type="name"):
    # 首先尝试用原始name_key查找
    if name_key in name_dict:
        return name_dict[name_key]
    
    # 如果name_key是hero_id，尝试添加前缀查找
    if dict_type == "name":
        prefixed_key = f"heroes.name.{name_key}"
    else:  # fancy_name
        prefixed_key = f"heroes.name_fancy.{name_key}"
    
    if prefixed_key in name_dict:
        return name_dict[prefixed_key]
    
    return None

# 解析日期字符串为datetime对象用于排序
def parse_date(date_str):
    if not date_str:
        return datetime.max  # 将空日期放到最后
    try:
        return datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
    except ValueError:
        return datetime.max  # 格式错误的日期放到最后

# 生成新的英雄列表
def generate_new_heroes(file_1, file_2, name_dict, fancy_name_dict, output_file):
    print("开始生成新的英雄数据...")

    # 加载文件
    chars_1 = load_json(file_1)
    chars_2 = load_json(file_2)

    # 从第二个文件中筛选独有的项
    new_heroes_list = []
    for hero_id_key, hero_data in chars_2.items():
        # 检查hero_id是否存在于第一个文件中
        if hero_id_key not in chars_1:
            # 过滤"canBeReceivedDate"年份不为2200的数据
            can_be_received_date = hero_data.get("canBeReceivedDate", "")
            if can_be_received_date and can_be_received_date.startswith("2200"):
                print(f"跳过 {hero_id_key}，canBeReceivedDate为2200: {can_be_received_date}")
                continue

            # 获取英雄的基本数据
            color = hero_data.get("element", "")
            star = hero_data.get("rarity", 0)
            family = hero_data.get("family", "")
            parent_hero_id = hero_data.get("parentHeroId", "")
            
            # 调试信息
            print(f"\n处理英雄: {hero_id_key}")
            
            # 查找英雄的名称
            name_key = parent_hero_id if parent_hero_id else hero_id_key
            name = get_name_from_dict(name_key, name_dict, "name")
            
            if not name:
                print(f"  无法为 {hero_id_key} 找到名称")
                continue
            
            # 查找英雄的fancy_name
            fancy_name = get_name_from_dict(name_key, fancy_name_dict, "fancy")
            
            if not fancy_name:
                print(f"  警告: 无法为 {hero_id_key} 找到fancy_name，使用ID作为回退")
                fancy_name = hero_data.get("id", name_key)  # 回退到characters_en.json中的id
            
            print(f"  找到名称: {name}, fancy_name: {fancy_name}")
            
            # 构建新的英雄数据
            new_hero = {
                "name": name,
                "fancy_name": fancy_name,
                "color": color,
                "Release date": "",  # 固定为空字符串
                "canBeReceivedDate": can_be_received_date,  # 保留原始值
                "star": star,
                "family": family,
                "costume_id": 1 if parent_hero_id else 0,
                "heroId": hero_id_key,  # 使用原始键名
                "Lottery_Only": 1
            }
            new_heroes_list.append(new_hero)
        else:
            print(f".", end="", flush=True)  # 显示处理进度

    # 检查是否有数据
    if not new_heroes_list:
        print("\n没有找到任何独有英雄")
    else:
        print(f"\n共找到 {len(new_heroes_list)} 个独有英雄")

    # 按 canBeReceivedDate 排序
    print("按 canBeReceivedDate 排序...")
    new_heroes_list.sort(key=lambda x: parse_date(x.get("canBeReceivedDate", "")))
    
    # 将结果写入 new_heroes.json
    print(f"将数据写入 {output_file}")
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(new_heroes_list, file, indent=4, ensure_ascii=False)

    print(f"新的英雄数据已生成并保存到 {output_file}")
    
    # 打印排序后的英雄列表
    print("\n排序后的英雄列表:")
    for hero in new_heroes_list:
        date_str = hero.get("canBeReceivedDate", "无日期")
        print(f"  {date_str}: {hero['name']}: {hero['fancy_name']} - {hero['color']}星{hero['star']}")

# 文件路径
file_1 = './CachedConfigurations/json/characters_en.json'
file_2 = 'T:/FileTemp/CachedConfigurations/json/characters_en.json'
name_dict_file = '../官方语言字典生成/generated_txt/heroes_name_en.txt'
fancy_name_dict_file = '../官方语言字典生成/generated_txt/heroes_name_fancy_en.txt'
output_file = 'new_heroes.json'

# 检查文件是否存在
for file_path, desc in [(name_dict_file, "名称字典"), (fancy_name_dict_file, "Fancy名称字典")]:
    if not os.path.exists(file_path):
        print(f"错误: {desc}文件不存在: {file_path}")
        print(f"当前工作目录: {os.getcwd()}")
        # 尝试相对路径
        alt_path = f'./官方语言字典生成/generated_txt/{os.path.basename(file_path)}'
        if os.path.exists(alt_path):
            print(f"尝试使用路径: {alt_path}")
            if desc == "名称字典":
                name_dict_file = alt_path
            else:
                fancy_name_dict_file = alt_path
        else:
            print(f"请确保文件路径正确，然后重试")
            exit(1)

# 读取英雄名称字典文件
name_dict = load_name_dict(name_dict_file, prefix="heroes.name.")
fancy_name_dict = load_name_dict(fancy_name_dict_file, prefix="heroes.name_fancy.")

# 打印字典中的一些示例
print(f"\n名称字典包含 {len(name_dict)} 个条目")
print(f"\nFancy名称字典包含 {len(fancy_name_dict)} 个条目")

# 生成新的英雄数据
generate_new_heroes(file_1, file_2, name_dict, fancy_name_dict, output_file)
input("\n按任意键退出...")