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

    # 定义处理规则：每个规则包含文件名匹配正则、行内容匹配正则、输出文件前缀
    rules = [
        {
            "file_re": r'^heroes_name_(?P<lang>[a-z]+)\.txt$',
            "line_re": r'"heroes\.name\.([^"]+)"\s*,\s*"([^"]+)"',
            "output_prefix": "heroes_name_"
        },
        {
            "file_re": r'^heroes_name_fancy_(?P<lang>[a-z]+)\.txt$',
            "line_re": r'"heroes\.name_fancy\.([^"]+)"\s*,\s*"([^"]+)"',
            "output_prefix": "heroes_name_fancy_"
        },
        {
            "file_re": r'^skill_name_(?P<lang>[a-z]+)\.txt$',
            "line_re": r'"specials\.name\.([^"]+)"\s*,\s*"([^"]+)"',
            "output_prefix": "skill_name_"
        }
    ]

    # 查找所有待处理的 txt 文件（这里统一获取所有 .txt，之后按规则筛选）
    all_txt_files = glob.glob(os.path.join(source_dir, '*.txt'))
    print(f"找到 {len(all_txt_files)} 个 txt 文件，开始按规则处理...")

    for file_path in all_txt_files:
        filename = os.path.basename(file_path)
        
        # 尝试匹配规则
        matched_rule = None
        lang = None
        for rule in rules:
            match = re.match(rule["file_re"], filename)
            if match:
                matched_rule = rule
                lang = match.group("lang")
                break
        
        if matched_rule is None:
            #print(f"跳过未匹配规则的文件: {filename}")
            continue
        
        # 处理文件
        json_data = {}
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            line_pattern = re.compile(matched_rule["line_re"])
            for line in lines:
                line = line.strip()
                if not line:
                    continue
                m = line_pattern.search(line)
                if m:
                    item_id = m.group(1)   # 提取 ID
                    item_name = m.group(2) # 提取名称
                    json_data[item_id] = item_name
            
            # 写入 JSON 文件
            output_filename = f"{matched_rule['output_prefix']}{lang}.json"
            output_path = os.path.join(output_dir, output_filename)
            
            with open(output_path, 'w', encoding='utf-8') as json_file:
                json.dump(json_data, json_file, ensure_ascii=False, indent=2)
                
            print(f"转换成功: {filename} -> {output_filename} ({len(json_data)} 条目)")
            
        except Exception as e:
            print(f"处理文件 {filename} 时出错: {e}")

if __name__ == "__main__":
    convert_txt_to_json()
    input("按回车键退出...")