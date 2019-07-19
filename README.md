# なふだす！
> オフ会用の名札を簡単に作成・印刷するツール

- [アプリページ](https://ce-ya.net/app/nafdas/)
- [制作後記](https://ce-ya.net/nafdas-postscript)

# Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```

## Twitterデータ取得APIについて
api/getTwitterData.php を ajaxで呼び出して、twitterのデータを取得しています。

開発環境では XAMPPで動かしているlocalhost上の api/getTwitterData.php に、
本番環境では ce-ya.net にアップロードしているphpファイルにアクセスしています。

Twitter APIキー は外部に漏れると問題なので、APIキー記述しているファイルはgitに含まれていません。

api/getTwitterData.php と同じディレクトリに、twitterAPIkey.php ファイルを作成し、以下のように各自取得したAPIキー等を記述する必要があります。

```
const API_KEY = 'aaaaa'; // APIキー
const API_SECRET = 'bbbbb'; // APIシークレット
const ACCESS_TOKEN = 'ccccc';	 // アクセストークン
const ACCESS_TOKEN_SECRET = 'ddddd'; //アクセストークンシークレット
```