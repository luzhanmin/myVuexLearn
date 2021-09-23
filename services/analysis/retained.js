import $request from '../../http'

const url = `${process.env.ANALYSIS_URL}/`

export default {
    newlyAddRetain(params) {
        return $request.post(url + 'api/retain/newlyAddRetain', params, {format: 'json'})
    },
    wholeRetain(params) {
        return $request.post(url + 'api/retain/wholeRetain', params, {format: 'json'})
    },
    paymentRetain(params) {
        return $request.post(url + 'api/retain/paymentRetain', params, {format: 'json'})
    },
    newlyPaymentSegmentRetain(params) {
        return $request.post(url + 'api/retain/newlyPaymentSegmentRetain', params, {format: 'json'})
    }
}
