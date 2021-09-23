/*
 * @Description:
 * @Author: luoxun
 * @Date: 2019-05-09 10:53:36
 * @LastEditTime: 2019-05-28 11:26:01
 * @LastEditors: luoxun
 */
import $request from '../../http'
const url = `${process.env.BASE_URL}/`

export default {
    queryAuthSubAdvertiser(params) {
        return $request.post(url+'subadvertiser/queryAuthSubAdvertiser', params)
    },
    getAllAdvertiser(params) {
        return $request.post(url+'advertiser/getAllAdvertiser', params)
    },
    queryClickLog(params) {
        return $request.post(url+'adtrack/log/queryClickLog', params)
    },
    queryActivateLog(params) {
        return $request.post(url+'adtrack/log/queryActivateLog', params)
    }

}
