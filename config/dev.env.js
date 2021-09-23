/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-04-18 19:33:16
 * @LastEditTime: 2019-08-19 17:55:22
 * @LastEditors: menghongyuan
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
//   BASE_URL: '"http://127.0.0.1:8888"',   // 177环境
//   ANALYSIS_URL: '"http://127.0.0.1:8888"',
//   MESSAGE_URL: '"127.0.0.1:8301"',
//   IMG_URL: '"http://192.168.11.99"'
    BASE_URL    : '"http://192.168.11.177:8888"', // 用户管理
    ANALYSIS_URL: '"http://192.168.11.177:8888"', // 数据分析
    MESSAGE_URL : '"http://192.168.11.177:8301"', // 短信接口
    IMG_URL     : '"http://192.168.11.177"', // 图片
})

// module.exports = merge(prodEnv, {
//   NODE_ENV: '"development"',
//   BASE_URL: '"http://192.168.11.99:8888"',   // 177环境
//   ANALYSIS_URL: '"http://192.168.11.99:8888"',
//   MESSAGE_URL: '"http://192.168.11.99:8301"',
//   IMG_URL: '"http://192.168.11.99"'
// })
