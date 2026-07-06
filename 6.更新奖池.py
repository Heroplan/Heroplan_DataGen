import json
import os
import sys
import shutil
import re
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
    "lottery_astralelves_default": "lottery_astralelves_default",
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
    # 英雄锦标赛奖池
    "lottery_league_default": "lottery_league_default",
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

def choose_best_candidate(candidates_with_date, ref_date):
    """
    规则：
    1. 如果存在过去 ≤7 天（即 ref_date - date 在 0~7 天）的候选，则从中选择日期最大的（即最近过去的）。
    2. 否则，如果存在未来 ≤30 天的候选，则从中选择日期最小的（即最近未来的）。
    3. 否则，回退到所有过去候选（无论天数）中日期最大的。
    """
    past_within_7 = []
    future_within_30 = []
    all_past = []  # 用于回退

    for dt, val in candidates_with_date:
        date = dt.date() if hasattr(dt, 'date') else dt
        if date <= ref_date:
            all_past.append((date, val))
            if (ref_date - date).days <= 7:
                past_within_7.append((date, val))
        else:  # date > ref_date
            if (date - ref_date).days <= 30:
                future_within_30.append((date, val))

    if past_within_7:
        # 选过去7天内最晚的（最大的日期）
        return max(past_within_7, key=lambda x: x[0])[1]
    elif future_within_30:
        # 选未来30天内最早的（最小的日期）
        return min(future_within_30, key=lambda x: x[0])[1]
    elif all_past:
        # 回退：选所有过去中最晚的
        return max(all_past, key=lambda x: x[0])[1]
    else:
        return None

def choose_best_entry(candidates_with_date, ref_date):
    """与 choose_best_candidate 类似，但返回原始条目（entry）而非配置"""
    past_within_7 = []
    future_within_30 = []
    all_past = []
    for dt, entry in candidates_with_date:
        date = dt.date() if hasattr(dt, 'date') else dt
        if date <= ref_date:
            all_past.append((date, entry))
            if (ref_date - date).days <= 7:
                past_within_7.append((date, entry))
        else:
            if (date - ref_date).days <= 30:
                future_within_30.append((date, entry))
    if past_within_7:
        return max(past_within_7, key=lambda x: x[0])[1]
    elif future_within_30:
        return min(future_within_30, key=lambda x: x[0])[1]
    elif all_past:
        return max(all_past, key=lambda x: x[0])[1]
    else:
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
                        candidates.append((date.date(), obj))
            for v in obj.values():
                recurse(v)
        elif isinstance(obj, list):
            for item in obj:
                recurse(item)
    recurse(data)
    if not candidates:
        return None

    best_obj = choose_best_candidate(candidates, now.date())
    if best_obj is None:
        return None
    return extract_pool_config(best_obj)

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
            candidates.append((date.date(), {"featuredHeroes": heroes}))

    if not candidates:
        return None

    best_config = choose_best_candidate(candidates, now.date())
    return best_config

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
                            color_candidates.setdefault(color, []).append((date.date(), featured))
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
        best_featured = choose_best_candidate(entries, now.date())
        if best_featured is not None:
            result[f"featuredHeroes_{color}"] = best_featured
    return result if result else None

# 提取英雄锦标赛奖池配置
def extract_league_lottery(main_data, other_data, now):
    """
    从主文件中找到最合适的 lottery_league_default 条目，
    再从 other 文件中匹配日期最接近的 pvpLeague 条目，
    返回包含 amountOfSelectableFeaturedSlots, entitiesToChooseFrom,
    AssociatedFamilies, latestIncludedHeroDate 的字典。
    """
    # 1. 在主文件中搜索 productId 为 lottery_league_default 的所有条目
    candidates = []   # (date, (start_str, config))
    def search_league_entries(obj):
        if isinstance(obj, dict):
            if obj.get("productId") == "lottery_league_default":
                start_str = obj.get("startDate")
                if start_str:
                    date = parse_date(start_str)
                    if date:
                        config = obj.get("playerSelectableFeaturedEntityConfig")
                        if config and isinstance(config, dict):
                            candidates.append((date.date(), (start_str, config)))
            for v in obj.values():
                search_league_entries(v)
        elif isinstance(obj, list):
            for item in obj:
                search_league_entries(item)

    search_league_entries(main_data)
    if not candidates:
        print("  [英雄锦标赛奖池] 未找到任何 lottery_league_default 条目")
        return None

    best = choose_best_candidate(candidates, now.date())
    if best is None:
        return None
    best_start_str, best_config = best
    best_date = parse_date(best_start_str).date()   # 用于后续匹配 family

    result = {}
    if "amountOfSelectableFeaturedSlots" in best_config:
        result["amountOfSelectableFeaturedSlots"] = best_config["amountOfSelectableFeaturedSlots"]
    if "entitiesToChooseFrom" in best_config:
        result["entitiesToChooseFrom"] = best_config["entitiesToChooseFrom"]

    # 2. 从 other 数据中匹配日期最接近的 pvpLeague 条目
    result["AssociatedFamilies"] = []
    if other_data is not None:
        # 定位 eventEntries
        event_entries = None
        try:
            event_entries = other_data["otherConfig"]["logic"]["pvpLeague"]["eventEntries"]
        except KeyError:
            # 尝试备用路径
            possible_paths = [
                ["pvpLeague", "eventEntries"],
                ["otherConfig", "pvpLeague", "eventEntries"],
                ["logic", "pvpLeague", "eventEntries"],
            ]
            for path in possible_paths:
                try:
                    temp = other_data
                    for key in path:
                        temp = temp[key]
                    if isinstance(temp, list):
                        event_entries = temp
                        break
                except (KeyError, TypeError):
                    continue

        if event_entries:
            family_candidates = []
            for entry in event_entries:
                start_str = entry.get("startTime")
                if not start_str:
                    continue
                date = parse_date(start_str)
                if not date:
                    continue
                families = entry.get("featuredFamilies")
                if families and isinstance(families, list):
                    family_candidates.append((date.date(), families))
            if family_candidates:
                best_families = choose_best_candidate(family_candidates, best_date)
                if best_families is not None:
                    result["AssociatedFamilies"] = best_families
                    print(f"  [英雄锦标赛奖池] 匹配到最接近的 featuredFamilies，共 {len(best_families)} 个家族")
    else:
        print("  [英雄锦标赛奖池] other_data 为空，无法获取 AssociatedFamilies")

    # 3. 计算 latestIncludedHeroDate
    try:
        start_dt = parse_date(best_start_str)
        if start_dt:
            new_date = start_dt - timedelta(days=180)
            result["latestIncludedHeroDate"] = new_date.strftime("%Y-%m-%d")
    except Exception as e:
        print(f"  [英雄锦标赛奖池] 计算 latestIncludedHeroDate 失败: {e}")

    if not result:
        return None
    return result

# ==================== 提取 Pickup 池每日英雄 ====================
def extract_pickup_daily_heroes(lottery_data, base_datetime):
    """
    从 lottery_data 中提取 lottery_pickup_default 的每日英雄列表，
    尝试获取从 base_datetime 开始的连续30天数据。
    如果某些天缺失，输出警告信息，但继续输出已有的数据。
    返回 {"featuredHeroes": {"YYYY-MM-DD": [hero_list], ...}}
    """
    # 起始日期（基准日期的日期部分）
    start_date = base_datetime.date()
    # 生成连续30天的日期列表
    date_list = [start_date + timedelta(days=i) for i in range(30)]
    
    # 存储存在的日期 -> 英雄列表
    date_to_heroes = {}
    
    def search(obj):
        if isinstance(obj, dict):
            # 匹配 productId == "lottery_pickup_default"
            if obj.get("productId") == "lottery_pickup_default":
                start_str = obj.get("startDate")
                if start_str:
                    dt = parse_date(start_str)
                    if dt:
                        entry_date = dt.date()
                        # 只关心在目标范围内的日期
                        if entry_date in date_list:
                            heroes = obj.get("featuredHeroes")
                            if heroes and isinstance(heroes, list):
                                # 同一天可能有多个条目（理论上不会），后面的覆盖前面的
                                date_to_heroes[entry_date] = heroes
            # 递归搜索子节点
            for v in obj.values():
                search(v)
        elif isinstance(obj, list):
            for item in obj:
                search(item)
    
    search(lottery_data)
    
    # 检查缺失的日期
    missing_dates = [d for d in date_list if d not in date_to_heroes]
    if missing_dates:
        print(f"  ⚠️ Pickup池: 共30天，缺失 {len(missing_dates)} 天数据")
        if len(missing_dates) <= 10:
            missing_str = ", ".join(d.isoformat() for d in missing_dates)
            print(f"     缺失日期: {missing_str}")
        else:
            print(f"     缺失日期示例: {missing_dates[0].isoformat()} ... {missing_dates[-1].isoformat()}")
    
    if not date_to_heroes:
        print("  ❌ Pickup池: 未找到任何有效数据")
        return None
    
    # 按日期排序后返回（日期格式为 YYYY-MM-DD）
    sorted_heroes = {d.isoformat(): date_to_heroes[d] for d in sorted(date_to_heroes.keys())}
    return {"featuredHeroes": sorted_heroes}

# ==================== 新增：从 other 提取灵魂交换、英雄教练、拜访裁缝 ====================
def extract_soul_exchange(other_data, now):
    """从 other_data 中提取 soulExchange 活动信息，返回包含 Date、five、fifteen、thirty 的字典"""
    try:
        entries = other_data["otherConfig"]["logic"]["soulExchange"]["schedule"]["entries"]
    except (KeyError, TypeError):
        return None
    if not isinstance(entries, list):
        return None
    candidates = []
    for entry in entries:
        start_str = entry.get("startTime")
        if start_str:
            dt = parse_date(start_str)
            if dt:
                candidates.append((dt.date(), entry))
    if not candidates:
        return None
    best_entry = choose_best_entry(candidates, now.date())
    if not best_entry:
        return None
    # 提取 tiers
    tiers = best_entry.get("soulExchangeTiers", [])
    five_heroes = []
    fifteen_heroes = []
    thirty_heroes = []
    for tier in tiers:
        cost = tier.get("cost")
        heroes = tier.get("heroes", [])
        if cost == 5:
            five_heroes = heroes
        elif cost == 15:
            fifteen_heroes = heroes
        elif cost == 30:
            thirty_heroes = heroes
    date_str = best_entry.get("startTime", "")
    date_part = date_str.split()[0] if date_str else ""
    return {
        "Date": date_part,
        "five": five_heroes,
        "fifteen": fifteen_heroes,
        "thirty": thirty_heroes
    }

def extract_hero_coach_date(other_data, now):
    """从 other_data 中提取 heroCoach 活动的 startTime 日期"""
    try:
        entries = other_data["otherConfig"]["logic"]["heroCoach"]["schedule"]["entries"]
    except (KeyError, TypeError):
        return None
    if not isinstance(entries, list):
        return None
    candidates = []
    for entry in entries:
        start_str = entry.get("startTime")
        if start_str:
            dt = parse_date(start_str)
            if dt:
                candidates.append((dt.date(), entry))
    if not candidates:
        return None
    best_entry = choose_best_entry(candidates, now.date())
    if best_entry:
        start_str = best_entry.get("startTime", "")
        return start_str.split()[0] if start_str else None
    return None

def extract_visiting_outfitter_date(other_data, now):
    """从 other_data 中提取 visitingOutfitter 活动的 startTime 日期"""
    try:
        entries = other_data["otherConfig"]["logic"]["visitingOutfitter"]["schedule"]["entries"]
    except (KeyError, TypeError):
        return None
    if not isinstance(entries, list):
        return None
    candidates = []
    for entry in entries:
        start_str = entry.get("startTime")
        if start_str:
            dt = parse_date(start_str)
            if dt:
                candidates.append((dt.date(), entry))
    if not candidates:
        return None
    best_entry = choose_best_entry(candidates, now.date())
    if best_entry:
        start_str = best_entry.get("startTime", "")
        return start_str.split()[0] if start_str else None
    return None

def update_data_js(file_path, soul_exchange_data, one_click_max_date, purchase_costume_date):
    if not os.path.isfile(file_path):
        print(f"⚠️ data.js 不存在: {file_path}")
        return
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    new_content = content
    updated = False

    # 更新 oneClickMaxDate
    if one_click_max_date:
        pattern = r"(const oneClickMaxDate\s*=\s*)'([^']*)'"
        match = re.search(pattern, new_content)
        if match:
            old_date = match.group(2)
            if old_date != one_click_max_date:
                new_content = re.sub(pattern, r"\1'" + one_click_max_date + "'", new_content)
                updated = True
                print(f"✅ 更新 oneClickMaxDate: {old_date} -> {one_click_max_date}")
            else:
                print(f"ℹ️ oneClickMaxDate 已是 {old_date}，无需更新")
        else:
            print("⚠️ 未找到 oneClickMaxDate 定义，无法更新")

    # 更新 purchaseCostumeDate
    if purchase_costume_date:
        pattern = r"(const purchaseCostumeDate\s*=\s*)'([^']*)'"
        match = re.search(pattern, new_content)
        if match:
            old_date = match.group(2)
            if old_date != purchase_costume_date:
                new_content = re.sub(pattern, r"\1'" + purchase_costume_date + "'", new_content)
                updated = True
                print(f"✅ 更新 purchaseCostumeDate: {old_date} -> {purchase_costume_date}")
            else:
                print(f"ℹ️ purchaseCostumeDate 已是 {old_date}，无需更新")
        else:
            print("⚠️ 未找到 purchaseCostumeDate 定义，无法更新")

    # 更新 soulExchange
    if soul_exchange_data:
        # 构造新的对象字符串
        se_obj = {
            "Date": soul_exchange_data["Date"],
            "five": soul_exchange_data["five"],
            "fifteen": soul_exchange_data["fifteen"],
            "thirty": soul_exchange_data["thirty"],
            "show": False
        }
        se_json_str = json.dumps(se_obj, indent=2, ensure_ascii=False)

        # 匹配整个 const soulExchange = { ... }; 块
        pattern = r"(const\s+soulExchange\s*=\s*)\{[\s\S]*?\}(\s*;)"
        match = re.search(pattern, new_content)
        if match:
            old_full = match.group(0)  # 完整匹配块
            old_date_match = re.search(r"Date\s*:\s*'([^']*)'", old_full)
            old_date = old_date_match.group(1) if old_date_match else ""
            if old_date and old_date > soul_exchange_data["Date"]:
                print(f"⚠️ 现有 soulExchange.Date ({old_date}) 比新日期 ({soul_exchange_data['Date']}) 更未来，跳过更新")
            else:
                new_line = "const soulExchange = " + se_json_str + ";"
                new_content = new_content.replace(old_full, new_line)
                updated = True
                print(f"✅ 更新 soulExchange: Date {old_date if old_date else '无'} -> {soul_exchange_data['Date']}")
                print(f"   five: {len(soul_exchange_data['five'])} 个英雄, fifteen: {len(soul_exchange_data['fifteen'])} 个, thirty: {len(soul_exchange_data['thirty'])} 个")
        else:
            # 备用匹配：匹配到第一个分号
            alt_pattern = r"(const\s+soulExchange\s*=\s*)([^;]+);"
            alt_match = re.search(alt_pattern, new_content, re.DOTALL)
            if alt_match:
                old_full = alt_match.group(0)
                old_date_match = re.search(r"Date\s*:\s*'([^']*)'", old_full)
                old_date = old_date_match.group(1) if old_date_match else ""
                if old_date and old_date > soul_exchange_data["Date"]:
                    print(f"⚠️ 现有 soulExchange.Date ({old_date}) 比新日期 ({soul_exchange_data['Date']}) 更未来，跳过更新")
                else:
                    new_line = "const soulExchange = " + se_json_str + ";"
                    new_content = new_content.replace(old_full, new_line)
                    updated = True
                    print(f"✅ 更新 soulExchange (备用匹配): Date {old_date if old_date else '无'} -> {soul_exchange_data['Date']}")
            else:
                print("⚠️ 无法定位 soulExchange 定义，跳过更新")

    if updated:
        if not new_content.endswith('\n'):
            new_content += '\n'
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"✅ data.js 已更新: {file_path}")
    else:
        print("ℹ️ data.js 无实质性更新，未写入")

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

    # ========== 奖池提取 ==========
    new_pools = {}

    for target_id, output_key in TARGET_POOLS.items():
        config = None

        # 0. 特殊处理：lottery_pickup_default —— 使用每日英雄映射
        if target_id == "lottery_pickup_default":
            config = extract_pickup_daily_heroes(lottery_data, adjusted_now)
            if config:
                print(f"✓ 提取 Pickup 池每日英雄: {target_id} -> {output_key}")
                print(f"  包含 {len(config['featuredHeroes'])} 天的数据")
            else:
                print(f"✗ Pickup 池未找到任何符合条件的条目: {target_id}")

        # 1. 特殊处理超级元素池（需要日期比较）
        elif target_id == "lottery_super_elemental":
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

        # 特殊处理英雄锦标赛奖池
        elif target_id == "lottery_league_default":
            config = extract_league_lottery(main_data, other_data, adjusted_now)
            if config:
                print(f"✓ 英雄锦标赛奖池特殊提取: {target_id} -> {output_key}")
            else:
                print(f"✗ 英雄锦标赛奖池提取失败: {target_id}")

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

        # ========== 新增：更新 data.js ==========
        data_js_path = os.path.join(target_dir, "data.js")
        if os.path.exists(data_js_path):
            soul_exchange_data = None
            one_click_max_date = None
            purchase_costume_date = None
            if other_data is not None:
                soul_exchange_data = extract_soul_exchange(other_data, adjusted_now)
                one_click_max_date = extract_hero_coach_date(other_data, adjusted_now)
                purchase_costume_date = extract_visiting_outfitter_date(other_data, adjusted_now)
            update_data_js(data_js_path, soul_exchange_data, one_click_max_date, purchase_costume_date)
        else:
            print(f"⚠️ data.js 不存在，跳过更新: {data_js_path}")

if __name__ == "__main__":
    main()
    # 仅在非 GitHub Actions 且是交互式终端时才等待输入
    if not is_github_actions() and sys.stdin.isatty():
        input("按回车键退出...")