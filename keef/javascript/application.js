$(document).ready(function(){
	var flag = 0;
 	var animateTime = 1000;
 	var windowHeight = $(window).height();
 	var windowWidth = $(window).width();

 	// плавний якір
	$("#header-menu div").on("click", "a", function(event){
		event.preventDefault();

		var idMenu = $(this).attr("href")
		
		var top = $(idMenu).offset().top;


		$("body, html").animate({scrollTop: top}, 1500);
	});

	$("#vertical-nav div").on("click", "a", function(event){
		event.preventDefault();

		var idMenu = $(this).attr("href")
		
		var top = $(idMenu).offset().top;

		$("body, html").animate({scrollTop: top}, 1500);
	});
	// end плавний якір


 	// висота header
 		if (windowWidth >= 1650) {
 			$(".header").css("height", windowHeight);
		 	$(".header-wrapper").css("height", windowHeight);
		 	$(".header-slider").css("height", windowHeight);
		 	$(".slide").css("height", windowHeight);

		 	$(".lang-wrapper").css("height", windowHeight * 83 / 100);
 		}
 	// висота header


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

	$(".see-all-show").click(function(){
		$(".see-all-visibility").css("display", "none");
		$(".portfolio").css("height", "100%").css("overflow", "visible");
		$(window).trigger('resize').trigger('scroll');
	});

	$(".up-btn-show").click(function(){
		$(".portfolio").css("height", doubleHeight).css("overflow", "hidden");
		$(".see-all-visibility").css("display", "block");
		$(window).trigger('resize').trigger('scroll');
	});
	// end portfolio height----------------------------------------------------

	// bxslider main page------------------------------------------------------
	var bxslider = $(".header-slider").bxSlider({
		auto: true,
		pause: 6000,

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

  			$(".text-header").css("top", -4556);

			$(".text-header").stop().animate({
			    opacity: 1,
			    top: "0"
			  }, animateTime).promise().done(
			  function (){
				console.log(flag);

			  	console.log("new");
			  	if(flag === 1) {
				  	flag = 0;
			  		console.log("complete new");
				    $(".fs-text-section").animate({
					    opacity: 1,
					    left: "0",
				  	}, animateTime);
				  	$(".fs-header-li").animate({
				  		opacity: 1,
				  		left: "0",
				  	}, animateTime);
				  	$(".fs-lang-menu").animate({
				  		opacity: 1,
				  		"margin-bottom": "0",
				  	}, animateTime);
			  	} else {
				    flag += 1;
				}
			}
			);

	    }, 
	    onSlidePrev: function($slideElement, oldIndex, newIndex){
  			this.switch($slideElement);
	    },
	    onSliderLoad: function(currentIndex){

	    	// Випадання елементів при загрузці сторінки
			$(".fs-text-header").stop().animate({
			    opacity: 1,
			    top: "0"
			  }, animateTime).promise().done(
			  function (){
				console.log(flag);

			  	console.log(".fs-text-header");
			  	if(flag === 1) {
				  	flag = 0;
			  		console.log("complete .fs-text-header");
				    $(".fs-text-section").animate({
					    opacity: 1,
					    left: "0",
				  	}, animateTime);
				  	$(".fs-header-li").animate({
				  		opacity: 1,
				  		left: "0",
				  	}, animateTime);
				  	$(".fs-lang-menu").animate({
				  		opacity: 1,
				  		"margin-bottom": "0",
				  	}, animateTime);
			  	} else {
				    flag += 1;
				}
				}
			);

			$(".fs-text-footer").stop().animate({
			    opacity: 1,
			    bottom: "0"
			  }, animateTime).promise().done(function (){
				console.log(flag);

			  	console.log(".fs-text-header");
			  	if(flag === 1) {
				  	flag = 0;
			  		console.log("complete .fs-text-header");
				    $(".fs-text-section").animate({
					    opacity: 1,
					    left: "0",
				  	}, animateTime);
				  	$(".fs-header-li").animate({
				  		opacity: 1,
				  		left: "0",
				  	}, animateTime);
				  	$(".fs-lang-menu").animate({
				  		opacity: 1,
				  		"margin-bottom": "0",
				  	}, animateTime);
			  	} else {
				    flag += 1;
				}
			}
			);

			$(".fs-header-logo").stop().animate({
				"margin-top": "0",
				opacity: 1
			  }, animateTime).promise().done(
			  function (){
				console.log(flag);

			  	console.log(".fs-text-header");
			  	if(flag === 1) {
				  	flag = 0;
			  		console.log("complete .fs-text-header");
				    $(".fs-text-section").animate({
					    opacity: 1,
					    left: "0",
				  	}, animateTime);
				  	$(".fs-header-li").animate({
				  		opacity: 1,
				  		left: "0",
				  	}, animateTime);
				  	$(".fs-lang-menu").animate({
				  		opacity: 1,
				  		"margin-bottom": "0",
				  	}, animateTime);
			  	} else {
				    flag += 1;
				}
				}
			);

			$(".bx-controls-direction a").stop().animate({
				opacity: 1,
			    top: "94.5%"
			  }, animateTime).promise().done(
			  function (){
				console.log(flag);

			  	console.log(".fs-text-header");
			  	if(flag === 1) {
				  	flag = 0;
			  		console.log("complete .fs-text-header");
				    $(".fs-text-section").animate({
					    opacity: 1,
					    left: "0",
				  	}, animateTime);
				  	$(".fs-header-li").animate({
				  		opacity: 1,
				  		left: "0",
				  	}, animateTime);
				  	$(".fs-lang-menu").animate({
				  		opacity: 1,
				  		"margin-bottom": "0",
				  	}, animateTime);
			  	} else {
				    flag += 1;
				}
				}
			);

			$(".fs-lang-wrapper").stop().animate({
				opacity: 1,
			    right: "3.65%"
			  }, animateTime).promise().done(
			  function (){
				console.log(flag);

			  	console.log(".fs-text-header");
			  	if(flag === 1) {
				  	flag = 0;
			  		console.log("complete .fs-text-header");
				    $(".fs-text-section").animate({
					    opacity: 1,
					    left: "0",
				  	}, animateTime);
				  	$(".fs-header-li").animate({
				  		opacity: 1,
				  		left: "0",
				  	}, animateTime);
				  	$(".fs-lang-menu").animate({
				  		opacity: 1,
				  		"margin-bottom": "0",
				  	}, animateTime);
			  	} else {
				    flag += 1;
				}
				}
			);
	    	// Випадання елементів при загрузці сторінки




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

	// добавляння active class до меню і фільтрів----------------------------
	$(".filter-menu").on("click", ".filter-block", function(e){
		$(this).siblings("li").removeClass("filter-active");
		$(this).addClass("filter-active");
	});

	$(".vert-ul").on("click", ".vert-li", function(e){
		$(this).siblings("li").removeClass("active-lang");
		$(this).addClass("active-lang");
	});
	// end добавляння active class до меню і фільтрів------------------------

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

	// Second-page scrolling
	var borderContainer = $(".border-container");
	var borderContainerWidth = $(".main-image-info").width();
	var imgHoverBlock = $(".image-hover-href");
	var mainImgWidth = $(".portfolio-main-image").width();
	var imgHref = $(".main-topic-href");
	var imgHoverStyle = {
		"position": "fixed",
		"top": "0",
		"width": mainImgWidth,
		"opacity": "1",
		"transition": "opacity .6s"
	}
	


	if ($(this).scrollTop() < 220) {
		imgHoverBlock.css("position", "absolute").css("opacity", "0").css("transition", "opacity .3s");
	}
	if ($(this).scrollTop() > 220) {
		imgHoverBlock.css(imgHoverStyle);
	} 

	$(window).on("scroll", function(e) {
		 if ($(this).scrollTop() < 220) {
			imgHoverBlock.css("position", "absolute").css("opacity", "0").css("transition", "opacity .3s");
		}
		if ($(this).scrollTop() > 220) {
			imgHoverBlock.css(imgHoverStyle);
		} 

	});
	// END second-page scrolling

	// parallax mode-------------------------------------------------------------------

	$(".inside-layer").parallax({
		imageSrc: 'image/parallax/parallaximg.png',
		naturalWidth: 1455,
		naturalHeight: 730,
		zIndex: -10
	});
	// end parallax mode---------------------------------------------------------------

	$(".border-container").stick_in_parent();

});



