//スクロール量を取得する関数
function getScrolled() {
	return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
  }
	
  //トップに戻るボタンの要素を取得
  var topButton = document.getElementById( 'js-scroll-fadein' );
			
  //ボタンの表示・非表示
  window.onscroll = function() {
	( getScrolled() > 500 ) ? topButton.classList.add( 'is-fadein' ): topButton.classList.remove( 'is-fadein' );
  }
			
  //トップに移動する関数
  function scrollToTop() {
	var scrolled = getScrolled();
	window.scrollTo( 0, Math.floor( scrolled / 2 ) );
	if ( scrolled > 0 ) {
	  window.setTimeout( scrollToTop, 30 );
	}
  };
			
  //イベント登録
  topButton.onclick = function(){
	scrollToTop();
  };


  const fruits = [
	{name: "リンゴ", price: 100, color: "赤色"},
  // プロパティと値を追加してください。
	{name: "バナナ", price: 200, color: "黄色", taste: "美味しい"},
  // プロパティと値を追加してください。
	{name: "ミカン", price: 150, color: "橙色", taste: "普通"},
  // プロパティと値を追加してください。
	{name: "ブドウ", price: 400, color: "紫色", taste: "まだ旬ではない"},
  ];
  
  
  for (let i = 0; i< fruits.length; i++) {
	const fruit = fruits[i];
	console.log("------------------------------");
	console.log(`この果物は${fruit.name}です`); 
	console.log(`価格は${fruit.price}円です`);
	// 以下にif文を使ってコードを書いてください。
  if (fruit.taste === undefined){
	  console.log("味はわかりません");
  }else{
	  console.log(`味は${fruit.taste}です`);
  }
  }