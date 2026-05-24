import json

speed_order_keys = [
    "charge_ninja", "charge_magic", "styx", "very_fast", "dancer",
    "fast", "changing_tides", "average", "slayer", "slow", "very_slow"
]

color_order_keys = ["red", "green", "blue", "yellow", "purple"]

def write_js_consts(data, category, order_keys, output_file):
    """
    生成 JS 文件，包含：
    1. 每个语言的单独常量 const speedOrder_cn = [...]
    2. 一个总的映射对象 const speedOrderMap = { cn: [...], ar: [...], ... }
    """
    with open(output_file, 'w', encoding='utf-8') as out:
        lang_consts = {}
        for lang, lang_data in data.items():
            dict_data = lang_data.get(category, {})
            ordered_values = [dict_data.get(key, "") for key in order_keys]
            escaped = [v.replace("'", "\\'") for v in ordered_values]
            # 写入单独常量
            out.write(f"const {category}Order_{lang} = ['" + "', '".join(escaped) + "'];\n")
            # 记录到映射对象中
            lang_consts[lang] = f"{category}Order_{lang}"
        
        # 写入总的映射对象，使用对象字面量，值为变量引用
        map_lines = [f"  {repr(lang)}: {var_name}" for lang, var_name in lang_consts.items()]
        out.write(f"\nconst {category}OrderMap = {{\n" + ",\n".join(map_lines) + "\n};\n")
    
    print(f"已生成 {output_file}")

def main():
    input_json = "base_values_dict_other.json"
    with open(input_json, 'r', encoding='utf-8') as f:
        data = json.load(f)

    write_js_consts(data, "speed", speed_order_keys, "speedOrder_All.js")
    write_js_consts(data, "color", color_order_keys, "colorOrder_All.js")

if __name__ == "__main__":
    main()