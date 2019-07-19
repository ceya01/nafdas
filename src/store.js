import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    twitterID: '',
    twitterName: '',
    twitterIcon: '',
    option: {
      fontSize: 8,
      fontName: 'デフォルト',
      numLine: 1,
      isAddDarkTheme: true
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
      let newOption = this.getters.option

      axios.get(url + '?sn=' + message).then( // sn: screen name
        function (response) {
          // console.log(response)
          if ('errors' in response.data) {
            alert('エラーが発生しました：' + JSON.stringify(response.data))
            return
          }

          let name = response.data.name
          let imageURL = response.data.profile_image_url_https
          imageURL = imageURL.replace(/_normal./, '.')
          commit('setTwitterName', name)
          commit('setTwitterIcon', imageURL)

          // 名前文字数に合わせてフォントサイズを変更
          let numBytes = getStrBytes(name)

          if (numBytes <= 4) {
            newOption.fontSize = 24
            newOption.numLine = 1
          } else if (numBytes <= 12) {
            newOption.fontSize = Math.ceil(96 / numBytes)
            newOption.numLine = 1
          } else {
            newOption.fontSize = 8
            newOption.numLine = 2
          }
          commit('setOption', newOption)
        }).catch(
        function (error) {
          // handle error
          alert('エラーが発生しました：' + error)
        }).finally(
        function () {
          // console.log('finally')
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

// 半角を1文字、全角を2文字として長さを計算
function getStrBytes (str) {
  var result = 0
  for (var i = 0; i < str.length; i++) {
    var chr = str.charCodeAt(i)
    if ((chr >= 0x00 && chr < 0x81) ||
       (chr === 0xf8f0) ||
       (chr >= 0xff61 && chr < 0xffa0) ||
       (chr >= 0xf8f1 && chr < 0xf8f4)) {
      // 半角文字の場合は1.5 を加算
      result += 1.5
    } else {
      // それ以外の文字の場合は2を加算
      result += 2
    }
  }
  // 結果を返す
  return result
}
