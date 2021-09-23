/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2018-12-25 10:34:10
 * @LastEditTime: 2019-05-28 15:52:45
 * @LastEditors: menghongyuan
 */
import $request from '../../http'
const url = `${process.env.BASE_URL}/`

export default {
    // 菜单
    deleteMenu(menuId, menuName) {
        return $request.post(url+'menu/deleteMenu', { menuId, menuName })
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
    }
}
