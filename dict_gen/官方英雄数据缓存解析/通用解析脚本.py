# Universal Interactive Binary Parser
#
# The definitive tool for parsing serialized binary files from the game.
# Supports drag-and-drop, folder batch processing, and all known data rules.
#
# Author: Your Name Here (with AI collaboration)
# Version: 6.0.0 (Final & Unified)
# Last Updated: 2025-07-30

import json
import traceback
import datetime
import sys
import os

# --- 核心数据结构与常量 ---
CUSTOM_EPOCH = datetime.datetime(2000, 1, 1)
SPECIAL_TIMESTAMP_KEYS = ('startTime', 'endTime', 'canBeReceivedDate', 'startDate', 'endDate', 'canBeAscendedToDate')
SPECIAL_BOOLEAN_TRUE_KEYS = (
    'hasImprovedTalentSkill', 'isSecret', 'isDefaultRider', 
    'forceUseCostumeLevelUpAndUpgradeCosts', 'isGuest'
)

# --- 底层数据读取与转换函数 ---
def convert_timestamp(seconds):
    try:
        return (CUSTOM_EPOCH + datetime.timedelta(seconds=seconds)).strftime('%Y-%m-%d %H:%M:%S')
    except (ValueError, TypeError):
        return seconds

def read_string(data, offset):
    if offset >= len(data): raise IndexError(f"读取短字符串长度时越界 (位置: {offset})。")
    length = data[offset]; offset += 1
    if offset + length > len(data): raise IndexError(f"读取短字符串内容时越界 (位置: {offset})。")
    return data[offset:offset + length].decode('utf-8', errors='ignore'), offset + length

def read_long_string(data, offset):
    if offset + 2 > len(data): raise IndexError(f"读取长字符串长度时越界 (位置: {offset})。")
    length = int.from_bytes(data[offset:offset+2], 'little'); offset += 2
    if offset + length > len(data): raise IndexError(f"读取长字符串内容时越界 (位置: {offset})。")
    return data[offset:offset + length].decode('utf-8', errors='ignore'), offset + length

def read_short(data, offset):
    if offset + 2 > len(data): raise IndexError(f"读取 short 时越界 (位置: {offset})。")
    return int.from_bytes(data[offset:offset + 2], 'little', signed=False), offset + 2

def read_int(data, offset):
    if offset + 4 > len(data): raise IndexError(f"读取 int 时越界 (位置: {offset})。")
    return int.from_bytes(data[offset:offset + 4], 'little', signed=False), offset + 4
    
def read_long(data, offset):
    if offset + 8 > len(data): raise IndexError(f"读取 long 时越界 (位置: {offset})。")
    return int.from_bytes(data[offset:offset + 8], 'little', signed=False), offset + 8

# --- 核心递归解析器 ---
def read_value(data, offset, type_code):
    if type_code == 0x08: return read_string(data, offset)
    # --- 新增规则：长字符串 ---
    elif type_code == 0x09: return read_long_string(data, offset)
    elif type_code == 0x04: return read_short(data, offset)
    elif type_code == 0x05: return read_int(data, offset)
    elif type_code in (0x03, 0x67): return data[offset], offset + 1
    elif type_code == 0x02: return True, offset
    elif type_code == 0x01: return False, offset
    elif type_code == 0x0B: return parse_object(data, offset)
    elif type_code == 0x0A: return read_list(data, offset)
    else:
        raise ValueError(f"在通用解析器中遇到未知类型 {hex(type_code)} (位置: {offset - 1})")

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
            if code == 0x05:
                seconds, offset = read_int(data, offset)
            elif code == 0x06:
                seconds, offset = read_long(data, offset)
            else:
                raise ValueError(f"字段 '{field_name}' 后遇到未知长度码 {hex(code)}")
            value = convert_timestamp(seconds)
        elif field_name in SPECIAL_BOOLEAN_TRUE_KEYS:
            if code != 0x02: raise ValueError(f"字段 '{field_name}' 期望类型码 0x02")
            value = True
        else:
            value, offset = read_value(data, offset, code)
        obj[field_name] = value
    if offset < len(data) and data[offset] == 0xFF: offset += 1
    else:
        if offset != len(data): pass
    return obj, offset
    
def get_start_offset(data, filename):
    if 'characters' in filename.lower():
        try:
            header = b'\x0B\x06heroes\x0A'
            return data.index(header) + len(header)
        except ValueError:
            print(f"警告: 在 '{filename}' 中未找到 'heroes' 头，将尝试从文件开头解析。")
    if data and data[0] == 0x0B:
        return 1
    return 0

# --- 文件与文件夹处理核心逻辑 ---
    
def process_path(path):
    path = path.strip().strip('"')
    if not os.path.exists(path):
        print(f"❌ 错误: 路径不存在 '{path}'")
        return

    if os.path.isdir(path):
        print(f"\n--- 正在处理文件夹: '{os.path.basename(path)}' ---")
        json_output_dir = os.path.join(path, 'json')
        os.makedirs(json_output_dir, exist_ok=True)
        print(f"所有JSON文件将被保存在: '{json_output_dir}'")
        found_files = 0
        for item in os.listdir(path):
            full_item_path = os.path.join(path, item)
            if os.path.isfile(full_item_path) and not full_item_path.endswith('.py'):
                process_file(full_item_path, json_output_dir)
                found_files += 1
        if found_files == 0:
            print("🟡 该文件夹内没有找到可处理的文件。")
    elif os.path.isfile(path):
        output_dir = os.path.dirname(path)
        json_output_dir = os.path.join(output_dir, 'json')
        os.makedirs(json_output_dir, exist_ok=True)
        process_file(path, json_output_dir)

def process_file(filepath, output_dir):
    basename = os.path.basename(filepath)
    output_filename = os.path.join(output_dir, os.path.splitext(basename)[0] + ".json")
    print(f"\n--- 正在处理文件: '{basename}' ---")
    try:
        with open(filepath, 'rb') as f:
            binary_data = f.read()
        print(f"文件读取成功，共 {len(binary_data)} 字节。")
        if not binary_data:
            print("🟡 文件为空，已跳过。")
            return

        start_offset = get_start_offset(binary_data, basename)
        print(f"确定起始解析偏移量为: {start_offset}")

        if 'characters' in basename.lower():
            parsed_data, final_offset = parse_characters_file(binary_data, start_offset)
        else:
            parsed_data, final_offset = parse_object(binary_data, start_offset)

        print(f"解析完成！最终偏移量: {final_offset} / {len(binary_data)}。")
        print(f"正在将结果写入文件: '{output_filename}'...")
        with open(output_filename, 'w', encoding='utf-8') as f:
            json.dump(parsed_data, f, indent=2, ensure_ascii=False)
        print(f"✅ 操作成功！结果已保存到 '{output_filename}'")
    except (ValueError, IndexError) as e:
        print(f"❌ 在解析 '{basename}' 过程中发生错误: {e}")
    except Exception as e:
        print(f"❌ 处理 '{basename}' 时发生未知错误: {e}")
        traceback.print_exc()

def parse_characters_file(data, start_offset):
    parsed_data = {}
    offset = start_offset
    while offset < len(data):
        if data[offset] != 0x0B: break
        offset += 1
        hero_obj, offset = parse_object(data, offset)
        if hero_obj.get('id'):
            parsed_data[hero_obj['id']] = hero_obj
    return parsed_data, offset

# --- Main 函数与模式自适应 ---
def main():
    paths_to_process = sys.argv[1:]
    if paths_to_process:
        print("=====================================================")
        print("✅ 通用二进制解析器 v6.0 (直接处理模式)")
        print("=====================================================")
        for path in paths_to_process:
            process_path(path)
        print("\n\n--- 所有任务处理完毕 ---")
        return

    print("=====================================================")
    print("✅ 通用二进制解析器 v6.0 (交互模式)")
    print("=====================================================")
    print("请将一个或多个文件/文件夹拖放到此窗口中，然后按 Enter。")
    print("直接按 Enter 或输入 'exit' / 'quit' 即可退出程序。")
    
    while True:
        try:
            raw_input_str = input("\n>>> 等待拖放... ")
            if not raw_input_str or raw_input_str.lower() in ['exit', 'quit']:
                print("程序已退出。")
                break
            
            if raw_input_str.startswith('"'):
                input_paths = [p.strip() for p in raw_input_str.split('"') if p.strip()]
            else:
                input_paths = raw_input_str.split()

            if not input_paths:
                print("🟡 未检测到有效的文件路径，请重试。")
                continue

            for path in input_paths:
                process_path(path)
            
            print("\n--- 本批次所有任务处理完毕 ---")
        except KeyboardInterrupt:
            print("\n程序被用户中断。")
            break
        except Exception as e:
            print(f"\n❌ 发生意外错误: {e}")
            traceback.print_exc()

if __name__ == "__main__":
    main()