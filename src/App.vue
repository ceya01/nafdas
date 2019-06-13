<template lang="pug">
  #app
    .l-inner
      header.l-header
        h1.p-headtitle Nafdas
        span.p-subTitle ナフダス ー オフ会用の名札を簡単に作成・印刷するツール
      main.l-main
        .p-inputTwID-
          label(for="twID") TwitterID
          input.__inputText#twID(type="text" placeholder="TwitterIDを入力")
        .p-nameTag
          .__iconBox
            img.__icon(src="./assets/avatar_default_150x.png")
          .__nameBox
            input.__name(type="text" value="なまえをいれてください") 
          .__idBox
            input.__id(type="text" value="twitter ID") 
        .p-buttonArea
          button.c-btn.p-btnNetPrint ネットプリント
          button.c-btn.p-btnSave 画像を保存
        .p-howto
          h2.__title つかいかた
          p TwitterIDを入力するだけで名札が作れます！
      footer.l-footer
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
//////////////////////////////////////////////////
// foundation
//////////////////////////////////////////////////
body{
  //反映されない
  margin: 0;
  padding: 0;
}
#app{
 // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family:"游ゴシック Medium",YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro",メイリオ,Meiryo,sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin: 0;
  padding: 0;
}

//////////////////////////////////////////////////
// Layout
//////////////////////////////////////////////////
.l-inner{
  margin:0 auto;
  padding:0 1em;
  width: 100%;
  max-width: 800px;
}

//////////////////////////////////////////////////
// Component
//////////////////////////////////////////////////



//////////////////////////////////////////////////
// Project
//////////////////////////////////////////////////



</style>
