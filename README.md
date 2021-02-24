<h1 align="center">Ant-design of vue3.x & MultiPage</h1>

<div align="center">

基于 Ant-Design 和 vue3.x 构建的多页面前端框架模板

![node version](https://img.shields.io/badge/node-%3E%3D10.0.0-green)

</div>

## 🎉 特性

- 无需关注配置，自由定制化开发，享用 Vue 生态体系，支持单页及多页面。
- 开箱即用的高质量 UI 组件，共享 Ant Design of React 设计工具体系。
- 支持现代浏览器和 IE11+（需要 [polyfills](https://www.antdv.com/docs/vue/getting-started-cn/#兼容性)）
- 支持服务端渲染
- 支持 [Electron](https://www.electronjs.org/)

## 🎮 快速启动

### 克隆

```
git clone https://github.com/keanulxl/antdv-multipage.git
```

### 推荐使用淘宝 NPM 镜像

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装依赖

```
cd antdv-multipage
npm install or cnpm install
```

### 启动服务及热重载

```
npm run serve
```

### 编译及压缩构建

```
npm run build
```

### 自定义配置文件

查看 [配置参考](https://cli.vuejs.org/zh/config/).

## 🛠 目录结构

```text
┌── dist/                   构建目录
├── node_modules/           依赖包
├── public/                 公共资源
│   ├── favicon.ico         页面图标
│   └── index.html          html模板
├── src/                    项目主目录
│   ├── api                 接口
│   ├── assets              静态资源
│   ├── components          组件
│   ├── route               路由
│   ├── store               仓库
│   ├── styles              样式文件
│   ├── views               视图页面
│   └── main.js             入口
├── .gitignore              git上传忽略配置文件
├── babel.config.js         babel配置参数
├── package-lock.json       项目版本依赖
├── package.json            项目基本信息
├── pages.config.js         多页面配置
├── README.md               文档说明
└── vue.config.js           Vue配置
```

## 🛸 参考

@指向

### 定制主题

<!-- [配置参考](https://cli.vuejs.org/zh/config/) -->

```
// vue.config.js for less-loader@6.0.0
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
        +   'primary-color': '#1DA57A',
        +   'link-color': '#1DA57A',
        +   'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
```

为每个 scss 文件自动导入 variables.scss，自定义 scss 变量，与主题对应。
