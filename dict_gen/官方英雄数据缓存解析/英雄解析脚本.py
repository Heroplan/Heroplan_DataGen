import json
import datetime
import traceback

# 定义自定义的时间戳纪元起点 (2000-01-01)
CUSTOM_EPOCH = datetime.datetime(2000, 1, 1)

def convert_timestamp_to_date(timestamp_seconds):
    """将从2000-01-01开始的秒数转换为'YYYY-MM-DD'格式的日期字符串。"""
    try:
        final_date = CUSTOM_EPOCH + datetime.timedelta(seconds=timestamp_seconds)
        return final_date.strftime('%Y-%m-%d')
    except (ValueError, TypeError):
        return timestamp_seconds # 转换失败则返回原始值

def read_string(data, offset):
    """通用函数：读取一个字符串。"""
    if offset >= len(data): raise IndexError(f"读取字符串长度时越界 (位置: {offset})。")
    length = data[offset]
    offset += 1
    if offset + length > len(data): raise IndexError(f"读取字符串内容时越界 (位置: {offset})。")
    return data[offset:offset + length].decode('utf-8', errors='ignore'), offset + length

def read_short(data, offset):
    """通用函数：读取一个2字节整数。"""
    if offset + 2 > len(data): raise IndexError(f"读取 short 时越界 (位置: {offset})。")
    return int.from_bytes(data[offset:offset + 2], 'little', signed=False), offset + 2

def read_int(data, offset):
    """通用函数：读取一个4字节整数。"""
    if offset + 4 > len(data): raise IndexError(f"读取 int 时越界 (位置: {offset})。")
    return int.from_bytes(data[offset:offset + 4], 'little', signed=False), offset + 4

def read_list(data, offset):
    """通用函数：读取一个由 0xFF 终止的列表。"""
    items = []
    while offset < len(data) and data[offset] != 0xFF:
        item_type = data[offset]
        offset += 1
        item_value, offset = read_generic_field_value(data, offset, item_type)
        items.append(item_value)
    if offset < len(data) and data[offset] == 0xFF:
        offset += 1
    else:
        raise ValueError(f"列表在偏移量 {offset} 处未由 0xFF 正确终止。")
    return items, offset

def read_generic_field_value(data, offset, field_type):
    """根据通用类型码读取字段值。"""
    if field_type == 0x08: # 字符串
        return read_string(data, offset)
    elif field_type == 0x04: # 2字节整数
        return read_short(data, offset)
    elif field_type == 0x0A: # 列表
        return read_list(data, offset)
    elif field_type == 0x03: # 单字节整数
        value = data[offset]
        return value, offset + 1
    else:
        raise ValueError(f"在通用解析器中遇到未知类型 {hex(field_type)} (位置: {offset - 1})")

def parse_hero(data, offset):
    """解析单个英雄的配置，根据字段关键字调度不同的解析策略。"""
    hero = {}
    while offset < len(data) and data[offset] != 0xFF:
        field_name, offset = read_string(data, offset)
        
        if offset >= len(data):
            raise IndexError(f"读取字段'{field_name}'的类型/长度时越界。")

        # --- 基于关键字的解析调度 ---
        
        # 规则 1: 处理时间戳字段
        if field_name == 'canBeReceivedDate':
            data_length_code = data[offset]
            offset += 1
            if data_length_code == 0x05:
                seconds, offset = read_int(data, offset)
                value = convert_timestamp_to_date(seconds)
            elif data_length_code == 0x06:
                if offset + 8 > len(data): raise IndexError(f"读取8字节时间戳时越界。")
                seconds = int.from_bytes(data[offset:offset+8], 'little', signed=False)
                offset += 8
                value = convert_timestamp_to_date(seconds)
            else:
                raise ValueError(f"字段 'canBeReceivedDate' 后遇到未知的长度码 {hex(data_length_code)}")

        # --- 规则 2: 处理所有零长度的布尔标记 (最终修正) ---
        elif field_name in ('hasImprovedTalentSkill', 'isSecret','isDefaultRider','forceUseCostumeLevelUpAndUpgradeCosts','isGuest'):
            type_code = data[offset]
            offset += 1
            if type_code == 0x02:
                value = True
            # 如果文件中可能出现 False 的情况，可以扩展此逻辑
            # elif type_code == 0x01:
            #     value = False
            else:
                raise ValueError(f"字段 '{field_name}' 后期望得到类型码 0x02，却得到 {hex(type_code)}")
        
        # 规则 3: 处理所有其他通用字段
        else:
            type_code = data[offset]
            offset += 1
            value, offset = read_generic_field_value(data, offset, type_code)
            
        hero[field_name] = value

    return hero, offset

def parse_file(data):
    """解析整个文件并返回英雄字典。"""
    offset = 0
    try:
        header = b'\x0B\x06heroes\x0A'
        header_start_pos = data.index(header)
        offset = header_start_pos + len(header)
    except ValueError:
        raise ValueError("文件头 'heroes' (0B 06 ... 0A) 未找到。")

    heroes = {}
    while offset < len(data):
        if data[offset] != 0x0B: break
        offset += 1
        if offset >= len(data): break
        hero, offset = parse_hero(data, offset)
        if offset < len(data) and data[offset] == 0xFF:
            offset += 1
        else:
            if offset == len(data): break
            print(f"警告：在偏移量 {offset} 处解析完一个对象后未找到终止符 0xFF。")
            break
        if hero.get('id'):
            heroes[hero['id']] = hero
        elif hero:
            print(f"警告：解析到一个没有 'id' 的对象，已忽略: {hero}")
    return heroes

def main():
    """主函数：读取文件，执行解析，并保存结果。"""
    input_filename = 'characters'
    output_filename = 'characters.json'

    try:
        print(f"正在读取文件: '{input_filename}'...")
        with open(input_filename, 'rb') as f:
            binary_data = f.read()
        print(f"文件读取成功，共 {len(binary_data)} 字节。")
    except FileNotFoundError:
        print(f"❌ 错误：输入文件 '{input_filename}' 未找到。")
        return
    except Exception as e:
        print(f"❌ 读取文件时发生未知错误: {e}")
        return

    try:
        print("开始使用最终规则进行解析...")
        heroes = parse_file(binary_data)
        
        print(f"解析完成，共找到 {len(heroes)} 个英雄。")
        print(f"正在将结果写入文件: '{output_filename}'...")
        with open(output_filename, 'w', encoding='utf-8') as f:
            json.dump(heroes, f, indent=4, ensure_ascii=False, sort_keys=False)

        print(f"✅ 操作成功完成！结果已保存到 '{output_filename}'")
        
    except (ValueError, IndexError) as e:
        print(f"❌ 解析过程中发生错误: {e}")
        traceback.print_exc()

if __name__ == "__main__":
    main()