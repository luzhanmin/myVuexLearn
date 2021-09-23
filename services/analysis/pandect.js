import $request from '../../http'

const url = `${process.env.ANALYSIS_URL}/`

export default {
    activationAndRegisterRole(params) {
        return $request.post(url + 'api/newlyAdd/activationAndRegisterRole', params, {format: 'json'})
    },
    pandectPayment(params) {
        return $request.post(url+'overview/pandect/payment', params, { format: 'json' })
    }
}
