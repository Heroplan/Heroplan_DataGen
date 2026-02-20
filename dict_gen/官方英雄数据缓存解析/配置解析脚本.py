import os
import sys
import asyncio
import subprocess
from asyncio.subprocess import PIPE

async def run_script(script_path, folder_path):
    """执行单个脚本并实时打印输出"""
    normalized_script = os.path.abspath(script_path)
    normalized_folder = os.path.abspath(folder_path)

    print(f"\n▶ 启动执行: python \"{normalized_script}\" \"{normalized_folder}\"")
    print(f"📁 工作目录: {os.path.dirname(normalized_script)}")

    env = {
        **os.environ,
        "PYTHONIOENCODING": "utf-8",
        "PYTHONUNBUFFERED": "1",  # 强制禁用输出缓冲
    }

    proc = await asyncio.create_subprocess_exec(
        sys.executable, "-u", normalized_script, normalized_folder,
        cwd=os.path.dirname(normalized_script),
        env=env,
        stdout=PIPE,
        stderr=PIPE,
    )

    async def read_stream(stream, prefix):
        """实时逐行读取并输出"""
        while True:
            line = await stream.readline()
            if not line:
                break
            text = line.decode('utf-8', errors='replace').rstrip()
            print(f"{prefix} {text}")

    # 并发读取 stdout 和 stderr
    await asyncio.gather(
        read_stream(proc.stdout, "[输出]"),
        read_stream(proc.stderr, "[错误]")
    )

    returncode = await proc.wait()
    print(f"⏹ 返回码: {returncode}")
    return returncode == 0


async def main():
    if len(sys.argv) < 2:
        print("请拖放文件夹到本脚本上运行")
        sys.exit(1)

    target_folder = os.path.abspath(sys.argv[1])
    print(f"\n🔍 目标文件夹: {target_folder}")

    # 获取当前脚本所在目录
    caller_dir = os.path.dirname(os.path.abspath(__file__))
    scripts = [
        os.path.join(caller_dir, "通用解析脚本.py"),
        os.path.join(caller_dir, "英文解析匹配英雄专用.py")
    ]

    # 检查脚本存在
    for script in scripts:
        if not os.path.exists(script):
            print(f"❌ 错误：找不到脚本 {script}")
            sys.exit(1)

    # 顺序执行（避免互相干扰）
    all_success = True
    for script in scripts:
        ok = await run_script(script, target_folder)
        if not ok:
            all_success = False

    if all_success:
        print("\n✅ 所有脚本执行成功")
    else:
        print("\n❌ 部分脚本执行失败")

    # ✅ 执行完毕后，打开当前目录和 WinMerge
    print("\n📂 正在打开脚本所在目录与 WinMerge...")

    try:
        # 打开脚本所在目录
        os.startfile(caller_dir)

        # 启动 WinMerge
        winmerge_path = r"E:\vsstart\tools\文本类工具\文本编辑工具\WinMerge\WinMergeU.exe"
        if os.path.exists(winmerge_path):
            subprocess.Popen([winmerge_path])
        else:
            print(f"⚠️ 未找到 WinMerge 可执行文件: {winmerge_path}")
    except Exception as e:
        print(f"⚠️ 打开目录或 WinMerge 时出错: {e}")


if __name__ == "__main__":
    asyncio.run(main())
