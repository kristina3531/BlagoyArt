$(document).ready(function() {
	$('.slick-slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		swipeToSlide: '15',
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev"><i></i></button>',
		nextArrow: '<button class="slick-arrow slick-next"><i></i></button>'
	});
});