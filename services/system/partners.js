/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-04-30 17:40:21
 * @LastEditTime: 2019-06-05 15:47:46
 * @LastEditors: menghongyuan
 */
import $request from '../../http'
const url = `${process.env.BASE_URL}/`

export default {
    partners(params) {
        return $request.post(url+'partnerUser/queryList', params)
    },
    addUser(params) {
        return $request.post(url+'partnerUser/addUser', params)
    },
    updateUser(params) {
        return $request.post(url+'partnerUser/updateUser', params)
    },
    deleteUser(params) {
        return $request.post(url+'partnerUser/delete', params)
    },
    addPartners(params) {
        return $request.post(url+'partner/addPartner', params)
    },
    deletePartner(params) {
        return $request.post(url+'partner/deletePartner', params)
    },
    updatePartner(params) {
        return $request.post(url+'partner/updatePartner', params)
    },
    lockAccount(params) {
        return $request.post(url+'partnerUser/lockAccount', params )
    },
    unlockAccount(params) {
        return $request.post(url+'partnerUser/unlockAccount', params)
    },
    resetPwd(params) {
        return $request.post(url+'partnerUser/resetPwd', params)
    },
    // 合作方管理
    queryPartnerList(params) {
        return $request.get(url+'partner/queryPartnerList', {params: params})
    },
    queryPartnerAll() {
        return $request.get(url+'partner/queryPartnerAll')
    },
    queryList(params) {
        return $request.get(url+'partnerUser/queryList', {params: params})
    },
    subUserList(params) {
        return $request.get(url+'subUser/queryList', {params: params})
    },
    queryRoleList(params) {
        return $request.get(url+'partnerRole/queryRoleList', { params })
    },
    queryPartnerUser(partnerId) {
        return $request.get(url+'partnerUser/getPartnerUsers', { params: {partnerId} })
    },
    subUser: {
        lockAccount(statu, userId) {
            let r = statu ? 'unlockAccount' : 'lockAccount'
            return $request.post(`${url}subUser/${r}`, { userId })
        },
        resetPwd(userId) {
            return $request.post(url+'subUser/resetPwd', { userId })
        },
        delete(userId) {
            return $request.post(url+'subUser/delete', { userId })
        },
        submitSubUser(params) {
            let r = !params.userId ? 'addUser' : 'updateUser'
            return $request.post(`${url}subUser/${r}`, params)
        }
    }
}
