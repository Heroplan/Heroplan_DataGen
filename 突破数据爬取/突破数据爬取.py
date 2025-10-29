import json
import re
import time
import requests
import unicodedata

# 定义需要忽略的元素后缀
IGNORABLE_SUFFIXES = {'dark', 'holy', 'ice', 'nature', 'fire', 'red'}

def strip_ignorable_suffix(name):
    """如果名字以指定的元素后缀结尾，则移除它。"""
    if not isinstance(name, str) or ' ' not in name:
        return name
    parts = name.split(' ')
    if len(parts) > 1 and parts[-1].lower() in IGNORABLE_SUFFIXES:
        return ' '.join(parts[:-1])
    return name

def normalize_name(name):
    """
    规范化英雄名字，用于构建URL。
    """
    # **新增**：在所有处理之前，先移除元素后缀
    name = strip_ignorable_suffix(name)

    name = name.strip()
    name = name.replace("'", "")
    name = name.replace("´", "")
    name = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode('ascii')
    # 注意：这个替换逻辑可能不适用于所有情况，但根据原脚本保留
    match = re.search(r'\sC(\d*)$', name)
    if match:
        num_part = match.group(1)
        # 如果是 " C"，变成 "2"；如果是 " C2"，变成 "3"
        new_suffix = str(int(num_part) + 1) if num_part else '2'
        name = re.sub(r'\sC\d*$', new_suffix, name)
    name = name.replace(' ', '_')
    return name

def extract_raw_stats(html_content, original_hero_name):
    """
    从页面直接抓取所有可用的原始数据。
    """
    def get_limit_break_stats(lb_name):
        pattern = re.compile(
            rf"if\s*\(\s*lbHantei\s*==\s*\"{lb_name}\"\s*\)\s*{{.*?baseAttack = Number\('(\d+)'\).*?baseDefense = Number\('(\d+)'\).*?baseLife = Number\('(\d+)'\)",
            re.DOTALL
        )
        match = pattern.search(html_content)
        if match:
            return {"Attack": int(match.group(1)), "Defense": int(match.group(2)), "Life": int(match.group(3))}
        return None

    base_data = None
    costume_level_num = 0
    if " C" in original_hero_name:
        if original_hero_name.endswith(" C4"): costume_level_num = 4
        elif original_hero_name.endswith(" C3"): costume_level_num = 3
        elif original_hero_name.endswith(" C2"): costume_level_num = 2
        elif original_hero_name.endswith(" C"): costume_level_num = 1

    if costume_level_num > 0:
        container_id = f"cos{costume_level_num}id"
        main_pattern = re.compile(
            rf'id="{container_id}".*?'
            r'<span.*?class="cb\dAtk".*?>(\d+)<.*?'
            r'<span.*?class="cb\dDef".*?>(\d+)<.*?'
            r'<span.*?class="cb\dHP".*?>(\d+)<.*?'
            r'<span.*?class="cb\dPower".*?>(\d+)<',
            re.DOTALL
        )
        match = main_pattern.search(html_content)
        if match:
            base_data = {"Attack": int(match.group(1)),"Defense": int(match.group(2)),"Life": int(match.group(3)),"Power": int(match.group(4))}
    else:
        atk_match = re.search(r'class="statsnumber\s+basestatsAtk.*?<span id="statsnumber">(\d+)<', html_content, re.DOTALL)
        def_match = re.search(r'class="statsnumber\s+basestatsDef.*?<span id="statsnumber">(\d+)<', html_content, re.DOTALL)
        hp_match = re.search(r'class="statsnumber\s+basestatsHP.*?<span id="statsnumber">(\d+)<', html_content, re.DOTALL)
        power_match = re.search(r'class="statsnumber\s+statspower.*?<span id="statspower".*?>(\d+)<', html_content, re.DOTALL)
        if atk_match and def_match and hp_match:
            base_data = {"Attack": int(atk_match.group(1)),"Defense": int(def_match.group(1)),"Life": int(hp_match.group(1))}
            if power_match: base_data["Power"] = int(power_match.group(1))

    raw_stats = {"base": base_data,"lb1": get_limit_break_stats("radiolb1"),"lb2": get_limit_break_stats("radiolb2")}
    return {k: v for k, v in raw_stats.items() if v is not None}

def fetch_hero_data(hero_name, hero_info):
    """
    获取数据并执行最终的计算逻辑。
    hero_info 是从 name.json 中读取的包含英雄名和奖励的对象。
    """
    normalized_name = normalize_name(hero_name)
    url = f"https://bbcamp.info/herodb/{normalized_name}/"
    try:
        response = requests.get(url, timeout=15)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"  -> 获取 {hero_name} 数据失败: {e}")
        return None

    content = response.text
    raw_stats = extract_raw_stats(content, hero_name)

    if not raw_stats or not raw_stats.get("base"):
        print(f"  -> 警告：在 {hero_name} ({url}) 的页面上未能提取到基础属性")
        return None
        
    # --- 最终计算逻辑 ---
    final_data = {}
    final_data['base'] = raw_stats.get('base') # base数据总是直接抓取的最终值

    # 从传入的 hero_info 中获取服装奖励
    costume_bonus = hero_info.get('bonuses') if hero_info else None

    # 处理 lb1 和 lb2
    for lb_key in ['lb1', 'lb2']:
        if lb_key in raw_stats:
            vanilla_stats = raw_stats[lb_key]
            # 如果是服装英雄且有从 name.json 读到的加成，则计算；否则使用原始值
            if costume_bonus:
                final_attack = int(vanilla_stats["Attack"] * (1 + costume_bonus.get("attack", 0) / 100))
                final_defense = int(vanilla_stats["Defense"] * (1 + costume_bonus.get("defense", 0) / 100))
                final_life = int(vanilla_stats["Life"] * (1 + costume_bonus.get("health", 0) / 100))
                final_data[lb_key] = {"Attack": final_attack, "Defense": final_defense, "Life": final_life}
            else:
                final_data[lb_key] = vanilla_stats
                
    return final_data

def main():
    try:
        with open('name.json', 'r', encoding='utf-8') as f:
            # name.json 现在是一个对象列表
            hero_info_list = json.load(f)
            if not isinstance(hero_info_list, list):
                print("错误: name.json 的内容不是一个列表。")
                return
    except FileNotFoundError:
        print("错误: name.json 文件未找到。")
        return
    except json.JSONDecodeError:
        print("错误: name.json 文件格式不正确。")
        return
    
    # 创建一个从英雄名到完整信息的映射，方便查找
    hero_info_map = {item['name']: item for item in hero_info_list if isinstance(item, dict) and 'name' in item}
    hero_names_to_process = list(hero_info_map.keys())

    output_filename = 'hero_stats.json'
    all_hero_data = {}
    
    try:
        with open(output_filename, 'r', encoding='utf-8') as f:
            all_hero_data = json.load(f)
        print(f"成功加载已有的 {len(all_hero_data)} 条英雄数据。将继续处理剩余的英雄。")
    except (FileNotFoundError, json.JSONDecodeError):
        print("未找到或无法解析旧数据文件。将创建一个新文件。")

    for hero_name in hero_names_to_process:
        if hero_name in all_hero_data:
            print(f"跳过: '{hero_name}' 的数据已存在。")
            continue
        
        print(f"处理新英雄: '{hero_name}'")
        
        # 获取当前英雄的完整信息（包括可能的奖励）
        current_hero_info = hero_info_map.get(hero_name)
        data = fetch_hero_data(hero_name, current_hero_info)
        
        if data and data.get("base"):
            all_hero_data[hero_name] = data
            with open(output_filename, 'w', encoding='utf-8') as f:
                json.dump(all_hero_data, f, indent=4, ensure_ascii=False)
            print(f"  -> 成功: '{hero_name}' 的数据已获取并写入文件。")
        else:
            print(f"  -> 失败: '{hero_name}' 数据获取不完整，将在下次运行时重试。")
            
        time.sleep(5)

    print(f"\n所有英雄处理完毕。最终数据保存在 {output_filename} 中。")

if __name__ == "__main__":
    main()
    input("\n按任意键退出...")