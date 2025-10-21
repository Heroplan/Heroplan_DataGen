import math

# 各职业“全左路”天赋方案的预计算总加成
# 数据格式: {'职业密匙': {'name': '职业名称', 'atk_flat': 固定攻击, 'atk_pct': 百分比攻击, ...}}
ALL_LEFT_BONUSES = {
    'ranger': {'name': '游侠', 'atk_flat': 225, 'atk_pct': 3, 'def_flat': 72, 'def_pct': 3, 'hp_flat': 172, 'hp_pct': 3},
    'fighter': {'name': '战士', 'atk_flat': 210, 'atk_pct': 4, 'def_flat': 90, 'def_pct': 3, 'hp_flat': 172, 'hp_pct': 3},
    'paladin': {'name': '圣骑士', 'atk_flat': 210, 'atk_pct': 3, 'def_flat': 90, 'def_pct': 4, 'hp_flat': 172, 'hp_pct': 3},
    'barbarian': {'name': '野蛮人', 'atk_flat': 225, 'atk_pct': 0, 'def_flat': 36, 'def_pct': 0, 'hp_flat': 244, 'hp_pct': 4},
    'cleric': {'name': '牧师', 'atk_flat': 180, 'atk_pct': 3, 'def_flat': 72, 'def_pct': 0, 'hp_flat': 280, 'hp_pct': 3},
    'druid': {'name': '德鲁伊', 'atk_flat': 210, 'atk_pct': 0, 'def_flat': 36, 'def_pct': 0, 'hp_flat': 280, 'hp_pct': 3},
    'monk': {'name': '僧侣', 'atk_flat': 180, 'atk_pct': 0, 'def_flat': 72, 'def_pct': 3, 'hp_flat': 280, 'hp_pct': 0},
    'rogue': {'name': '盗贼', 'atk_flat': 225, 'atk_pct': 3, 'def_flat': 36, 'def_pct': 3, 'hp_flat': 244, 'hp_pct': 3},
    'sorcerer': {'name': '术士', 'atk_flat': 180, 'atk_pct': 3, 'def_flat': 90, 'def_pct': 0, 'hp_flat': 244, 'hp_pct': 3},
    'wizard': {'name': '巫师', 'atk_flat': 225, 'atk_pct': 4, 'def_flat': 72, 'def_pct': 0, 'hp_flat': 172, 'hp_pct': 3},
}

def reverse_calculate_base_stat(final_stat, flat_bonus, percent_bonus):
    """
    根据最终属性、固定加成和百分比加成，反推出基础属性。
    计算公式: final_stat = base + flat_bonus + floor(base * percent_bonus)
    """
    if not isinstance(final_stat, (int, float)) or final_stat <= 0:
        return "N/A"

    percent_bonus_decimal = percent_bonus / 100.0
    
    # 估算一个基础值作为起点
    if (1 + percent_bonus_decimal) > 0:
        guess = math.floor((final_stat - flat_bonus) / (1 + percent_bonus_decimal))
    else:
        guess = final_stat - flat_bonus

    # 在估算值附近的一个小范围内搜索精确解
    for i in range(-5, 6):
        test_base = guess + i
        if test_base <= 0:
            continue

        # 使用测试基础值计算最终属性
        calculated_final = test_base + flat_bonus + math.floor(test_base * percent_bonus_decimal)
        
        if calculated_final == final_stat:
            return test_base
            
    return "未找到匹配值"

def main():
    """
    脚本主函数
    """
    print("--- 天赋树基础属性反推器 (全左路方案) ---")
    
    # 将职业字典转换为列表，方便按数字选择
    class_list = list(ALL_LEFT_BONUSES.items())
    
    print("\n可选职业:")
    for i, (key, value) in enumerate(class_list):
        print(f"{i + 1}: {value['name']}")

    while True:
        try:
            choice = int(input("\n请输入数字选择职业: "))
            if 1 <= choice <= len(class_list):
                # 根据选择的数字获取职业密匙
                class_key_input = class_list[choice - 1][0]
                break
            else:
                print("无效的选择，请输入列表中的数字。")
        except ValueError:
            print("输入无效，请输入一个数字。")

    try:
        bonuses = ALL_LEFT_BONUSES[class_key_input]
        final_attack = int(input(f"请输入 {bonuses['name']} 的最终攻击: "))
        final_defense = int(input(f"请输入 {bonuses['name']} 的最终防御: "))
        final_health = int(input(f"请输入 {bonuses['name']} 的最终生命: "))
    except ValueError:
        print("\n错误：请输入有效的数字。")
        return

    # 推算基础属性
    base_attack = reverse_calculate_base_stat(final_attack, bonuses['atk_flat'], bonuses['atk_pct'])
    base_defense = reverse_calculate_base_stat(final_defense, bonuses['def_flat'], bonuses['def_pct'])
    base_health = reverse_calculate_base_stat(final_health, bonuses['hp_flat'], bonuses['hp_pct'])

    print("\n--- 计算结果 ---")
    print(f"所选职业: {bonuses['name']}")
    print(f"“全左路”天赋加成: "
          f"攻击 +{bonuses['atk_flat']}(+{bonuses['atk_pct']}%) | "
          f"防御 +{bonuses['def_flat']}(+{bonuses['def_pct']}%) | "
          f"生命 +{bonuses['hp_flat']}(+{bonuses['hp_pct']}%)")
    
    print("\n推算出的基础属性为:")
    print(f"  - 基础攻击: {base_attack}")
    print(f"  - 基础防御: {base_defense}")
    print(f"  - 基础生命: {base_health}")

if __name__ == "__main__":
    main()
    input("按回车键退出...")
