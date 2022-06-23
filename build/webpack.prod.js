// 生产环境

const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const webpack = require('webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = merge(base, {
  mode: 'production',
  // 使用nosources-source-map，只能定位源码位置，不能源码展示，体积较小，适合生产模式
  devtool: 'nosources-source-map',
  plugins: [
    // 定义全局变量
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_DEV: JSON.stringify('prodction')
          // 这里可以定义你的环境变量
          // VUE_APP_URL: JSON.stringify('https://xxx.com')
        }
      }
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 去重压缩css
      new TerserPlugin({
        // 压缩JS代码
        terserOptions: {
          compress: {
            drop_console: true // 去除console
          }
        }
      }) // 压缩JavaScript
    ]
  }
})
