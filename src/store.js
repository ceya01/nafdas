import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    twitterID: '',
    twitterName: '',
    twitterIcon: ''
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
    }
  },
  actions: {
    updateTwitterID ({ commit }, message) {
      // idを保存
      // this.state.twitterID = message //←これでも動くが、原則非同期更新にすべき
      commit('setTwitterID', message)

      // ajaxでphp呼んで、twitterIDを入力して、icon,nameを取得し、storeに保存
      // const url = 'https://localhost/works/nafdas/api/getTwitterData.php'
      // const url = 'https://ce-ya.net/app/nafdas/api/getTwitterData.php'
      // console.log('env:', process.env)
      const url = process.env.APIURL_GET_TWITTER_DATA

      axios.get(url + '?sn=' + message).then( // usid: user screen id
        function (response) {
          console.log(response)
          if (response.data.match(/error/)) {
            return
          }
          // let resData = response.data.replace('\r\n', '')
          // 取得した文字列の先頭に改行が入ってるので削除して、配列に分割
          let resAry = response.data.replace('\r\n', '').split(',')
          commit('setTwitterName', resAry[0])
          commit('setTwitterIcon', resAry[1])
          console.log(resAry)
        }).catch(
        function (error) {
          // handle error
          console.log(error)
        }).finally(
        function () {
          console.log('finally')
        })
    },
    updateIcon ({ commit }, message) {
      commit('setTwitterIcon', message)
    }
  }
})
