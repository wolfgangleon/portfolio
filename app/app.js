$(document).ready(function(){

	// Header screen sizing --->
	var screenHeight = $(window).height();

	$('.portrait-thumbnail').height( screenHeight ) //Set screen size

	$('.masthead-title').css('top', screenHeight/3.5 ) // Center title 

	$('#go-down').css('top', screenHeight- 85 ).on('click', function() { // center glyphicon to go down
		$('html, body').animate({ 
	      scrollTop: $('#content').offset().top 
	  	}, 1500);
	}); // <----

	// Navigation Bar ---> 
	$('#menu-button').on('click', function(){
	    $('#nav-bar').slideToggle(800);
	});

	$('#contact-link').on('click', function() {
		$('html, body').animate({ 
	      scrollTop: $('#contact').offset().top 
	  	}, 2800);
	});

	$('#aboutMe-link').on('click', function() {
		$('html, body').animate({ 
	      scrollTop: $('#about-me').offset().top 
	  	}, 2800);
	}); // <----

	// Carousel --->
	$('#carousel-portrait, #carousel-work-skills').carousel({
		interval:5000
	})

	

	
	


}); //End document script