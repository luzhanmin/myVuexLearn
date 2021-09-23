/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-01-11 18:01:52
 * @LastEditTime: 2019-08-23 10:45:47
 * @LastEditors: luoxun
 */
import $request from '../../http'
const url = `${process.env.BASE_URL}/`

export default {
    // 工具管理
    addTool(params) {
        return $request.post(url+'tool/addTool', params, {format: 'multipart'})
    },
    queryTool(params) {
        return $request.get(url+'tool/queryTool', { params })
    },
    delTool(params) {
        return $request.post(url+'tool/delTool', params)
    },
    // 签名管理
    addAutograph(params) {
        return $request.post(url+'autograph/addAutograph', params, {format: 'multipart'})
    },
    queryAutograph(params) {
        return $request.get(url+'autograph/queryAutograph', { params })
    },
    setAcquiesce(params) {
        return $request.post(url+'autograph/setAcquiesce', params)
    },
    delAutograph(params) {
        return $request.post(url+'autograph/delAutograph', params)
    },
    updateAutograph(params) {
        return $request.post(url+'autograph/updateAutograph', params, {format: 'multipart'})
    },
    // 渠道资源管理
    queryResource(params) {
        return $request.get(url+'resource/queryResource', { params })
    },
    addResource(params) {
        return $request.post(url+'resource/addResource', params, {format: 'multipart'})
    },
    queryChannels() {
        return $request.get(url+'channel/queryChannels')
    },
    delResource(params) {
        return $request.post(url+'resource/delResource', params)
    }
}
