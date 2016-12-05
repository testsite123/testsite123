$(document).ready(function(){

	var windowWidth = $(window).width();

// Header---Header---Header---Header---Header---Header---
	$(".slider").bxSlider({
		auto: true,
		pause: 4000
	});


	// header-block margin
		$(window).resize(function(){
			windowWidth = $(window).width();
			headerBlockWidth = $(".header-block").width();

			if (windowWidth < 1300) {
				$(".header-block").css("margin-left", -windowWidth/2);
			} else {
				$(".header-block").css("margin-left", -headerBlockWidth / 2);
			}
		});
	// end header-block margin

	// плавний якір
	$(".menu li, .footer-menu li").on("click", "a", function(event){
		event.preventDefault();

		var idMenu = $(this).attr("href")
		
		var top = $(idMenu).offset().top;


		$("body, html").animate({scrollTop: top}, 1500);
	});
	// end плавний якір

// Header---Header---Header---Header---Header---Header---

// Portfolio---Portfolio---Portfolio---Portfolio---Portfolio---
	$(".open-projects").click(function(){
		$(".portfolio-open-projects").css("display", "none");
		$(".portfolio-block-hidden, .resizer-hidden").css("display", "block");
		$(window).trigger('resize').trigger('scroll');
	});

	$(".close-projects").click(function(){
		$(".portfolio-open-projects").css("display", "block");
		$(".portfolio-block-hidden, .resizer-hidden").css("display", "none");
		$(window).trigger('resize').trigger('scroll');

		$("html, body").animate({
          	scrollTop: $(".portfolio").offset().top
    	}, 1500);
	});
// Portfolio---Portfolio---Portfolio---Portfolio---Portfolio---

// Services---Services---Services---Services---Services---

	// changing information on click 
	$(".categories-wrapper").children().click(function(){
		for (var i = 0; i < $(".categories-description").children().eq(0).children().eq(0).children().length; i++) {
			if( $(".categories-description").children().eq(0).children().eq(0).children().eq(i).hasClass($(this)[0].id + "-description") ) {
				if ($(".categories-description").children().eq(0).children().eq(0).children().eq(i).hasClass("description-hidden")) {
					$(".categories-description").children().eq(0).children().eq(0).children().eq(i).toggleClass("description-hidden");
				}
				
			} else {
				if ($(".categories-description").children().eq(0).children().eq(0).children().eq(i).hasClass("description-hidden") !== true) {
					$(".categories-description").children().eq(0).children().eq(0).children().eq(i).addClass("description-hidden");
				}
			}
		}

		$(".categories-description").children().eq(0).children().eq(0).css("top", 0);
		$(globalCustomScroll).mCustomScrollbar("update");

	});
	// changing information on click 

	// styling scroll
	
	// styling scroll

// Services---Services---Services---Services---Services---

// Contacts---Contacts---Contacts---Contacts---Contacts---
	$(".parallax-layer").parallax({
		imageSrc: 'image/parallax/parallax.png'
	});

	// up-btn
		$(window).scroll(function(){
			if ($(this).scrollTop() > 500) {
			$('.scrollup').fadeIn();
			} else {
			$('.scrollup').fadeOut();
			}
			});
			 
			$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
			return false;
			});
	// end up-btn

	// modal slider
	$(".big-img").bxSlider({
	  pagerCustom: "#small_pictures"
	});
	// end modal slider
// Contacts---Contacts---Contacts---Contacts---Contacts---

// MODAL WINDOW------------------
	// Get the modal
	var modal = $("#myModal");

	// Get the button that opens the modal
	var btn = $(".portfolio-block");

	// Get the <span> element that closes the modal
	var span = $(".close-btn")[0];

	// When the user clicks on the button, open the modal 
	$(btn).click(function(){
		$(modal).css("opacity", "1").css("visibility", "visible");
	});

	// When the user clicks on <span> (x), close the modal
	$(span).click(function(){
		$(modal).css("opacity", "0").css("visibility", "hidden");
	});

// END MODAL WINDOW-----------------

});





// MODAL WINDOW------------------

	// Get the modal
	var modal = document.getElementById("myModal");

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.opacity = "0";
	  		modal.style.visibility = "hidden";
	    }
	}

// END MODAL WINDOW-----------------