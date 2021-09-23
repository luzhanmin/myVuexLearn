/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-05-09 10:33:51
 * @LastEditTime: 2019-06-11 21:10:34
 * @LastEditors: menghongyuan
 */
import $request from '../../http'
const url = `${process.env.BASE_URL}/`

export default {
    queryAdTrack(params) { // 查询短链
        return $request.get(`${url}adtrack/queryAdTrack`, { params })
    },
    submitAdTrack(params, type) { // 新建、修改 短链
        let uri = type==='edit'?'updateAdTrack':'addAdTrack'
        return $request.post(`${url}adtrack/${uri}`, params, { format: 'json' })
    },
    querySubAdvertiser(params) { // 查询子广告商信息
        return $request.get(`${url}subadvertiser/querySubAdvertiser`, { params })
    },
    queryAuthSubAdvertiser(params) { // 查询子广告商信息 auth
        return $request.get(`${url}subadvertiser/queryAuthSubAdvertiser`, { params })
    },
    submitSubAdvertiser(params, type) {
        let uri = type==='add'?'addSubAdvertiser':'updateSubAdvertiser'
        return $request.post(`${url}subadvertiser/${uri}`, params )
    },
    queryAdPackageInfo(params) {    // 广告包标识查询
        return $request.get(`${url}adpack/queryAdPackageInfo`, { params })
    },
    submitAdPackInfo(params, type) {    // 添加、修改 广告包标识
        let uri = type==='add'?'addAdPackInfo':'updateAdPackInfo'
        return $request.post(`${url}adpack/${uri}`, params )
    }
}
