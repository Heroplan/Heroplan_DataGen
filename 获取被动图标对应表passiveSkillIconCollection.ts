// --- 终极完美提取脚本 for PassiveSkill (输出JSON修正版) ---
import "frida-il2cpp-bridge";

Il2Cpp.perform(() => {
        console.log("Il2Cpp.perform() called. Attaching the final, perfect hook for PassiveSkill...");

        try {
                const bccClass = Il2Cpp.domain.assembly("Assembly-CSharp").image.class("BattleClientConfiguration");
                const targetMethod = bccClass.method("get_PassiveSkillIdsToIcons", 0);

                if (!targetMethod) {
                        console.error("[FATAL] Method 'get_PassiveSkillIdsToIcons' not found.");
                        return;
                }

                console.log(`[OK] The perfect hook is attached to ${targetMethod.handle}. Please trigger the call.`);

                // 使用一个flag，确保数据只被提取一次，防止重复打印
                let hasBeenExtracted = false;

                targetMethod.implementation = function (this: Il2Cpp.Object) {

                        // 先获取原始函数的返回值，以便最后能正确返回
                        const originalReturnValue = this.field<Il2Cpp.Object>("_passiveSkillIconCollection").value
                                .method<Il2Cpp.Object>("get_Reference").invoke()
                                .field<Il2Cpp.Object>("Data").value;

                        if (hasBeenExtracted) {
                                return originalReturnValue;
                        }

                        console.log(`\n✅✅✅ [HOOK TRIGGERED] get_PassiveSkillIdsToIcons() was called. ✅✅✅`);

                        try {
                                // 'originalReturnValue' 就是我们需要的 "Data" 对象
                                const dataObject = originalReturnValue;
                                if (dataObject.handle.isNull()) return dataObject;

                                const keysArray = dataObject.field<Il2Cpp.Array>("_keys").value;
                                const valuesArray = dataObject.field<Il2Cpp.Array>("_values").value;

                                if (keysArray.handle.isNull() || valuesArray.handle.isNull() || keysArray.length !== valuesArray.length) {
                                        console.error("    - ❌ FATAL: Arrays are null or have mismatched lengths!");
                                        return dataObject;
                                }

                                // 【修正 1】: 创建一个对象来存储结果，而不是直接打印
                                const results: { [key: string]: any } = {};
                                console.log(`\n    --- 🏆🏆🏆 最终的被动技能图标数据 (JSON) (共 ${keysArray.length} 条) 🏆🏆🏆 ---`);

                                for (let i = 0; i < keysArray.length; i++) {
                                        // 【修正 2】: 使用 .content 获取纯净的字符串 key
                                        const key = (keysArray.get(i) as Il2Cpp.String).content;

                                        // 【修正 3】: 添加类型安全检查
                                        if (!key) {
                                                continue;
                                        }

                                        const valueObject = valuesArray.get(i) as Il2Cpp.Object;
                                        if (valueObject.handle.isNull()) continue;

                                        const iconSprite = valueObject.field<Il2Cpp.Object>("Icon").value;

                                        let iconIdentifier = "NULL_SPRITE";
                                        if (!iconSprite.handle.isNull()) {
                                                // 【修正 4】: 使用 .content 获取纯净的 Sprite 名字
                                                iconIdentifier = iconSprite.method<Il2Cpp.String>("get_name").invoke().content ?? "NULL_SPRITE";
                                        }

                                        // 【修正 5】: 将结果存入对象中
                                        results[key] = iconIdentifier;
                                }

                                // 【修正 6】: 在循环结束后，将整个对象格式化为JSON并打印
                                console.log("\n--- JSON 输出 ---");
                                console.log(JSON.stringify(results, null, 2));
                                console.log("--- JSON 输出结束 ---\n");


                                console.log("[INFO] 提取任务圆满完成！将原始 'Data' 对象返回给游戏。");

                        } catch (e: any) {
                                console.error("    - ❌ ERROR during the final, perfect extraction:", e.stack);
                        } finally {
                                // 标记为已提取，防止重复输出
                                hasBeenExtracted = true;
                        }

                        return originalReturnValue;

                } as any;

        } catch (e: any) {
                console.error("An error occurred during hook setup:", e.stack);
        }
});