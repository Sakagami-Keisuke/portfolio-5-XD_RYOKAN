const swiper = new Swiper('.swiper', {
	setWrapperSize:1880,   //320px+56px *5 = 1880px
	slidesPerView: 4,      // 一度に表示させるスライドの数
	centeredSlides: true,  //1枚目のスライド中央配置
	autoplay: {
		delay: 5000,      // スライドの間隔（単位はミリ秒）
	  },
	loop: true,
	initialSlide: 0,      //スライド0番スタート
	autoHeight: true,     //.swiper-wrapperの高さがslideの中身ぴったり
	spaceBetween:56,      //スライドの間の距離を設定
	roundLengths: true,   //中のテキストや画像をぼやけないように調整


});
// 読み込みチェック
// alert("_static/dist/js/swiper-conf.js load OK!");

//参考
// https://reiwinn-web.net/2016/11/30/swiper-js-01/