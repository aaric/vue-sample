# vue-sample

## 1. Project setup

```powershell
npm install
```

### 1.1 Compiles and hot-reloads for development

```powershell
npm run serve
```

### 1.2 Compiles and minifies for production

```powershell
npm run build
```

### 1.3 Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 1.4 Extra

#### 1.4.1 vue-cli

```powershell
npm install -g @vue/cli
```

#### 1.4.2 nginx+gzip

```nginx
location / {
    root /dist;
    index /index.html;
    try_files $uri $uri/ /index.html;
    gzip_static on;
}
```


## 2. 创建VSCode右键菜单

### 2.1 PowerShell

```powershell
sh> regedit
```

### 2.2 `HKEY_CLASSESS_ROOT/*/Shell/Open with VSCode`

```vim
default: VSCode
Icon: D:\Portable Files\VSCode\Code.exe, 0
```

### 2.3 `HKEY_CLASSESS_ROOT/*/Shell/Open with VSCode/command`

```vim
default: "D:\Portable Files\VSCode\Code.exe" "%1"
```

## 3. 推荐VSCode插件列表

1. Auto Close Tag  -- 自动闭合HTML/XML标签
2. Auto Rename Tag  -- 自动完成另一侧标签的同步修改
3. Beautify  -- 格式化代码
4. Bracket Pair Colorizer  -- 给括号加上不同的颜色，便于区分不同的区块
5. Debugger for Chrome  -- 映射VSCode上的断点到Chrome上，方便调试
6. ESLint  -- JavaScript语法纠错
7. ~~GitLens~~  -- 方便查看git日志
8. HTML CSS Support  -- 智能提示CSS类名以及ID
9. HTML Snippets  -- 智能提示HTML标签，以及标签含义
10. JavaScript(ES6) code snippets  -- ES6语法智能提示，以及快速输入
11. jQuery Code Snippets  -- jQuery代码智能提示
12. Markdown Preview Enhanced  -- 实时预览Markdown
13. markdownlint  -- Markdown语法纠错
14. Material Icon Theme  -- VSCode图标主题，支持更换不同色系的图标
15. open in browser  -- 直接在浏览器中打开html
16. Path Intellisense  -- 自动提示文件路径，支持各种快速引入文件
react-router语法智能提示
17. Vetur  -- Vue多功能集成插件
18. Chinese（Simplied） Lang  -- 中文插件
19. Bootstrap v4 Snippets  -- Bootstrap4提示插件
20. Document This  -- 快速添加文档注释
21. Browser Preview  -- 浏览器预览插件
22. REST Client  -- HTTP客户端工具
23. Polacode-2019  -- 分享Code源码
24. Vibrancy  -- 美化VSCode
25. JavaScript Booster  -- 修正JS语法
26. Ant Design Vue helper  -- Ant Design for vue

## 4. Notes

### 4.1 Windows安装Node，配置npm加速镜像

```powershell
sh> choco install nodejs –version 12.12.0
sh> vim .npmrc
///vim
prefix = D:\Node\npm
cache = D:\Node\npm_cache
registry = https://registry.npm.taobao.org
disturl = https://npm.taobao.org/dist
electron_mirror = https://npm.taobao.org/mirrors/electron/
///
sh> npm install npm@6.12.0 -g
```

### 4.2 Windows解决“npm : 无法加载文件 D:\npm\npm.ps1，因为在此系统上禁止运行脚本。”

```powershell
sh> set-ExecutionPolicy RemoteSigned
```

### 4.3 Nginx解决“Vue : Invalid Host header”

```bash
sh> tee vue.config.js <<-EOF
module.exports = {
    devServer: {
        disableHostCheck: true,
    }
}
EOF
```
