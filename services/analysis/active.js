/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-02-22 15:07:44
 * @LastEditTime: 2019-05-28 15:47:56
 * @LastEditors: menghongyuan
 */
import $request from '../../http'
const url = `${process.env.ANALYSIS_URL}/`

export default {
    dau(params) {
        return $request.post(url + 'active/dau', params, {format: 'json'})
    },
    wau(params) {
        return $request.post(url + 'active/wau', params, {format: 'json'})
    },
    mau(params) {
        return $request.post(url + 'active/mau', params, {format: 'json'})
    },
    online(params) {
        return $request.post(url + 'active/online', params, {format: 'json'})
    },
    onlineAPcu(params) {
        return $request.post(url + 'active/online/apcu', params, {format: 'json'})
    },
    onlineAcu(params) {
        return $request.post(url + 'active/online/acu', params, {format: 'json'})
    },
    //新增
    onlineTime(params) {
        return $request.post(url + 'active/onlineTime', params, {format: 'json'})
    },
    // -----
    nowOnline(params) {
        return $request.post(url + 'active/nowOnline', params, {format: 'json'})
    }
}
