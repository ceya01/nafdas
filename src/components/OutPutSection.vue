<template lang="pug">
  section.p-outputSection
    //-button.c-btn.p-btnNetPrint ネットプリント
    button.c-btn.p-btnSave(@click="onClickSave") 画像を生成
    .p-outPutImgWrap
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  name: "OutPutSection",
  data() {
    return {};
  },
  methods: {
    onClickSave(e) {
      console.log("onclickSave:", e);
      html2canvas(document.querySelector(".p-nameCard")).then(canvas =>{
        //console.log(canvas);
        document.querySelector(".p-outPutImgWrap").appendChild(canvas)
        let imgBase64 = canvas.toDataURL('imgae/png');
        // base64データをblobに変換
        //var blob = Base64toBlob(imgBase64);
        // blobデータをa要素を使ってダウンロード
        //saveBlob(blob, 'namecard.png');
        
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.p-outPutImgWrap{
  margin:1em auto;
}
</style>
