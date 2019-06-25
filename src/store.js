import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    twitterID: '',
    twitterName: '',
    twitterIcon: '',
    option: {
      fontSize: 8,
      fontName: 'デフォルト',
      numLine: 1
    }
  },
  getters: {
    twitterID (state) {
      return state.twitterID
    },
    twitterName (state) {
      return state.twitterName
    },
    twitterIcon (state) {
      return state.twitterIcon
    },
    option (state) {
      return state.option
    }
  },
  mutations: {
    setTwitterID (state, payload) {
      state.twitterID = payload
    },
    setTwitterName (state, payload) {
      state.twitterName = payload
    },
    setTwitterIcon (state, payload) {
      state.twitterIcon = payload
    },
    setOption (state, payload) {
      state.option = payload
    }
  },
  actions: {
    updateTwitterID ({ commit }, message) {
      // idを保存
      commit('setTwitterID', message)
      // ajaxでphp呼んで、twitterIDを入力して、icon,nameを取得し、storeに保存
      const url = process.env.APIURL_GET_TWITTER_DATA
      axios.get(url + '?sn=' + message).then( // usid: user screen id
        function (response) {
          console.log(response)
          if ('errors' in response.data) {
            // alert('エラーが発生しました：' + response.data.toString())
            alert('エラーが発生しました：' + JSON.stringify(response.data))
            return
          }
          let name = response.data.name
          let imageURL = response.data.profile_image_url_https
          imageURL = imageURL.replace(/_normal./, '.')
          commit('setTwitterName', name)
          commit('setTwitterIcon', imageURL)
          // console.log(resAry)
        }).catch(
        function (error) {
          // handle error
          console.log(error)
        }).finally(
        function () {
          console.log('finally')
        })
    },
    updateTwitterIcon ({ commit }, message) {
      commit('setTwitterIcon', message)
    },
    updateOption ({ commit }, message) {
      commit('setOption', message)
    }
  }
})
