import math
import os
import sys

# --- 函数和常量定义 (这部分保持不变) ---

# 星级对应的基础战力值
STAR_BASE_POWER = {
    1: 0,
    2: 10,
    3: 30,
    4: 50,
    5: 90
}

def calculate_power(attack: int, defense: int, health: int, star: int, special_level: int = 8, talent_nodes: int = 0) -> int:
    """
    计算英雄战力（计算方法：对属性战力总和向下取整）。

    :param attack: 攻击力
    :param defense: 防御力
    :param health: 生命值
    :param star: 英雄星级 (1-5)
    :param special_level: 特殊技能等级 (默认为 8)
    :param talent_nodes: 天赋节点数 (默认为 0)
    :return: 计算出的总战力
    """
    # 1. 获取星级基础战力
    star_power = STAR_BASE_POWER.get(star, 0)

    # 2. 计算属性战力 (先将各项结果相加，再对总和向下取整)
    stats_raw_power = (attack * 0.35) + (defense * 0.28) + (health * 0.14)
    stats_final_power = math.floor(stats_raw_power)

    # 3. 计算技能和天赋战力
    skill_power = (special_level - 1) * 5
    talent_power = talent_nodes * 5

    # 4. 计算总战力
    total_power = star_power + stats_final_power + skill_power + talent_power
    return total_power

# --- 主程序逻辑 ---

def main():
    """
    主函数，运行战力计算器的循环。
    """
    while True:
        # 清除屏幕内容，'nt' 是 Windows, 其他是 macOS/Linux
        os.system('cls' if os.name == 'nt' else 'clear')
        
        print("--- 英雄战力实时计算器 ---")
        print("(在任意输入步骤, 输入 'q' 或 'quit' 可退出程序)\n")

        try:
            # 接收用户输入
            attack_input = input("请输入攻击力: ")
            if attack_input.lower() in ['q', 'quit']: sys.exit()
            hero_attack = int(attack_input)

            defense_input = input("请输入防御力: ")
            if defense_input.lower() in ['q', 'quit']: sys.exit()
            hero_defense = int(defense_input)
            
            health_input = input("请输入生命值: ")
            if health_input.lower() in ['q', 'quit']: sys.exit()
            hero_health = int(health_input)

            star_input = input("请输入英雄星级 (1-5): ")
            if star_input.lower() in ['q', 'quit']: sys.exit()
            hero_star = int(star_input)
            
            # 校验星级是否在预设范围内
            if hero_star not in STAR_BASE_POWER:
                print("\n错误: 星级必须是 1 到 5 之间的整数。")
                input("\n按任意键继续...")
                continue # 跳过本次计算，直接开始下一次循环

            # 进行计算
            calculated_power = calculate_power(hero_attack, hero_defense, hero_health, hero_star)
            
            # 显示结果
            print("\n" + "="*25)
            print(f"  计算出的总战力为: {calculated_power}")
            # 进行计算
            calculated_power = calculate_power(hero_attack, hero_defense, hero_health, hero_star,8,25)
            print(f"  计算出满天赋的总战力为: {calculated_power}")
            print("="*25)

        except ValueError:
            # 如果用户输入了非数字字符，则捕获异常
            print("\n错误: 输入无效，请输入一个有效的数字。")
        
        # 等待用户按键后，循环将继续
        input("\n计算完成。按任意键可开始一次新的计算...")


if __name__ == "__main__":
    main()