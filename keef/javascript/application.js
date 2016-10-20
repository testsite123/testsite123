$(document).ready(function(){
	// header langmenu
	$(".lang-menu").click(function(){
		$(".lang-select").toggle()
	});
	// end header langmenu
	
	// vertical-menu
	$(".lang-vertical").click(function(){
		$(".vertical-select").toggle()
	});
	// end vertical-menu

	// portfolio height
	$(".see-all-show").click(function(){
		$(".see-all-visibility").attr({
			style: "display:none"
		});
		$(".portfolio").attr({
			style: "height:100%; overflow:visible"
		});
	});

	$(".up-btn-show").click(function(){
		$(".portfolio").attr({
			style: "height:582px; overflow:hidden"
		});
		$(".see-all-visibility").attr({
			style: "display:block"
		});
	});
	// end portfolio height

	// bxslider main page
	$('.bxslider').bxSlider({
	});
	// end bxslider main page

	// adding class .filter-active to .filter-block
	$(".filter-block").click(function(){
		$(this).addClass("filter-active")
	});
	// end adding class .filter-active to .filter-block

});