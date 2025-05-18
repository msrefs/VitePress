---
title: 整合包常见问题
description: 纯Markdown格式的整合包问题解答
---

# ❓ 整合包常见问题

## 1. 安装类问题

### Q1：如何安装整合包？

1. 下载对应版本的「客户端整合包.zip」  
2. 使用PCL/HMCL等启动器导入  
3. 确保分配至少4GB内存（大型包建议6GB+）  
4. 首次启动会自动安装依赖  

> 📌 示例启动命令：  
> `java -Xmx6G -jar forge-1.16.5-installer.jar`

---

### Q2：启动时出现`Forge Mod Loader`错误？

**解决步骤：**  
- 检查Java版本（需Java 8/17）  
  - [JDK下载](https://adoptium.net/)  
- 删除`config`文件夹后重试  
- 添加JVM参数：  
  ```text
  -Dfml.ignoreInvalidMinecraftCertificates=true
  ```

---

### Q3：存档文件如何安装？

1. 解压存档包（.7z/.zip）  
2. 将文件夹放入以下路径：  
   ```path
   .minecraft/saves/
   ```  
3. 确认整合包版本匹配  

---

## 2. 游戏运行问题

### Q4：游戏卡顿严重怎么办？

**基础优化方案：**  
| 设置项         | 推荐值          |
|----------------|-----------------|
| 渲染距离       | 6-8 chunks      |
| 图像品质       | 快              |
| 最大帧率       | 60              |

**进阶方案：**  
- 编辑`options.txt`：  
  ```ini
  maxFramerate:60
  enableVsync:false
  ```

---

### Q5：模组冲突导致崩溃？

1. 查看崩溃日志末尾：  
   ```log
   [00:12:34] [ERROR] Conflict between ModA and ModB
   ```  
2. 解决方案：  
   - 删除`mods/`下的冲突文件  
   - 保留版本更高的模组  

---

## 3. 维护与更新

### Q6：如何更新整合包？

```text
1. 备份以下文件夹：
   - /saves
   - /config
   - /scripts
2. 删除旧版mods文件夹
3. 导入新版整合包
4. 恢复备份文件
```

---

### Q7：为什么显示「停止支持」？

**常见原因：**  
- 🕒 基础游戏版本过旧（如1.12.2）  
- 🔌 核心模组停止更新  
- 🚀 开发重心转移至新项目  

---

**问题反馈格式：**  
1. 整合包名称：  
2. 错误日志片段：  
   ```  
   [ERROR] xxxx  
   ```  
3. 复现步骤：  
   - 步骤1  
   - 步骤2  
```