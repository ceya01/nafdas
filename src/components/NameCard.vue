<template lang="pug">
section.p-nameCard
  .__iconBox
    img.__icon(src="@/assets/avatar_default_150x.png")
  .__nameBox
    input.__name.c-inCardInput(type="text" value="なまえをいれてください") 
  .__idBox
    input.__id.c-inCardInput(type="text" value="twitter ID") 
</template>

<script>
export default {
  name: 'NameCard',
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    } 
  }
}
</script>

<style lang="scss" scoped>
.l-header{
  background-color: slategrey;
  color: #FFF;
  padding:2em 0;
  width: 100%;
}
.p-nameCard{
  //名札サイズは 91x55 想定
  $cardWidth:300px;
  $cardHeight:180px;
  
  width:$cardWidth;
  height:$cardHeight;

  border: #333 solid 1px;
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
    >.__icon{
      width: 100%;
    }
  }
  >.__nameBox{
    $width:180px;
    $height:50px;
    width:$width;
    height:$height;
    position: absolute;
    top:calc((#{$cardHeight} - #{$height}) / 2);
    left:100px;
  }
  >.__idBox{
    $width:280px;
    $height:30px;
    width:$width;
    height:$height;
    position: absolute;
    bottom:10px;
    left:10px;
  }
}
</style>