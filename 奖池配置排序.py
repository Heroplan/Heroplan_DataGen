import json
from collections import OrderedDict
from typing import List, Dict, Any

def load_json_preserve_order(file_path: str) -> Dict[str, Any]:
    """加载 JSON 并保持顶层键的原始顺序"""
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f, object_pairs_hook=OrderedDict)

def save_json_preserve_order(data: Dict[str, Any], file_path: str) -> None:
    """保存 JSON，保持键的顺序并美化输出"""
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def sort_summon_config(config: OrderedDict, product_types_order: List[str]) -> OrderedDict:
    """
    按 product_types_order 排序 SummonConfig 的键
    不在列表中的键按原顺序追加到末尾
    """
    original_keys = list(config.keys())
    ordered_config = OrderedDict()
    
    # 先添加在顺序列表中的键
    for key in product_types_order:
        if key in config:
            ordered_config[key] = config[key]
    
    # 再添加未出现在顺序列表中的其他键（保持原顺序）
    for key in original_keys:
        if key not in ordered_config:
            ordered_config[key] = config[key]
    
    return ordered_config

def sort_summon_pool(pool: OrderedDict, ids_order: List[str]) -> OrderedDict:
    """
    对 SummonPool 排序：
    1. 固定四个键保持在顶部（按给出的顺序）
    2. 然后按 ids_order 顺序添加匹配的键
    3. 其余未匹配的键按原顺序追加到末尾
    """
    fixed_top_keys = ["exclude_for_all", "hotm", "MysteryHero", "LegendsSummonMysteryHero"]
    original_keys = list(pool.keys())
    ordered_pool = OrderedDict()
    
    # 固定顶部键
    for key in fixed_top_keys:
        if key in pool:
            ordered_pool[key] = pool[key]
    
    # 按 ids_order 添加匹配的键
    for key in ids_order:
        if key in pool and key not in ordered_pool:
            ordered_pool[key] = pool[key]
    
    # 添加其他未匹配的键（保持原顺序）
    for key in original_keys:
        if key not in ordered_pool:
            ordered_pool[key] = pool[key]
    
    return ordered_pool

def main():
    # 加载 JSON 数据（保留原始键顺序）
    lottery_config = load_json_preserve_order('../Heroplan.github.io/lottery_config.json')
    lottery_data = load_json_preserve_order('../Heroplan.github.io/lottery.json')
    
    # 提取 productType 顺序（去重保持首次出现顺序）
    product_types_order: List[str] = []
    for entry in lottery_data:
        pt = entry.get('productType')
        if pt and pt not in product_types_order:
            product_types_order.append(pt)
    
    # 提取 id 顺序（去重保持首次出现顺序）
    ids_order: List[str] = []
    for entry in lottery_data:
        eid = entry.get('id')
        if eid and eid not in ids_order:
            ids_order.append(eid)
    
    # 排序 SummonConfig
    if 'SummonConfig' in lottery_config:
        lottery_config['SummonConfig'] = sort_summon_config(
            lottery_config['SummonConfig'], product_types_order
        )
    
    # 排序 SummonPool
    if 'SummonPool' in lottery_config:
        lottery_config['SummonPool'] = sort_summon_pool(
            lottery_config['SummonPool'], ids_order
        )
    
    # 保存结果
    save_json_preserve_order(lottery_config, '../Heroplan.github.io/lottery_config.json')
    print("排序完成！输出文件: ../Heroplan.github.io/lottery_config.json")

if __name__ == '__main__':
    main()