import json
import opencc
import datetime # 导入日期时间模块用于生成带时间戳的文件名

def find_unchanged_after_conversion(file_path: str) -> list:
    """
    在JSON文件中查找'passives'和'effects'字段中，
    经过“繁体转简体”转换后内容不变的条目。
    
    Args:
        file_path: JSON文件的路径。
        
    Returns:
        一个包含结果字典的列表。
    """
    # 初始化OpenCC，使用't2s'配置文件进行繁体到简体(Traditional to Simplified)的转换。
    cc = opencc.OpenCC('t2s')
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            json_start_index = content.find('[')
            if json_start_index == -1:
                json_start_index = content.find('{')
            
            if json_start_index != -1:
                json_content = content[json_start_index:]
                if json_content.strip().endswith(';'):
                    json_content = json_content.strip()[:-1]
                data = json.loads(json_content)
            else:
                # 在控制台打印错误信息，因为这属于运行前需要了解的问题
                print(f"错误：在文件 '{file_path}' 中未找到有效的JSON数组")
                return []

    except FileNotFoundError:
        print(f"错误：文件 '{file_path}' 未找到。")
        return []
    except json.JSONDecodeError as e:
        print(f"错误：无法解析文件 '{file_path}' 中的JSON内容。错误信息: {e}")
        return []
    
    results = []
    items_to_process = data if isinstance(data, list) else [data]
    
    for item in items_to_process:
        if not isinstance(item, dict):
            continue
            
        original_index = item.get('originalIndex', 'N/A')
        fields_to_check = ['passives', 'effects']
        
        for field in fields_to_check:
            if field in item and isinstance(item[field], list):
                for original_text in item[field]:
                    if not isinstance(original_text, str):
                        continue
                    
                    converted_text = cc.convert(original_text)
                    
                    if original_text == converted_text:
                        results.append({
                            'originalIndex': original_index,
                            'field': field,
                            'text': original_text
                        })
                        
    return results

# --- 使用示例 ---
file_path = 'heroes_data_tc.js' 
results = find_unchanged_after_conversion(file_path)

# --- 将结果写入日志文件 ---
# 生成带时间戳的日志文件名，例如 'results_2025-07-06_00-05-15.log'
timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
log_file_name = f'results_{timestamp}.log'

# 使用 'with open' 确保文件会被正确关闭
# 使用 encoding='utf-8' 来支持中文字符
with open(log_file_name, 'w', encoding='utf-8') as log_file:
    if results:
        # 使用 print 函数的 file 参数将输出重定向到文件
        print("查找条件：经过“繁体转简体”操作后内容不变的条目。", file=log_file)
        print(f"源文件: {file_path}", file=log_file)
        print(f"查找时间: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}", file=log_file)
        print("=" * 70, file=log_file)
        
        for item in results:
            print(f"originalIndex: {item['originalIndex']}", file=log_file)
            print(f"字段 (Field): {item['field']}", file=log_file)
            print(f"内容 (Content): {item['text']}", file=log_file)
            print("-" * 50, file=log_file)
        
        print(f"\n总计找到 {len(results)} 条符合条件的条目。", file=log_file)
        
        # 在控制台打印成功消息
        print(f"处理完成。总计找到 {len(results)} 条结果，已全部写入到日志文件: '{log_file_name}'")

    else:
        message = "没有找到任何符合条件的条目，或在处理过程中发生错误。"
        print(message, file=log_file)
        # 同样在控制台告知用户结果
        print(f"处理完成。{message} 日志文件 '{log_file_name}' 已生成。")