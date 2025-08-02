# Universal Interactive Binary Parser & Translator
#
# The definitive all-in-one tool for parsing, transforming, and localizing
# serialized binary files. Supports a context-aware workflow for advanced
# multi-file data linkage (e.g., hero-costume name composition).
#
# Author: Your Name Here (with AI collaboration)
# Version: 11.3.0 (Context-Aware Workflow)
# Last Updated: 2025-07-30

import json
import traceback
import datetime
import sys
import os

# --- 核心数据结构与常量 ---
CUSTOM_EPOCH = datetime.datetime(2000, 1, 1)

# ==============================================================================
# --- 用户配置区：在这里添加您的所有自定义规则 ---
# ==============================================================================
SPECIAL_TIMESTAMP_KEYS = ('startTime', 'endTime', 'canBeReceivedDate', 'startDate', 'endDate', 'canBeAscendedToDate','earliestLaunchDate')
SPECIAL_BOOLEAN_TRUE_KEYS = ('hasImprovedTalentSkill', 'isSecret', 'isDefaultRider', 'forceUseCostumeLevelUpAndUpgradeCosts', 'isGuest')
SPECIAL_DURATION_KEYS = ('duration', 'timeOfDay','preparationDuration','mapDuration','aftermathDuration')

REPLACEMENT_RULES = {
    ('heroes', 'featuredHeroes','costumeId','id','parentHeroId2'): [
        {
            'file': 'heroes_name_fancy_en.txt', 
            'prefix': 'heroes.name_fancy.',
            # 新的复合规则，将在处理非 characters 文件时，利用缓存进行查找
            'compound_rule': {
                'trigger_keyword': '_costume',
                'separator': '-'
            }
        }
    ],
    ('families', 'featuredFamilies','family'):[ 
        {'file': 'family_title_cn.txt', 'prefix': 'herocard.family.title.'}
    ],
    ('eventId', 'origin','lotteryProductType'): [
        {'file': 'event_name_cn.txt', 'prefix': 'event.name.'},
        {'file': 'lottery_title_cn.txt', 'prefix': 'lottery.title.'}
    ],
    ('aetherGift',): [{'file': 'aether_power_en.txt', 'prefix': 'limitbreak.gift.title.'}],
    ('manaSpeedId',): [{'file': 'base_values_cn.txt', 'prefix': 'base.'}],
    ('classType',): [{'file': 'base_values_cn.txt', 'prefix': 'base.'}],
    ('rarity',): [{'file': 'base_values_cn.txt', 'prefix': 'base.'}],
    ('specialId2',): [{'file': 'skill_name_cn.txt', 'prefix': 'specials.name.'}]
}
# ==============================================================================

# --- 全局变量与辅助函数 ---
FLATTENED_REPLACEMENT_RULES = {}
LOOKUP_TABLES = {}
# --- 新增：上下文缓存 ---
CHARACTERS_CACHE = {}

def flatten_rules(rules_dict):
    flattened = {}
    for key, rules_list in rules_dict.items():
        if not isinstance(rules_list, list): rules_list = [rules_list]
        if isinstance(key, tuple):
            for single_key in key: flattened[single_key] = rules_list
        else: flattened[key] = rules_list
    return flattened

def load_lookup_tables():
    print("--- 正在预加载查找表... ---")
    files_to_load = set()
    for rules_list in REPLACEMENT_RULES.values():
        if not isinstance(rules_list, list): rules_list = [rules_list]
        for rule in rules_list:
            if 'file' in rule: files_to_load.add(rule['file'])
    for filename in files_to_load:
        try:
            table = {}
            with open(filename, 'r', encoding='utf-8') as f:
                for line in f:
                    if ',' in line:
                        k, v = line.split(',', 1)
                        table[k.strip().strip('"')] = v.strip().strip('"')
            LOOKUP_TABLES[filename] = table
            print(f"✅ 成功加载 '{filename}' ({len(table)} 条规则)")
        except FileNotFoundError:
            print(f"🟡 警告: 查找文件 '{filename}' 未找到。")
        except Exception as e:
            print(f"❌ 加载 '{filename}' 时发生错误: {e}")

def process_single_replacement(value, rules_list):
    if not isinstance(value, str): return value
    lower_value = value.lower()
    for rule in rules_list:
        # --- 增强：复合规则逻辑 (利用上下文缓存) ---
        compound_rule = rule.get('compound_rule')
        if compound_rule and compound_rule['trigger_keyword'] in lower_value and CHARACTERS_CACHE:
            trigger = compound_rule['trigger_keyword']
            base_id = lower_value.split(trigger)[0]
            
            # 1. 在缓存中查找本体名称
            base_name = CHARACTERS_CACHE.get(base_id)
            
            # 2. 在文件中查找服装名称
            costume_table = LOOKUP_TABLES.get(rule['file'])
            costume_name = value
            if costume_table:
                costume_name = costume_table.get(rule['prefix'] + lower_value, value)

            # 3. 组合结果
            if base_name and costume_name != value:
                return f"{base_name}{compound_rule.get('separator', '-')}{costume_name}"
            return costume_name # 未找到本体，则只返回服装的查找结果

        # --- 常规规则逻辑 ---
        else:
            table = LOOKUP_TABLES.get(rule['file'])
            if table:
                lookup_key = rule['prefix'] + lower_value
                if lookup_key in table:
                    return table[lookup_key]
    return value

# ... (apply_replacement, convert_*, read_* 等函数保持不变) ...
def apply_replacement(original_value, field_name):
    if field_name not in FLATTENED_REPLACEMENT_RULES: return original_value
    rules_list = FLATTENED_REPLACEMENT_RULES[field_name]
    if isinstance(original_value, list):
        return [process_single_replacement(item, rules_list) for item in original_value]
    else:
        return process_single_replacement(original_value, rules_list)
def convert_timestamp(seconds):
    try: return (CUSTOM_EPOCH + datetime.timedelta(seconds=seconds)).strftime('%Y-%m-%d %H:%M:%S')
    except (ValueError, TypeError): return seconds
def convert_duration(total_seconds):
    if not isinstance(total_seconds, int) or total_seconds < 0: return total_seconds
    parts, td = [], datetime.timedelta(seconds=total_seconds)
    days, h, m, s = td.days, td.seconds // 3600, (td.seconds // 60) % 60, td.seconds % 60
    if days > 0: parts.append(f"{days}天")
    if h > 0: parts.append(f"{h}小时")
    if m > 0: parts.append(f"{m}分钟")
    if s > 0 or not parts: parts.append(f"{s}秒")
    return "".join(parts)
def read_string(data, offset):
    length = data[offset]; offset += 1
    return data[offset:offset + length].decode('utf-8', errors='ignore'), offset + length
def read_long_string(data, offset):
    length = int.from_bytes(data[offset:offset+2], 'little'); offset += 2
    return data[offset:offset + length].decode('utf-8', errors='ignore'), offset + length
def read_short(data, offset):
    return int.from_bytes(data[offset:offset + 2], 'little', signed=False), offset + 2
def read_int(data, offset):
    return int.from_bytes(data[offset:offset + 4], 'little', signed=False), offset + 4
def read_long(data, offset):
    return int.from_bytes(data[offset:offset + 8], 'little', signed=False), offset + 8
def read_value(data, offset, type_code):
    if type_code == 0x08: return read_string(data, offset)
    elif type_code == 0x09: return read_long_string(data, offset)
    elif type_code == 0x04: return read_short(data, offset)
    elif type_code == 0x05: return read_int(data, offset)
    elif type_code in (0x03, 0x67): return data[offset], offset + 1
    elif type_code == 0x02: return True, offset
    elif type_code == 0x01: return False, offset
    elif type_code == 0x0B: return parse_object(data, offset)
    elif type_code == 0x0A: return read_list(data, offset)
    else: raise ValueError(f"在通用解析器中遇到未知类型 {hex(type_code)} (位置: {offset - 1})")
def read_list(data, offset):
    items = []
    while offset < len(data) and data[offset] != 0xFF:
        type_code = data[offset]; offset += 1
        item_value, offset = read_value(data, offset, type_code)
        items.append(item_value)
    if offset < len(data) and data[offset] == 0xFF: offset += 1
    else: raise ValueError(f"列表在偏移量 {offset} 处未由 0xFF 正确终止。")
    return items, offset
def parse_object(data, offset):
    obj = {}
    while offset < len(data) and data[offset] != 0xFF:
        field_name, offset = read_string(data, offset)
        if offset >= len(data): raise IndexError(f"读取字段'{field_name}'的类型/长度时越界。")
        code = data[offset]; offset += 1
        if field_name in SPECIAL_TIMESTAMP_KEYS:
            if code == 0x05: seconds, offset = read_int(data, offset)
            elif code == 0x06: seconds, offset = read_long(data, offset)
            else: raise ValueError(f"字段 '{field_name}' 后遇到未知长度码 {hex(code)}")
            value = convert_timestamp(seconds)
        elif field_name in SPECIAL_DURATION_KEYS:
            seconds, offset = read_value(data, offset, code)
            value = convert_duration(seconds)
        elif field_name in SPECIAL_BOOLEAN_TRUE_KEYS:
            if code != 0x02: raise ValueError(f"字段 '{field_name}' 期望类型码 0x02")
            value = True
        else:
            value, offset = read_value(data, offset, code)
            value = apply_replacement(value, field_name)
        obj[field_name] = value
    if offset < len(data) and data[offset] == 0xFF: offset += 1
    else:
        if offset != len(data): pass
    return obj, offset

# --- 文件与文件夹处理核心逻辑 (有重大修改) ---
def get_start_offset(data, filename):
    if 'characters' in filename.lower():
        try:
            header = b'\x0B\x06heroes\x0A'
            return data.index(header) + len(header)
        except ValueError:
            print(f"警告: 在 '{filename}' 中未找到 'heroes' 头。")
    if data and data[0] == 0x0B: return 1
    return 0

def process_path(path):
    global CHARACTERS_CACHE
    path = path.strip().strip('"')
    if not os.path.exists(path):
        print(f"❌ 错误: 路径不存在 '{path}'"); return
    
    files_to_process, output_dir = [], ""
    if os.path.isdir(path):
        print(f"\n--- 正在扫描文件夹: '{os.path.basename(path)}' ---")
        output_dir = os.path.join(path, 'json')
        # 建立文件列表，并确保 'characters' 优先
        temp_files = []
        for item in os.listdir(path):
            full_item_path = os.path.join(path, item)
            if os.path.isfile(full_item_path) and not full_item_path.endswith('.py'):
                if 'characters' in item.lower():
                    files_to_process.insert(0, full_item_path) # 插入到队首
                else:
                    temp_files.append(full_item_path)
        files_to_process.extend(temp_files)
    elif os.path.isfile(path):
        files_to_process.append(path)
        output_dir = os.path.join(os.path.dirname(path), 'json')

    os.makedirs(output_dir, exist_ok=True)
    if os.path.isdir(path): print(f"所有JSON文件将被保存在: '{output_dir}'")
    
    # 在处理任何文件之前，重置缓存
    CHARACTERS_CACHE = {}
    
    for filepath in files_to_process:
        process_file(filepath, output_dir)

def process_file(filepath, output_dir):
    global CHARACTERS_CACHE
    basename = os.path.basename(filepath)
    output_filename = os.path.join(output_dir, os.path.splitext(basename)[0] + "_en.json")
    print(f"\n--- 正在处理文件: '{basename}' ---")
    try:
        with open(filepath, 'rb') as f:
            binary_data = f.read()
        print(f"文件读取成功，共 {len(binary_data)} 字节。")
        if not binary_data:
            print("🟡 文件为空，已跳过。"); return
        start_offset = get_start_offset(binary_data, basename)
        print(f"确定起始解析偏移量为: {start_offset}")
        
        # 'characters' 文件有特殊的顶层结构
        if 'characters' in basename.lower():
            parsed_data, final_offset = parse_characters_file(binary_data, start_offset)
            # --- 关键：处理完 characters 后，立即填充上下文缓存 ---
            print("--- 正在填充英雄名称上下文缓存... ---")
            for original_id, hero_data in parsed_data.items():
                translated_name = hero_data.get('id')
                if translated_name:
                    CHARACTERS_CACHE[original_id] = translated_name
            print(f"✅ 缓存填充完毕，共 {len(CHARACTERS_CACHE)} 条记录。")
        else:
            parsed_data, final_offset = parse_object(binary_data, start_offset)
            
        print(f"解析完成！最终偏移量: {final_offset} / {len(binary_data)}。")
        print(f"正在将结果写入文件: '{output_filename}'...")
        with open(output_filename, 'w', encoding='utf-8') as f:
            json.dump(parsed_data, f, indent=2, ensure_ascii=False)
        print(f"✅ 操作成功！结果已保存到 '{output_filename}'")
    except Exception as e:
        print(f"❌ 在处理 '{basename}' 过程中发生错误: {e}")
        traceback.print_exc()

def parse_characters_file(data, start_offset):
    parsed_data, offset = {}, start_offset
    while offset < len(data):
        if data[offset] != 0x0B: break
        
        # 预读原始ID以用作顶层键
        temp_offset = offset + 1 
        id_field_len = data[temp_offset]; temp_offset +=1
        id_field_name = data[temp_offset:temp_offset+id_field_len].decode('utf-8', 'ignore')
        original_id = f"unknown_id_{offset}"
        if id_field_name == 'id':
            temp_offset += id_field_len
            id_type_code = data[temp_offset]; temp_offset += 1
            if id_type_code == 0x08:
                id_len = data[temp_offset]; temp_offset += 1
                original_id = data[temp_offset:temp_offset+id_len].decode('utf-8', 'ignore')

        # 正常解析和翻译整个对象
        offset += 1
        hero_obj, offset = parse_object(data, offset)
        parsed_data[original_id] = hero_obj
             
    return parsed_data, offset

def main():
    global FLATTENED_REPLACEMENT_RULES
    print("=====================================================")
    print("✅ 通用二进制解析器 v15.0 (上下文工作流)")
    print("=====================================================")
    
    FLATTENED_REPLACEMENT_RULES = flatten_rules(REPLACEMENT_RULES)
    load_lookup_tables()

    paths_to_process = sys.argv[1:]
    if paths_to_process:
        print("\n--- 检测到命令行参数，进入直接处理模式 ---")
        for path in paths_to_process:
            process_path(path)
        print("\n\n--- 所有任务处理完毕 ---")
        return

    print("\n请将一个或多个文件/文件夹拖放到此窗口中，然后按 Enter。")
    print("直接按 Enter 或输入 'exit' / 'quit' 即可退出程序。")
    
    while True:
        try:
            raw_input_str = input("\n>>> 等待拖放... ")
            if not raw_input_str or raw_input_str.lower() in ['exit', 'quit']:
                print("程序已退出."); break
            
            if raw_input_str.startswith('"'):
                input_paths = [p.strip() for p in raw_input_str.split('"') if p.strip()]
            else:
                input_paths = raw_input_str.split()
            if not input_paths:
                print("🟡 未检测到有效的文件路径，请重试。"); continue
            for path in input_paths:
                process_path(path)
            
            print("\n--- 本批次所有任务处理完毕 ---")
        except KeyboardInterrupt:
            print("\n程序被用户中断."); break
        except Exception as e:
            print(f"\n❌ 发生意外错误: {e}"); traceback.print_exc()

if __name__ == "__main__":
    main()