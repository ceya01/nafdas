<template lang="pug">
section.p-nameCard
  .__iconBox
    img.__icon( src="@/assets/avatar_default_150sq.png" v-if="twitterIcon===''")
    img.__icon( :src="twitterIcon"  v-if="twitterIcon!==''")
    input.__inputImg(type="file" v-on:change="onSelectFile")
  .__nameBox
    textarea.__textareaName.c-inCardInput(type="text" placeholder="（ここに名前）" :value="twitterName") 
  .__idBox
    label.__labelID(for="twIDinCard") @ 
    input.__inputID.c-inCardInput#twIDinCard(type="text" placeholder="(twitter ID)" :value="twitterID") 
</template>

<script>
export default {
  name: 'NameCard',
    data () {
    return {
      uploadedImage: '',
    }
  },
  methods: {
    onSelectFile(e){
      console.log("onSelectFile:",e);
      let files = e.target.files || e.dataTransfer.files;
      this.showImg(files[0]);
    },
    showImg(file){
      console.log("showImg:",file);
      let render = new FileReader();
      render.onload= (e)=>{
        // this.uploadedImage = e.target.result;
        this.$store.dispatch('updateTwitterIcon',e.target.result)
      };
      //render.readAsDataURL(file);
    }
  },
  computed:{
    twitterID : function(){
      return this.$store.getters.twitterID
    },
    twitterName : function(){
      return this.$store.getters.twitterName
    },
    twitterIcon : function(){
      return this.$store.getters.twitterIcon
    },
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
$iconY:($cardHeight - $iconHeight) / 2;

$nameBoxWidth:57mm;
$nameBoxHeight:24mm;
$nameBoxX:31mm;
$nameBoxY:($cardHeight - $nameBoxHeight) / 2;

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
  
  >.__iconBox{
    position: absolute;
    width:$iconWidth;
    height:$iconHeight;
    left:$iconX;
    top:$iconY;
    
    >.__icon,>.__inputImg{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
    }
    >.__icon{
      border-radius:50%;
    }
    >.__inputImg{
      opacity: 0;
    }
  }
  >.__nameBox{
    position: absolute;
    width:$nameBoxWidth;
    height:$nameBoxHeight;
    left:$nameBoxX;
    top:$nameBoxY;

    font-size:6mm;
    font-weight: bold;
    >.__textareaName{

      resize: none;
      overflow: hidden;
      position: relative;
      width:100%;
      height:17mm;
      line-height: 8mm;
      top:3.75mm;
      letter-spacing: 0.5mm;
    }
  }
  >.__idBox{
    $width:280px;
    $height:30px;
    width:$width;
    height:$height;
    position: absolute;
    bottom:10px;
    left:10px;

    $wLabel:20px;
    >*{
      //すべての子要素に適用
      display: inline-block;
    }
    >.__labelID{
      width:$wLabel;
    }
    >.__inputID{
      width:calc(100% - #{$wLabel};)
    }
  }
  .c-inCardInput{
    width:100%;
  }
}
</style>