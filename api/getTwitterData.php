
<?php

// localhost と ce-ya.net で 同じドメインからのアクセスのみ許可
if($_SERVER['HTTP_HOST'] ==='localhost'){
	header("Access-Control-Allow-Origin: http://localhost:8080");
}else if($_SERVER['HTTP_HOST'] ==='ce-ya.net'){
	header("Access-Control-Allow-Origin: https://ce-ya.net");
}

if(array_key_exists('sn',$_GET)){
  $screenName = $_GET['sn'];
}else{
  exit('Error: スクリーンネームが設定されてません');
}

// twitter設定
// 参考: https://syncer.jp/Web/API/Twitter/REST_API/GET/users/show/ 

// APIキーは外部ファイルに記述して取得
require_once('twitterAPIkey.php');
// const API_KEY = 'aaaaa'; // APIキー
// const API_SECRET = 'bbbbb'; // APIシークレット
// const ACCESS_TOKEN = 'ccccc';	 // アクセストークン
// const ACCESS_TOKEN_SECRET = 'ddddd'; //アクセストークンシークレット

$request_url = 'https://api.twitter.com/1.1/users/show.json';		// エンドポイント
$request_method = 'GET' ;

	// パラメータA (オプション)
	$params_a = array(
		"screen_name" => $screenName,
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

	// cURLを使ってリクエスト
	$curl = curl_init() ;
	curl_setopt( $curl, CURLOPT_URL , $request_url ) ;
	curl_setopt( $curl, CURLOPT_HEADER, 1 ) ; 
	curl_setopt( $curl, CURLOPT_CUSTOMREQUEST , $context['http']['method'] ) ;	// メソッド
	curl_setopt( $curl, CURLOPT_SSL_VERIFYPEER , false ) ;	// 証明書の検証を行わない
	curl_setopt( $curl, CURLOPT_RETURNTRANSFER , true ) ;	// curl_execの結果を文字列で返す
	curl_setopt( $curl, CURLOPT_HTTPHEADER , $context['http']['header'] ) ;
	
	curl_setopt( $curl , CURLOPT_TIMEOUT , 5 ) ;	// タイムアウトの秒数
	$res1 = curl_exec( $curl ) ;
	$res2 = curl_getinfo( $curl ) ;
	curl_close( $curl ) ;

	// 取得したデータ
	$json = substr( $res1, $res2['header_size'] ) ;		// 取得したデータ(JSONなど)

	exit($json); 
	//取得したjsonをそのまま出力して終了
