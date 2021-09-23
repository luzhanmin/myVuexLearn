/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-01-30 10:27:57
 * @LastEditTime: 2019-08-15 11:03:29
 * @LastEditors: menghongyuan
 */
import $request from '../../http'
const url = `${process.env.BASE_URL}/`

export default {
    // 项目管理
    queryProject(params) {
        return $request.get(url+'project/queryProject', { params: params })
    },
    getProjects(params) {
        return $request.get(url+'project/getProjects', { params: params })
    },
    release(params) {
        return $request.post(url+'project/release', params)
    },
    delProject(params) {
        return $request.post(url+'project/delProject', params)
    },
    addProject(params, type) {
        let r = type==='add' ? 'addProject' : 'updateProject'
        return $request.post(`${url}project/${r}`, params)
    },
    updateProject(params) {
        return $request.post(url+'project/updateProject', params)
    },
    getSupplements() {
        return $request.get(url+'project/getSupplements')
    },
    getValidates() {
        return $request.get(url+'project/getValidates')
    },

    // 属性管理
    queryProps(params) {
        return $request.get(url+'property/queryProps', { params: params })
    },
    getProps(params) {
        return $request.get(url+'property/getProps', { params: params })
    },
    getSysProps(params) {
        return $request.get(url+'metadata/sys/property/getSysProps', { params: params })
    },
    getTypes() {
        return $request.get(url+'property/getTypes')
    },
    addProps(params, type) {
        let r = type==='add'?'addProps':'updateProps'
        return $request.post(`${url}property/${r}`, params)
    },
    delProps(params) {
        return $request.post(url+'property/delProps', params)
    },
    updateProps(params) {
        return $request.post(url+'property/updateProps', params)
    },

    // 事件管理
    queryEvent(params) {
        return $request.get(url+'event/queryEvent', { params: params })
    },
    addEvent(params, type) {
        let r = type==='add'?'addEvent':'updateEvent'
        return $request.post(`${url}event/${r}`, params, {format: 'json'})
    },
    delEvent(params) {
        return $request.post(url+'event/delEvent', params)
    },
    updateEvent(params) {
        return $request.post(url+'event/updateEvent', params, {format: 'json'})
    },
    // 主题管理
    queryTopic(params) {
        return $request.get(`${url}metadata/topic/queryTopic`, {params})
    },
    addTopic(params, type) {
        let resultUrl = type==='add'?'addTopic':'updateTopic'
        return $request.post(`${url}metadata/topic/${resultUrl}`, params)
    },
    updateTopic(params) {
        return $request.post(`${url}metadata/topic/updateTopic`, params)
    },
    getTopicList() {
        return $request.get(`${url}metadata/topic/getTopicList`)
    },
    // 系统属性管理
    querySysProps(params) {
        return $request.get(`${url}metadata/sys/property/querySysProps`, { params })
    },
    submitSysProps(params, type) {
        let resultUrl = type==='add'?'addSysProps':'updateSysProps'
        return $request.post(`${url}metadata/sys/property/${resultUrl}`, params)
    },
    delSysProps(params) {
        return $request.post(url+'metadata/sys/property/delSysProps', params)
    },
    // 系统事件管理
    querySysEvent(params) {
        return $request.get(`${url}metadata/sys/event/querySysEvent`, { params })
    },
    submitSysEvent(params, type) {
        let resultUrl = type==='add'?'addSysEvent':'updateSysEvent'
        return $request.post(`${url}metadata/sys/event/${resultUrl}`, params, {format: 'json'})
    },
    delSysEvent(params) {
        return $request.post(url+'metadata/sys/event/delSysEvent', params)
    },
    // 视图管理
    queryView(params) {
        return $request.get(`${url}metadata/view/queryView`, { params })
    },
    addColumn(params) {
        return $request.post(`${url}metadata/view/addColumn`, params)
    },
    // 消息查询
    queryMessage(params) {
        return $request.get(`${url}metadata/topic/queryMessage`, {params})
    },
    queryPartitionList(params) {
        return $request.get(`${url}metadata/topic/queryPartitionList`, { params })
    },
    qeuryPartitionOffset(params) {
        return $request.get(`${url}metadata/topic/queryPartitionOffset`, { params })
    },
    // 消息重放
    queryLogReload(params) {
        return $request.get(`${url}message/reload/queryLog`, { params })
    },
    queryProgress(params) {
        return $request.get(`${url}message/reload/queryProgress`, { params })
    },
    queryCountReload(params) {
        return $request.get(`${url}message/reload/queryCount`, { params })
    },
    executeLoad(params) {
        return $request.get(`${url}message/reload/executeLoad`, { params })
    }
}
