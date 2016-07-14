$(".fa-search").click(function(){
	$("#search").toggle();
});


$(document).ready(function(){
  $('.slider-content').slick({
    dots: true,
 	infinite: true,
 	speed: 300,
 	slidesToShow: 1,
 	adaptiveHeight: true,
 	draggable: true,
 	prevArrow: false,
	nextArrow: false
  });
});

// $(document).ready(function(){
//   $('.event-slider').slick({
//     dots: true,
//   	infinite: true,
//   	speed: 300,
//   	slidesToShow: 2,
//   	slidesToScroll: 2,
//  	adaptiveHeight: true
//   });
// });


// $(document).ready(function(){
//   $('.comments-slider').slick({
//     dots: true,
//  	infinite: true,
//  	speed: 300,
//  	slidesToShow: 1,
//  	adaptiveHeight: true
//   });
// });