<template lang="pug">
section.p-nameCard.--dark
  .__bg
  .__iconBox
    img.__icon( src="@/assets/avatar_default_150sq.png" v-if="twitterIcon===''")
    img.__icon( :src="twitterIcon"  v-if="twitterIcon!==''")
    input.__inputImg(type="file" v-on:change="onSelectFile")
  .__nameBox(:style="styleNameBox")
    textarea.__textareaName.c-inCardInput(
        type="text" placeholder="（名前）" maxlength="50" 
        v-model="twitterName" :style="styleName"
      ) 
  .__idBox
    label.__labelID(for="twIDinCard") @ 
    input.__inputID.c-inCardInput#twIDinCard(type="text" placeholder="(twitter ID)" :value="twitterID") 
</template>

<script>
export default {
  name: 'NameCard',
    data () {
    return {
      // styleName: {
      //   fontSize: this.option.fontSize+'mm'
      // }
    }
  },
  methods: {
    onSelectFile(e){
      console.log("onSelectFile:",e);
      let files = e.target.files || e.dataTransfer.files;
      this.setIcon(files[0]);
    },
    setIcon(file){
      console.log("setIcon:",file);
      let render = new FileReader();
      render.onload= (e)=>{
      console.log("setIcon> render.onload:",e);
        // this.uploadedImage = e.target.result;
        this.$store.dispatch('updateTwitterIcon',e.target.result)
        // this.$store.commit('setTwitterIcon',e.target.result) //これでも代用可能
        // console.log("after diapatch/commit",d,c);
      };
      render.readAsDataURL(file);
    }
  },
  computed:{
    twitterID : function(){
      return this.$store.getters.twitterID
    },
    twitterName : {
      get (){
        return this.$store.getters.twitterName
      },
      set (value){
        this.$store.commit('setTwitterName', value)
      }
    },
    twitterIcon : function(){
      return this.$store.getters.twitterIcon
    },
    option : function(){
      return this.$store.getters.option
    },
    fontSize:function(){
      return parseFloat(this.option.fontSize);
    },
    numLine:function(){
      return parseInt(this.option.numLine);
    },
    styleName: function(){
      return { 
        fontSize: this.fontSize+'mm',
        fontFamily: "'"+this.option.fontName+"'",
       // height: this.nameTextareaHeight +'mm',
        lineHeight: this.fontSize +2+'mm'
      }
    },
    styleNameBox:function(){
      let _top = (55-this.nameTextareaHeight) /2 - 2;
      _top = _top > 0 ? _top : 0;
      return { 
        top: _top +'mm',
        height: this.nameTextareaHeight +'mm',
      }
      // let _top =  (55-this.nameTextareaHeight) /2;
      // _top = _top > 0 ? _top : 0;
      // return { 
      //   top: _top +'mm',
      //   height: this.nameTextareaHeight +'mm'
      // }
    },
    nameTextareaHeight:function(){
      return (this.fontSize *this.numLine)+2*(this.numLine);
    }
  }
}



console.log("namecard");


</script>

<style lang="scss" scoped>
//名札サイズは 91x55 mm 想定
$cardWidth: 91mm; // 300px;
$cardHeight:55mm; // 180px;

//各パーツのサイズ、配置
$iconWidth:24mm;  
$iconHeight:$iconWidth; // 正方形なので heightも同じ値
$iconX:4mm;
$iconY:($cardHeight - $iconHeight) / 2 - 4mm;

$nameBoxWidth:57mm;
$nameBoxHeight:24mm;
$nameBoxX:30mm;
$nameBoxY:($cardHeight - $nameBoxHeight) / 2 - 4mm;

$idBoxWidth:$cardWidth - 4mm;
$idBoxHeight:10mm;
$idBoxX:4mm;
$idBoxY:$cardHeight - $idBoxHeight - 4mm;

.p-nameCard{
  width:$cardWidth;
  height:$cardHeight;

  background-color: #fff;
  border: #aaa dashed 1px;
  margin: 1em auto;
  position: relative;
  z-index: 10;
  
  .c-inCardInput{
    width:100%;
  }
  >.__bg{
    background: #FFF;
    width: 100%;
    height: 100%;
    z-index: 20;
  }
  >.__iconBox{
    border-radius:50%;
    position: absolute;
    width:$iconWidth;
    height:$iconHeight;
    left:$iconX;
    top:$iconY;
    overflow: hidden;
    z-index: 50;
    >.__icon,>.__inputImg{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: auto;
      //height: 100%;
    }
    >.__icon{
    }
    >.__inputImg{
      height: 100%;
      opacity: 0;
    }
  }
  >.__nameBox{
    position: absolute;
    width:$nameBoxWidth;
    height:$nameBoxHeight;
    left:$nameBoxX;
    top:$nameBoxY;
    overflow: hidden;
    height:8mm;
    max-height: $cardHeight - 2mm;
    font-size:6mm;
    font-weight: bold;
    z-index: 40;
    >.__textareaName{
      color:#000;
      resize: none;
      overflow: hidden;
      position: relative;
      font-weight:bold;
      width:100%;
      height: 100%;
      //top:3.75mm;
      line-height: initial;
      letter-spacing: 0.1em;
      text-align: center;
      vertical-align: top;
    }
  }
  >.__idBox{
    $width:$cardWidth;
    $height:30px;
    width:$width - $iconX * 2;
    height:$height;
    position: absolute;
    bottom:4mm;
    left:$iconX;
    z-index: 30;

    $wLabel:20px;
    >*{
      //すべての子要素に適用
      display: inline-block;
    }
    >.__labelID{
      width:$wLabel;
    }
    >.__inputID{
      width:calc(100% - #{$wLabel});
    }
  }
  &.--dark{
    .__bg{
      background: #333!important;
    }
    .__textareaName{
      color:#fff;
      &::placeholder{
        color:#ccc;
      }
    }
    .__labelID, .__inputID{
      color:#0f0;
      &::placeholder{
        color:#393;
      }
    }
  }
}
</style>