
<?php
//CORS対策　開発環境のlocalhost:8080 と 本番環境のドメインを許可
$reqHeaders = apache_request_headers();
$allowedOrigin = array(
  'https://ce-ya.net'
 ,'http://localhost:8080'
);
// ajaxなどで外部から呼び出した場合、$reqHeaders['Origin']に呼び出し元のドメインが入る
if(array_key_exists('Origin',$reqHeaders) && in_array($reqHeaders['Origin'], $allowedOrigin)){
  header("Access-Control-Allow-Origin: {$reqHeaders['Origin']}");
}

//var_dump($reqHeaders);
// echo 'getTwitterData.php';
// var_dump($_GET);

if(array_key_exists('sn',$_GET)){
  $screenName = $_GET['sn'];
}else{
	//echo 'error: no screen name';
  exit('Error: スクリーンネームが設定されてません');
}

// twitter設定
// 参考: https://syncer.jp/Web/API/Twitter/REST_API/GET/users/show/ 

// APIキーは外部ファイルに記述して取得
require_once('twitterAPIkey.php');
// const API_KEY = ''; // APIキー
// const API_SECRET = ''; // APIシークレット
// const ACCESS_TOKEN = '';	 // アクセストークン
// const ACCESS_TOKEN_SECRET = ''; //アクセストークンシークレット

$request_url = 'https://api.twitter.com/1.1/users/show.json';		// エンドポイント
$request_method = 'GET' ;

	// パラメータA (オプション)
	$params_a = array(
//		"user_id" => "1528352858",
		"screen_name" => $screenName,
//		"include_entities" => "true",
	) ;

	// キーを作成する (URLエンコードする)
	$signature_key = rawurlencode( API_SECRET ) . '&' . rawurlencode( ACCESS_TOKEN_SECRET ) ;
		
	// パラメータB (署名の材料用)
	$params_b = array(
		'oauth_token' => ACCESS_TOKEN ,
		'oauth_consumer_key' => API_KEY ,
		'oauth_signature_method' => 'HMAC-SHA1' ,
		'oauth_timestamp' => time() ,
		'oauth_nonce' => microtime() ,
		'oauth_version' => '1.0' ,
	);
	// パラメータAとパラメータBを合成してパラメータCを作る
	$params_c = array_merge( $params_a , $params_b ) ;

	// 連想配列をアルファベット順に並び替える
	ksort( $params_c ) ;

	// パラメータの連想配列を[キー=値&キー=値...]の文字列に変換する
	$request_params = http_build_query( $params_c , '' , '&' ) ;

	// 一部の文字列をフォロー
	$request_params = str_replace( array( '+' , '%7E' ) , array( '%20' , '~' ) , $request_params ) ;

	// 変換した文字列をURLエンコードする
	$request_params = rawurlencode( $request_params ) ;

	// リクエストメソッドをURLエンコードする
	// ここでは、URL末尾の[?]以下は付けないこと
	$encoded_request_method = rawurlencode( $request_method ) ;
 
	// リクエストURLをURLエンコードする
	$encoded_request_url = rawurlencode( $request_url ) ;
 
	// リクエストメソッド、リクエストURL、パラメータを[&]で繋ぐ
	$signature_data = $encoded_request_method . '&' . $encoded_request_url . '&' . $request_params ;

	// キー[$signature_key]とデータ[$signature_data]を利用して、HMAC-SHA1方式のハッシュ値に変換する
	$hash = hash_hmac( 'sha1' , $signature_data , $signature_key , TRUE ) ;

	// base64エンコードして、署名[$signature]が完成する
	$signature = base64_encode( $hash ) ;

	// パラメータの連想配列、[$params]に、作成した署名を加える
	$params_c['oauth_signature'] = $signature ;

	// パラメータの連想配列を[キー=値,キー=値,...]の文字列に変換する
	$header_params = http_build_query( $params_c , '' , ',' ) ;

	// リクエスト用のコンテキスト
	$context = array(
		'http' => array(
			'method' => $request_method , // リクエストメソッド
			'header' => array(			  // ヘッダー
				'Authorization: OAuth ' . $header_params ,
			) ,
		) ,
	) ;

	// パラメータがある場合、URLの末尾に追加
	if( $params_a ) {
		$request_url .= '?' . http_build_query( $params_a ) ;
	}

	// オプションがある場合、コンテキストにPOSTフィールドを作成する (GETの場合は不要)
//	if( $params_a ) {
//		$context['http']['content'] = http_build_query( $params_a ) ;
//	}

	// cURLを使ってリクエスト
	$curl = curl_init() ;
	curl_setopt( $curl, CURLOPT_URL , $request_url ) ;
	curl_setopt( $curl, CURLOPT_HEADER, 1 ) ; 
	curl_setopt( $curl, CURLOPT_CUSTOMREQUEST , $context['http']['method'] ) ;	// メソッド
	curl_setopt( $curl, CURLOPT_SSL_VERIFYPEER , false ) ;	// 証明書の検証を行わない
	curl_setopt( $curl, CURLOPT_RETURNTRANSFER , true ) ;	// curl_execの結果を文字列で返す
	curl_setopt( $curl, CURLOPT_HTTPHEADER , $context['http']['header'] ) ;	// ヘッダー
//	if( isset( $context['http']['content'] ) && !empty( $context['http']['content'] ) ) {		// GETの場合は不要
//		curl_setopt( $curl , CURLOPT_POSTFIELDS , $context['http']['content'] ) ;	// リクエストボディ
//	}
	curl_setopt( $curl , CURLOPT_TIMEOUT , 5 ) ;	// タイムアウトの秒数
	$res1 = curl_exec( $curl ) ;
	$res2 = curl_getinfo( $curl ) ;
	curl_close( $curl ) ;

	// 取得したデータ
	$json = substr( $res1, $res2['header_size'] ) ;		// 取得したデータ(JSONなど)
	$header = substr( $res1, 0, $res2['header_size'] ) ;	// レスポンスヘッダー (検証に利用したい場合にどうぞ)

	$obj = json_decode( $json );
  if(strpos($json,'error')){
		exit('：'.$json);
  }

	// [cURL]ではなく、[file_get_contents()]を使うには下記の通りです…
	// $json = file_get_contents( $request_url , false , stream_context_create( $context ) ) ;

	// JSONをオブジェクトに変換
  
  $twName = $obj->name;
  $twIconUrl = $obj->profile_image_url;
  $twIconUrl = str_replace('_normal.','.',$twIconUrl);

	echo $twName . ','. $twIconUrl;
