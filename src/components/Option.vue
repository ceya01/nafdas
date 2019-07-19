<template lang="pug">
  section.p-option
    h3.__heading オプション
    div.__itemList
      div.c-item.__fontSize
        label.c-label.__labelFontSize(for="fontSize") 文字サイズ
        input.c-input.__inputFontSize#fontSize(type="number" placeholder="文字サイズを指定" step="0.1" min="1" max="40" v-model="fontSize" @change="onChangeFontSize")
      div.c-item.__numLine
        label.c-label.__labelNumLine(for="numLine") 行数
        input.c-input.__inputFontName#numLine(type="number" placeholder="行数" min="1" max="3" v-model="numLine"  @change="onChangeNumLine")
      div.c-item.__fontName
        label.c-label.__labelFontName(for="fontName") フォント
        input.c-input.__inputFontName#fontName(type="text" placeholder="フォント名を指定" v-model="option.fontName")
      div.c-item.__checkBoxList
        input#isAddDarkTheme(type="checkbox" v-model="option.isAddDarkTheme")
        label.c-label.__labelIsAddDarkTheme(for="isAddDarkTheme") ダークテーマ名札も印刷する（Chromeのみ対応）
</template>

<script>
export default {
  name: "Option",
  computed: {
    option: {
      get() {
        return this.$store.getters.option;
      },
      set(value) {
        this.$store.commit("setOption", value);
      }
    },
    fontSize: {
      get() {
        return this.option.fontSize;
      },
      set(value) {
        if (value < 4 || value > 40) return
        this.setOptionProperty('fontSize',value)
      }
    },
    numLine: {
      get() {
        return this.option.numLine;
      },
      set(value) {
        if (value < 1 || value > 3) return
        this.setOptionProperty('numLine',value)
      }
    }
  },

  methods: {
    onChangeFontSize: function(evt) {
      let newFontSize = evt.target.value
      newFontSize = newFontSize > 4 ? newFontSize : 4
      newFontSize = newFontSize < 40 ? newFontSize : 40
      this.fontSize = newFontSize
    },
    onChangeNumLine: function(evt) {
      let newNumLine = evt.target.value
      newNumLine = newNumLine > 1 ? newNumLine : 1
      newNumLine = newNumLine < 3 ? newNumLine : 3
      this.numLine = newNumLine
    },
    setOptionProperty(key,value){
      let newOption = this.option;
      newOption[key] = value;
      this.option = newOption;
    }
  }
};
</script>

<style lang="scss" scoped>
.p-option {
  text-align: left;
  max-width: 140mm;
  margin: 0 auto 1em;
  > .__heading {
    margin-bottom: 0.5em;
  }
  > .__itemList {
    display: flex;
    flex-wrap: wrap;
    > .c-item {
      text-align: left;
      margin-bottom: 1em;
      font-size: 14px;
      //min-width: 50%;
      padding-right: 1em;
      > .c-label {
        display: block;
        margin-bottom: 0.2em;
      }
      > .c-input {
        outline: 1px solid #999;
        padding: 0.3em;
        background-color: #fff;
        width: 100%;
      }
    }
    > .__fontSize {
      flex: 0 0 50%;
    }
    > .__numLine {
      flex: 0 0 50%;
    }
    > .__fontName {
      flex: 0 0 100%;
    }
    > .__checkBoxList{
      > .c-label{
        display: inline;
        margin-left:0.5em ;
      }
    }
  }
  @media print {
    display: none;
  }
}
</style>
