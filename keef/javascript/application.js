$(document).ready(function(){
	// header langmenu
	$(".lang-menu").click(function(){
		$(".lang-select").toggle(400)
	});
	// end header langmenu
	
	// vertical-menu
	$(".lang-vertical").click(function(){
		$(".vertical-select").toggle(400)
	});
	// end vertical-menu

	// portfolio height
	var portsecHeight = $(".portfolio-section").height();
	var doubleHeight = portsecHeight*2;

	$(".see-all-show").click(function(){
		$(".see-all-visibility").css("display", "none");
		$(".portfolio").css("height", "100%").css("overflow", "visible");
		$(".paralax").css("margin-top", "0");
	});

	$(".up-btn-show").click(function(){
		$(".portfolio").css("height", doubleHeight).css("overflow", "hidden");
		$(".see-all-visibility").css("display", "block");
		// $(".paralax").css("margin-top", "-200px");
	});
	// end portfolio height



	// bxslider main page
	$(".header-slider").bxSlider();
	// end bxslider main page
	// adding class .filter-active to .filter-block
	$(".filter-block").click(function(){
		$(this).addClass("filter-active")
	});
	// end adding class .filter-active to .filter-block

});


var bigParallax = document.getElementById('paralax-layer');
var parallax = new Parallax(bigParallax);

var smallParallax = document.getElementById('small-parallax');
var parallax = new Parallax(smallParallax);