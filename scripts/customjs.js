
// SHUFFLE WORDS
function Shuffle(words_array) {
	for(var j, x, i = words_array.length; i; j = parseInt(Math.random() * i), x = words_array[--i], words_array[i] = words_array[j], words_array[j] = x);
	return words_array;
};

(function($) {
    $.fn.RNDFadeIn = function(svcType){
		var count = 0; 
		var maxDelay = 1000;
		var minSpeed = 1500;
		var maxSpeed = 1000;
		var fullOpacity = 1;

		$('#RNDM span').each(function(){
			var delay = Math.ceil(Math.random() * maxDelay);
			var speed = maxSpeed + Math.ceil(Math.random() * (minSpeed - maxSpeed));
			count++;
			$(this).delay(delay).fadeTo(speed, fullOpacity, function(){
				count--;
			});
		});
    };
})(jQuery);

var words = ["<span>Word</span>", "<span>Order</span>", "<span>in</span>", "<span>the</span>", "<span>Left</span>", "<span>Periphery</span>"]; // array
var titlernd = "";
var title = "<span style='opacity: 0'>Word</span> <span style='opacity: 0'>Order</span> <span style='opacity: 0'>in</span> <span style='opacity: 0'>the</span> <span style='opacity: 0'>Left</span> <span style='opacity: 0'>Periphery</span>";

// NAVBAR ANIMATION
$(document).ready(function(){

	// jQuery to dump out new values to element with ID #WOLP2017
	Shuffle(words);
	$(function() {
		for (var i=0;i<words.length;i++) {
			//$("#dump").append(words[i]);
			titlernd=titlernd+words[i]+" ";
		}

		$( "#RNDM" )
		.append("<small>" + titlernd + "</small>")
		.delay(1000)
		.fadeTo(3000,0);

		setTimeout(function() {
			$( "#RNDM" )
			.empty().html("<small>" + title + "</small>")
			.fadeTo(0,1)
			.RNDFadeIn();
	    }, 4000);
	});


	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 70});   

	// Add smooth scrolling on all links inside the navbar
	$("#WSNavbar a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			console.log(this.hash);
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top-30
				}, 800);
		}  // End if
	});
});