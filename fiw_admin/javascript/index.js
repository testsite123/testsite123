$(document).ready(function(){

	$(".slider-box-hover, .project-block-hover, .slide-box-hover").click(function(){
		$(this).css("opacity", "1").css("visibility", "visible");
	});

	// button-close ABOUT PAGE
	$(".btn-close").click(function(){
		$(this).parent().css("display", "none");
	});
	// button-close ABOUT PAGE

});