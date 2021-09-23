/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-04-24 20:40:05
 * @LastEditTime: 2019-05-28 15:47:33
 * @LastEditors: menghongyuan
 */
import $request from '../../http'
const url = `${process.env.BASE_URL}/`

export default {
    querySDKList(params) {
        return $request.post(url+'sdk/querySDKList', params)
    },
    querySDKs(params) {
        return $request.post(url+'sdk/querySDKs', params)
    },
    addSDK(params) {
        return $request.post(url+'sdk/addSDK', params)
    },
    getAppKey() {
        return $request.get(url+'game/getAppKey')
    },
    updateSDK(params) {
        return $request.post(url+'sdk/updateSDK', params)
    },
    deleteSDK(params) {
        return $request.post(url+'sdk/deleteSDK', params)
    },
    singleFile() {
        return $request.post(url+'upload/singleFile')
    },
    resourceList(params) {
        return $request.get(url+'resource/getResourceList', {params})
    },
    // 活动管理
    queryActivity(params) {
        return $request.get(url+'sdk/activity/queryActivity', {params})
    },
    queryChannel(params) {
        return $request.get(url+'channel/config/queryChannel', { params })
    },
    submitActivity(params, status) {
        let resultUrl = status ? 'addActivity' : 'updateActivity'
        return $request.post(`${url}sdk/activity/${resultUrl}`, params)
    },
    setEnable(params) {
        return $request.post(url+'sdk/activity/setEnable', params)
    }
}
