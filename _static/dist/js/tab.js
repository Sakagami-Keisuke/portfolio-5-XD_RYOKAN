jQuery(function($){
	$('.tab').click(function(){
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
        $('.is-show').removeClass('is-show');
        

        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();

        // console.log('取得したindexの出力 : %s', index);


        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
		// $('.panel').eq(index).addClass('is-show');
        
        // その他(index=1)のとき
        if (index === 1) {
            $('.panel').eq(0).addClass('is-show');
            $('.panel').eq(1).addClass('is-show');
            $('.panel').eq(2).addClass('is-show');
            $('.panel').eq(3).addClass('is-show');
            $('.panel').eq(4).addClass('is-show');
            $('.panel').eq(5).addClass('is-show');

        } else {
            $('.panel').eq(0).addClass('is-show');
            $('.panel').eq(1).addClass('is-show');
            $('.panel').eq(2).addClass('is-show');
        }

	});
});

window.onload = function () {
	alert("＜<tab.js >＞Loading completed");
};