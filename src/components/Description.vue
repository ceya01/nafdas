<template lang="pug">
  section.p-description
    h2.__title このアプリについて
    p TwitterIDを入力するだけで名札画像を生成できるアプリ<br>…の プロトタイプです。
    h2 実装済機能
    ul
      li 名札内のテキスト編集
      li 画像をアップロードしてアイコン画像の変更
      li 画像を生成ボタンを押して、canvas画像化して出力（右クリックで保存可能）
    h2.__title 課題
    ul
      li Twitter API を使って id,名前,アイコンを自動取得（API申請中）
      li ネットプリント対応（API申請中 too）
      li 印刷に合わせるために出力画像の解像度調整
    h2.__changeLog 更新履歴
    p 2019/06/15 <br> ver0.1 プロトタイプ版公開<br>テキスト入力、画像アップロード、canvasへ画像生成機能のみ
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
ul {
  margin-bottom: 1em;
}
ul {
  margin-left: 1.5em;
}
</style>
