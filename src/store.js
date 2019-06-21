import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    twitterID: '',
    twitterName: '',
    twitterIcon: ''
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
      // this.state.twitterID = message //これでも動くが、原則非同期更新にすべき
      commit('setTwitterID', message)
    }
  }
})
