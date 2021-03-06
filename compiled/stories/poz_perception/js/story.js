$(document).ready(function(){
	
	// NAV BAR STICKY
	$('#poz-nav').waypoint({
		handler: function(direction) {
		
			if (direction == "down") {
				$('#poz-nav').addClass('poz-nav-sticky');
			} else if (direction == "up") {
				$('#poz-nav').removeClass('poz-nav-sticky');
			}
		 
		},
		offset:120
	});
	$('a').smoothScroll({
		offset: -100
	});
	
	// THE BUTTONS WORK IN REVERSE ORDER


	// THESE ARE BUTTON-SPECIFIC FUNCTIONS TO MAKE THE NARRATIVES APPEAR
	
	$( "#johnR-btn" ).click(function() {
		hideStories();
	  $( "#johnR" ).fadeIn( "slow", function() {
	  	console.log("This is John's story.");
	  });
	});

	$( "#eddieG-btn" ).click(function() {
		hideStories();
	  $( "#eddieG" ).fadeIn( "slow", function() {
	  	console.log("This is Eddie's story.");
	  });
	});

	$( "#damonJ-btn" ).click(function() {
		hideStories();
	  $( "#damonJ" ).fadeIn( "slow", function() {
	  	console.log("This is Damon's story.");
	  });
	});

	$( "#jimP-btn" ).click(function() {
		hideStories();
	  $( "#jimP" ).fadeIn( "slow", function() {
	  	console.log("This is Jim's story.");
	  });
	});

	$( "#hadeisS-btn" ).click(function() {
		hideStories();
	  $( "#hadeisS" ).fadeIn( "slow", function() {
	  	console.log("This is Hadeis' story.");
	  });
	});

	$( "#philC-btn" ).click(function() {
		hideStories();
	  $( "#philC" ).fadeIn( "slow", function() {
	  	console.log("This is Phil's story.");
	  });
	});

	// THIS IS TO MAKE THE BLANK SPACE DISAPPER
	// NOT SURE WHAT THIS IS FOR - ZACH
	$( ".storyBTN" ).click(function() {
	  $( "#blankSpace" ).hide( "fast", function() {
	    console.log("Blank space hidden.");
	  });
	});

	// THIS IS TO MAKE THE OTHER STORIES DISAPPEAR
	var the_stories = ["#johnR", "#eddieG","#damonJ","#jimP","#hadeisS","#philC"];
	
	
	function hideStories() {
		for (i = 0; i < the_stories.length; i++) { 
			$(the_stories[i]).fadeOut("fast");
		}
	}

});
