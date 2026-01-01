import json
import os
import re
import math
import yaml
import unicodedata
import logging

# 配置
HEROES_DATA_EXTRA_FILE = 'heroes_data_extra.js'
OUTPUT_FILE = 'calculated_hero_stats.json'

# 稀有度参数 - 基于你之前的JavaScript代码
RARITY_PARAMS = {
    5: {"m1": 4, "m2": 265, "lb1": 20, "lb2": 40},  # 5星
    4: {"m1": 5, "m2": 225, "lb1": 23, "lb2": 46},  # 4星
    3: {"m1": 6, "m2": 123, "lb1": 29, "lb2": 58},  # 3星
    2: {"m1": 7, "m2": 93, "lb1": 0, "lb2": 0},    # 2星
    1: {"m1": 8, "m2": 31, "lb1": 0, "lb2": 0}     # 1星
}

def extract_hero_data_from_js(file_path):
    """从heroes_data_extra.js文件中提取英雄数据"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 查找heroes_data_extra数组
        match = re.search(r'window\.allHeroesExtra\s*=\s*(\[[\s\S]*?\])\s*;', content)
        if not match:
            match = re.search(r'=\s*(\[[\s\S]*?\])\s*;', content)  # 备用匹配
            if not match:
                print("错误：在文件中找不到heroes_data_extra数组")
                return None
        
        json_str = match.group(1)
        json_str = re.sub(r',\s*([\]}])', r'\1', json_str)  # 清理多余的逗号
        
        heroes_data = json.loads(json_str)
        return heroes_data
    except Exception as e:
        print(f"读取或解析文件时出错: {e}")
        return None

def calculate_base_stats(base_attack, base_defense, base_health, rarity):
    """
    计算基础加成后的属性（相当于你之前看到的681, 581, 1099这样的值）
    这是只应用基础加成，不包含LB加成的值
    """
    params = RARITY_PARAMS.get(rarity, {"m1": 0, "m2": 0, "lb1": 0, "lb2": 0})
    m1, m2 = params["m1"], params["m2"]
    
    def calc_attribute(base_value):
        # 只计算基础加成部分
        val = base_value + (base_value * m1 / 1000 * m2)
        return int(val)
    
    return {
        "attack": calc_attribute(base_attack),
        "defense": calc_attribute(base_defense),
        "health": calc_attribute(base_health)
    }

def calculate_lb_stats(base_attack, base_defense, base_health, rarity, level):
    """
    计算LB属性
    level: 2 for LB1, 3 for LB2
    """
    params = RARITY_PARAMS.get(rarity, {"m1": 0, "m2": 0, "lb1": 0, "lb2": 0})
    m1, m2, lb1_val, lb2_val = params["m1"], params["m2"], params["lb1"], params["lb2"]
    
    def calc_attribute(base_value):
        # 第一步：基础加成计算
        val = base_value + (base_value * m1 / 1000 * m2)
        
        # 第二步：LB1加成（如果达到LB1等级）
        if level >= 2:
            val += (base_value * lb1_val / 1000 * 8)
        
        # 第三步：LB2加成（如果达到LB2等级）  
        if level >= 3:
            val += (base_value * lb2_val / 1000 * 8)
        
        return int(val)
    
    return {
        "attack": calc_attribute(base_attack),
        "defense": calc_attribute(base_defense),
        "health": calc_attribute(base_health)
    }

def process_heroes(heroes_data):
    """处理所有英雄数据，计算各种属性"""
    calculated_stats = {}
    
    for hero in heroes_data:
        try:
            name = hero.get('name', 'Unknown')
            rarity = hero.get('rarity', 5)  # 默认5星
            
            # 获取基础属性
            base_attack = hero.get('baseAttack', 0)
            base_defense = hero.get('baseDefense', 0)
            base_health = hero.get('baseHealth', 0)
            
            # 只处理有基础属性的英雄
            if base_attack == 0 and base_defense == 0 and base_health == 0:
                continue
                
            print(f"处理英雄: {name} (稀有度: {rarity}星)")
            print(f"  基础原始值 - 攻击: {base_attack}, 防御: {base_defense}, 生命: {base_health}")
            
            # 计算基础加成后的属性（这是你想要的"attack", "defense", "health"）
            base_stats = calculate_base_stats(base_attack, base_defense, base_health, rarity)
            
            # 计算LB1和LB2属性
            lb1_stats = calculate_lb_stats(base_attack, base_defense, base_health, rarity, 2)
            lb2_stats = calculate_lb_stats(base_attack, base_defense, base_health, rarity, 3)
            
            print(f"  基础加成后 - 攻击: {base_stats['attack']}, 防御: {base_stats['defense']}, 生命: {base_stats['health']}")
            print(f"  LB1属性 - 攻击: {lb1_stats['attack']}, 防御: {lb1_stats['defense']}, 生命: {lb1_stats['health']}")
            print(f"  LB2属性 - 攻击: {lb2_stats['attack']}, 防御: {lb2_stats['defense']}, 生命: {lb2_stats['health']}")
            
            # 构建最终数据结构
            calculated_stats[name] = {
                "attack": base_stats["attack"],      # 基础加成后的攻击力
                "defense": base_stats["defense"],    # 基础加成后的防御力
                "health": base_stats["health"],      # 基础加成后的生命值
                
                "lb1": {                               # LB1突破属性
                    "attack": lb1_stats["attack"],
                    "defense": lb1_stats["defense"],
                    "health": lb1_stats["health"]
                },
                "lb2": {                               # LB2突破属性
                    "attack": lb2_stats["attack"],
                    "defense": lb2_stats["defense"],
                    "health": lb2_stats["health"]
                },
                "rarity": rarity,
                "base_raw": {                          # 原始基础值（备用）
                    "attack": base_attack,
                    "defense": base_defense,
                    "health": base_health
                }
            }
            
        except Exception as e:
            print(f"处理英雄 {hero.get('name', 'Unknown')} 时出错: {e}")
            continue
    
    return calculated_stats

def main():
    # 设置日志
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
    
    # 检查输入文件
    if not os.path.exists(HEROES_DATA_EXTRA_FILE):
        print(f"错误: 文件 {HEROES_DATA_EXTRA_FILE} 未找到")
        return
    
    # 提取英雄数据
    print(f"从 {HEROES_DATA_EXTRA_FILE} 提取英雄数据...")
    heroes_data = extract_hero_data_from_js(HEROES_DATA_EXTRA_FILE)
    
    if not heroes_data:
        print("无法提取英雄数据，退出")
        return
    
    print(f"成功提取 {len(heroes_data)} 个英雄的数据")
    
    # 处理英雄数据，计算各种属性
    print("开始计算属性...")
    calculated_stats = process_heroes(heroes_data)
    
    # 保存结果
    try:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(calculated_stats, f, indent=4, ensure_ascii=False)
        print(f"\n计算完成！结果已保存到 {OUTPUT_FILE}")
        print(f"共处理了 {len(calculated_stats)} 个英雄")
    except Exception as e:
        print(f"保存结果时出错: {e}")

if __name__ == "__main__":
    main()
    input("\n按任意键退出...")