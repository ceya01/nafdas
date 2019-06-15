<template lang="pug">
section.p-nameCard
  .__iconBox
    img.__icon( src="@/assets/avatar_default_150sq.png" v-if="uploadedImage===''")
    img.__icon( :src="uploadedImage"  v-if="uploadedImage!==''")
    input.__inputImg(type="file" v-on:change="onSelectFile")
  .__nameBox
    textarea.__textareaName.c-inCardInput(type="text" placeholder="（名前を入力）") 
  .__idBox
    label.__labelID(for="twIDinCard") @ 
    input.__inputID.c-inCardInput#twIDinCard(type="text" placeholder="(twitter ID)") 
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
        this.uploadedImage = e.target.result;
      };
      render.readAsDataURL(file);
    }
  }
}



console.log("namecard");


</script>

<style lang="scss" scoped>
.p-nameCard{
  //名札サイズは 91x55 想定
  $cardWidth:300px;
  $cardHeight:180px;
  
  width:$cardWidth;
  height:$cardHeight;

  background-color: #fff;
  //border: #999 solid 1px;
  margin: 1em auto;
  position: relative;
  
  >.__iconBox{
    $width:80px;
    $height:$width;
    width:$width;
    height:$height;

    position: absolute;
    top:calc((#{$cardHeight} - #{$height}) / 2);
    left:10px;
    
    >.__icon,>.__inputImg{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
    }
    >.__icon{
    }
    >.__inputImg{
      opacity: 0;
    }
  }
  >.__nameBox{
    $width:190px;
    $height:60px;
    width:$width;
    height:$height;
    position: absolute;
    top:calc((#{$cardHeight} - #{$height}) / 2);
    left:100px;
    font-size:20px;
    font-weight: bold;
    >.__textareaName{
      resize: none;
      overflow: hidden;
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