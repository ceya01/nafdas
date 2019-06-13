<template lang="pug">
  #app
    .l-inner
      header.l-header
        h1.p-title Nafdas
        span.p-subTitle ナフダス ー オフ会用の名札を簡単に作成・印刷するツール
      .p-inputTwIDWrap
        label(for="twID") TwitterID
        input.__input#twID(type="text" placeholder="TwitterIDを入力")
      
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
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

.l-inner{
  margin:0 auto;
  padding:0 1em;
  width: 100%;
  max-width: 800px;
}

</style>
