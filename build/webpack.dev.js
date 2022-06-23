// 开发环境

const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    open: true
    // hot: true,
  },
  // 使用eval-cheap-module-source-map模式，能具体定位到源码位置和源码展示，适合开发模式，体积较小
  devtool: 'eval-cheap-module-source-map'
})
