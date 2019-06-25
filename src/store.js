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
      // console.log('mutation:setTwitterIcon', payload)
    },
    setOption (state, payload) {
      // console.log('setOption', state, payload)
      // payload.fontSize = parseFloat(payload.fontSize)
      state.option = payload
      // state.option.fontSize = parseFloat(state.option.fontSize)
      // state.option.numLine = parseInt(state.option.numLine)
    }
  },
  actions: {
    updateTwitterID ({ commit }, message) {
      // idを保存
      commit('setTwitterID', message)

      // ajaxでphp呼んで、twitterIDを入力して、icon,nameを取得し、storeに保存
      // const url = 'https://localhost/works/nafdas/api/getTwitterData.php'
      // const url = 'https://ce-ya.net/app/nafdas/api/getTwitterData.php'
      // console.log('env:', process.env)
      const url = process.env.APIURL_GET_TWITTER_DATA
      // const url = 'https://ce-ya.net/app/nafdas/api/getTwitterData.php'
      axios.get(url + '?sn=' + message).then( // usid: user screen id
        function (response) {
          console.log(response)
          if ('errors' in response.data) {
            // alert('エラーが発生しました：' + response.data.toString())
            alert('エラーが発生しました：' + JSON.stringify(response.data))
            return
          }
          // let resData = response.data.replace('\r\n', '')
          // 取得した文字列の先頭に改行が入ってるので削除して、配列に分割
          // let resAry = response.data.replace('\n', '').split(',')
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
