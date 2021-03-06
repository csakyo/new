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


  $(document).ready(
	  function(){ 
	$(".sidebar-dropdown > a").click(function(e) {
		if ($("sidebar-submenu").is(":hidden")) {
			$("sidebar-submenu").slideDown("slow");
		  } else {
			$("sidebar-submenu").hide();
		  }
		});
	});
	
	// 		console.log("hello");

//   $(document).ready(function(){ 
// 	$(".sidebar-dropdown > a").click(function(e) {

// 		console.log("hello");
// 	  $(".sidebar-submenu").slideUp(200);
// 	  if (
// 		$(this)
// 		  .parent()
// 		  .hasClass("active")
// 	  ) {
// 		$(".sidebar-dropdown").removeClass("active");
// 		$(this)
// 		  .parent()
// 		  .removeClass("active");
// 	  } else {
// 		$(".sidebar-dropdown").removeClass("active");
// 		$(this)
// 		  .next(".sidebar-submenu")
// 		  .slideDown(200);
// 		$(this)
// 		  .parent()
// 		  .addClass("active");
// 	  }
// 	});

$(function() {

	var nav = $('.menu_under');

	$('.sidebar-dropdown').mouseover(function(e) {
	$('ul', this).stop().slideDown('fast');
	});

	$('.sidebar-dropdown').mouseout(function(e) {
	$('ul', this).stop().slideUp('fast');
	});

	});

	$(document).ready(function () {
		$('a').each((i, elem) => {
			if(!$(elem).attr("target")){
				if ($(elem).attr("href").includes("abc.to")){
					$(elem).attr("target", "_blank");
					$(elem).attr("rel", "nofollow");
				}
			}
		})
	});

// 	$('a').attr({
// 		href: 'http://www.flatrecipe.nir87.com',
//   title: 'フラットレシピ',
//   target: '_blank'
// 	  });