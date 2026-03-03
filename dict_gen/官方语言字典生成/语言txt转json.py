import os
import json
import re
import glob

def convert_txt_to_json():
    # 定义源目录和输出目录
    source_dir = 'generated_txt'
    output_dir = '../../../Heroplan.github.io/langs_json'  # 或者直接输出到前端可以读取的目录
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # 查找所有 heroes_name_ 开头的 txt 文件
    files = glob.glob(os.path.join(source_dir, 'heroes_name_*.txt'))

    print(f"找到 {len(files)} 个文件待处理...")

    # 正则表达式匹配: "heroes.name.id","Name" 格式
    # 考虑到可能存在的空格或不同引号，使用正则提取
    line_pattern = re.compile(r'"heroes\.name\.([^"]+)"\s*,\s*"([^"]+)"')

    for file_path in files:
        # 额外检查文件名是否包含fancy
        if 'fancy' in os.path.basename(file_path).lower():
            print(f"跳过fancy文件: {file_path}")
            continue
        filename = os.path.basename(file_path)
        # 提取语言后缀，例如 heroes_name_ja.txt -> ja
        lang_code = filename.replace('heroes_name_', '').replace('.txt', '')
        
        json_data = {}
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                
            for line in lines:
                line = line.strip()
                if not line:
                    continue
                    
                # 尝试匹配正则
                match = line_pattern.search(line)
                if match:
                    hero_id = match.group(1) # 提取 ID (例如 astral_cosmicspeaker)
                    hero_name = match.group(2) # 提取名字 (例如 宇宙音響)
                    json_data[hero_id] = hero_name
            
            # 写入 JSON 文件
            output_filename = f"heroes_name_{lang_code}.json"
            output_path = os.path.join(output_dir, output_filename)
            
            with open(output_path, 'w', encoding='utf-8') as json_file:
                json.dump(json_data, json_file, ensure_ascii=False, indent=2)
                
            print(f"转换成功: {filename} -> {output_filename} ({len(json_data)} 条目)")
            
        except Exception as e:
            print(f"处理文件 {filename} 时出错: {e}")

if __name__ == "__main__":
    convert_txt_to_json()
    input("按回车键退出...")