$(document).ready(function(){

	// плавний якір
	$(".m-nav li").on("click", "a", function(event){
		event.preventDefault();

		var menuId = $(this).attr("href") 
		var top = $(menuId).offset().top;

		$("body, html").animate({scrollTop: top}, 1500);
	});
	// end плавний якір

	// header-menu
	$(".menu-open").click(function(){
		$(".m-menu").addClass("m-menu-active");
		$(".menu-open").addClass("m-hidden");
		$(".menu-close").removeClass("m-hidden");
	});

	$(".menu-close, a").click(function(){
		$(".m-menu").removeClass("m-menu-active");
		$(".menu-open").removeClass("m-hidden");
		$(".menu-close").addClass("m-hidden");
	});

	$(".m-nav").on("click", ".m-li", function(e){
		$(this).siblings("li").removeClass("active-li");
		$(this).addClass("active-li");
	});
	// end header-menu

	// portfolio resizer
	// end portfolio resizer

	// back btn
	$(".back-btn").click(function(){
		history.back();
	});
	// end back btn

	// slider
	$(".m-slider").bxSlider();
	// end slider


});