module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // antdv 按需加载 style 文件
  plugins: [['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }]],
};
