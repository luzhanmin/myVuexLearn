/*
 * @Description:
 * @Author: menghongyuan
 * @Date: 2019-01-04 10:59:39
 * @LastEditTime: 2019-05-30 14:31:25
 * @LastEditors: menghongyuan
 */
import $http from '../../http'
const url = `${process.env.BASE_URL}/`
const state = {
    channels: [],
    games: [],
    advers: []
}

const getters = {
    getChannels: (state) => state.channels,
    getGames: (state) => state.games,
    getAdvers: (state) => state.advers
}

const mutations = {
    setChannels(state, data) {
        state.channels = data
    },
    setGames(state, data) {
        state.games = data
    },
    setAdver(state, data) {
        state.advers = data
    }
}

const actions = {
    async actChannels(state) {
        let list = (await $http.get(url+'channel/queryChannels')).content
        state.commit('setChannels', list)
    },
    async actGames(state) {
        let list = (await $http.get(url+'game/queryGames', {
            params: {
                pageNum: 1,
                pageSize: 100
            }
        })).content.list
        state.commit('setGames', list)
    },
    async actAdver(state) {
        let list = (await $http.post(`${url}advertiser/getAllAdvertiser`)).content
        state.commit('setAdver', list)
    }
}

export default {
    state, getters, mutations, actions
}
