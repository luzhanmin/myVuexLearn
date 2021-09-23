import $request from '../../http'

const url = `${process.env.ANALYSIS_URL}/`

export default {
    firstMonthCharge(params) {
        return $request.post(url+'payment/first/month/charge', params, { format: 'json' })
    },
    firstWeekCharge(params) {
        return $request.post(url+'payment/first/week/charge', params, { format: 'json' })
    },
    firstDayCharge(params) {
        return $request.post(url+'payment/first/day/charge', params, { format: 'json' })
    },
    firstChargeLevel(params) {
        return $request.post(url+'payment/first/charge/level', params, { format: 'json' })
    },
    firstChargeDirection(params) {
        return $request.post(url+'payment/first/charge/direction', params, { format: 'json' })
    },
    ltv(params) {
        return $request.post(url+'payment/ltv', params, { format: 'json' })
    },
    analysisAll(params) {
        return $request.post(url+'payment/analysis/all', params, { format: 'json' })
    },
    analysisNew(params) {
        return $request.post(url+'payment/analysis/new', params, { format: 'json' })
    },
    analysisOld(params) {
        return $request.post(url+'payment/analysis/old', params, { format: 'json' })
    },
    summationTotal(params) {
        return $request.post(url+'payment/analysis/summationTotal', params, { format: 'json' })
    },
    summationMoney(params) {
        return $request.post(url+'payment/analysis/summationMoney', params, { format: 'json' })
    },
    rateByDay(params) {
        return $request.post(`${url}payment/analysis/rateByDay`, params, { format: 'json' })
    },
    rateByWeek(params) {
        return $request.post(`${url}payment/analysis/rateByWeek`, params, { format: 'json' })
    },
    rateByMonth(params) {
        return $request.post(`${url}payment/analysis/rateByMonth`, params, { format: 'json' })
    }
}
