/*
 * @Description:
 * @Author: luoxun
 * @Date: 2019-04-08 17:56:01
 * @LastEditTime: 2019-05-28 15:51:48
 * @LastEditors: menghongyuan
 */

import $request from '../../http'
const url = `${process.env.BASE_URL}/`

export default {
    queryLogin(params) {
        return $request.get(url+'log/queryLogin', { params: params })
    },
    queryOperate(params) {
        return $request.get(url+'log/queryOperate', { params: params })
    }
}
