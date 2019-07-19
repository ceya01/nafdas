<template lang="pug">
section.p-shareSection
  h2.__heading シェア
  .c-shareButtonWrap
    a.__share-button.--bg-twitter(href='https://twitter.com/intent/tweet?text=%e3%81%aa%e3%81%b5%e3%81%a0%e3%81%99%ef%bc%81%20%2d%20TwitterID%e3%81%8b%e3%82%89%e5%90%8d%e6%9c%ad%e7%94%9f%e6%88%90%e3%81%97%e3%81%a6%e5%8d%b0%e5%88%b7%e3%81%99%e3%82%8b%e3%83%84%e3%83%bc%e3%83%ab%20%0d%0ahttps%3a%2f%2fce%2dya%2enet%2fapp%2fnafdas%2f%20%0d%0afrom%3a%20%40ceya_net%20', target='blank', rel='nofollow noopener noreferrer')
      span.__social-icon.icon-twitter
      span.__caption Twitter
    a.__share-button.--bg-facebook(href='//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fce-ya.net%2Fapp%2Fnafdas%2F&t=web%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E5%88%B6%E4%BD%9C%E7%B7%B4%E7%BF%92%E3%81%A8%E3%81%97%E3%81%A6Twitter%E3%82%82%E3%81%A9%E3%81%8D%E3%82%92%E5%88%B6%E4%BD%9C%E3%83%BB%E5%85%AC%E9%96%8B%E3%81%97%E3%81%9F%E8%A9%B1', target='blank', rel='nofollow noopener noreferrer')
      span.__social-icon.icon-facebook
      span.__caption Facebook
    a.__share-button.--bg-hatena(href='//b.hatena.ne.jp/entry/s/ce-ya.net/app/nafdas/', data-hatena-bookmark-layout='simple', title='なふだす！ - TwitterIDから名札生成して印刷するツール', target='blank', rel='nofollow noopener noreferrer')
      span.__social-icon.icon-hatena
      span.__caption はてブ
    a.__share-button.--bg-pocket(href='//getpocket.com/edit?url=https://ce-ya.net/app/nafdas/', target='blank', rel='nofollow noopener noreferrer')
      span.__social-icon.icon-pocket
      span.__caption Pocket
    a.__share-button.--bg-line(href='//timeline.line.me/social-plugin/share?url=https%3A%2F%2Fce-ya.net%2Fapp%2Fnafdas%2F', target='_blank', rel='nofollow noopener noreferrer')
      span.__social-icon.icon-line
      span.__caption LINE
    a.__share-button.--bg-copy.--btn-copy(href='javascript:void(0)', rel='nofollow noopener noreferrer', data-clipboard-text="なふだす！ - TwitterIDから名札生成して印刷するツール https://ce-ya.net/app/nafdas/" @click="onClickCopy")
      span.__social-icon.fas.fa-copy
      span.__caption コピー
</template>

<script>

export default {
  name: "ShareSection",
  data() {
    return {};
  },
  methods:{
    onClickCopy:function(evt){
      // console.log('onClickCopy',evt);
      alert('クリップボードにタイトルとURLをコピーしました。')
    }
  }
};
 
//クリップボード有効化
import ClipboardJS from 'clipboard'
let clipBoard = new ClipboardJS('.--btn-copy')
</script>

<style lang="scss" scoped>
.p-shareSection {
  text-align: left;
  @media print {
    display: none;
  }
  .__heading{
    margin: 2em 0 1em 0;
  }
}
.c-shareButtonWrap{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  padding-bottom: 5px;
  .__share-button{
    border-radius: 4px;
    background: #333333;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    text-align: center;
    text-decoration: none;
    padding: 0.75em 0 ;
    width:16%;
    transition: 0.25s;
    box-shadow:0 2px 5px rgba(0,0,0,0.26);  //google
    &:hover{
      cursor: pointer;
      transition: 0.25s;
      box-shadow: 0 1px 2px rgba(0,0,0,0.10);
      transform: translateY(1px);
    }
    .__social-icon{
      margin-right: 0.25em;
    }
    .--icon-twitter{
    }
    .__caption{
    }
    &.--bg-twitter{
      background: #1DA1F2;
    }
    &.--bg-facebook{
      background: #3B5998;
    }
    &.--bg-hatena{
      background: #2C6EBD;
    }
    &.--bg-pocket{
      background: #EF4056;
    }
    &.--bg-line{
      background: #00C300;
    }
    &.--bg-copy{
      background: #333333;
    }
  }
}
</style>
