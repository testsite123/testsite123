$(document).ready(function(){

	// header langmenu---------------------------------------------------------
	$(".lang-menu").click(function(){
		$(".lang-select").toggle(500);
	});

	$(".lang-menu, .lang-vertical").mouseover(function(){
		var langMenuHover = {
			"width": "17px",
			"overflow": "hidden",
			"margin": "0 auto",
			"-webkit-transition": "width 0.4s",
			"transition": "width 0.4s"
		}
		$(this).css(langMenuHover);
	});

	$(".lang-menu, .lang-vertical").mouseleave(function(){
		if ( $(".lang-select, .vertical-select").is(":visible") )
			return false;
		var langMenuUnHover = {
			"width": "34px",
			"min-height": "10px",
			"-webkit-transition": "width 0.4s",
			"transition": "width 0.4s"
		}
		$(this).css(langMenuUnHover);
	});

	// end header langmenu-----------------------------------------------------
	
	// vertical-menu-----------------------------------------------------------
	$(".lang-vertical").click(function(){
		$(".vertical-select").toggle(500)
	});
	// end vertical-menu-------------------------------------------------------

	// portfolio height--------------------------------------------------------
	var portsecHeight = $(".portfolio-section").height();
	var doubleHeight = portsecHeight*2;
	var overflowTrans = {
		"transition": "height 0.6s",
		"-webkit-transition": "height 0.6s"
	}

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
	var bxslider = $(".header-slider").bxSlider({
		auto: true,
		pause: 3000,
		
		switch: function ($slideElement) {
				var arrayString = $slideElement[0].className.split(" ");
				for ( var i = 0; i < arrayString.length; i++) {
					arrayString[i].indexOf("slide");
					
					if (arrayString[i].indexOf("slide") !== -1 && arrayString[i].indexOf("slide") !== 0 ) 
					{
						$("." + arrayString[i] + " .image-wrapper img").lazyload({
						    
						    data_attribute: "orig" 
		        			
						});
						
					}
				}
				// console.log(arrayString);

								
			if ( $slideElement[0].className.indexOf("white-pic") !== -1) {
  				$(".header-menu").addClass("new");
  				$(".header-logo").attr("src", "image/header-nav/logoblack.png");
  				$(".lang-menuicon").attr("src", "image/header-nav/icon-passiveblack.png");
  				$(".lang-select a").addClass("lang-black");
  				$(".lang-wrapper").addClass("lang-wrapper-black");
  				$(".slider-text").addClass("slider-text-black");
  				$(".bx-wrapper").addClass("bx-wrapper-black");

  			} else {
  				$(".header-menu").removeClass("new");
  				$(".header-logo").attr("src", "image/header-nav/logowhite.png");
  				$(".lang-menuicon").attr("src", "image/header-nav/icon-passivewhite.png");
  				$(".lang-select a").removeClass("lang-black");
  				$(".lang-wrapper").removeClass("lang-wrapper-black");
  				$(".slider-text").removeClass("slider-text-black");
  				$(".bx-wrapper").removeClass("bx-wrapper-black");
  			}
		},
  		onSlideNext: function($slideElement, oldIndex, newIndex){
  			this.switch($slideElement);
	    }, 
	    onSlidePrev: function($slideElement, oldIndex, newIndex){
  			this.switch($slideElement);
	    },
	    onSliderLoad: function(currentIndex){
  			if ( $("#new-bx-slider-id").children().get(1).className.indexOf("white-pic") !== -1) {
  				$(".header-menu").addClass("new");
  				$(".header-logo").attr("src", "image/header-nav/logoblack.png");
  				$(".lang-menuicon").attr("src", "image/header-nav/icon-passiveblack.png");
  				$(".lang-select a").addClass("lang-black");
  				$(".lang-wrapper").addClass("lang-wrapper-black");
  				$(".slider-text").addClass("slider-text-black");
  				$(".bx-wrapper").addClass("bx-wrapper-black");

  			} else {
  				$(".header-menu").removeClass("new");
  				$(".header-logo").attr("src", "image/header-nav/logowhite.png");
  				$(".lang-menuicon").attr("src", "image/header-nav/icon-passivewhite.png");
  				$(".lang-select a").removeClass("lang-black");
  				$(".lang-wrapper").removeClass("lang-wrapper-black");
  				$(".slider-text").removeClass("slider-text-black");
  				$(".bx-wrapper").removeClass("bx-wrapper-black");
  			}
	    }
	});
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

	// зміна background при виборі фільтру
	var backgroundTransition = {
		"-webkit-transition": "background 1.3s",
		"transition": "background 1.3s",
	}

	$(".brand").click(function(){
		$("#frame-name").css("background", "url('image/portfolio/frame/brand.png')").css("background-size", "cover").css(backgroundTransition);
		$("#frame-text").fadeOut(function(){
			$(this).text("Brand creation").fadeIn();
		});
	});

	$(".dimention").click(function(){
		$("#frame-name").css("background", "url('image/portfolio/frame/3d.png')").css("background-size", "cover").css(backgroundTransition);
		$("#frame-text").fadeOut(function(){
			$(this).text("3d design").fadeIn();
		});
	});

	$(".web").click(function(){
		$("#frame-name").css("background", "url('image/portfolio/frame/web.png')").css("background-size", "cover").css(backgroundTransition);
		$("#frame-text").fadeOut(function(){
			$(this).text("web design").fadeIn();
		});
	});

	$(".graphic").click(function(){
		$("#frame-name").css("background", "url('image/portfolio/frame/graphic.png')").css("background-size", "cover").css(backgroundTransition);
		$("#frame-text").fadeOut(function(){
			$(this).text("Graphic design").fadeIn();
		});
	});

	$(".craft").click(function(){
		$("#frame-name").css("background", "url('image/portfolio/frame/craft.png')").css("background-size", "cover").css(backgroundTransition);
		$("#frame-text").fadeOut(function(){
			$(this).text("craft").fadeIn();
		});
	});

	$(".all").click(function(){
		$("#frame-name").css("background", "url('image/portfolio/frame/all.png')").css("background-size", "cover").css(backgroundTransition);
		$("#frame-text").fadeOut(function(){
			$(this).text("All our works").fadeIn();
		});
	});
	// зміна background при виборі фільтру
});

// parallax mode-------------------------------------------------------------------

var bigParallax = document.getElementById('parallax-layer');
var parallax = new Parallax(bigParallax);

var smallParallax = document.getElementById('small-parallax');
var parallax = new Parallax(smallParallax);

// end parallax mode---------------------------------------------------------------