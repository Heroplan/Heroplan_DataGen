import os
import yaml
import re

def extract_family_name(filename):
    """从文件名中提取家族名称（格式为：数字-名称.yml）"""
    match = re.match(r'^\d+-(.+)\.yml$', filename)
    if match:
        return match.group(1)
    return None

def process_families():
    # 定义家族数据目录和输出JS文件路径
    families_dir = '../heroplan_data/data/families'
    output_js = 'to_translate/families_bonus_to_translate.js'
    output_js2 = 'families_bonus_en.js'
    
    all_bonuses = []  # 存储所有家族加成数据
    
    # 遍历家族目录中的每个YAML文件
    for filename in os.listdir(families_dir):
        if filename.endswith('.yml'):
            filepath = os.path.join(families_dir, filename)
            family_name = extract_family_name(filename)
            
            if family_name:
                # 读取并解析YAML文件
                with open(filepath, 'r', encoding='utf-8') as file:
                    data = yaml.safe_load(file)
                    
                    # 如果文件包含bonus数据，则添加到列表中
                    if 'bonus' in data:
                        family_data = {
                            "name": family_name,
                            "bonus": data['bonus']
                        }
                        all_bonuses.append(family_data)
    
    # 将数据写入JavaScript文件
    with open(output_js, 'w', encoding='utf-8') as js_file:
        js_file.write('window.families_bonus = [\n')
    with open(output_js2, 'w', encoding='utf-8') as js_file:
        js_file.write('window.families_bonus = [\n')
        
        # 遍历所有家族数据，格式化为JS对象
        for i, family in enumerate(all_bonuses):
            js_file.write('    {\n')
            js_file.write(f'        "originalIndex": {i},\n')  # 添加序号字段
            js_file.write(f'        "name": "{family["name"]}",\n')
            js_file.write('        "bonus": [\n')
            
            # 写入每个加成条目，处理转义字符
            for j, bonus_line in enumerate(family["bonus"]):
                escaped_line = bonus_line.replace('"', '\\"')  # 转义双引号
                js_file.write(f'            "{escaped_line}"')
                if j < len(family["bonus"]) - 1:
                    js_file.write(',')
                js_file.write('\n')
            
            js_file.write('        ]\n')
            js_file.write('    }')
            if i < len(all_bonuses) - 1:
                js_file.write(',')
            js_file.write('\n')
        
        js_file.write('];\n')

if __name__ == '__main__':
    process_families()