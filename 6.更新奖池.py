import json
import os
import sys
import shutil
from datetime import datetime, timedelta, UTC

# ==================== 可自定义配置 ====================
# 输入文件相对路径（相对于脚本所在目录）
INPUT_PATHS = {
    "main": os.path.join("dict_gen", "官方英雄数据缓存解析", "CachedConfigurations", "json", "shop_en.json"),
    "other": os.path.join("dict_gen", "官方英雄数据缓存解析", "CachedConfigurations", "json", "other_en.json"),
    "products": os.path.join("dict_gen", "官方英雄数据缓存解析", "CachedConfigurations", "json", "products_en.json"),
}

OUTPUT_FILENAME = "lottery_config.json"

# 本地模式下，相对于脚本所在目录的 Heroplan.github.io 路径
LOCAL_TARGET_REL_PATH = os.path.join("..", "Heroplan.github.io")

# ==================== 奖池配置（完全保留原有） ====================
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
    "lottery_costume_wardrobe2": "lottery_costume_wardrobe2",
    "lottery_shadow_default": "lottery_shadow_default",
    "lottery_wilderness_default": "lottery_wilderness_default",
    "lottery_temple_default": "lottery_temple_default",
    "lottery_titan_hunter_default": "lottery_titan_hunter_default",
    "lottery_covenant_default": "lottery_covenant_default",
    "lottery_goblin_default": "lottery_goblin_default",
    "lottery_mercenary_war_default": "lottery_mercenary_war_default",
    "lottery_mimic_default": "lottery_mimic_default",
    "lottery_hotm_event_default": "lottery_hotm_event_default",
    # 从 other 文件提取的池子
    "lottery_tower_ninja_default": "lottery_tower_ninja_default",
    "lottery_tower_owl_default": "lottery_tower_owl_default",
    "lottery_tower_magic_default": "lottery_tower_magic_default",
    "lottery_tower_styx_default": "lottery_tower_styx_default",
    "lottery_featured_event_farmland": "lottery_featured_event_farmland",
    "lottery_featured_alliance_quest_musketeers": "lottery_featured_alliance_quest_musketeers",
    "lottery_super_elemental": "lottery_super_elemental",
    # 从 products 文件提取的池子
    "lottery_hero_lunar_new_year_2026": "lottery_hero_lunar_new_year",
    "lottery_seasonal_premium_lunar_new_year_2026": "lottery_seasonal_premium_lunar_new_year",
    "lottery_hero_valentines": "lottery_hero_valentines",
    "lottery_hero_easter": "lottery_hero_easter",
    "lottery_hero_beach_party_2026": "lottery_hero_beach_party",
    "lottery_seasonal_premium_beach_party_2026": "lottery_seasonal_premium_beach_party",
    "lottery_hero_kalevala": "lottery_hero_kalevala",
    "lottery_hero_halloween": "lottery_hero_halloween",
    "lottery_seasonal_premium_halloween": "lottery_seasonal_premium_halloween",
    "lottery_hero_christmas": "lottery_hero_christmas",
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

PRODUCTS_SOURCE_MAP = {
    "lottery_hero_lunar_new_year_2026": {
        "path": ["productsConfig", "products"],
        "match_key": "id",
        "match_value": "lottery_hero_lunar_new_year_2026",
        "heroes_key": "featuredNonCostumedHeroes",
    },
    "lottery_seasonal_premium_lunar_new_year_2026": {
        "path": ["productsConfig", "products"],
        "match_key": "id",
        "match_value": "lottery_seasonal_premium_lunar_new_year_2026",
        "heroes_key": "featuredNonCostumedHeroes",
        "included_heroes_key": "includedHeroes"
    },
    "lottery_hero_valentines": {
        "path": ["productsConfig", "products"],
        "match_key": "id",
        "match_value": "lottery_hero_valentines",
        "heroes_key": "featuredNonCostumedHeroes",
        "included_heroes_key": "includedHeroes"
    },
    "lottery_hero_easter": {
        "path": ["productsConfig", "products"],
        "match_key": "id",
        "match_value": "lottery_hero_easter",
        "heroes_key": "featuredNonCostumedHeroes",
        "included_heroes_key": "includedHeroes"
    },
    "lottery_hero_beach_party_2026": {
        "path": ["productsConfig", "products"],
        "match_key": "id",
        "match_value": "lottery_hero_beach_party_2026",
        "heroes_key": "featuredNonCostumedHeroes",
    },
    "lottery_seasonal_premium_beach_party_2026": {
        "path": ["productsConfig", "products"],
        "match_key": "id",
        "match_value": "lottery_seasonal_premium_beach_party_2026",
        "heroes_key": "featuredNonCostumedHeroes",
        "included_heroes_key": "includedHeroes"
    },
    "lottery_hero_kalevala": {
        "path": ["productsConfig", "products"],
        "match_key": "id",
        "match_value": "lottery_hero_kalevala",
        "heroes_key": "featuredNonCostumedHeroes",
        "included_heroes_key": "includedHeroes"
    },
    "lottery_hero_halloween": {
        "path": ["productsConfig", "products"],
        "match_key": "id",
        "match_value": "lottery_hero_halloween",
        "heroes_key": "featuredNonCostumedHeroes",
        "included_heroes_key": "includedHeroes"
    },
    "lottery_seasonal_premium_halloween": {
        "path": ["productsConfig", "products"],
        "match_key": "id",
        "match_value": "lottery_seasonal_premium_halloween",
        "heroes_key": "featuredNonCostumedHeroes",
        "included_heroes_key": "includedHeroes"
    },
    "lottery_hero_christmas": {
        "path": ["productsConfig", "products"],
        "match_key": "id",
        "match_value": "lottery_hero_christmas",
        "heroes_key": "featuredNonCostumedHeroes",
        "included_heroes_key": "includedHeroes"
    },
}

PLAYER_SELECTED_ENTITIES_MAP = {
    "lottery_black_7th_birthday": {
        "path": ["shopConfig", "lottery", "playerSelectedFeaturedEntityConfigs"],
        "match_key": "summonId",
    },
    "lottery_mimic_default": {
        "path": ["shopConfig", "lottery", "playerSelectedFeaturedEntityConfigs"],
        "match_key": "summonId",
    },
    "lottery_hotm_event_default": {
        "path": ["shopConfig", "lottery", "playerSelectedFeaturedEntityConfigs"],
        "match_key": "summonId",
    }
}

# ==================== 辅助函数 ====================
def get_script_dir():
    """返回当前脚本所在目录的绝对路径"""
    return os.path.dirname(os.path.abspath(__file__))

def is_github_actions():
    return os.getenv("GITHUB_ACTIONS") == "true"

def get_output_path(script_dir):
    """根据环境决定输出文件的最终路径"""
    if is_github_actions():
        # Actions 环境：输出到当前工作目录（仓库根目录）
        return os.path.join(os.getcwd(), OUTPUT_FILENAME)
    else:
        # 本地环境：输出到脚本所在目录
        return os.path.join(script_dir, OUTPUT_FILENAME)

def sync_from_target_if_newer(local_path, target_path):
    """如果目标文件存在且比本地文件新，则复制目标文件到本地"""
    if not os.path.exists(target_path):
        return False
    if not os.path.exists(local_path):
        shutil.copy2(target_path, local_path)
        print(f"📥 本地文件不存在，已从 {target_path} 复制到 {local_path}")
        return True
    local_mtime = os.path.getmtime(local_path)
    target_mtime = os.path.getmtime(target_path)
    if target_mtime > local_mtime:
        shutil.copy2(target_path, local_path)
        print(f"📥 目标文件较新，已从 {target_path} 同步到 {local_path}")
        return True
    else:
        print(f"✅ 本地文件已是最新，无需从目标同步")
        return False

def sync_to_target(local_path, target_path):
    """将本地文件复制到目标路径（覆盖）"""
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    shutil.copy2(local_path, target_path)
    print(f"📤 已同步到目标：{target_path}")

def parse_date(date_str: str):
    try:
        return datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
    except ValueError:
        return None

def extract_pool_config(entry: dict):
    """从主文件召唤池条目中提取 featuredHeroes、includedHeroes、limitedPoolSummonConfiguration"""
    config = {}
    for key, value in entry.items():
        if key.startswith("featured") and isinstance(value, list):
            config["featuredHeroes"] = value
            break
    if "includedHeroes" in entry and isinstance(entry["includedHeroes"], list):
        config["includedHeroes"] = entry["includedHeroes"]
    if "limitedPoolSummonConfiguration" in entry and isinstance(entry["limitedPoolSummonConfiguration"], dict):
        config["limitedPoolSummonConfiguration"] = entry["limitedPoolSummonConfiguration"]
    return config

def extract_from_main(data, target_id, now):
    """从主文件中提取匹配 productId/id 的条目，按日期选最近，返回配置字典"""
    candidates = []
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
    today = now.date()
    def sort_key(item):
        date_obj = item[0].date()
        abs_days = abs((date_obj - today).days)
        is_past = 1 if date_obj < today else 0   # 过去为1，未来/今天为0 → 未来优先
        return (abs_days, is_past)
    closest_entry = min(candidates, key=sort_key)[1]
    return extract_pool_config(closest_entry)

def extract_from_other(other_data, rule, now):
    """从 other 文件中按规则提取 featuredCharacters（需日期筛选）"""
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
    today = now.date()
    def sort_key(item):
        date_obj = item[0].date()
        abs_days = abs((date_obj - today).days)
        is_past = 1 if date_obj < today else 0
        return (abs_days, is_past)
    closest_config = min(candidates, key=sort_key)[1]
    return closest_config

def extract_from_products(products_data, rule):
    """从 products 文件中根据 id 直接匹配，返回 featuredHeroes 和 includedHeroes"""
    target = products_data
    for key in rule["path"]:
        if isinstance(target, dict):
            target = target.get(key)
            if target is None:
                return None
        else:
            return None
    if not isinstance(target, list):
        return None
    for entry in target:
        if not isinstance(entry, dict):
            continue
        if entry.get(rule["match_key"]) == rule["match_value"]:
            config = {}
            heroes = entry.get(rule["heroes_key"])
            if heroes is None:
                heroes = entry.get("featuredHeroes")
            if heroes and isinstance(heroes, list):
                config["featuredHeroes"] = heroes
            if "included_heroes_key" in rule:
                included = entry.get(rule["included_heroes_key"])
            else:
                included = entry.get("includedHeroes")
            if included and isinstance(included, list):
                config["includedHeroes"] = included
            return config
    return None

def extract_from_player_selected_entities(main_data, target_id):
    """从 playerSelectedFeaturedEntityConfigs 中提取 entitiesToChooseFrom"""
    try:
        target_list = main_data
        for key in ["shopConfig", "lottery", "playerSelectedFeaturedEntityConfigs"]:
            target_list = target_list.get(key)
            if target_list is None:
                return None
    except (KeyError, AttributeError):
        return None
    if not isinstance(target_list, list):
        return None
    for entry in target_list:
        if not isinstance(entry, dict):
            continue
        if entry.get("summonId") == target_id:
            config = {}
            if "entitiesToChooseFrom" in entry:
                config["entitiesToChooseFrom"] = entry["entitiesToChooseFrom"]
            return config
    return None

def process_super_elemental(lottery_data, now):
    """特殊处理超级元素池，返回 {featuredHeroes_color: [...]}"""
    color_candidates = {}
    def recurse(obj):
        if isinstance(obj, dict):
            pid = obj.get("productId")
            if isinstance(pid, str) and pid.startswith("lottery_super_elemental_"):
                start_str = obj.get("startDate")
                if start_str:
                    date = parse_date(start_str)
                    if date:
                        color = pid.replace("lottery_super_elemental_", "")
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
        today = now.date()
        def sort_key(item):
            date_obj = item[0].date()
            abs_days = abs((date_obj - today).days)
            is_past = 1 if date_obj < today else 0
            return (abs_days, is_past)
        closest = min(entries, key=sort_key)
        result[f"featuredHeroes_{color}"] = closest[1]
    return result

# ==================== 主函数 ====================
def main():
    script_dir = get_script_dir()
    output_path = get_output_path(script_dir)
    print(f"输出文件路径：{output_path}")

    # 本地模式下，检查并同步来自 Heroplan.github.io 的旧文件
    if not is_github_actions():
        target_dir = os.path.join(script_dir, LOCAL_TARGET_REL_PATH)
        target_file = os.path.join(target_dir, OUTPUT_FILENAME)
        if os.path.exists(target_dir):
            sync_from_target_if_newer(output_path, target_file)
        else:
            print(f"⚠️ 本地目标目录不存在：{target_dir}，将跳过同步")

    # 构建输入文件的绝对路径
    main_json_path = os.path.join(script_dir, INPUT_PATHS["main"])
    other_json_path = os.path.join(script_dir, INPUT_PATHS["other"])
    products_json_path = os.path.join(script_dir, INPUT_PATHS["products"])

    # 读取主配置
    if not os.path.isfile(main_json_path):
        print(f"错误：主文件不存在 - {main_json_path}")
        return
    with open(main_json_path, "r", encoding="utf-8") as f:
        main_data = json.load(f)
    try:
        lottery_data = main_data["shopConfig"]["lottery"]
    except KeyError:
        print("未找到 shopConfig.lottery 节点")
        return

    # 读取 other 配置
    other_data = None
    if os.path.isfile(other_json_path):
        with open(other_json_path, "r", encoding="utf-8") as f:
            other_data = json.load(f)
        print(f"已加载Other文件: {other_json_path}")
    else:
        print(f"警告：Other文件不存在 - {other_json_path}")

    # 读取 products 配置
    products_data = None
    if os.path.isfile(products_json_path):
        with open(products_json_path, "r", encoding="utf-8") as f:
            products_data = json.load(f)
        print(f"已加载Products文件: {products_json_path}")
    else:
        print(f"警告：Products文件不存在 - {products_json_path}")

    # 获取当前UTC时间
    now_utc = datetime.now(UTC)
    if now_utc.hour < 7:
        adjusted_now = now_utc - timedelta(days=1)
        print(f"当前UTC时间 {now_utc.strftime('%Y-%m-%d %H:%M:%S')} 早于07:00，将基准日期调整为 {adjusted_now.strftime('%Y-%m-%d')}")
    else:
        adjusted_now = now_utc
        print(f"当前UTC时间 {now_utc.strftime('%Y-%m-%d %H:%M:%S')} 已达到或超过07:00，使用实际日期作为基准")

    new_pools = {}

    for target_id, output_key in TARGET_POOLS.items():
        config = None

        # 1. 特殊处理超级元素池（需要日期比较）
        if target_id == "lottery_super_elemental":
            config = process_super_elemental(lottery_data, adjusted_now)
            if config:
                print(f"✓ 特殊处理超级元素池: {target_id} -> {output_key}")
            else:
                print(f"✗ 超级元素池未找到任何颜色条目: {target_id}")

        # 2. 从 playerSelectedFeaturedEntityConfigs 提取（不需要日期比较）
        elif target_id in PLAYER_SELECTED_ENTITIES_MAP:
            config = extract_from_player_selected_entities(main_data, target_id)
            if config:
                print(f"✓ 从PlayerSelectedEntities提取: {target_id} -> {output_key}")
            else:
                print(f"✗ PlayerSelectedEntities未找到匹配: {target_id}")

        # 3. 从 products 文件提取（不需要日期比较）
        elif target_id in PRODUCTS_SOURCE_MAP and products_data is not None:
            rule = PRODUCTS_SOURCE_MAP[target_id]
            config = extract_from_products(products_data, rule)
            if config:
                print(f"✓ 从Products文件提取: {target_id} -> {output_key}")
            else:
                print(f"✗ Products文件未找到匹配: {target_id}")

        # 4. 从 other 文件提取（需要日期比较）
        elif target_id in POOL_SOURCE_MAP and other_data is not None:
            rule = POOL_SOURCE_MAP[target_id]
            config = extract_from_other(other_data, rule, adjusted_now)
            if config:
                print(f"✓ 从Other文件提取: {target_id} -> {output_key}")
            else:
                print(f"✗ Other文件未找到匹配: {target_id}")

        # 5. 默认从主文件提取（需要日期比较）
        else:
            config = extract_from_main(lottery_data, target_id, adjusted_now)
            if config:
                print(f"✓ 从主文件提取: {target_id} -> {output_key}")
            else:
                print(f"✗ 未找到: {target_id}")

        if config:
            new_pools[output_key] = config
            print(f"  字段: {list(config.keys())}")
        else:
            print(f"  提取失败: {target_id}")

    if not new_pools:
        print("没有提取到任何池子，退出")
        return

    # 读取已有输出文件（如果存在），保留其他配置
    if os.path.isfile(output_path):
        with open(output_path, "r", encoding="utf-8") as f:
            output_data = json.load(f)
    else:
        output_data = {}

    if "SummonPool" not in output_data:
        output_data["SummonPool"] = {}

    # 增量更新
    for output_key, new_config in new_pools.items():
        if output_key in output_data["SummonPool"]:
            for field, value in new_config.items():
                output_data["SummonPool"][output_key][field] = value
            print(f"  已更新池子 '{output_key}' 的 {list(new_config.keys())}")
        else:
            output_data["SummonPool"][output_key] = new_config
            print(f"  已添加新池子 '{output_key}'")

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print(f"\n✅ 已更新配置文件：{output_path}")
    print(f"   更新/添加了 {len(new_pools)} 个召唤池")

    # 本地模式下，将新生成的文件同步回 Heroplan.github.io
    if not is_github_actions():
        target_dir = os.path.join(script_dir, LOCAL_TARGET_REL_PATH)
        target_file = os.path.join(target_dir, OUTPUT_FILENAME)
        if os.path.exists(target_dir):
            sync_to_target(output_path, target_file)
        else:
            print(f"⚠️ 本地目标目录不存在，无法同步：{target_dir}")

if __name__ == "__main__":
    main()
    # 仅在非 GitHub Actions 且是交互式终端时才等待输入
    if not is_github_actions() and sys.stdin.isatty():
        input("按回车键退出...")