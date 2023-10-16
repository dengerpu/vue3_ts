const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭eslint语法检查
  configureWebpack: {
    plugins: [
      // 开启 BundleAnalyzerPlugin
      new BundleAnalyzerPlugin()
    ]
  }
})
