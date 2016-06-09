// JavaScript Document

/*-----------------------------------------------------------------*/
// GNB
/*-----------------------------------------------------------------*/

$(function(){
					 
	// Common
	var gnb_root = $('#gnb');
	var gnb_a = $('#gnb>li a');
	var gnb_div = $('#gnb>li>div');
	var gnb_bg = $('.gnb_bg');

	// Div 높이
	var max_gnb = 0; // 최고높이값 저장
	var gnb_index = 0; // 최고높이값을 가진 아이템 저장	
	$("#gnb>li").each(function(i) {
		var gnb_height = $(this).find("div").height();
		if (gnb_height > max_gnb) {		
			max_gnb = gnb_height;
			gnb_index = i;
		}		
	});
	var gnb_height = $("#gnb>li").eq(gnb_index).find("div").height();
	gnb_div.height(gnb_height);	
	gnb_bg.height(gnb_height);

	// Show
	function show_div() {
		//$(this).parents('ul:first').children('li').removeClass('open');
		//$(this).parents('li:first').addClass('open');
		$(this).parents('ul:first').children('li').addClass('open'); // 전체 오픈
		
		// 오버 컬러
		$(this).parents('ul:first').children('li').removeClass('on');
		$(this).parents('li:first').addClass('on'); 
	 
		//var div_height = $(this).siblings().find("ul").height();
		//$(this).siblings().css({"height":div_height});
	}
	
	// Hide
	function hide_div() {
		setTimeout(function(){
			$('#gnb li').removeClass('open');
			$('#gnb li').removeClass('on');
		}, 1);
		
		//$('#gnb>li').find("div").css({"height":"0"});
	}
	
	gnb_a.hover(show_div).focus(show_div);
	gnb_div.hover(show_div);
	$("#gnb").mouseleave(hide_div);
	$('*').not($('#gnb a')).focus(hide_div);
	
});

/*-----------------------------------------------------------------*/
// LNB
/*-----------------------------------------------------------------*/
//<![CDATA[
$(function() {
	
	$("#lnb.nav a").next("div").hide(); // 모두 접기
	//$("#lnb.nav li > div").prev("a").append("<span class='unfd'>메뉴 펼치기</span>"); // 폴딩 아이콘 처리
	//$("#lnb.nav li > div").prev("a.on").find(".unfd").text("메뉴 접기"); // 폴딩 아이콘 처리
	//$("#lnb.nav a[target='_blank']").append("<span class='blank'>새창</span>"); // 메뉴 새창 아이콘 처리

	//$("#lnb.nav a.on").next("ul").show(); // on 보이기
	//$("#lnb.nav a.on").parents('li').find('div').show(); // on 보이기
	
	
	// 토글처리	
	$("#lnb.nav li > div").prev("a").click(function() {		
		$(this).toggleClass("on");
		$(this).next("div").toggle();
		//$(this).find(".unfd").text("메뉴 펼치기");
		//$("#lnb.nav li > div").prev("a.open").find(".unfd").text("메뉴 접기");

		// 다른 메뉴 닫기
		$(this).parent().siblings().find("a").removeClass("on").end().find("div").hide();

		return false;
	});
	
});
//]]>

/*-----------------------------------------------------------------*/
// SNB
/*-----------------------------------------------------------------*/
//<![CDATA[
$(function() {
	/*
	$("#side .snb a").next("ul").hide(); // 모두 접기
	$("#side .snb li > ul").prev("a").append("<span class='unfd'>메뉴 펼치기</span>"); // 폴딩 아이콘 처리
	$("#side .snb li > ul").prev("a.on").find(".unfd").text("메뉴 접기"); // 폴딩 아이콘 처리
	$("#side .snb a[target='_blank']").append("<span class='blank'>새창</span>"); // 메뉴 새창 아이콘 처리

	//$("#side .snb a.on").next("ul").show(); // on 보이기
	$("#side .snb a.on").parents('li').find('ul').show(); // on 보이기
	*/
	
	// 토글처리
	/*
	$("#side .snb li > ul").prev("a").click(function() {		
		$(this).toggleClass("on");
		$(this).next("ul").toggle();
		$(this).find(".unfd").text("메뉴 펼치기");
		$("#side .snb li > ul").prev("a.on").find(".unfd").text("메뉴 접기");

		// 다른 메뉴 닫기
		$(this).parent().siblings().find("a").removeClass("on").end().find("ul").hide();

		return false;
	});
	*/
	
});
//]]>

/*-----------------------------------------------------------------*/
//전체메뉴보기
/*-----------------------------------------------------------------*/

$(function(){
					 
	// Common
	var wholeview = $('#header .wholeview');
	$('.nav_wholeview>ul').clone().appendTo('.header_top .wholeview .nav_wholeview'); // 모바일 전체메뉴 추가	

	//Close 버튼 추가
	//$(".nav_wholeview").append("<button type='button' class='btn_close' title='전체메뉴'>닫기</button>");
	
	//Open,Close
	wholeview.on("click", ".btn_open, .btn_close", function(){
		
		wholeview.toggleClass("open");
		
		// Div 높이
		/*
		var max_whole = 0; // 최고높이값 저장
		var whole_index = 0; // 최고높이값을 가진 아이템 저장	
		$(".nav_wholeview>ul>li").each(function(i) {
			var whole_height = $(this).find("div").height();
			if (whole_height > max_whole) {		
				max_whole = whole_height;
				whole_index = i;
			}		
		});
		var whole_height = $(".nav_wholeview>ul>li").eq(whole_index).find("div").height();
		$(".nav_wholeview>ul>li>div").height(whole_height);
		*/
		
	});
	
	// Mobile Open,Close
	$("#header .wholeview").on("click", ".btn_open, .btn_close", function(){
		var windowHeight = $(window).height();
		$("#wrap").toggleClass("fixed");
		//$("#wrap").css({'height':windowHeight + 'px'});
		
	});
	
});

/*-----------------------------------------------------------------*/
// Select Menu
/*-----------------------------------------------------------------*/
$(function(){								 
	function selectMenu(a) {
		this.selector = a;
	}
	selectMenu.prototype.initialize = function() {
		var sltContainer = $(this.selector);
		var sltButton = sltContainer.find("button");
		var sltList = sltContainer.find(".lst");
		var sltList_a = sltList.find("li>a");
		
		// Default
		sltList.hide();
		// Show
		sltButton.click(function() {
			sltList.slideToggle(100);
		});
		// Hide
		sltContainer.mouseleave(function() {
			sltList.slideUp(50);
		});
		sltList_a.click(function() {
			sltList.slideUp(50);												 
		});
		/*
		$("*").not(sltList_a).focus(function() {
			sltList.hide();
		});// Focus Out
		*/
		// Focus,Hover
		sltList_a.bind("focus hover", function() {
			sltList_a.removeClass("hover");
			$(this).toggleClass("hover");
		});
	}
	var s1 = new selectMenu("#sltLang"); //외국어사이트

	s1.initialize();
	
});

//  CSS셀렉트
$(function(){
	var sltRelatedContainer = $(".cssSelect");
	var sltRelatedButton = sltRelatedContainer.find("button");
	var sltRelatedList = sltRelatedContainer.find(".lst");
	var sltRelated_a = sltRelatedList.find(">li>a");	
	
	// Show
	sltRelatedButton.click(function() {
		$(this).parents(".cssSelect:first").toggleClass("on");
	});
	// Hide
	sltRelatedContainer.mouseleave(function() {
		$(this).removeClass("on");
	});
	sltRelated_a.click(function() {
		$(this).parents(".cssSelect:first").removeClass("on");
	});
	// Focus,Hover
	sltRelated_a.bind("focus hover", function() {
		sltRelated_a.removeClass("hover");
		$(this).toggleClass("hover");
	});
});

/*-----------------------------------------------------------------*/
// Input Label showhide
/*-----------------------------------------------------------------*/
$(document).ready(function(){	
	$(".inpLabelBox input").focus(function() {
		$(this).parents(".inpLabelBox").find("label").hide();
	});
	$(".inpLabelBox input").blur(function() {
		if ($(this).val()) {
			$(this).parents(".inpLabelBox").find("label").hide();
		} else {
			$(this).parents(".inpLabelBox").find("label").show();
		}
	});
	$(".inpLabelBox input").trigger("blur");
});

/*-----------------------------------------------------------------*/
// Main TabMenu
/*-----------------------------------------------------------------*/
function initTabMenu(tabContainerID) {
	var tabContainer = document.getElementById(tabContainerID);
	var tabAnchor = tabContainer.getElementsByTagName("a");
	var i = 0;

	for(i=0; i<tabAnchor.length; i++) {
		if (tabAnchor.item(i).className == "tab")
			thismenu = tabAnchor.item(i);
		else
			continue;

		thismenu.container = tabContainer;
		thismenu.targetEl = document.getElementById(tabAnchor.item(i).href.split("#")[1]);
		thismenu.targetEl.style.display = "none";
		thismenu.imgEl = thismenu.getElementsByTagName("img").item(0);
		if (thismenu.imgEl) {
			thismenu.onmouseover = function () {
				//this.onclick();
			}
		}
		//thismenu.onclick = tabMenuClick; //onClick
		thismenu.onmouseover = thismenu.onfocus = tabMenuClick; //onmouseover
		
		if (!thismenu.container.first)
			thismenu.container.first = thismenu;
	}
	//tabContainer.first.onclick(); //onClick
	tabContainer.first.onmouseover(); //onmouseover
}
function tabMenuClick() {
	currentmenu = this.container.current;
	if (currentmenu != this) {
		if (currentmenu) {
			currentmenu.targetEl.style.display = "none";
			if (currentmenu.imgEl) {
				currentmenu.imgEl.src = currentmenu.imgEl.src.replace("_over.jpg", ".jpg");
				currentmenu.imgEl.src = currentmenu.imgEl.src.replace("_over.gif", ".gif");
			} else {
				currentmenu.className = currentmenu.className.replace(" on", "");
			}
		}

		this.targetEl.style.display = "block";
		if (this.imgEl) {
			this.imgEl.src = this.imgEl.src.replace(".jpg", "_over.jpg");
		} else {
			this.className += " on";
		}
		this.container.current = this;
	}
	return false;
}



/*-----------------------------------------------------------------*/
// 글자크기 조절
/*-----------------------------------------------------------------*/

(function($) {
 $.fn.browserZoom = function(options) {
  var defaults = {
   curr:81.3,
   rate:6.25,
   max:105,
   min:75
  };
   
  this.each(function() {
   var obj = $(this);
   var o = $.extend(defaults, options);
   if( o.curr==null ) {
    o.curr=100;
   }

   zoom();
   $('.font_size .zin',obj).click(function() {
    o.curr = parseInt(o.curr) + parseInt(o.rate);
    if( o.curr>o.max ) {
     o.curr = o.max;
    }
    zoom();
   });
   $('.font_size .zout',obj).click(function() {
    o.curr = parseInt(o.curr) - parseInt(o.rate);
    if( o.curr<o.min ) {
     o.curr = o.min;
    }
    zoom();
   });
 
   function zoom() {
    try {
     $('body').css('fontSize', o.curr+"%");
    } catch(e) {
     // nothing
     // alert( e );
    }
   }
  });
 };
})(jQuery);

 

$(document).ready(function(){
 try { 
  $(document).browserZoom();

 } catch(e) {
  alert(e)
 }
});

