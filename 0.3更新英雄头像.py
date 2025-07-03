import os
import sys
import time
import requests
from urllib.parse import urlparse
import ast

# --- 配置部分 ---
# 输入的JS文件路径
js_file_path = 'heroes_data_cn.js'
# 图片下载的目标文件夹路径
target_folder_path = '../Heroplan.github.io/imgs/heroes'


def extract_image_urls(js_path):
    """
    从指定的JS文件中提取所有英雄的图片链接。
    """
    print(f"--- 步骤 1: 从 '{js_path}' 提取图片链接 ---")
    
    # 步骤 1: 读取JS文件内容
    try:
        with open(js_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"错误: 找不到JS文件 '{js_path}'。请确保路径正确。")
        sys.exit(1)

    # 步骤 2: 提取列表部分的字符串
    start_index = content.find('[')
    end_index = content.rfind(']')

    if start_index == -1 or end_index == -1:
        print(f"错误：无法在文件 '{js_path}' 中找到 '[]' 包围的列表。")
        sys.exit(1)

    list_string = content[start_index : end_index + 1]

    # 步骤 3: 替换JS语法为Python兼容的语法
    list_string = list_string.replace('null', 'None')
    list_string = list_string.replace('true', 'True')
    list_string = list_string.replace('false', 'False')

    # 步骤 4: 将字符串安全地转换为Python列表
    try:
        all_heroes = ast.literal_eval(list_string)
    except Exception as e:
        print(f"错误: 解析JS中的列表数据时失败: {e}")
        sys.exit(1)
    
    # 步骤 5: 提取 'image' 键的值
    image_urls = []
    for hero in all_heroes:
        if 'image' in hero and hero['image']:
            image_urls.append(hero['image'])

    print(f"成功提取 {len(image_urls)} 条图片链接。")
    return image_urls


def download_image(url, local_filepath, retries=3, delay=1):
    """
    下载单个图片的函数，保存到指定的完整路径。
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    for attempt in range(retries):
        try:
            time.sleep(delay)
            response = requests.get(url, headers=headers, stream=True, timeout=15)
            response.raise_for_status()
            with open(local_filepath, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            print(f"  -> 下载成功: {local_filepath}")
            return True
        except requests.exceptions.RequestException as e:
            print(f"  -> 尝试 {attempt + 1}/{retries} 失败: {url} - {str(e)}")
            if attempt < retries - 1:
                time.sleep(delay * 2)
    print(f"  -> 全部 {retries} 次尝试失败: {url}")
    return False


def main():
    """
    主执行函数
    """
    # 首先，提取所有链接
    image_urls = extract_image_urls(js_file_path)
    
    # --- 准备工作 ---
    print(f"\n--- 步骤 2: 准备下载到目标文件夹: '{target_folder_path}' ---")
    os.makedirs(target_folder_path, exist_ok=True)
    
    # --- 开始处理图片 ---
    print("\n--- 步骤 3: 开始处理并下载图片 ---")

    # 初始化日志计数器
    success_count = 0
    skipped_count = 0
    failed_count = 0
    total_count = len(image_urls)

    # 遍历提取到的图片链接
    for index, source_url in enumerate(image_urls):
        print(f"\n[{index + 1}/{total_count}] 处理源链接: {source_url}")
        
        # === 新增功能: 修正 Imgur 链接 ===
        modified_url = source_url.replace('//imgur.com', '//i.imgur.com')
        if modified_url != source_url:
            print(f"  -> 修正链接为: {modified_url}")
        # ==================================
        
        try:
            parsed_url = urlparse(modified_url)
            filename = os.path.basename(parsed_url.path)
            
            if not filename:
                print(f"  -> 无法从URL获取有效文件名，计为失败。")
                failed_count += 1
                continue

            local_filepath_to_check = os.path.join(target_folder_path, filename)
            
            if os.path.exists(local_filepath_to_check):
                print(f"  -> 文件已存在于目标路径，跳过。")
                skipped_count += 1
                continue

        except Exception as e:
            print(f"  -> 处理URL时出错 '{modified_url}': {e}，计为失败。")
            failed_count += 1
            continue
        
        print(f"  -> 准备下载...")
        # 使用修正后的链接进行下载
        if download_image(modified_url, local_filepath_to_check):
            success_count += 1
        else:
            # download_image 函数内部已打印失败原因
            print(f"  -> 下载失败。")
            failed_count += 1

    # --- 打印最终的日志摘要 ---
    print("\n" + "="*40)
    print("--- 所有图片处理完成 ---")
    print("--- 日志摘要 ---")
    print(f"总计链接数: {total_count}")
    print(f"✅ 下载成功: {success_count}")
    print(f"⏭️  跳过 (已存在): {skipped_count}")
    print(f"❌ 处理失败: {failed_count}")
    print("="*40)


if __name__ == "__main__":
    main()