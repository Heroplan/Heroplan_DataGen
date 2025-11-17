import json
import re
import sys
from collections import defaultdict

def load_passive_skill_mapping(mapping_file):
    """加载被动技能映射字典"""
    try:
        with open(mapping_file, 'r', encoding='utf-8') as f:
            mapping_data = json.load(f)
        print(f"成功加载被动技能映射，共 {len(mapping_data)} 个映射")
        return mapping_data
    except Exception as e:
        print(f"错误: 无法加载映射文件 {mapping_file}: {e}")
        return {}

def get_passive_full_text(passives, start_index):
    """获取一个完整被动技能的文本（包括子行）"""
    if start_index >= len(passives):
        return ""
    
    full_text = []
    i = start_index
    
    # 添加主行
    current_line = passives[i].strip()
    full_text.append(current_line)
    i += 1
    
    # 添加所有子行（以*开头的行）
    while i < len(passives) and passives[i].strip().startswith('* '):
        full_text.append(passives[i].strip())
        i += 1
    
    return "\n".join(full_text)

def count_main_passives(passives):
    """计算passives中的主要技能数量（忽略子行和符号行）"""
    count = 0
    i = 0
    
    while i < len(passives):
        item = passives[i].strip()
        
        # 跳过纯符号行和列表项
        if re.match(r'^[*\-]+$', item) or item.startswith('- '):
            i += 1
            continue
        
        # 如果是子行，跳过（会在主行处理时包含）
        if item.startswith('* '):
            i += 1
            continue
        
        # 这是一个主行
        count += 1
        
        # 移动到下一个技能（跳过所有子行）
        i += 1
        while i < len(passives) and passives[i].strip().startswith('* '):
            i += 1
    
    return count

def extract_title_from_text(text):
    """从文本中提取冒号前的标题部分，并标准化"""
    # 提取冒号前的部分
    if ':' in text:
        title = text.split(':', 1)[0].strip()
    else:
        title = text.strip()
    
    # 标准化：转换为小写，移除多余空格
    title = re.sub(r'\s+', ' ', title.lower().strip())
    
    # 移除数字和特殊字符（保留字母和空格）
    title = re.sub(r'[^a-zA-Z\s]', '', title)
    
    # 再次移除多余空格
    title = re.sub(r'\s+', ' ', title).strip()
    
    return title

def extract_title_from_skill_id(skill_id, mapping):
    """从技能ID中提取标题"""
    # 使用映射后的技能ID
    mapped_skill = mapping.get(skill_id, skill_id)
    
    # 标准化：转换为小写，移除下划线
    title = mapped_skill.lower().replace('_', ' ')
    
    # 移除数字和特殊字符（保留字母和空格）
    title = re.sub(r'[^a-zA-Z\s]', '', title)
    
    # 移除多余空格
    title = re.sub(r'\s+', ' ', title).strip()
    
    return title

def find_best_matches_by_title(passive_skills, passive_texts, mapping):
    """基于标题匹配passive_skills和passive_texts"""
    matches = []
    used_text_indices = set()
    
    # 为每个技能找到最佳匹配
    for skill in passive_skills:
        best_match_index = -1
        best_similarity = 0
        
        skill_title = extract_title_from_skill_id(skill, mapping)
        
        for i, text in enumerate(passive_texts):
            if i in used_text_indices:
                continue
                
            text_title = extract_title_from_text(text)
            
            # 计算相似度：检查技能标题是否包含在文本标题中，或反之
            if skill_title in text_title or text_title in skill_title:
                similarity = 1.0
            else:
                # 计算单词重叠度
                skill_words = set(skill_title.split())
                text_words = set(text_title.split())
                
                if not skill_words or not text_words:
                    similarity = 0
                else:
                    intersection = len(skill_words.intersection(text_words))
                    union = len(skill_words.union(text_words))
                    similarity = intersection / union if union > 0 else 0
            
            if similarity > best_similarity:
                best_similarity = similarity
                best_match_index = i
        
        # 如果找到合理的匹配（相似度>0.3），则使用
        if best_similarity > 0.3 and best_match_index != -1:
            matches.append((skill, passive_texts[best_match_index]))
            used_text_indices.add(best_match_index)
        else:
            # 如果没有找到合理匹配，标记为未匹配
            matches.append((skill, None))
    
    # 处理未匹配的文本
    for i, text in enumerate(passive_texts):
        if i not in used_text_indices:
            matches.append((None, text))
    
    return matches

def check_passives_count_issue(heroes_data):
    """检查passiveSkills比passives多的情况"""
    print("正在检查passiveSkills比passives多的情况...")
    
    count_issues = []
    
    for hero in heroes_data:
        name = hero.get('name', 'Unknown')
        fancy_name = hero.get('fancy_name', 'Unknown')
        passive_skills = hero.get('passiveSkills', [])
        passives = hero.get('passives', [])
        
        # 如果没有passiveSkills，跳过
        if not passive_skills:
            continue
        
        # 计算passives中的主要技能数量
        main_passives_count = count_main_passives(passives)
        
        # 检查passiveSkills是否比passives多
        if len(passive_skills) > main_passives_count:
            count_issues.append({
                'hero': f"{name} ({fancy_name})",
                'passive_skills_count': len(passive_skills),
                'passives_count': main_passives_count
            })
    
    if count_issues:
        print(f"❌ 发现 {len(count_issues)} 个英雄的passiveSkills比passives多:")
        for issue in count_issues:
            print(f"  - {issue['hero']}: passiveSkills有{issue['passive_skills_count']}项, passives有{issue['passives_count']}项")
    else:
        print("✓ 未发现passiveSkills比passives多的情况")
    
    return count_issues

def check_duplicate_passives_translations(heroes_data, mapping):
    """检查是否有不同的passiveSkills使用了同样的passives翻译"""
    print("正在检查不同的passiveSkills使用相同翻译的情况...")
    
    # 存储翻译标题到被动技能的映射
    title_to_skills = defaultdict(list)
    
    for hero in heroes_data:
        name = hero.get('name', 'Unknown')
        passive_skills = hero.get('passiveSkills', [])
        passives = hero.get('passives', [])
        
        if not passive_skills or not passives:
            continue
        
        # 提取所有passive文本
        passive_texts = []
        i = 0
        while i < len(passives):
            item = passives[i].strip()
            
            # 跳过纯符号行和列表项
            if re.match(r'^[*\-]+$', item) or item.startswith('- '):
                i += 1
                continue
            
            # 如果是子行，跳过（会在主行处理时包含）
            if item.startswith('* '):
                i += 1
                continue
            
            # 这是一个主行，获取完整的技能文本
            full_text = get_passive_full_text(passives, i)
            passive_texts.append(full_text)
            
            # 移动到下一个技能
            i += len(full_text.split('\n'))
        
        # 使用基于标题的匹配算法
        matches = find_best_matches_by_title(passive_skills, passive_texts, mapping)
        
        # 将匹配对添加到结果中
        for skill, text in matches:
            if skill is not None and text is not None:
                # 使用标题作为键（忽略具体数值和描述）
                title = extract_title_from_text(text)
                mapped_skill = mapping.get(skill, skill)
                title_to_skills[title].append((mapped_skill, name, skill, text))
    
    # 找出重复的翻译标题
    duplicates_found = False
    for title, skills in title_to_skills.items():
        if len(skills) > 1:
            # 检查这些技能是否真的不同
            unique_skills = set(skill_id for skill_id, hero_name, original_id, text in skills)
            if len(unique_skills) > 1:
                # 检查是否都是同一个英雄的技能
                unique_heroes = set(hero_name for skill_id, hero_name, original_id, text in skills)
                if len(unique_heroes) > 1:  # 只有不同英雄的技能重复才报告
                    print(f"\n❌ 发现重复翻译标题: {len(unique_skills)} 个不同的passiveSkills使用了相同的翻译标题")
                    print(f"翻译标题: '{title}'")
                    
                    # 显示一个示例翻译内容
                    sample_text = skills[0][3]
                    print(f"示例翻译内容: {sample_text[:200]}...")
                    
                    print("使用此翻译标题的passiveSkills和英雄:")
                    for skill_id, hero_name, original_id, text in skills:
                        print(f"  - {skill_id} (原ID: {original_id}, 英雄: {hero_name})")
                    duplicates_found = True
    
    if not duplicates_found:
        print("✓ 未发现不同的passiveSkills使用相同翻译标题的情况")
    
    return duplicates_found

def load_heroes_data(file_path):
    """加载英雄数据文件"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read().strip()
        
        # 移除window.allHeroes = 和结尾的分号
        if content.startswith('window.allHeroes ='):
            content = content.replace('window.allHeroes =', '', 1)
        if content.endswith(';'):
            content = content[:-1]
        
        return json.loads(content)
    except Exception as e:
        print(f"错误: 无法加载文件 {file_path}: {e}")
        return None

def main():
    heroes_file_path = 'heroes_data_en.js'
    mapping_file_path = 'PassiveSkillIconCollection.json'
    
    # 加载被动技能映射
    print("正在加载被动技能映射...")
    passive_mapping = load_passive_skill_mapping(mapping_file_path)
    
    if not passive_mapping:
        print("警告: 无法加载映射文件，将直接使用原始passiveSkills进行检查")
        passive_mapping = {}
    
    print("正在加载英雄数据...")
    heroes_data = load_heroes_data(heroes_file_path)
    
    if not heroes_data:
        print("无法加载数据文件，请检查文件路径和格式")
        return
    
    print(f"找到 {len(heroes_data)} 个英雄")
    
    # 检查1: passiveSkills比passives多的情况
    count_issues = check_passives_count_issue(heroes_data)
    
    # 检查2: 不同的passiveSkills使用了同样的passives翻译
    has_duplicates = check_duplicate_passives_translations(heroes_data, passive_mapping)
    
    print("\n" + "="*50)
    print("检查完成!")
    
    if count_issues or has_duplicates:
        print("发现以下问题需要处理:")
        if count_issues:
            print(f"- {len(count_issues)} 个英雄的passiveSkills比passives多")
        if has_duplicates:
            print("- 存在不同的passiveSkills使用相同翻译标题的情况")
    else:
        print("✓ 未发现任何问题")

if __name__ == "__main__":
    main()