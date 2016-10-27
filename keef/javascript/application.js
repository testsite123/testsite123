$(document).ready(function(){
	// header langmenu---------------------------------------------------------
	$(".lang-menu").click(function(){
		$(".lang-select").toggle(400)
	});
	// end header langmenu-----------------------------------------------------
	
	// vertical-menu-----------------------------------------------------------
	$(".lang-vertical").click(function(){
		$(".vertical-select").toggle(400)
	});
	// end vertical-menu-------------------------------------------------------

	// portfolio height--------------------------------------------------------
	var portsecHeight = $(".portfolio-section").height();
	var doubleHeight = portsecHeight*2;

	$(".see-all-show").click(function(){
		$(".see-all-visibility").css("display", "none");
		$(".portfolio").css("height", "100%").css("overflow", "visible");
	});

	$(".up-btn-show").click(function(){
		$(".portfolio").css("height", doubleHeight).css("overflow", "hidden");
		$(".see-all-visibility").css("display", "block");
	});
	// end portfolio height----------------------------------------------------

	// bxslider main page------------------------------------------------------
	$(".header-slider").bxSlider();
	// end bxslider main page--------------------------------------------------

	// adding class .filter-active to .filter-block----------------------------
	$(".filter-menu").on("click", ".filter-block", function(e){
		$(this).siblings("li").removeClass("filter-active");
		$(this).addClass("filter-active");
	});
	// end adding class .filter-active to .filter-block------------------------

	// scrolling vertical-menu-------------------------------------------------
	var scrollVertical = $("#vertical-menu");
	var headerHeight = $(".header").height();

	if ($(this).scrollTop() < headerHeight) {
		scrollVertical.removeClass("visible-menu");
		//console.log("remove");
	}
	if ($(this).scrollTop() > headerHeight) {
		scrollVertical.addClass("visible-menu");
		//console.log("add");
	} 

	$(window).on("scroll", function(e) {
		 if ($(this).scrollTop() < headerHeight) {
			scrollVertical.removeClass("visible-menu");
			//console.log("remove");
		}
		if ($(this).scrollTop() > headerHeight) {
			scrollVertical.addClass("visible-menu");
			//console.log("add");
		} 

	});
	// end scrolling vertical-menu-------------------------------------------------


	// slider changing
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	var target = document.getElementById('header-wrapper-id');
	 
	// var newTarget = $('#header-wrapper-id');
	// создаём экземпляр MutationObserver

	//console.log(MutationObserver);
	var observer = new MutationObserver(function(mutations) {
	  mutations.forEach(function(mutation) {
	    //console.log(mutation.type);
	    //console.log(mutation);

	    if (mutation.target.className.indexOf("active") !==  -1 ) {
	    		console.log(mutation);
	    		console.log(mutation.target.className);

    		       var item = mutation.target.innerHTML;

			       if(item == 3) {
			        $(".header-menu").addClass("new");

			       }
			       else {
			        $(".header-menu").removeClass("new");
			       }
	   	 }
	  });    
	});
	

	// конфигурация нашего observer:
	var config = { attributes: true, childList: true, characterData: true, subtree: true };
	 
	// передаём в качестве аргументов целевой элемент и его конфигурацию
	observer.observe(target, config);
	// end slider changing
});

// parallax mode-------------------------------------------------------------------

var bigParallax = document.getElementById('parallax-layer');
var parallax = new Parallax(bigParallax);

var smallParallax = document.getElementById('small-parallax');
var parallax = new Parallax(smallParallax);

// end parallax mode---------------------------------------------------------------