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
	});

	$('#work-link').on('click', function() {
		$('html, body').animate({ 
	      scrollTop: $('#work').offset().top 
	  	}, 2800);
	}); // <----

	$('#menu-button').on('click',function(){
		$('#menu-button h3').toggleClass('hidden')
	})

	// Carousel --->

	$('#carousel-portrait').carousel({
		interval:4000
	});


	$('#carousel-work-skills').carousel({
		interval:5000
	}).on('click', function(){
		$(this).carousel('next');
	});


	//masonry for latest work --->
	var container = $('#project-thumbnail');
	
	container.imagesLoaded( function(){ 
		container.masonry({
	 		columnWidth:410,
	    	itemSelector: '.item',
	    	isFitWidth: true
		});
	});

	if ( $(window).width() < 1001 ) {
		$('#carousel-work-skills .carousel-inner').children().removeClass('row-height');
	}



}); //End document script