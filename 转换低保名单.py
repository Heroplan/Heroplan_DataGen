#!/usr/bin/env python3
# auto_match_heroes.py

import json
import re
import os

def load_hero_mapping(filename="heroes_name_cn.txt"):
    """从文件中加载英雄映射关系 {中文名: ID}"""
    hero_map = {}
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                
                # 匹配格式: "heroes.name.xxx","中文名"
                match = re.match(r'"heroes\.name\.([^"]+)","([^"]+)"', line)
                if match:
                    hero_id = match.group(1)
                    chinese_name = match.group(2)
                    hero_map[chinese_name] = hero_id
        
        print(f"从 {filename} 加载了 {len(hero_map)} 个英雄映射")
        return hero_map
    except FileNotFoundError:
        print(f"错误: 找不到文件 {filename}")
        return {}
    except Exception as e:
        print(f"读取文件时出错: {e}")
        return {}

def extract_hero_names_from_json(json_data):
    """从JSON数据中提取英雄中文名"""
    hero_names = []
    try:
        if isinstance(json_data, dict) and "rewards" in json_data:
            for reward in json_data["rewards"]:
                if reward.get("type") == "Hero" and "id" in reward:
                    hero_names.append(reward["id"])
        return hero_names
    except Exception as e:
        print(f"解析JSON数据时出错: {e}")
        return []

def match_and_convert_names(hero_names, hero_map):
    """匹配中文名到ID，处理未找到的情况"""
    result = []
    not_found = []
    
    for chinese_name in hero_names:
        if chinese_name in hero_map:
            result.append(hero_map[chinese_name])
        else:
            # 尝试模糊匹配
            found = False
            for map_name, map_id in hero_map.items():
                # 去除空格和特殊字符比较
                clean_map_name = map_name.replace(' ', '').replace('·', '').replace('·', '')
                clean_input_name = chinese_name.replace(' ', '').replace('·', '').replace('·', '')
                
                if clean_map_name == clean_input_name:
                    result.append(map_id)
                    found = True
                    break
                # 部分匹配
                elif clean_input_name in clean_map_name or clean_map_name in clean_input_name:
                    result.append(map_id)
                    found = True
                    print(f"注意: 使用部分匹配 '{map_name}' -> '{chinese_name}'")
                    break
            
            if not found:
                not_found.append(chinese_name)
                result.append(f"???_{chinese_name}")  # 添加占位符
    
    return result, not_found

def main():
    # 给定的JSON数据
    json_data = {
        "startTime": "2026-01-17 07:00:00",
        "endTime": "2026-07-16 07:00:00",
        "requiredSummonAmounts": [100],
        "rewards": [
            {"type": "Hero", "id": "伊丽莎白", "amount": 1},
            {"type": "Hero", "id": "康伽拉赫", "amount": 1},
            {"type": "Hero", "id": "鲁苏拉", "amount": 1},
            {"type": "Hero", "id": "黎登布洛克教授", "amount": 1},
            {"type": "Hero", "id": "莫罗博士", "amount": 1},
            {"type": "Hero", "id": "尼马", "amount": 1},
            {"type": "Hero", "id": "丽德里娅", "amount": 1},
            {"type": "Hero", "id": "格拉迪乌斯", "amount": 1},
            {"type": "Hero", "id": "阿维亚纳", "amount": 1},
            {"type": "Hero", "id": "卡斯米尔爵士", "amount": 1},
            {"type": "Hero", "id": "戴蒙", "amount": 1},
            {"type": "Hero", "id": "泰迪", "amount": 1},
            {"type": "Hero", "id": "昆汀", "amount": 1},
            {"type": "Hero", "id": "沃尔夫冈", "amount": 1},
            {"type": "Hero", "id": "塞西莉亚", "amount": 1},
            {"type": "Hero", "id": "埃隆", "amount": 1},
            {"type": "Hero", "id": "雷利乌斯", "amount": 1},
            {"type": "Hero", "id": "尤留思", "amount": 1},
            {"type": "Hero", "id": "维柳", "amount": 1},
            {"type": "Hero", "id": "杰特", "amount": 1}
        ]
    }
    
    print("开始自动匹配英雄ID...")
    print("=" * 60)
    
    # 1. 加载英雄映射文件
    hero_map = load_hero_mapping("heroes_name_cn.txt")
    if not hero_map:
        print("无法加载英雄映射，退出程序")
        return
    
    # 2. 从JSON中提取英雄中文名
    hero_names = extract_hero_names_from_json(json_data)
    print(f"从JSON中提取了 {len(hero_names)} 个英雄名")
    
    # 3. 匹配中文名到ID
    matched_ids, not_found = match_and_convert_names(hero_names, hero_map)
    
    # 4. 输出结果
    print("\n" + "=" * 60)
    print("匹配结果:")
    print("=" * 60)
    
    for i, (chinese_name, hero_id) in enumerate(zip(hero_names, matched_ids), 1):
        status = "✓" if hero_id not in not_found and not hero_id.startswith("???_") else "✗"
        print(f"{i:2d}. {status} {chinese_name:10} -> {hero_id}")
    
    # 5. 输出指定格式
    print("\n" + "=" * 60)
    print("最终结果 (格式化输出):")
    print("=" * 60)
    
    for hero_id in matched_ids:
        print(f'        "{hero_id}",')
    
    # 6. 输出统计信息
    print("\n" + "=" * 60)
    print(f"总计: {len(matched_ids)} 个英雄")
    print(f"成功匹配: {len(matched_ids) - len(not_found)} 个")
    if not_found:
        print(f"未找到: {len(not_found)} 个")
        print("未找到的英雄:")
        for name in not_found:
            print(f"  - {name}")
    
    # 7. 可选：保存结果到文件
    save_to_file = input("\n是否保存结果到文件? (y/n): ").lower() == 'y'
    if save_to_file:
        filename = "matched_hero_ids.txt"
        with open(filename, 'w', encoding='utf-8') as f:
            f.write("# 自动匹配的英雄ID结果\n")
            f.write("=" * 50 + "\n\n")
            f.write("[\n")
            for hero_id in matched_ids:
                f.write(f'    "{hero_id}",\n')
            f.write("]\n\n")
            f.write(f"总计: {len(matched_ids)} 个英雄\n")
            if not_found:
                f.write(f"未找到的英雄: {', '.join(not_found)}\n")
        print(f"结果已保存到: {filename}")

if __name__ == "__main__":
    main()