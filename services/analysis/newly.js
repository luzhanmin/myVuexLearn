import $request from '../../http'

const url = `${process.env.ANALYSIS_URL}/`

export default {
    activationAndRegisterRole(params) {
        return $request.post(url + 'api/newlyAdd/activationAndRegisterRole', params, {format: 'json'})
    },
    timeAnalysis(params) {
        return $request.post(url + 'api/newlyAdd/timeAnalysis', params, {format: 'json'})
    },
    channelDistribution(params) {
        return $request.post(url + 'api/newlyAdd/channelDistribution', params, {format: 'json'})
    },
    serverDistribution(params) {
        return $request.post(url + 'api/newlyAdd/serverDistribution', params, {format: 'json'})
    },
    activeAnalyse(params) {
        return $request.post(url + 'api/newlyAdd/activeAnalyse', params, {format: 'json'})
    },
    effectiveRatio(params) {
        return $request.post(url + 'api/newlyAdd/effectiveRatio', params, {format: 'json'})
    }
}
