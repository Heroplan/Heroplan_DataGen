import requests
from bs4 import BeautifulSoup
import os
import json
from urllib.parse import urlparse
from datetime import datetime
import time
import shutil
from PIL import Image # <-- 新增：用于图像处理和格式转换

# --- 全局配置区域 ---

# 网站配置
MAX_RETRIES = 5
RETRY_DELAY = 2 # 重试间隔（秒）

# 转换与目标配置
# WEBP_CONVERTER_EXE 已移除
TARGET_DIR_RELATIVE = os.path.join("..", "Heroplan.github.io") 

# 动态生成年月代码 (例如: 202512)
now = datetime.now()
DATE_CODE = now.strftime("%Y%m")

# 动态生成目标网址变量组
TARGETS = [
    {
        "url": f"https://bbcamp.info/en/hires-{DATE_CODE}-1/",
        "save_name": "calendar.png"
    },
    {
        "url": f"https://bbcamp.info/en/hires-{DATE_CODE}-2/",
        "save_name": "calendar2.png"
    }
]

# 用于记录原始文件名的历史记录文件
HISTORY_FILE = "calendar_history.json"

# --- 核心函数 ---

def load_history():
    """读取历史记录"""
    if os.path.exists(HISTORY_FILE):
        try:
            with open(HISTORY_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            return {}
    return {}

def save_history(history):
    """保存历史记录"""
    with open(HISTORY_FILE, 'w', encoding='utf-8') as f:
        json.dump(history, f, indent=4, ensure_ascii=False)

def get_target_image_url(page_url):
    """【已添加重试】从网页中提取目标图片的下载链接。"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    for attempt in range(MAX_RETRIES):
        try:
            resp = requests.get(page_url, headers=headers, timeout=15)
            resp.raise_for_status()

            soup = BeautifulSoup(resp.text, 'html.parser')
            for a_tag in soup.find_all('a'):
                href = a_tag.get('href')
                if href and 'r2.dev' in href:
                    return href
            for img_tag in soup.find_all('img'):
                src = img_tag.get('src')
                if src and 'r2.dev' in src:
                    return src
            return None

        except requests.exceptions.RequestException as e:
            print(f" -> 页面请求失败 (尝试 {attempt + 1}/{MAX_RETRIES}): {e}")
            if attempt < MAX_RETRIES - 1:
                print(f" -> 等待 {RETRY_DELAY} 秒后重试...")
                time.sleep(RETRY_DELAY)
            else:
                print(" -> 达到最大重试次数，放弃当前页面抓取。")
                return None
    return None

def download_file(img_url, save_path):
    """【已添加重试】下载文件。"""
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    for attempt in range(MAX_RETRIES):
        try:
            r = requests.get(img_url, headers=headers, stream=True, timeout=30)
            r.raise_for_status()
            with open(save_path, 'wb') as f:
                for chunk in r.iter_content(chunk_size=8192):
                    f.write(chunk)
            print(f" -> 下载成功 (尝试 {attempt + 1}/{MAX_RETRIES}): 已保存为 {save_path}")
            return True
        except requests.exceptions.RequestException as e:
            print(f" -> 下载文件失败 (尝试 {attempt + 1}/{MAX_RETRIES}): {e}")
            if attempt < MAX_RETRIES - 1:
                print(f" -> 等待 {RETRY_DELAY} 秒后重试...")
                time.sleep(RETRY_DELAY)
            else:
                print(" -> 达到最大重试次数，放弃当前文件下载。")
                return False
    return False

def post_process_file(local_filename_png):
    """
    使用 Pillow 库将文件转换为 WEBP 格式，删除原件（无保留原件），并移动到目标文件夹。
    """
    base_name, _ = os.path.splitext(local_filename_png) 
    webp_filename = base_name + '.webp'
    source_webp_path = webp_filename
    target_webp_path = os.path.join(TARGET_DIR_RELATIVE, webp_filename)
    
    # 1. 转换文件
    print(f" -> 正在使用 Pillow 库转换文件到 WEBP: {local_filename_png}")
    try:
        # 打开 PNG 文件 (Pillow 自动支持 PNG/JPG 等常见格式)
        img = Image.open(local_filename_png)
        
        # 保存为 WEBP 格式。quality=85 是一个很好的平衡质量和文件大小的设置。
        img.save(source_webp_path, format='webp', quality=85) 
        
        print(f" -> WEBP 转换成功，已生成文件: {source_webp_path}")
        
        # 2. 删除原件 (符合“无保留原件”的要求)
        os.remove(local_filename_png)
        print(f" -> 原文件已删除: {local_filename_png}")
        
    except Exception as e:
        print(f" !!! WEBP 转换失败 (Pillow 错误): {e}")
        return
    
    # 3. 移动文件
    # 确保目标文件夹存在
    os.makedirs(TARGET_DIR_RELATIVE, exist_ok=True)
    
    # 移动并替换文件
    try:
        shutil.move(source_webp_path, target_webp_path)
        print(f" -> 移动成功: {webp_filename} 已替换到 {TARGET_DIR_RELATIVE} 文件夹。")
    except Exception as e:
        print(f" !!! 文件移动失败，发生异常: {e}")

# --- 主执行逻辑 (保持不变) ---

def main():
    history = load_history()
    print(f"--- 任务开始: 目标月份代码 {DATE_CODE} ---")
    print(f"历史记录文件: {HISTORY_FILE}\n")

    for task in TARGETS:
        page_url = task['url']
        local_filename = task['save_name']

        print(f"正在处理页面: {page_url}")
        
        img_url = get_target_image_url(page_url)
        
        if not img_url:
            print(f" -> 无法获取到有效的图片链接，跳过。")
            continue

        parsed_url = urlparse(img_url)
        original_filename = os.path.basename(parsed_url.path)
        
        last_saved_filename = history.get(local_filename)
        
        print(f" -> 发现远程图片: {original_filename}")
        
        should_process = False
        
        if last_saved_filename != original_filename:
            if last_saved_filename is None:
                print(f" -> 状态: 首次下载")
            else:
                print(f" -> 状态: 检测到新版本! (旧: {last_saved_filename} -> 新: {original_filename})")
            
            if download_file(img_url, local_filename):
                history[local_filename] = original_filename
                save_history(history)
                should_process = True
        
        else:
            print(f" -> 状态: 已是最新，跳过下载。")
        
        # 后续处理：转换和移动
        if should_process:
            post_process_file(local_filename)
        
        print("-" * 50)

if __name__ == "__main__":
    main()
    input("\n按任意键退出...")