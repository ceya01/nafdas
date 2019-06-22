<template lang="pug">
  section.p-description
    h2.__title つかいかた
    ol
      li twitter ID を入力して、「読込」ボタンを押します。
      li 自動で ID, アイコン, 名前 が名札に入ります。
      li 「印刷！」ボタンを押して、A4サイズでプリントします。
      ul 
        li プリンタが無い場合は、pdfで保存して、usbメモリに入れて、<br>コンビニに持っていくとプリントできます。
      li 印刷したものを、点線で切り取ると名札の完成です！
      li これをつけてオフ会に行けば、君が誰だかみんなにすぐ分かってもらえるはずさ！
    h2.__title その他の機能
    ul
      li お好みに合わせて、文字サイズ、行数、フォントの変更ができます。<br>文字数が少ない人は大きめの文字にすると良いでしょう。
      li twitterのデータ読込後にも、アイコン、名前、IDの編集可能です。<br>名前の＠以降を削除したりできます。
    h2.__changeLog 更新履歴
    ul
      li 2019/06/22 <br> ver 1.0 公開<br>実用的なレベルにできました
      li 2019/06/15 <br> ver 0.1 プロトタイプ版公開<br>テキスト入力、画像アップロード、canvasへ画像生成機能のみ
</template>

<script>
export default {
  name: 'Description',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

.p-description {
  text-align: left;
  @media print{
    display: none;
  }
}
h2 {
  margin-bottom: 0.5em;
}
p,
ul,ol {
  margin-bottom: 1em;
  margin-left: 1.5em;
}
li{
  margin-bottom: 0.5em;
}
</style>
