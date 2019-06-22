<template lang="pug">
  section.p-inputSection
    label(for="twID") TwitterID：
    input.__inputText#twID(type="text" placeholder="TwitterIDを入力" :value="twitterID" 
    v-on:change ="onChangeInput")
    button.__submit.c-btn 読込
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
    onChangeInput: function(evt){
      console.log('onChangeInput');
      let twitterID = evt.target.value;
      this.$store.dispatch('updateTwitterID',twitterID)
    }
  }
}
</script>

<style lang="scss" scoped>
.p-inputSection{
  margin: 1.5em 0;
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
