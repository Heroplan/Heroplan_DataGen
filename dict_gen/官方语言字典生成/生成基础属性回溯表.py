import json
from pathlib import Path

def build_reverse_map(data: dict, group: str) -> dict:
    """
    构建反向映射：{各语言文本的小写形式: 英文后缀的小写形式}
    """
    reverse_map = {}
    for lang, groups in data.items():
        if group not in groups:
            continue
        for suffix, text in groups[group].items():
            # 英文后缀直接转为小写
            en_key = suffix.lower()
            # 文本也转为小写作为键
            reverse_map[text.lower()] = en_key
    return reverse_map

def generate_js_file(data: dict, output_path: Path) -> None:
    """生成包含 class 和 color 反向映射的 JavaScript 文件（键和值均为小写）"""
    target_groups = ['class', 'color']
    js_lines = []
    for group in target_groups:
        reverse_map = build_reverse_map(data, group)
        if not reverse_map:
            print(f"警告：分组 '{group}' 无数据，跳过生成。")
            continue
        map_str = json.dumps(reverse_map, ensure_ascii=False, indent=2)
        js_lines.append(f"const {group}ReverseMap = {map_str};")
    if not js_lines:
        print("没有找到任何有效分组，不生成文件。")
        return
    js_content = "\n\n".join(js_lines)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"已生成反向映射文件: {output_path}")

def main():
    input_file = Path('base_values_dict_other.json')
    if not input_file.exists():
        print(f"错误：找不到 {input_file}，请先运行提取脚本生成该文件。")
        return
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    output_file = Path('reverse_maps.js')
    generate_js_file(data, output_file)

if __name__ == '__main__':
    main()