<template lang="pug">
  section.p-outputSection
    //-button.c-btn.p-btnNetPrint ネットプリント
    button.c-btn.p-btnPrint(@click="onClickPrint") 印刷！
    .p-outPutImgWrap
</template>

<script>
/* eslint-disable */
import html2canvas from 'html2canvas'

export default {
  name: "OutPutSection",
  data() {
    return {
      canvas: null  
    }
  },
  methods: {
    onClickPrint(evt) {
      //console.log("onClickPrint:", evt)
      window.print();
    },
    //旧機能　名札部分をHTML化　2019/06/22現在未使用
    createCanvas(){
      // console.log("createCanvas:")
      html2canvas(document.querySelector(".p-nameCard")).then(canvas =>{
        //console.log(canvas);
        let doc = document.querySelector(".p-outPutImgWrap")
        if(doc.firstChild){
          doc.removeChild(doc.firstChild)
        }
        doc.appendChild(canvas)
        let imgBase64 = canvas.toDataURL('imgae/png')
        this.canvas = canvas
        // base64データをblobに変換
        //var blob = Base64toBlob(imgBase64);
        // blobデータをa要素を使ってダウンロード
        //saveBlob(blob, 'namecard.png');
        
      })
    }
  }
};

</script>

<style lang="scss" scoped>
.p-outputSection{
  @media print{
    display: none;
  }
}
.p-outPutImgWrap{
  margin:1em auto;
}
.p-btnPrint{
  font-size: 1.1em;
  padding: 0.8em 3em;
}
</style>
