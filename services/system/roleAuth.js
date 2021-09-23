/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2018-12-29 14:52:23
 * @LastEditTime: 2019-05-28 15:59:17
 * @LastEditors: menghongyuan
 */
import $request from '../../http'
const url = `${process.env.BASE_URL}/`

export default{
    // 添加/编辑账号
    addUser(params) {
        let r = !params.roleId ? 'addRole' : 'updateRole'
        return $request.post(`${url}role/${r}`, params)
    },
    // 角色列表
    userList(params) {
        return $request.get(url+'role/queryRoleList', {params: params})
    },
    // 删除角色
    roleDelete(params) {
        return $request.post(url+'role/deleteRole', params)
    },
    menuList(params) {
        return $request.get(url+'menu/queryMenuTreeAll', {params: params})
    },
    // 公共获取用户列表
    authUser(params) {
        return $request.get(url+'authUser/getUsersByRoleId', {params: params})
    },
    // 公共获取不在此ID下的用户列表
    getUsersByRoleIdNot(params) {
        return $request.get(url+'authUser/getUsersByRoleIdNot', {params: params})
    },
    // 添加账号
    addAccount(params) {
        return $request.post(url+'role/addAccount', params)
    },
    // 合作方角色列表
    partnerRoleList(params) {
        return $request.get(url+'partnerRole/queryRoleList', {params: params})
    },
    // 合作方添加编辑
    addPartnerUser(params) {
        let r = !params.roleId ? 'addRole' : 'updateRole'
        return $request.post(`${url}partnerRole/${r}`, params)
    },
    // 合作方添加账号
    addPartnerAccount(params) {
        return $request.post(url+'partnerRole/addAccount', params)
    },
    // 合作方角色删除
    partnerRoleDelete(params) {
        return $request.post(url+'partnerRole/deleteRole', params)
    },
    // 获取所有合作方公司
    queryPartnerAll(params) {
        return $request.get(url+'partner/queryPartnerAll', {params: params})
    }
}
