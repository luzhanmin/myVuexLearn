/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-05-20 16:18:46
 * @LastEditTime: 2019-08-20 10:34:35
 * @LastEditors: luoxun
 */
import $request from '../../http'

const url = `${process.env.BASE_URL}/`

export default {
    // 部门
    deptList() {
        return $request.get(url+'dept/query')
    },
    addDept(params) {
        return $request.post(url+'dept/add', params)
    },
    updateDept(params) {
        return $request.post(url+'dept/update', params)
    },
    deleteDept(deptId, deptName) {
        return $request.post(url+'dept/delete', { deptId, deptName })
    },
    linkageDept(deptId) {
        return $request.post(url+'dept/linkage', { deptId })
    },
    // 账号
    operateAccount(userId, statu, account) {
        let r = statu ? 'unlockAccount' : 'lockAccount'
        return $request.post(`${url}authUser/${r}`, { userId, account })
    },
    addUser(params) {
        let r = !params.userId ? 'register' : 'update'
        return $request.post(`${url}authUser/${r}`, params)
    },
    // 通过appId获取子广告商列表
    getSubAdTree(params) {
        return $request.post(url+'authUser/getSubAdTree', params)
    },
    deleteUser(userId, account) {
        return $request.post(url+'authUser/delete', { userId, account })
    },
    userList(params) {
        return $request.get(url+'authUser/queryList', {params})
    },
    resetPwd(userId, account) {
        return $request.post(url+'authUser/resetPwd', { userId, account })
    },
    setGovernor(userId, account) {
        return $request.post(url+'authUser/setGovernor', { userId, account })
    },
    // 个人信息
    getUserInfo() {
        return $request.get(url+'authUser/getUserInfo')
    },
    // 修改密码
    updatePwd(params) {
        return $request.post(url+'authUser/updatePwd', params)
    },
    // 菜单
    deleteMenu(menuId) {
        return $request.post(url+'menu/deleteMenu', { menuId })
    },
    submitMenu(params) {
        let r = !params.menuId ? 'addMenu' : 'updateMenu'
        return $request.post(`${url}menu/${r}`, params)
    },
    menuTables(params) {
        return $request.get(url+'menu/queryMenu', { params })
    },
    menuTree() {
        return $request.get(url+'menu/queryMenuTree')
    },
    removeUserFromRole(params) {
        return $request.post(url+'authUser/removeUserFromRole', params)
    }
}
