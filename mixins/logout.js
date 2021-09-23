/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-04-17 16:51:19
 * @LastEditTime: 2019-06-03 11:01:19
 * @LastEditors: menghongyuan
 */
export default {
    methods: {
        async logout() {
            await this.$http.Login.logout()
            this.$router.push({name: 'login'})
        }
    }
}
