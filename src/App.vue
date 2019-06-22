
<template lang="pug">
#app
  header.l-header
    HeaderInner
  main.l-main
    InputSection
    NameCard
    Option
    OutPutSection
    Description
  footer.l-footer 
    span.__text (C) ceya-net
    
</template>

<script>
import HeaderInner from "@/components/HeaderInner"
import InputSection from "@/components/InputSection"
import NameCard from "@/components/NameCard"
import Option from "@/components/Option"
import OutPutSection from "@/components/OutPutSection"
import Description from "@/components/Description"
import "ress"

export default {
  name: "App",
  components: {
    HeaderInner,
    InputSection,
    NameCard,
    Option,
    OutPutSection,
    Description
  }
}
 
//console.log("store:", $store)
</script>

<style lang="scss" scoped>
//////////////////////////////////////////////////
// foundation
//////////////////////////////////////////////////

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: "游ゴシック Medium", YuGothic, YuGothicM,
    "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo,
    sans-serif;
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
$bgDark: slategrey;
.l-header {
  background-color: $bgDark;
  color: #fff;
  padding: 1.5em 0;
  width: 100%;
  box-shadow:0 2px 5px rgba(0,0,0,0.26);
  @media print{
    display: none;
  }
}
.l-main {
  margin: 0 auto;
  padding: 0 1em;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
}
.l-footer {
  background-color: $bgDark;
  color: #fff;
  padding: 1em 0;
  bottom: 0;
  width: 100%;
  @media print{
    display: none;
  }
}
</style>
