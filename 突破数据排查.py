import json
import math  # 引入math模块以使用向上取整

# 定义各星级的成长系数
MULTIPLIERS = {
    3: {'base':1.736,'lb1': 1.1336, 'lb2': 1.2358},
    4: {'base':2.125,'lb1': 1.0866, 'lb2': 1.1595},
    5: {'base':2.06,'lb1': 1.077, 'lb2': 1.144}
}

# 定义误差阈值
ERROR_THRESHOLD = 10

# 打开日志文件准备写入
with open('deviation_log_ceil.txt', 'w', encoding='utf-8') as log_file:
    print("开始检测英雄突破数据偏差（使用向上取整）...")
    log_file.write("英雄突破数据偏差日志 (计算方式: 向上取整)\n")
    log_file.write("======================================\n")
    log_file.write(f"误差阈值: > {ERROR_THRESHOLD}\n")
    log_file.write(f"3星系数: LB1={MULTIPLIERS[3]['lb1']}, LB2={MULTIPLIERS[3]['lb2']}\n")
    log_file.write(f"4星系数: LB1={MULTIPLIERS[4]['lb1']}, LB2={MULTIPLIERS[4]['lb2']}\n")
    log_file.write(f"5星系数: LB1={MULTIPLIERS[5]['lb1']}, LB2={MULTIPLIERS[5]['lb2']}\n")
    log_file.write("======================================\n\n")

    # 加载英雄数据
    with open('heroes_data_cn.json', 'r', encoding='utf-8') as f:
        heroes_data = json.load(f)

    deviation_found = False
    # 遍历所有英雄
    for hero in heroes_data:
        star = hero.get('star')

        # 只处理3, 4, 5星英雄
        if star not in MULTIPLIERS:
            continue

        # 检查是否存在突破1数据
        if not hero.get('lb1'):
            continue

        hero_errors = []
        multipliers = MULTIPLIERS[star]

        # --- 突破1 (LB1) 计算与校验 ---
        base_stats = {
            'attack': hero.get('attack', 0),
            'defense': hero.get('defense', 0),
            'health': hero.get('health', 0)
        }
        
        actual_lb1_stats = {
            'attack': hero['lb1'].get('attack', 0),
            'defense': hero['lb1'].get('defense', 0),
            'health': hero['lb1'].get('health', 0)
        }
        
        # *** 修正：使用 math.ceil() 进行向上取整 ***
        predicted_lb1_stats = {
            'attack': math.ceil(base_stats['attack'] * multipliers['lb1']),
            'defense': math.ceil(base_stats['defense'] * multipliers['lb1']),
            'health': math.ceil(base_stats['health'] * multipliers['lb1'])
        }

        # 比较误差
        for stat in ['attack', 'defense', 'health']:
            diff = actual_lb1_stats[stat] - predicted_lb1_stats[stat]
            if abs(diff) > ERROR_THRESHOLD:
                hero_errors.append(
                    f"  - LB1 {stat.capitalize()}: 误差 {diff:.0f} (实际: {actual_lb1_stats[stat]}, 理论: {predicted_lb1_stats[stat]})"
                )

        # --- 突破2 (LB2) 计算与校验 ---
        if hero.get('lb2'):
            actual_lb2_stats = {
                'attack': hero['lb2'].get('attack', 0),
                'defense': hero['lb2'].get('defense', 0),
                'health': hero['lb2'].get('health', 0)
            }
            
            # *** 修正：使用 math.ceil() 进行向上取整 ***
            # LB2的理论值基于LB1的理论值计算
            predicted_lb2_stats = {
                'attack': math.ceil(predicted_lb1_stats['attack'] * multipliers['lb2']),
                'defense': math.ceil(predicted_lb1_stats['defense'] * multipliers['lb2']),
                'health': math.ceil(predicted_lb1_stats['health'] * multipliers['lb2'])
            }

            # 比较误差
            for stat in ['attack', 'defense', 'health']:
                diff = actual_lb2_stats[stat] - predicted_lb2_stats[stat]
                if abs(diff) > ERROR_THRESHOLD:
                    hero_errors.append(
                        f"  - LB2 {stat.capitalize()}: 误差 {diff:.0f} (实际: {actual_lb2_stats[stat]}, 理论: {predicted_lb2_stats[stat]})"
                    )
        
        # 如果当前英雄有误差，则写入日志
        if hero_errors:
            deviation_found = True
            log_file.write(f"英雄: {hero.get('name')} ({star}★)\n")
            for error_line in hero_errors:
                log_file.write(f"{error_line}\n")
            log_file.write("-" * 30 + "\n")

    if not deviation_found:
        log_file.write("所有英雄均未发现误差超过10的突破数据。\n")

print("脚本执行完毕。请查看当前目录下生成的 'deviation_log_ceil.txt' 文件。")