/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2018-10-29 20:08:25
 * @LastEditTime: 2019-06-03 11:02:45
 * @LastEditors: menghongyuan
 */
import $request from '../http'
const url = `${process.env.BASE_URL}/`

export default {
    login(params) {
        return $request.post(url+'authUser/login', params)
    },
    logout() {
        return $request.post(url+'authUser/logout')
    },
    imageCode(params) {
        return $request.get(url+'image/code', { params, responseType: 'arraybuffer' })
    }
}
