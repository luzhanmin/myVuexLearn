/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2018-12-21 17:46:39
 * @LastEditTime: 2019-07-31 10:36:54
 * @LastEditors: menghongyuan
 */
import Vue from 'vue'
import App from './App'
import VueGloblaPlugins from './util/globlaPlugin'
import store from './store'
import router from './router'
import filters from './util/filters'
import directives from './util/directives'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/styles/common.styl'
import './assets/styles/base.styl'
import './assets/iconfont.css'

Vue.use(ElementUI, {size: 'small'})
Vue.use(VueGloblaPlugins)

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))

// eslint-disable-next-line no-unused-vars
let vm = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
