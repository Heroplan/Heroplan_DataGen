import json
import os
from datetime import datetime

# ==================== 可自定义配置 ====================
MAIN_JSON_PATH = r".\dict_gen\官方英雄数据缓存解析\CachedConfigurations\json\shop_en.json"
OTHER_JSON_PATH = r".\dict_gen\官方英雄数据缓存解析\CachedConfigurations\json\other_en.json"
OUTPUT_JSON_PATH = r"..\Heroplan.github.io\lottery_config.json"

TARGET_POOLS = {
    "lottery_black_default": "lottery_black_default",
    "lottery_black_7th_birthday": "lottery_black_7th_birthday",
    "lottery_black_solstice_default": "lottery_black_solstice_default",
    "lottery_harvest_default": "lottery_harvest_default",
    "lottery_pickup_default": "lottery_pickup_default",
    "lottery_ascension_default": "lottery_ascension_default",
    "lottery_season_atlantis": "lottery_season_atlantis",
    "lottery_season_valhalla": "lottery_season_valhalla",
    "lottery_season_underwild": "lottery_season_underwild",
    "lottery_season_season5": "lottery_season_season5",
    "lottery_season_untold_tales1": "lottery_season_untold_tales1",
    "lottery_season_untold_tales2": "lottery_season_untold_tales2",
    "lottery_costume_default": "lottery_costume_default",
    "lottery_shadow_default": "lottery_shadow_default",
    "lottery_wilderness_default": "lottery_wilderness_default",
    "lottery_temple_default": "lottery_temple_default",
    "lottery_titan_hunter_default": "lottery_titan_hunter_default",
    "lottery_covenant_default": "lottery_covenant_default",
    "lottery_goblin_default": "lottery_goblin_default",
    "lottery_mercenary_war_default": "lottery_mercenary_war_default",
    "lottery_tower_ninja_default": "lottery_tower_ninja_default",
    "lottery_tower_owl_default": "lottery_tower_owl_default",
    "lottery_tower_magic_default": "lottery_tower_magic_default",
    "lottery_tower_styx_default": "lottery_tower_styx_default",
    "lottery_featured_event_farmland": "lottery_featured_event_farmland",
    "lottery_featured_alliance_quest_musketeers": "lottery_featured_alliance_quest_musketeers",
    "lottery_super_elemental": "lottery_super_elemental",
}

POOL_SOURCE_MAP = {
    "lottery_tower_ninja_default": {
        "path": ["otherConfig", "logic", "events", "towerEventConfig", "towerEventEntries"],
        "match_key": "id",
        "match_value": "TowerNinja",
        "heroes_key": "featuredCharacters",
        "date_key": "startTime"
    },
    "lottery_tower_owl_default": {
        "path": ["otherConfig", "logic", "events", "towerEventConfig", "towerEventEntries"],
        "match_key": "id",
        "match_value": "TowerOwl",
        "heroes_key": "featuredCharacters",
        "date_key": "startTime"
    },
    "lottery_tower_magic_default": {
        "path": ["otherConfig", "logic", "events", "towerEventConfig", "towerEventEntries"],
        "match_key": "id",
        "match_value": "TowerMagic",
        "heroes_key": "featuredCharacters",
        "date_key": "startTime"
    },
    "lottery_tower_styx_default": {
        "path": ["otherConfig", "logic", "events", "towerEventConfig", "towerEventEntries"],
        "match_key": "id",
        "match_value": "TowerStyx",
        "heroes_key": "featuredCharacters",
        "date_key": "startTime"
    },
    "lottery_featured_event_farmland": {
        "path": ["otherConfig", "logic", "events", "challengeEventEntries"],
        "match_key": "id",
        "match_value": "RecurringFarmland",
        "heroes_key": "featuredCharacters",
        "date_key": "startTime"
    },
    "lottery_featured_alliance_quest_musketeers": {
        "path": ["otherConfig", "logic", "events", "allianceQuestEventEntries"],
        "match_key": "id",
        "match_value": "AllianceQuestMusketeers",
        "heroes_key": "featuredCharacters",
        "date_key": "startTime"
    }
}
# ====================================================

def parse_date(date_str: str):
    try:
        return datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
    except ValueError:
        return None

def extract_pool_config(entry: dict):
    """
    从召唤池条目中提取需要的配置：
    - featuredHeroes (任何以 'featured' 开头的列表)
    - includedHeroes (如果存在)
    - limitedPoolSummonConfiguration (如果存在)
    """
    config = {}
    # featured 字段
    for key, value in entry.items():
        if key.startswith("featured") and isinstance(value, list):
            config["featuredHeroes"] = value
            break
    # includedHeroes
    if "includedHeroes" in entry and isinstance(entry["includedHeroes"], list):
        config["includedHeroes"] = entry["includedHeroes"]
    # limitedPoolSummonConfiguration
    if "limitedPoolSummonConfiguration" in entry and isinstance(entry["limitedPoolSummonConfiguration"], dict):
        config["limitedPoolSummonConfiguration"] = entry["limitedPoolSummonConfiguration"]
    return config

def extract_from_main(data, target_id, now):
    """从主文件中提取匹配的条目，返回最近日期的完整配置字典"""
    candidates = []  # (date, entry)

    def recurse(obj):
        if isinstance(obj, dict):
            pid = obj.get("productId")
            oid = obj.get("id")
            if (pid == target_id or oid == target_id):
                start_str = obj.get("startDate")
                if start_str:
                    date = parse_date(start_str)
                    if date:
                        candidates.append((date, obj))
            for v in obj.values():
                recurse(v)
        elif isinstance(obj, list):
            for item in obj:
                recurse(item)

    recurse(data)
    if not candidates:
        return None
    closest_entry = min(candidates, key=lambda x: abs((x[0] - now).days))[1]
    return extract_pool_config(closest_entry)

def extract_from_other(other_data, rule, now):
    """从 other 文件中提取配置，仅支持 featuredCharacters，返回统一格式"""
    target = other_data
    for key in rule["path"]:
        if isinstance(target, dict):
            target = target.get(key)
            if target is None:
                return None
        else:
            return None
    if not isinstance(target, list):
        return None

    candidates = []
    for entry in target:
        if not isinstance(entry, dict):
            continue
        if entry.get(rule["match_key"]) != rule["match_value"]:
            continue
        start_str = entry.get(rule["date_key"])
        if not start_str:
            continue
        date = parse_date(start_str)
        if not date:
            continue
        heroes = entry.get(rule["heroes_key"])
        if heroes and isinstance(heroes, list):
            candidates.append((date, {"featuredHeroes": heroes}))
    if not candidates:
        return None
    closest_config = min(candidates, key=lambda x: abs((x[0] - now).days))[1]
    return closest_config

def process_super_elemental(lottery_data, now):
    """
    特殊处理超级元素池：
    收集所有 productId 以 'lottery_super_elemental_' 开头的条目，
    按颜色分组，每组取 startDate 最接近今天的条目，提取 featuredHeroes，
    最后返回形如 {"featuredHeroes_green": [...], "featuredHeroes_red": [...]} 的字典。
    """
    # 存储每个颜色的候选条目列表
    color_candidates = {}  # color -> [(date, featured_heroes), ...]

    def recurse(obj):
        if isinstance(obj, dict):
            pid = obj.get("productId")
            if isinstance(pid, str) and pid.startswith("lottery_super_elemental_"):
                start_str = obj.get("startDate")
                if start_str:
                    date = parse_date(start_str)
                    if date:
                        # 提取颜色后缀（例如 green, red, blue, yellow, purple）
                        color = pid.replace("lottery_super_elemental_", "")
                        # 提取 featuredHeroes
                        featured = None
                        for key, val in obj.items():
                            if key.startswith("featured") and isinstance(val, list):
                                featured = val
                                break
                        if featured:
                            color_candidates.setdefault(color, []).append((date, featured))
            for v in obj.values():
                recurse(v)
        elif isinstance(obj, list):
            for item in obj:
                recurse(item)

    recurse(lottery_data)

    if not color_candidates:
        return None

    result = {}
    for color, entries in color_candidates.items():
        # 选择日期最接近今天的条目
        closest = min(entries, key=lambda x: abs((x[0] - now).days))
        result[f"featuredHeroes_{color}"] = closest[1]

    return result

def main():
    # 1. 读取主配置
    if not os.path.isfile(MAIN_JSON_PATH):
        print(f"错误：主文件不存在 - {MAIN_JSON_PATH}")
        return
    with open(MAIN_JSON_PATH, "r", encoding="utf-8") as f:
        main_data = json.load(f)
    try:
        lottery_data = main_data["shopConfig"]["lottery"]
    except KeyError:
        print("未找到 shopConfig.lottery 节点")
        return

    # 2. 读取 other 配置
    other_data = None
    if os.path.isfile(OTHER_JSON_PATH):
        with open(OTHER_JSON_PATH, "r", encoding="utf-8") as f:
            other_data = json.load(f)
        print(f"已加载Other文件: {OTHER_JSON_PATH}")
    else:
        print(f"警告：Other文件不存在 - {OTHER_JSON_PATH}")

    now = datetime.now()
    new_pools = {}  # output_key -> full config dict

    for target_id, output_key in TARGET_POOLS.items():
        config = None

        # 特殊处理超级元素池
        if target_id == "lottery_super_elemental":
            config = process_super_elemental(lottery_data, now)
            if config:
                print(f"✓ 特殊处理超级元素池: {target_id} -> {output_key}")
            else:
                print(f"✗ 超级元素池未找到任何颜色条目: {target_id}")
        else:
            # 优先从主文件提取
            config = extract_from_main(lottery_data, target_id, now)
            # 如果失败且在其他映射中
            if config is None and other_data is not None and target_id in POOL_SOURCE_MAP:
                rule = POOL_SOURCE_MAP[target_id]
                config = extract_from_other(other_data, rule, now)
                if config:
                    print(f"✓ 从Other文件提取: {target_id} -> {output_key}")
                else:
                    print(f"✗ Other文件未找到匹配: {target_id}")

        if config:
            new_pools[output_key] = config
            print(f"✓ 提取成功: {target_id} -> {output_key} (字段: {list(config.keys())})")
        else:
            print(f"✗ 未找到: {target_id}")

    if not new_pools:
        print("没有提取到任何池子，退出")
        return

    # 3. 读取已有输出文件，保留其他配置
    if os.path.isfile(OUTPUT_JSON_PATH):
        with open(OUTPUT_JSON_PATH, "r", encoding="utf-8") as f:
            output_data = json.load(f)
    else:
        output_data = {}

    if "SummonPool" not in output_data:
        output_data["SummonPool"] = {}

    # 4. 增量更新：对于每个池子，更新现有对象中的这些字段（不删除其他字段）
    for output_key, new_config in new_pools.items():
        if output_key in output_data["SummonPool"]:
            # 更新已存在的池子
            for field, value in new_config.items():
                output_data["SummonPool"][output_key][field] = value
            print(f"  已更新池子 '{output_key}' 的 {list(new_config.keys())}")
        else:
            # 添加新池子
            output_data["SummonPool"][output_key] = new_config
            print(f"  已添加新池子 '{output_key}'")

    os.makedirs(os.path.dirname(OUTPUT_JSON_PATH), exist_ok=True)
    with open(OUTPUT_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print(f"\n✅ 已更新配置文件：{OUTPUT_JSON_PATH}")
    print(f"   更新/添加了 {len(new_pools)} 个召唤池")

if __name__ == "__main__":
    main()
    input()