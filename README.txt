工匠通 — GitHub Pages 部署包
================================

文件说明:
  index.html     主应用（含账号注册/登录）
  manifest.json  PWA清单
  sw.js          离线Service Worker
  icon-96.png    应用图标 96x96
  icon-192.png   应用图标 192x192
  icon-512.png   应用图标 512x512（用于APK）
  netlify.toml   Netlify配置（可选）

步骤1: 上传到 GitHub Pages
--------------------------
1. 打开 github.com/clawbug2026-source/gongjiang-app
2. 点 "Add file" → "Upload files"
3. 把上面所有文件全部上传（选中全部拖进去）
4. Commit changes
5. 等1分钟，访问:
   https://clawbug2026-source.github.io/gongjiang-app/

步骤2: 用 PWABuilder 生成 APK
------------------------------
1. 打开 pwabuilder.com
2. 输入: https://clawbug2026-source.github.io/gongjiang-app/
3. 点 "Start" → 等分析完成（全绿色）
4. 点 "Package for Stores"
5. 选 Android → 点 "Generate Package"
6. 下载 .apk 文件

步骤3: 安装到手机
------------------
- 把 .apk 发到 Android 手机
- 打开文件 → 允许安装 → 完成

iOS 安装（无需 APK）:
- Safari 打开网址 → 分享 → 添加到主屏幕
