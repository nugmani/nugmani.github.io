$(document).ready(function() {

//-------------MASONRY------------------------------//
	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {

		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});
		$('.item').imagefill();
	});

/*$("#portfolio_grid").mixItUp();*/

/*текущий элемент страновиься активным при клике на ссылку*/
	$(".s_portfolio li").click(function(){
	$(".s_portfolio li").removeClass("active");/*у всех li уберем класс active*/
	$(this).addClass("active");/*текущему элементу добавим класс*/
	});


/*анимация контента 3 блока*/
$(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
$(".right .resume_item").animated("fadeInRight", "fadeOutRight");

/*анимация контента 2 блока*/
$(".animation_1").animated("flipInY", "flipOutY");
$(".animation_2").animated("fadeInUp", "fadeOutDown");
$(".animation_3").animated("fadeInUp", "fadeOutDown");


	/*Всплывающее окно popup*/
//$(".popup").magnificPopup({type:'image'});
	
//$(".popup_content").magnificPopup({type:'inline', midClick: true, closeOnContentClick : true, showCloseBtn : true});

/*анимация H1*/
$(".top_text h1").animated("fadeInDown", "fadeOutUp");
$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");


	/*высота фона по высоте экрана*/
	function heightDetect(){
		$(".main-head").css("height",$(window).height());
	};

	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
	
$(".toggle_mnu").click(function() {
	$(".sandwich").toggleClass("active");
});

$(".top_mnu ul a").click(function(){
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
}).append("<span>");/*делаем span  в самой ссылке*/

$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").removeClass("h_opacify");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("h_opacify");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

/*-------секция 3 -раздача ссылкам ID-------------*/
/*$(".portfolio_item").each(function(i){
$(this).find("a").attr("href","#work_" + i);
$(this).find(".podrt_descr").attr("id", "work_" + i)
//console.log(i);
});*/

/*Блок Кнтакты Отправка сообщения */
$("input, select, textarea").jqBootstrapValidation();
});

/*-------Скролить по ID-------*/
$(".top_mnu ul a").mPageScroll2id();

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

}); 




