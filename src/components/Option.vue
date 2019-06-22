<template lang="pug">
  section.p-option
    h3 オプション
    input.__inputText(type="text" placeholder="TwitterIDを入力")
</template>

<script>
export default {
  name: 'Option',
  computed:{
    twitterID : function(){
      return this.$store.getters.twitterID
    }
  },methods:{
    onChangeInput: function(event){
      console.log('onChangeInput');
    }
  }
}
</script>

<style lang="scss" scoped>
.p-option{
  >.__inputText{
    outline: 1px solid #666;
    padding: 0 0.5em;
    background-color: #fff;
  }
  @media print{
    display: none;
  }
}
</style>
