import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    twitterID: 'a'
  },
  getters: {
    // 単純にステートを返す
    twitterID (state) {
      return state.twitterID
    }
  },
  mutations: {
    setTwitterID (state, payload) {
      state.twitterID = payload
    }
  },
  actions: {
    updateTwitterID ({ commit }, message) {
      commit('setTwitterID', message)
    }
  }
})
