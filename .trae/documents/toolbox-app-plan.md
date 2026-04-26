# 工具箱桌面应用程序开发计划

## 项目概述
创建一个工具箱桌面应用程序，包含精美的UI界面（无实际功能），支持通过GitHub Actions自动构建多平台安装包。

## 技术栈
- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **桌面框架**: Electron
- **打包工具**: electron-builder
- **CI/CD**: GitHub Actions

## 实现步骤

### 第一阶段：项目初始化
1. 创建项目基础结构
   - 初始化 package.json
   - 配置 TypeScript (tsconfig.json)
   - 配置 Vite (vite.config.ts)
   
2. 创建 Electron 主进程
   - electron/main.ts - 主进程入口
   - electron/preload.ts - 预加载脚本

### 第二阶段：React 组件开发
3. 创建入口文件
   - index.html
   - src/main.tsx
   - src/App.tsx

4. 创建UI组件
   - src/components/TitleBar.tsx - 自定义标题栏
   - src/components/Sidebar.tsx - 侧边栏导航
   - src/components/TopBar.tsx - 顶部搜索栏
   - src/components/StatsCard.tsx - 统计卡片
   - src/components/ToolCard.tsx - 工具卡片
   - src/components/QuickActions.tsx - 快捷操作

5. 创建样式文件
   - src/index.css - 全局样式（玻璃态设计）

### 第三阶段：构建配置
6. 配置 electron-builder
   - 在 package.json 中配置构建选项
   - 支持 Windows (NSIS)、macOS (DMG)、Linux (AppImage)

### 第四阶段：GitHub Actions 配置
7. 创建 GitHub Actions 工作流
   - .github/workflows/build.yml
   - 自动构建三个平台的安装包
   - 发布到 GitHub Releases

### 第五阶段：测试与验证
8. 本地测试
   - 安装依赖
   - 运行开发模式
   - 验证构建流程

## 项目结构
```
xjgjx/
├── .github/
│   └── workflows/
│       └── build.yml          # GitHub Actions 工作流
├── electron/
│   ├── main.ts                # Electron 主进程
│   └── preload.ts             # 预加载脚本
├── public/
│   └── icon.svg               # 应用图标
├── src/
│   ├── components/
│   │   ├── TitleBar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   ├── StatsCard.tsx
│   │   ├── ToolCard.tsx
│   │   └── QuickActions.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.electron.json
└── vite.config.ts
```

## 设计风格
- **主题**: 深色玻璃态 (Dark Glassmorphism)
- **配色**: 霓虹青色 + 紫色光晕
- **字体**: Outfit (UI) + JetBrains Mono (数据)
- **特效**: 渐变背景、噪点纹理、悬停光晕

## 构建产物
- Windows: .exe 安装包 (NSIS)
- macOS: .dmg 安装包
- Linux: .AppImage 可执行文件

## 使用说明
1. 推送代码到 GitHub
2. GitHub Actions 自动触发构建
3. 在 Releases 页面下载对应平台的安装包
