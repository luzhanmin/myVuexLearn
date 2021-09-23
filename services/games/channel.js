/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-01-03 15:19:36
 * @LastEditTime: 2019-06-24 17:01:54
 * @LastEditors: menghongyuan
 */
import $request from '../../http'

const url = `${process.env.BASE_URL}/`

export default {
    channelPages(params) {
        return $request.get(url+'channel/queryChannelList', { params })
    },
    channelList() {
        return $request.get(url+'channel/queryChannels')
    },
    operateChannel(params, status) {
        let resultUrl = status==='add' ? 'addChannel' : 'updateChannel'
        return $request.post(`${url}channel/${resultUrl}`, params)
    },
    modifyParam(params) {
        return $request.post(url+'channel/modifyParam', params, {format: 'json'})
    },
    deleteChannel(channelTag, channelName) {
        return $request.post(url+'channel/deleteChannel', { channelTag, channelName })
    },
    channelTagList() {
        return $request.get(url+'channel/getChannelTagList')
    },
    queryOfficial() {
        return $request.get(`${url}channel/queryOfficial`)
    }
}
