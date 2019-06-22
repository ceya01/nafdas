<template lang="pug">
  section.p-inputSection
    label(for="twID") TwitterID：
    input.__inputText#twID(type="text" placeholder="TwitterIDを入力" v-model="twitterID" 
    @change ="onChangeInput")
    button.__btnLoad.c-btn(@click="onClickLoad" :disabled="isButtonDisabled") 読込
    //-p twID: {{twitterID}}
</template>

<script>
export default {
  name: 'InputSection',
  computed:{
    twitterID : {
      get (){
        return this.$store.getters.twitterID
      },
      set (value){
        this.$store.commit('setTwitterID', value)
      }
    },
    isButtonDisabled: function(){
       return !this.twitterID || !this.twitterID.match(/^[A-Za-z0-9_]*$/)
    }
  },methods:{
    onChangeInput: function(evt){
      //console.log('onChangeInput');
      // let twitterID = evt.target.value;
      // this.$store.dispatch('updateTwitterID',twitterID)
    },
    onClickLoad: function(evt){
      //console.log('onClickLoad');
      let twitterID = this.twitterID;
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
    margin-right: 1em;
    background-color: #fff;
  }
  >.__btnLoad{
    
  }
  @media print{
    display: none;
  }
}
</style>
