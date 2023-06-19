const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://101.132.227.96',   //数据来源服务器
        // pathRewrite: { '^/api': '' }, //路径重写
      },
    },
  },
})
