/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-05-22 14:19:41
 * @LastEditTime: 2019-08-23 14:58:30
 * @LastEditors: luoxun
 */
import $request from '../../http'

const url = `${process.env.BASE_URL}/`

export default {
    /* 母包管理 */
    addAPK (params) {
        return $request.post(url + 'apk/addAPK', params)
    },
    updateAPK (params) {
        return $request.post(url + 'apk/updateAPK', params)
    },
    queryAPK (params) {
        return $request.get(url + 'apk/queryAPK', { params })
    },
    setAcquiesce (params) {
        return $request.post(url + 'apk/setAcquiesce', params)
    },
    delAPK (params) {
        return $request.post(url + 'apk/delAPK', params)
    },
    downLoadApk() {
        return url + 'apk/downLoadApk'
    },
    /* 打包 */
    queryAllAutograph () {
        return $request.get(url + 'autograph/queryAllAutograph')
    },
    action (params) {
        return $request.post(url + 'package/action', params, {format: 'json'})
    },
    queryChannel (params) {
        return $request.get(url + 'channel/config/queryChannel', { params })
    },
    getAdPackage (params) {
        return $request.post(url + 'adpack/getAdPackage', params)
    },
    /* 打包记录 */
    queryRecord (params) {
        return $request.post(url + 'package/queryRecord', params)
    },
    cancel (params) {
        return $request.post(url + 'package/cancel', params)
    },
    /* 节点流失 */
    queryNodeLess(params) {
        return $request.get(url + 'platform/role/queryNodeLess', {params})
    },
    queryEventTable(params) {
        return $request.get(`${url}event/queryEventTable`, {params})
    }
}
