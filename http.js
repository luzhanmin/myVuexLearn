/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-05-20 16:18:47
 * @LastEditTime: 2019-08-23 11:52:24
 * @LastEditors: menghongyuan
 */
import axios from 'axios'
import store from './store'
import router from './router'
import Qs from 'qs'
import { Loading, Message } from 'element-ui'

// axios.defaults.baseURL=process.env.BASE_URL
// axios.defaults.timeout=30*1000

let loadingInstace, needloadingRequestCount = 0
axios.interceptors.request.use(config => {
    needloadingRequestCount ++
    if (!config.hideLoading) {
        // loadingInstace = Loading.service({
        //     lock: true,
        //     text: '正在加载中...',
        //     spinner: 'el-icon-loading',
        //     background: 'rgba(0, 0, 0, 0.7)'
        // })
    }
    if (store.getters.getToken!=='null') {
        config.headers['xa_token'] = store.getters.getToken
    }
    const method = config.method.toUpperCase();
    if (method==='POST' || method==='PUT') {
        if (config.format && config.format === 'json') {
            config.headers['Content-Type'] = 'application/json'
        } else if (config.format && config.format === 'multipart') {
            config.headers['Content-Type'] = 'multipart/form-data'
        } else {
            config.data = Qs.stringify(config.data)
        }
    }
    if (process.env.NODE_ENV==='development') {
        // console.log(`%c[${config.method}]请求:${config.url}`, 'color:DodgerBlue', config)
    }
    return config
}, error => {
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    try {
        needloadingRequestCount --
        if (process.env.NODE_ENV==='development') {
            // console.log(`%c响应:${response.config.url}`, 'color:YellowGreen', response.data)
        }
        if (needloadingRequestCount<=0 && !response.config.hideLoading) {
            // loadingInstace.close()
        }

        // TODO 响应错误处理
        if (response.data.code) {
            if (response.data.code===0) {
                return response.data
            } else {
                Message.error({
                    message: response.data.message
                })
                if (response.data.code===1001) {
                    router.replace({
                        name: 'login',
                        query: { redirect: window.location.hash.substr(1) }
                    })
                }
                return Promise.reject(response.data)
            }
        }
        return response.data
    } catch (error) {
        throw new Error('不好意思，程序好像出问题了!')
    }
}, error => {
    needloadingRequestCount --
    if (needloadingRequestCount<=0) {
        // loadingInstace.close()
        Message.error({
            message: '加载失败'
        })
        return Promise.reject(error)
    }
})
export default axios
