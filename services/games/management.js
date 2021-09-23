/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-05-15 17:31:42
 * @LastEditTime: 2019-07-26 12:01:10
 * @LastEditors: luoxun
 */
import $request from '../../http'
const url = `${process.env.BASE_URL}/`
export default {
    // 文件上传地址
    uploadUrl() {
        return url+'upload/singleAliYunImage'
    },
    // 获取appkey
    appkey() {
        return $request.get(url+'game/getAppKey')
    },
    // 获取govSwitch
    govSwitch() {
        return $request.get(url+'game/getGovSwitch')
    },
    // 获取游戏列表
    gamesList(params) {
        return $request.get(url+'game/queryGames', {params: params})
    },
    // 获取项目列表
    projectList() {
        return $request.get(url+'project/getProjects')
    },
    // 获取项目列表
    getUncorrelated() {
        return $request.get(url+'project/getUncorrelated')
    },
    // 新建游戏
    addGames(params) {
        console.log(params.appId)
        let r = !params.appId ? 'addGame' : 'updateGame'
        return $request.post(`${url}game/${r}`, params)
    },
    // 删除游戏
    delGames(params) {
        return $request.post(url+'game/deleteGame', params)
    },
    exportExcel(url, name) {
        $request.get(url, { 'responseType': 'blob' }).then(res => {
            const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
            const downloadElement = document.createElement('a')
            const href = window.URL.createObjectURL(blob)
            downloadElement.href = href
            downloadElement.download = name+'.xls'
            document.body.appendChild(downloadElement)
            downloadElement.click()
            document.body.removeChild(downloadElement) // 下载完成移除元素
            window.URL.revokeObjectURL(href) // 释放掉blob对象
        })
    },
    // 更新管理
    update: {
        list(params) {
            return $request.get(url+'renew/queryRenew', { params })
        },
        submit(params) {
            let r = !params.renewId ? 'addRenew' : 'updateRenew'
            return $request.post(`${url}renew/${r}`, params)
        },
        delete(params) {
            return $request.post(url+'renew/deleteRenew', params)
        }
    },
    // 渠道配置列表查询
    channelList(params) {
        return $request.get(url+'channel/config/queryConfig', {params: params})
    },
    // 新建渠道
    addChannelParams(params) {
        let r = !params.configId ? 'addConfig' : 'updateConfig'
        return $request.post(`${url}channel/config/${r}`, params, {format: 'json'})
    },
    // 删除渠道
    delParams(params) {
        return $request.post(url+'channel/config/deleteConfig', params)
    },
    // 查询渠道参数
    channelParmas(params) {
        return $request.get(url+'channel/queryChannelConfig', {params: params})
    },
    // 修改状态true/false
    allowChange(params) {
        let map = {'pay': 'allowPay', 'register': 'allowRegister', 'login': 'allowLogin'}
        let r = map[params.type]
        if (!r) {
            throw new Error('状态错误！')
        }
        return $request.post(`${url}channel/config/${r}`, params)
    },
    // 商品管理
    goods: {
        queryGoods(params) {
            return $request.post(url+'goods/queryGoods', params)
        },
        addGoods(params) {
            return $request.post(url+'goods/addGoods', params)
        },
        updateGoods(params) {
            return $request.post(url+'goods/updateGoods', params)
        },
        deleteGoods(params) {
            return $request.post(url+'goods/deleteGoods', params)
        },
        export() {
            return $request.get(url+'goods/export')
        }
    },
    // 商品映射
    mapping: {
        mappings(params) {
            return $request.post(url+'mapping/queryMapping', params)
        },
        delete(params) {
            return $request.post(url+'mapping/deleteMapping', params)
        },
        add(params) {
            let r = !params.mappingId ? 'addMapping' : 'updateMapping'
            return $request.post(`${url}mapping/${r}`, params)
        },
        channelList(params) {
            return $request.get(url+'channel/config/queryChannel', {params: params})
        },
        goodList(params) {
            return $request.get(url+'goods/queryByGame', {params: params})
        }
    },
    // 游戏服
    suit: {
        suitList(params) {
            return $request.get(url+'suit/querySuit', { params: params })
        },
        addSuit(params) {
            let r = !params.suitId ? 'addSuit' : 'updateSuit'
            return $request.post(`${url}suit/${r}`, params)
        },
        del(params) {
            return $request.post(url+'suit/deleteSuit', params)
        },
        allSuit(params) {
            return $request.get(url+'suit/querySuitByGame', { params })
        }
    },
    // 广告商
    advertisers: {
        queryAdvertiser(params) {
            return $request.post(`${url}`+'advertiser/queryAdvertiser', params)
        },
        addAdvertiser(params) {
            let r = !params.advertiserId?'addAdvertiser':'updateAdvertiser'
            return $request.post(`${url}advertiser/${r}`, params)
        },
        gdtAccount(params) {
            return $request.get(`${url}adAccount/queryAdAccount`, { params })
        },
        addAccount(params) {
            return $request.post(`${url}adAccount/addAuth`, params)
        },
        updateAlis(params) {
            return $request.post(`${url}adAccount/updateAlis`, params)
        },
        checkAuthInfo(accountId) {
            return $request.post(`${url}adAccount/checkAuthInfo`, { accountId })
        },
        reAuthAccount(accountId) {
            return $request.post(`${url}adAccount/reAuthAccount`, { accountId })
        }
    },
    sdk: {
        querySwitch(params) {
            return $request.get(`${url}`+'game/switch/querySwitch', { params })
        },
        updateSwitch(params) {
            return $request.post(`${url}`+'game/switch/updateSwitch', params )
        }
    },
    // 节假日
    calendar: {
        // 获取节假日及补班数据
        queryCalendar(params) {
            return $request.get(`${url}`+'calendar/queryCalendar', { params })
        },
        // 同步节假日和补班数据
        syncCalendar(params) {
            return $request.get(`${url}`+'calendar/syncCalendar', { params })
        },
        // 保存节假日和补班数据
        saveCalendar(params) {
            return $request.post(`${url}`+'calendar/saveCalendar', params )
        }
    },
    // 实名认证配置
    realname: {
        // 分页查询实名认证配置
        queryRealname(params) {
            return $request.get(`${url}`+'realname/queryRealname', { params })
        },
        // 保存实名配置
        saveRealname(params, isUpdate) {
            let r = isUpdate ? 'updateRealname' : 'addRealname'
            return $request.post(`${url}realname/${r}`, params)
        },
        // 保存实名配置参数
        updateParams(params) {
            return $request.post(`${url}realname/saveParams`, params, {format: 'json'})
        },
        // 删除实名服务
        delRealname(params) {
            return $request.post(`${url}realname/delRealname`, params)
        },
        // 获得所有实名认证服务列表，用于前端下拉框选择
        listSelect(params) {
            return $request.get(`${url}realname/listSelect`, params)
        }
    }
}
