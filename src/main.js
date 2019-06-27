// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

// Font Awesome のメインファイルを import

import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
// 使用するカテゴリーのファイルを import
// import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
// import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

// icomoonのフォントアイコンをimport
// from: https://nelog.jp/web-service-icon-fonts
import '@/assets/icomoon/style.css'

// import router from './router'
/* グローバルcss */
import '@/assets/scss/mixin.scss'
import '@/assets/scss/foundation.scss'
import '@/assets/scss/components.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // router,
  components: { App },
  template: '<App/>'
})
