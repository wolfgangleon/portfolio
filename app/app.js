$(document).ready(function(){


	$('.portrait-thumbnail').height( $(window).height() )

	$('#menu-button').on('click', function(){
	    $('#nav-bar').slideToggle(800);
	});

	$('#carousel-portrait, #carousel-work-skills').carousel({
		interval:4000
	})

	$('#go-down').on('click', function() {
		$('html, body').animate({ 
	      scrollTop: $('#content').offset().top 
	  	}, 1500);
	});

	$('#contact-link').on('click', function() {
		$('html, body').animate({ 
	      scrollTop: $('#contact').offset().top 
	  	}, 1500);
	});

	$('#aboutMe-link').on('click', function() {
		$('html, body').animate({ 
	      scrollTop: $('#about-me').offset().top 
	  	}, 1500);
	});
	


}); //End document script