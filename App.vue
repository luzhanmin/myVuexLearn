<!--
 * @Description:
 * @Author: menghongyuan
 * @Date: 2018-10-31 17:33:27
 * @LastEditTime: 2019-08-22 16:45:16
 * @LastEditors: menghongyuan
 -->
<template>
    <div id="container" @click="hidePanle">
        <router-view v-if="isRouterAlive"/>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isRouterAlive: true
            }
        },
        provide() {
            return {
                reload: this.reload,
                getDayMin: this.getDayMin,
                getDayMax: this.getDayMax,
                checkHasAppId: this.getAppId,
                errorImg: 'this.src="' + require('@/assets/images/error.png') + '"'
            }
        },
        methods: {
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => {
                    this.isRouterAlive = true
                })
            },
            getDayMin() {
                return new Date(new Date().toLocaleDateString()).getTime()
            },
            getDayMax() {
                return new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1
            },
            getAppId() {
                let appId = this.$storage('xa_appId')
                if (!appId) {
                    this.$router.push({name: 'checkGame'})
                }
                return appId || ''
            },
            hidePanle() {
                this.eventBus.$emit('hidePanle', false)
            }
        }
    }
</script>
<style lang="stylus">
#container
    height 100%

.el-loading-spinner i
    font-size 30px
</style>
