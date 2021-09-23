/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-05-15 17:31:42
 * @LastEditTime: 2019-08-20 20:28:48
 * @LastEditors: menghongyuan
 */
import $request from '../../http'
const url = `${process.env.ANALYSIS_URL}/`

export default {
    // 订单列表
    orderList(params) {
        return $request.get(url+'platform/order/orderList', { params })
    },
    // 订单详情
    orderInfo(params) {
        return $request.get(url+'platform/order/orderInfo', { params })
    },
    // 补单
    repair(params) {
        return $request.post(url+'platform/order/repair', params)
    },
    // 订单日志
    orderLog(params) {
        return $request.get(url+'platform/order/orderLog', { params })
    },
    queryAccount(params) {
        return $request.get(url+'platform/account/queryAccount', { params })
    },
    // 获取渠道列表
    queryChannels(params) {
        return $request.get(url+'channel/queryChannels', { params })
    },
    // 获取游戏列表
    queryGames(params) {
        return $request.get(url+'game/queryGames', { params })
    },
    // 获取平台列表
    querySuitByGame(params) {
        return $request.get(url+'suit/querySuitByGame', { params })
    },
    // 获取平台列表
    accountInfo(params) {
        return $request.get(url+'platform/account/accountInfo', { params })
    },
    // 封禁账号
    prohibition(params) {
        return $request.post(url+'platform/account/prohibition', params)
    },
    // 解除封禁
    relieve(params) {
        return $request.post(url+'platform/account/relieve', params)
    },
    // 升级账号
    upgradeAccount(params) {
        return $request.post(url+'platform/account/upgradeAccount', params)
    },
    // 重置密码
    initPassword(params) {
        return $request.post(url+'platform/account/initPassword', params)
    },
    // 查看日志
    platformLog(params) {
        return $request.get(url+'platform/account/platformLog', { params })
    },
    // 获取验证码
    getCode(params) {
        return $request.get(`${process.env.BASE_URL}/validateCode/send/code`, { params })
    },
    // 绑定手机
    bindMobile(params) {
        return $request.post(url+'platform/account/bindMobile', params)
    },
    // 修改手机
    updateBindMobile(params) {
        return $request.post(url+'platform/account/updateBindMobile', params)
    },
    // 校验当前手机号码
    checkMobile(params) {
        return $request.post(url+'platform/account/checkMobile', params)
    },
    // 下载
    exportExcel(url, params, fileName) {
        $request.get(url, { 'responseType': 'blob', params }).then(res => {
            const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
            if (res.type==='application/vnd.ms-excel') {
                const downloadElement = document.createElement('a')
                const href = window.URL.createObjectURL(blob)
                downloadElement.href = href
                downloadElement.download = fileName
                document.body.appendChild(downloadElement)
                downloadElement.click()
                document.body.removeChild(downloadElement) // 下载完成移除元素
                window.URL.revokeObjectURL(href) // 释放掉blob对象
            }
        })
    },
    queryProfile(params) {
        return $request.get(url+'api/queryProfile', { params })
    },
    qeruyEvents(params) {
        return $request.get(url+'api/queryEvent', { params })
    }
}
