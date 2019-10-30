# vue-sample

## 1. Project setup
```
npm install
```

### 1.1 Compiles and hot-reloads for development
```
npm run serve
```

### 1.2 Compiles and minifies for production
```
npm run build
```

### 1.3 Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 2. Notes

### 2.1 Windows安装Node，配置npm加速镜像
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

### 2.2 Windows解决“npm : 无法加载文件 D:\npm\npm.ps1，因为在此系统上禁止运行脚本。”
```powershell
sh> set-ExecutionPolicy RemoteSigned
```

### 2.3 Nginx解决“Vue : Invalid Host header”
```bash
sh> tee vue.config.js <<-EOF
module.exports = {
    devServer: {
        disableHostCheck: true,
    }
}
EOF
```
