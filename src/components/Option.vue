<template lang="pug">
  section.p-option
    h3.__heading オプション
    div.__itemList
      div.c-item.__fontSize
        label.c-label.__labelFontSize(for="fontSize") 文字サイズ
        input.c-input.__inputFontSize#fontSize(type="number" placeholder="文字サイズを指定" value="6")
      div.c-item.__fontName
        label.c-label.__labelFontName(for="fontName") フォント
        input.c-input.__inputFontName#fontName(type="text" placeholder="フォント名を指定")
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
  text-align: left;
  max-width:140mm;
  margin:0 auto 1em;
  >.__heading{
    margin-bottom: 0.5em;
  }
  >.__itemList{
    display: flex;
    >.c-item{
      text-align: left;
      margin-bottom:0.5em;
      font-size:14px;
      //min-width: 50%;
      padding-right: 1em;
      >.c-label{
        display: inline-block;
        margin-bottom: 0.2em;
      }
      >.c-input{
        outline: 1px solid #999;
        padding: 0 0.5em;
        background-color: #fff;
      }
    }
    >.__fontSize{
      flex-grow: 1;
    }
    >.__fontName{
      flex-grow: 2;
    }
  }
  @media print{
    display: none;
  }
}
</style>
