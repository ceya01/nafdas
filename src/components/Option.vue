<template lang="pug">
  section.p-option
    h3.__heading オプション
    div.__itemList
      div.c-item.__fontSize
        label.c-label.__labelFontSize(for="fontSize") 文字サイズ
        input.c-input.__inputFontSize#fontSize(type="number" placeholder="文字サイズを指定" step="0.1" min="1" max="80" v-model="option.fontSize" @change="onChangeInput")
      div.c-item.__numLine
        label.c-label.__labelNumLine(for="numLine") 行数
        input.c-input.__inputFontName#fontName(type="number" placeholder="行数" min="1" max="3" v-model="option.numLine")
      div.c-item.__fontName
        label.c-label.__labelFontName(for="fontName") フォント
        input.c-input.__inputFontName#fontName(type="text" placeholder="フォント名を指定" v-model="option.fontName")
</template>

<script>
export default {
  name: 'Option',
  computed:{
    option :{
      get (){
        return this.$store.getters.option
      },
      set (value){
        this.$store.commit('setOption', value)
      }
    }
  },
  methods:{
    onChangeInput: function(evt){
      //console.log('onChangeInput',evt.target.value,this.$store.getters.option.fontSize,this.vmFontSize);

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
    flex-wrap:wrap;
    >.c-item{
      text-align: left;
      margin-bottom:1em;
      font-size:14px;
      //min-width: 50%;
      padding-right: 1em;
      >.c-label{
        display: block;
        margin-bottom: 0.2em;
      }
      >.c-input{
        outline: 1px solid #999;
        padding: 0.3em;
        background-color: #fff;
        width: 100%;
      }
    }
    >.__fontSize{
      flex: 0 0 50%;
    }
    >.__numLine{
      flex: 0 0 50%;
    }
    >.__fontName{
      flex: 0 0 100%;
    }
    
  }
  @media print{
    display: none;
  }
}
</style>
