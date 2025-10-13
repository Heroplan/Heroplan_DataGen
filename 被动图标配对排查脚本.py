import json
import os

def check_hero_passives(characters_file, icons_file):
    """
    检查英雄的被动技能是否能在图标表中找到匹配。

    Args:
        characters_file (str): 英雄数据JSON文件的路径。
        icons_file (str): 被动技能图标映射JSON文件的路径。
    """
    print("--- 开始匹配英雄被动技能与图标 ---")

    # --- 1. 加载JSON文件 ---
    try:
        with open(characters_file, 'r', encoding='utf-8') as f:
            characters_data = json.load(f)
        print(f"✅ 成功加载英雄数据: {characters_file}")
    except FileNotFoundError:
        print(f"❌ 错误: 找不到英雄文件 '{characters_file}'。请确保文件名正确且文件在同一目录下。")
        return
    except json.JSONDecodeError:
        print(f"❌ 错误: '{characters_file}' 文件格式不正确，无法解析JSON。")
        return

    try:
        with open(icons_file, 'r', encoding='utf-8') as f:
            passive_icons_data = json.load(f)
        print(f"✅ 成功加载被动图标表: {icons_file}")
    except FileNotFoundError:
        print(f"❌ 错误: 找不到图标文件 '{icons_file}'。请确保文件名正确且文件在同一目录下。")
        return
    except json.JSONDecodeError:
        print(f"❌ 错误: '{icons_file}' 文件格式不正确，无法解析JSON。")
        return

    # --- 2. 准备存储不匹配的结果 ---
    unmatched_heroes = {}

    print("\n--- 3. 开始遍历所有英雄并检查被动技能 ---")
    
    # --- 遍历每个英雄 ---
    # characters_data.items() 返回 (英雄代码, 英雄详情) 的元组
    for hero_code, hero_details in characters_data.items():
        hero_name = hero_details.get("id", hero_code) # 获取英雄名，如果不存在则使用其代码
        passive_skills = hero_details.get("passiveSkills", []) # 获取被动技能列表，如果不存在则为空列表

        if not passive_skills:
            # 如果英雄没有 "passiveSkills" 键或列表为空，则跳过
            continue

        unmatched_skills_for_hero = []
        
        # --- 遍历该英雄的每个被动技能 ---
        for skill_id in passive_skills:
            if skill_id not in passive_icons_data:
                # 如果在图标表中找不到这个技能ID，则记录下来
                unmatched_skills_for_hero.append(skill_id)
        
        # 如果这个英雄有未匹配的技能，则将其记录到总结果中
        if unmatched_skills_for_hero:
            unmatched_heroes[hero_name] = unmatched_skills_for_hero
            
    # --- 4. 输出最终报告 ---
    print("\n--- 检查完成，生成报告 ---\n")

    if not unmatched_heroes:
        print("🎉 恭喜！所有英雄的所有被动技能都已成功匹配到图标！")
    else:
        print(f"⚠️ 注意！发现 {len(unmatched_heroes)} 位英雄存在无法匹配的被动技能：\n")
        for hero_name, skills in unmatched_heroes.items():
            print(f"英雄: 【{hero_name}】")
            print("  -> 未能匹配的被动技能ID:")
            for skill in skills:
                print(f"    - {skill}")
            print("-" * 20) # 分隔符

if __name__ == "__main__":
    # 定义文件名，您可以根据实际情况修改
    CHARACTERS_FILENAME = "dict_gen\官方英雄数据缓存解析\CachedConfigurations\json\characters_en.json"
    ICONS_FILENAME = "被动图标表.json"
    
    check_hero_passives(CHARACTERS_FILENAME, ICONS_FILENAME)
    input("\n按任意键退出...")