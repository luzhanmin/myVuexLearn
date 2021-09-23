/**
 * @description 字符串工具类
 * @author  chencz
 * @date    2020-12-21
 */
 var StringUtils = {
    // 判断文本为空
    isEmpty(text) {
        return !text && text !== 0
    },
    // 判断文本不为空
    isNotEmpty(text) {
        return !this.isEmpty(text)
    }
}
export default StringUtils
