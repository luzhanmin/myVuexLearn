/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-05-15 17:31:42
 * @LastEditTime: 2019-06-10 10:08:41
 * @LastEditors: menghongyuan
 */
import $request from '../../http'
const url = `${process.env.BASE_URL}/`

export default {
    realTime(params) {
        return $request.post(url+'dataOverview/realTime', params, {format: 'json'})
    },
    realDataDownload(url, param, fileName) {
        $request.post(url, param, {format: 'json', 'responseType': 'blob'}).then(res => {
            const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
            const downloadElement = document.createElement('a')
            const href = window.URL.createObjectURL(blob)
            downloadElement.href = href
            downloadElement.download = fileName
            document.body.appendChild(downloadElement)
            downloadElement.click()
            document.body.removeChild(downloadElement) // 下载完成移除元素
            window.URL.revokeObjectURL(href) // 释放掉blob对象
        })
    },
    overview(params) {
        return $request.post(url+'dataOverview/overview', params, {format: 'json'})
    },
    details(params) {
        return $request.post(url+'dataOverview/details', params, {format: 'json'})
    }
}
