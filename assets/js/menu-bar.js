$(document).ready(function(){
	var altura = $('.header-nav').offset().top=(100);
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.header-nav').addClass('header-nav-fixed');
		} else {
			$('.header-nav').removeClass('header-nav-fixed');
		}
	});

});