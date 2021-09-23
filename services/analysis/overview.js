/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-02-19 11:08:48
 * @LastEditTime: 2019-07-17 19:54:16
 * @LastEditors: zhongjianqiang
 */
import $request from '../../http'
const url = `${process.env.ANALYSIS_URL}/`

export default {
    realTime(params) {
        return $request.post(url+'overview/realTime', params, { format: 'json' })
    },
    daily(params) {
        return $request.post(url+'overview/pandect/daily', params, { format: 'json' })
    },
    pandect(params) {
        return $request.post(url+'overview/pandect', params, { format: 'json' })
    },
    user(params) {
        return $request.post(url+'overview/pandect/user', params, { format: 'json' })
    },
    hourDataIndependency(params) {
        return $request.post(url+'overview/hourDataIndependency', params, { format: 'json' })
    },
    hourDataRollup(params) {
        return $request.post(url+'overview/hourDataRollup', params, { format: 'json' })
    }
}
