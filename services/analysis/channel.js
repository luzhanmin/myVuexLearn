import $request from '../../http'

const url = `${process.env.ANALYSIS_URL}/`

export default {
    paymentNorm(params) {
        return $request.post(url+'api/channel/paymentNorm', params, { format: 'json' })
    },
    paymentTrend(params) {
        return $request.post(url+'api/channel/paymentTrend', params, { format: 'json' })
    },
    newlyAddLTV(params) {
        return $request.post(url+'api/channel/newlyAddLTV', params, { format: 'json' })
    },
    newlyAddNorm(params) {
        return $request.post(url+'api/channel/newlyAddNorm', params, { format: 'json' })
    },
    newlyAddTrend(params) {
        return $request.post(url+'api/channel/newlyAddTrend', params, { format: 'json' })
    },
    retainNorm(params) {
        return $request.post(url+'api/channel/retainNorm', params, { format: 'json' })
    }
}
