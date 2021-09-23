/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2018-10-30 11:49:58
 * @LastEditTime: 2019-08-19 17:43:59
 * @LastEditors: menghongyuan
 */
import echarts from '@/lib/echarts'
import $http from '../services/index'
const toDouble = function(n) {
    return n<10? '0'+n: n
}

let vueGlobalPlugin = {
    install(Vue, options) {
        Vue.prototype.$echarts = echarts;
        Vue.prototype.$title = (title) => {
            window.document.title = `${title}，歆瑷网络统一管理后台`
        }
        Vue.prototype.$isNavigator = () => {
            const u = navigator.userAgent
            return !!u.match(/AppleWebKit.*Mobile.*/)
        }
        Vue.prototype.$http = $http
        Vue.prototype.$calePercent = (numerator=0, denominator=0) => {
            if (numerator===0||denominator===0) return 0
            let result = (numerator/denominator) * 1000 / 10
            return result.toFixed(2)
        }
        Vue.prototype.$calePercentMoney = (numerator=0, denominator=0) => {
            if (numerator===0||denominator===0) return 0
            let result = ((numerator/100)/denominator) * 1000 / 10
            return result.toFixed(2)
        }
        Vue.prototype.$getTime = (num) =>{
            let hours = ''
            if (num<10) {
             hours = '0' + num + ':' + '00' + '-' + '0' + num + ':'+'59';
             return hours
            }
             hours = num + ':' + '00' + '-' + num + ':' + '59';
             return hours
        }
        Vue.prototype.$getAllTime = (num) =>{
            let hours = ''
            if (num<10) {
             hours = '00:00' + '-' + '0' + num + ':'+'59';
             return hours
            }
             hours = '00:00' + '-' + num + ':' + '59';
             return hours
        }
        Vue.prototype.$caleArpu = (numerator=0, denominator=0) => {
            if (numerator===0||denominator===0) return 0
            let result = numerator/denominator
            return result.toFixed(2)
        }
        Vue.prototype.$caleArppu = (numerator=0, denominator=0) => {
            if (numerator===0||denominator===0) return 0
            let result = (numerator/100 || 0)/denominator
            return result.toFixed(2)
        }
        Vue.prototype.$payMoney = (numerator=0) => {
            if (numerator===0) return 0
            let result = numerator/100 || 0
            return result.toFixed(2)
        }
        Vue.prototype.$getNowDate = (day=0, spe='-') => {
            let now = new Date(Date.now() - 24*60*60*1000*day)
            return `${now.getFullYear()}${spe}${toDouble(now.getMonth()+1)}${spe}${toDouble(now.getDate())}`
        }
        Vue.prototype.$storage = (key, val, type='localStorage') => {
            if (val) {
                window[type].setItem(key, val)
            } else {
                return window[type].getItem(key)!=='' ? window[type].getItem(key) : null
            }
        }
        Vue.prototype.$emptyObject = (obj) => {
            let newObj = {}
            for (let key in obj) {
                // eslint-disable-next-line eqeqeq
                if (obj[key] || obj[key] == '0') {
                    newObj[key] = obj[key]
                }
            }
            return newObj
        }
        Vue.prototype.defaultShowEchart = false
        Vue.prototype.eventBus = new Vue()
        Vue.prototype.$dateToStr = (date=Date.now()) => {
            let result = ''
            result += new Date(date).getFullYear()
            result += toDouble(new Date(date).getMonth()+1)
            result += toDouble(new Date(date).getDate())
            result += toDouble(new Date(date).getHours())
            result += toDouble(new Date(date).getMinutes())
            result += toDouble(new Date(date).getSeconds())
            return result
        }
    }
}

export default vueGlobalPlugin
