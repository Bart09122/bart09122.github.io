$(document).ready(function(){
	var altura = $('.top-bar').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.top-bar').addClass('top-bar-fixed');
		} else {
			$('.top-bar').removeClass('top-bar-fixed');
		}
	});

});