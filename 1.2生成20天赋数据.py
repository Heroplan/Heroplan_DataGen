import json
import re
import math # 引入 math 模块以使用向下取整功能

def parse_js_variable(js_filepath):
    """
    从 .js 文件中提取 JavaScript 变量 (JSON 格式)。
    它会查找 "=[...];" 或 "=[...]" 格式的数据。

    参数:
        js_filepath (str): JavaScript 文件的路径。

    返回:
        list/dict: 解析后的 Python 对象, 如果失败则返回 None。
    """
    try:
        with open(js_filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        match = re.search(r'=\s*(\[.*\])', content, re.DOTALL)
        if match:
            json_str = match.group(1).strip().rstrip(';')
            data = json.loads(json_str)
            return data
        else:
            print(f"错误: 在文件 '{js_filepath}' 中未找到数据。")
            return None
    except FileNotFoundError:
        print(f"错误: 文件未找到 - '{js_filepath}'")
        return None
    except json.JSONDecodeError as e:
        print(f"错误: 解析文件 '{js_filepath}' 中的 JSON 数据失败: {e}")
        return None
    except Exception as e:
        print(f"发生未知错误: {e}")
        return None

def calculate_talented_stats(base_stats, talent_bonuses):
    """
    根据基础属性和天赋加成计算新的属性, 使用向下取整。

    参数:
        base_stats (dict): 包含 'power', 'attack', 'defense', 'health' 的字典。
        talent_bonuses (dict): 包含天赋加成值的字典。

    返回:
        dict: 包含计算后新属性的字典, 如果输入无效则返回 None。
    """
    if not base_stats or not talent_bonuses:
        return None

    # 【修正】: 使用 math.floor() 对百分比计算结果进行向下取整
    new_attack = math.floor(base_stats.get('attack', 0) * (1 + talent_bonuses.get('attack_percent', 0) / 100)) + talent_bonuses.get('attack', 0)
    new_defense = math.floor(base_stats.get('defense', 0) * (1 + talent_bonuses.get('defense_percent', 0) / 100)) + talent_bonuses.get('defense', 0)
    new_health = math.floor(base_stats.get('health', 0) * (1 + talent_bonuses.get('health_percent', 0) / 100)) + talent_bonuses.get('health', 0)
    
    # Power 的计算方式不变
    new_power = base_stats.get('power', 0) + 100

    return {
        "power": new_power,
        "attack": new_attack,
        "defense": new_defense,
        "health": new_health
    }

def main():
    """
    主函数, 用于读取、处理和写入英雄数据。
    """
    # --- 1. 读取输入文件 ---
    heroes_data = parse_js_variable('heroes_data_en.js')
    
    try:
        with open('Talent.json', 'r', encoding='utf-8') as f:
            talent_data = json.load(f)
    except FileNotFoundError:
        print("错误: 'Talent.json' 文件未找到。")
        return
    except json.JSONDecodeError:
        print("错误: 解析 'Talent.json' 文件失败。")
        return

    if not heroes_data:
        return

    # --- 2. 处理数据 ---
    output_data = {}

    for hero in heroes_data:
        if hero.get('star') in [3, 4, 5]:
            hero_name = hero.get('name')
            hero_class = hero.get('class', '').lower()

            if not hero_name or not hero_class:
                continue

            class_talents = talent_data.get(hero_class)
            if not class_talents:
                print(f"警告: 英雄 '{hero_name}' 的职业 '{hero_class}' 在 Talent.json 中未找到。")
                continue
            
            hero_new_stats = {}

            for priority in ['attack_priority', 'defense_priority']:
                talent_bonuses = class_talents.get(priority)
                if talent_bonuses:
                    stats_key = f"{priority}_stats"
                    hero_new_stats[stats_key] = {}
                    
                    hero_new_stats[stats_key]['base'] = calculate_talented_stats(hero, talent_bonuses)
                    
                    if 'lb1' in hero:
                        hero_new_stats[stats_key]['lb1'] = calculate_talented_stats(hero['lb1'], talent_bonuses)
                    
                    if 'lb2' in hero:
                        hero_new_stats[stats_key]['lb2'] = calculate_talented_stats(hero['lb2'], talent_bonuses)

            if hero_new_stats:
                output_data[hero_name] = hero_new_stats

    # --- 3. 写入输出文件 ---
    output_filename = 'heroes_stat_talents.json'
    try:
        with open(output_filename, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=4, ensure_ascii=False)
        print(f"✅ 成功生成新文件 (已使用向下取整): '{output_filename}'")
    except Exception as e:
        print(f"❌ 写入文件 '{output_filename}' 时发生错误: {e}")

if __name__ == "__main__":
    main()