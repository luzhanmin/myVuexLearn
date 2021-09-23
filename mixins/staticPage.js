/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-04-01 17:15:47
 * @LastEditTime: 2019-07-15 20:13:50
 * @LastEditors: menghongyuan
 */
import Echarts from '@/components/echarts';
export default {
    data() {
        return {
            tableData: [],
            intData: [],
            total: 0,
            pageNum: 1,
            pageSize: 5,
            initParams: {
                project: this.$storage('xa_projectName'),
                appId: this.$storage('xa_appId')
            }
        }
    },
    components: {
        Echarts,
        Mbox: () => import('@/components/mBox'),
        Pagination: () => import('@/components/pagination')
    },
    methods: {
        intDataFn(val=1) {
            this.total = this.tableData.length
            this.pageNum = val
            this.intData = this.tableData.slice((this.pageNum-1)*this.pageSize, this.pageNum*this.pageSize)
        },
        handleSizeChange(val) {
            this.pageSize = val
            this.intDataFn()
        },
        handleCurrentChange(val) {
            this.intDataFn(val)
        }
    },
    mounted() {
        if (!this.initParams.project) {
            this.$confirm('没有选择相关游戏, 重新选择游戏?', '提示', {
                confirmButtonText: '确定',
                type: 'warning'
            }).then(() => {
                this.$router.push({name: 'checkGame'})
            })
        }
    }
}
