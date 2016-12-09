$(document).ready(function(){

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
	$(".m-resizer").click(function(){
		$(this).addClass("m-hidden");
		$(".m-portfolio-wrapper").removeClass("m-hidden");
		$(".m-portfolio-wrapper").css("margin-top", "2px");
		$(".margin-top").css("margin-top", "30px");
	});
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