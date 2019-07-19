<template lang="pug">
.l-footer__inner
   span.__text なふだす | © 2019- <a href="https://ce-ya.net" target="_blank">ceya-net</a>
</template>

<script>
export default {
  name: 'FooterInner',
    data () {
    return {
       
    } 
  }
}
</script>

<style lang="scss" scoped>
.l-footer__inner{
  >.__text{
    color: #fff;  
    >a{
      color: #fff;
    }
  }
}
</style>
