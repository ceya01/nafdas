<template lang="pug">
  section.p-description
    h2.__title つかいかた
    ol
      li twitter ID を入力して、「読込」ボタンを押します。
      li 自動で ID, アイコン, 名前 が名札に入ります。
      li 「印刷！」ボタンを押して、A4サイズでプリントします。<br>91x55mmの標準名刺サイズになります。
      ul 
        li プリンタが無い場合は、pdfで保存して、usbメモリに入れて、<br>コンビニに持っていくとプリントできます。
      li 印刷したものを、点線で切り取ると名札の完成です！<br>名札ケースに入れてオフ会に持っていこう！<br><strong>せっかく印刷した名札を持っていき忘れないように注意！</strong>
    h2.__title その他の機能
    ul
      li お好みに合わせて、文字サイズ、行数、フォントの変更ができます。<br>文字数が少ない人は大きめの文字にしたり、<br>文字数が多い人は行数を増やしたりすると良いでしょう。<br>あまり極端な数値にすると見づらくなるので注意。
      li フォントはPCにインストールされているものが使えます。<br>フォント名を正確に入力すると反映されます。
      li twitterのデータ読込後にも、アイコン、名前、IDを編集可能です。<br>名前の＠以降を削除したり、画像をアップロードしてアイコンを変更できます。
      li ダークテーマ名札の印刷は、Chrome以外のブラウザだと白文字がグレーで印刷されるのでご注意ください。
      li iOS,Android の場合、印刷でpdfを保存し、<a href="https://www.printing.ne.jp/index_p.html">セブンイレブンのnetprint</a> などのアプリをうまく活用すれば印刷できるかもしれません。 
    h2.__changeLog 更新履歴
    ul
      li 2019/07/19 <br> ver 1.1.2 <br>　説明文・デザイン微調整<br>　制作後記・github等へのリンク追加
      li 2019/06/27 <br> ver 1.1.1 <br>　シェアボタン追加
      li 2019/06/22 <br> ver 1.1 <br>　ダークモード印刷機能<br>　文字サイズの自動調整
      li 2019/06/22 <br> ver 1.0 <br>　正式版公開
      li 2019/06/15 <br> ver 0.1 <br>　プロトタイプ版公開
    h2.__contact 連絡先
    p 感想・要望・不具合報告等ありましたら、Twitter 
      a(href="https://twitter.com/ceya_net") @ceya_net
      |  へお願いします。
    h2.__contact リンク
    ul
      li 
        a(href="https://ce-ya.net/nafdas-postscript") 制作後記
      li 
        a(href="https://github.com/ceya01/nafdas") github（ソースコード）
      li 
        a(href="https://ce-ya.net/") トップページ
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
  letter-spacing: 0.1em;
  line-height: 1.5em;
  color: #444;
  @media print{
    display: none;
  }
}
h2 {
  margin: 2em 0 1em 0;
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
