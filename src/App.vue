<template lang="pug">
#app
  header.l-header
    HeaderInner
  main.l-main
    InputSection
    NameCard
    OutPutSection
    Description
  footer.l-footer
    span.__text (C) ceya-net
    
</template>

<script>
import NameCard from '@/components/NameCard'
import HeaderInner from '@/components/HeaderInner'
import InputSection from '@/components/InputSection'
import OutPutSection from '@/components/OutPutSection'
import Description from '@/components/Description'
import 'ress'

export default {
  name: 'App',
  components: {
    NameCard,HeaderInner,InputSection,OutPutSection,Description
  }
}
</script>

<style lang="scss" scoped>
//////////////////////////////////////////////////
// foundation
//////////////////////////////////////////////////

//ここに書くと反映されない
// →そもそもコンポーネントの中しかスタイルつかえないっぽい
body{
  background-color: antiquewhite;
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
$bgDark:slategrey;
.l-header{
  background-color: $bgDark;
  color: #FFF;
  padding:1.5em 0;
  width: 100%;
}
.l-main{
  margin:0 auto;
  padding:1em;
  width: 100%;
  max-width: 800px;
}
.l-footer{
  background-color: $bgDark;
  color: #FFF;
  padding: 1em 0;
  bottom:0;
  width: 100%;
}
</style>
