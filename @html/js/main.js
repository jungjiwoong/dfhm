// JavaScript Document




// 슬라이드
$(function(){
	//스팟존
	$('.spotzone .lst').bxSlider({
		mode: 'fade',
		slideZIndex: 20,
		auto: true,
		autoHover: true,
		autoControls: true,
		controls: false,
		//autoStart: false,
		//pager: false,						
		autoControlsCombine: true
	});
	
	//배너존
	/*
	var totalBanner = $(".banzone .lst > div").length;
	$(".banzone").append("<div class='banWrap'></div>");
	var banCount = Math.ceil(totalBanner / 5);

	for ( i=1; i <= banCount; i++ ) {
		//빈 박스 만들기
		$(".banzone .banWrap").append("<div id='ban_" + i + "'></div>");
		//박스 안에 넣기
		for (j = 0; j < 5; j++ ) {
			$("#ban_" + i).append($(".banzone .lst>div:eq(0)"));
		} 
	}

	$(".banzone .lst").html( $(".banzone .banWrap").html()	);
	$(".banzone .banWrap").remove();
	*/

	$('.banzone .lst').bxSlider({
		slideZIndex: 20,
		auto: true,
		autoHover: true,
		autoControls: true,
		minSlides: 5,
		maxSlides: 5,
		moveSlides: 1,
		slideWidth: 150,
		slideMargin: 8,
		//controls: false,
		//autoStart: false,
		pager: false,						
		autoControlsCombine: true
	});
	
	$(".bx-controls-auto").click(function() { $(this).find("a").focus(); }); // 시작,정지 토글 키보드 접근시 포커스
});