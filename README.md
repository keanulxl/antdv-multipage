<h1 align="center">Ant Design Vue & MultiPage</h1>

<div align="center">

基于 Ant Design Vue 和 Vue 3.0 构建的多页面前端框架模板

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
git clone https://github.com/6starlong/antdv-mp.git
```

### 推荐使用淘宝 NPM 镜像

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

安装依赖

```
cd antdv-mp
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
└── vue.config.js           VueCLI配置
```

## 🛸 参考文献

#### Vue Ecosystem

- [Vue 3.0](https://v3.cn.vuejs.org/guide/introduction.html)
- [Vue CLI](https://cli.vuejs.org/zh/guide/)
- [Vue Router](https://next.router.vuejs.org/zh/guide/)
- [Vuex](https://vuex.vuejs.org/zh/guide/)
- [Vue Loader](https://vue-loader.vuejs.org/zh/guide/)

#### Installed CLI Plugins

- [babel](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel/)
- [eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint/)
- [vuex](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex/)

#### Css Preprocessor Links

- [Sass](https://www.sass.hk/)
- [Less](https://less.bootcss.com/)

#### UI Framework Links

- [Ant Design Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
- [Icon](https://2x.antdv.com/components/icon-cn/)

#### API Links

- [Axios](https://github.com/axios/axios/)

## ☕ 使用说明

### 构建多页应用

> 参考配置文件 pages.config.js，单页面或首页使用 index 进行命名。<br/>
> 在 src/views 目录下创建页面文件夹，index.js 文件是页面所必须的入口文件。<br/>
> public/index.html 文件会被 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) 进行处理用作页面的默认模板。可在页面文件夹下新建 index.html 文件替代默认模板，仅作用于当前页面。<br/>
> src/main.js 是模块的聚合文件，用于引入和导出通用的模块。

### 主题

> Ant Design Vue 主题配置

```javascript
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

> 自定义主题变量 <br/>
> 例: src/styles/variables.scss

### 布局

> 自定义布局请参考文档 [Layout 布局](https://2x.antdv.com/components/layout-cn) <br/>
> 例： src/components/Layout.vue <br/>

```html
<template>
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout-content>Content</a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
```

### 处理静态资源

#### 相对路径导入

> 在 JavaScript、CSS 或 \*.vue 文件中使用相对路径 (必须以 . 开头) 引用一个静态资源，该资源将会被解析为一个模块依赖。<br/>
> 例如，url(./image.png) 会被翻译为 require('./image.png')。

```html
<!-- vue -->
<template>
  <img src="./image.png" />
</template>
```

```javascript
// javascript
 data () {
    return {
      image: require('./image.png')
    }
  }
```

```css
/* css */
background-image: url('./image.png');
```

#### URL 转换规则

- URL 是一个绝对路径 (例如 /images/xxx.png)，会被保留不变。
- URL 以 . 开头，会作为一个相对模块且基于你的文件系统中的目录结构进行进行解析。
- URL 以 ~ 开头，其后的任何内容都会作为一个模块请求被解析，甚至可以引用 Node 模块中的资源。
- URL 以 @ 开头，也会作为一个模块请求被解析，[Vue CLI](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#url-%E8%BD%AC%E6%8D%A2%E8%A7%84%E5%88%99) 默认会设置一个指向 src 的别名 @。

```html
<!-- html -->
<img src="~some-npm-package/foo.png" />
```

```javascript
// javascript
import '@/main.js';
```

```css
/* css */
background-image: url('~@/assets/image.png');
```

#### 别名

```javascript
//  vue.config.js
module.exports = {
  // webpack配置
  configureWebpack: {
    resolve: {
      // 设置别名，路径指向
      alias: {
        '@': resolve(__dirname, 'src'), // Vue CLI 默认设置
      },
    },
  },
};
```

#### public 文件夹

> 任何放置在 public 文件夹的静态资源都会被简单的复制，而不经过 webpack。你需要通过绝对路径来引用它们。

> 在 public/index.html 或其它通过 html-webpack-plugin 用作模板的 HTML 文件中，访问 public 文件夹需要通过 <%= BASE_URL %> 设置链接前缀：

```html
<link rel="icon" href="<%= BASE_URL %>favicon.ico" />
```

> 在模板中，你首先需要向你的组件传入基础 URL 或引入模块：

```javascript
  data () {
    return {
      publicPath: process.env.BASE_URL,
    }
  }
```

```html
<img :src="`${publicPath}image.png`" />
```

### 路由

> 单页面路由管理使用 [Vue Router](https://next.router.vuejs.org/zh/guide/)，路由配置文件与页面同名，多页面间跳转遵守浏览器规则。<br/>
> 例: src/route/index.js

```html
<!-- HTML -->
<div id="app">
  <p>
    <!--使用 router-link 组件进行导航，传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- 路由出口，路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

```javascript
// javascript
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('Home.vue') },
    { path: '/about', component: () => import('About.vue') },
  ],
});

const app = Vue.createApp({});
app.use(router).mount('#app');
```

### 状态管理

> 使用浏览器缓存机制结合 [Vuex](https://2x.antdv.com/components/layout-cn) 实现跨页面状态管理，单页面应用状态管理可以不用设置缓存。<br/>
> 例：src/store/index.js

> 安装 Vuex，创建一个 store。只需提供一个初始状态对象和一些事件即可：

```javascript
import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0, // Single Page
      // count: localStorage.getItem('count') || 0, // Multi Page
    };
  },
  mutations: {
    increment(state) {
      state.count++; // Single Page
      // localStorage.setItem('count', state.count); // Multi Page
    },
  },
});

const app = createApp({
  /* your root component */
});
app.use(store).mount('#app');
```

> 通过访问状态对象 store.state，并使用 store.commit 方法触发状态更改：

```
store.commit('increment')
console.log(store.state.count) // -> 1
```

...

<hr/>
THE END.
