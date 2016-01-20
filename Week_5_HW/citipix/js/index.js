$(document).ready(function() {

	$('.submit-btn').click(function(e) {
		e.preventDefault();
		var city = $('.city-type').val();

		if (city == "New York City" || city == "NYC") {
			$('body').addClass('nyc');
		} else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
			$('body').addClass('sf');
		} else if (city == "Los Angeles" || city == "LA") {
			$('body').addClass('la');
		} else if (city == "Austin" || city == "ATX") {
			$('body').addClass('austin');
		} else if (city == "Sydney" || city == "SYD") {
			$('body').addClass('la');
		};
	});

}); //end ready 



