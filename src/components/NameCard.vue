<template lang="pug">
section.p-nameCard
  .__iconBox
    img.__icon(src="@/assets/avatar_default_150x.png")
  .__nameBox
    input.__name(type="text" value="なまえをいれてください") 
  .__idBox
    input.__id(type="text" value="twitter ID") 
</template>

<script>
export default {
  name: 'NameCard',
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    } 
  }
}
</script>

<style lang="scss" scoped>
.l-header{
  background-color: slategrey;
  color: #FFF;
  padding:2em 0;
  width: 100%;
}
</style>