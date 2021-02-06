const { resolve } = require('path'); //路径
const pagesConfig = require('./pages.config'); //页面配置

module.exports = {
  // webpack配置
  configureWebpack: {
    resolve: {
      // 设置别名，路径指向
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  },

  // 部署应用包时的基本 URL路径
  publicPath: './',

  // 在 multi-page 模式下构建应用
  pages: (() => {
    Object.keys(pagesConfig).forEach(page => {
      pagesConfig[page] = {
        // page 的入口 'src/views/index/index.js'
        entry: pagesConfig[page].entry + '/index.js',
        // 模板来源, 默认: 'public/index.html'
        template: pagesConfig[page].entry + '/index.html',
        // 在 dist/index.html 的输出
        filename: page + '.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: pagesConfig[page].title,
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', page],
      };
    });
    return pagesConfig;
  })(),

  // lint 错误输出为编译警告,警告仅会输出到命令行不会导致编译失败。
  lintOnSave: 'warning',

  //生产环境禁用 SourceMap 追踪源码
  productionSourceMap: false,

  // 是否使用包含运行时编译器的 Vue 构建版本
  // 启用后可以在 Vue 组件中使用 template 选项, 额外增加体积 10kb 左右
  // => vue/dist/vue.esm-bundler.js
  runtimeCompiler: true,

  // 向 CSS 相关的 loader 传递选项
  css: {
    loaderOptions: {
      scss: {
        // 这里的选项会传递给 scss-loader
        // 为每个 scss 文件自动导入 variables.scss
        additionalData: `@import "~@/styles/variables.scss";`,
      },
      less: {
        // 这里的选项会传递给 less-loader
        lessOptions: {
          // less 定制主题, 全局变量
          modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
        },
        javascriptEnabled: true,
      },
    },
  },
};
