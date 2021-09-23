export default {
    data() {
        return {
            total: 0,
            searchParams: {
                pageNum: 1,
                pageSize: 10
            }
        }
    },
    components: {
        Pagination: () => import('@/components/pagination')
    },
    methods: {
        handleSizeChange(val) {
            this.searchParams.pageSize = val
            this.fetchData()
        },
        handleCurrentChange(val) {
            this.searchParams.pageNum = val
            this.fetchData()
        }
    }
}
