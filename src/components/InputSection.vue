<template lang="pug">
  section.p-inputSection
    label(for="twID") TwitterID:
    input.__inputText#twID(type="text" placeholder="（機能未実装）" :value="twitterID" v-on:change ="onChangeInput")
    //-p twID: {{twitterID}}
</template>

<script>
export default {
  name: 'InputSection',
  computed:{
    twitterID : function(){
      return this.$store.getters.twitterID
    }
  },methods:{
    onChangeInput: function(event){
      console.log('onChangeInput');
      this.$store.dispatch('updateTwitterID',event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.p-inputSection{
  >.__inputText{
    outline: 1px solid #666;
    padding: 0 0.5em;
    background-color: #fff;
  }
}
</style>
