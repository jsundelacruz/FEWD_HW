//Use function to wait for page to load 
$(document).ready(function(){
	//Array to store city options
	var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD']

	//For loop to populate the select menu with the list of cities
	 for (var x = 0; x < cities.length; x++) { //loop for number of objects in cities array
	 	var selectCity = cities[x]; //store a variable city 
	 	$('.city-type').append('<option value=' + selectCity + '>' + selectCity + '</option>') //add city option to the dropdown menu 
	 }

	//Listen for user to select a city from the menu
	$('.city-type').change(displayCityPicture);
	
	//Function to store user input and change background based on entry
	function displayCityPicture(){
	
		//A "city" variable stores the value/user input from .class-type form
		var city = $('.city-type').val();

		//Controls what to display as background-image based on the user input, using .attr()
		if (city == 'NYC') {
			$('body').attr('class','nyc');
			}
		else if (city == 'SF'){
			$('body').attr('class','sf');
			}
		else if (city == 'LA'){
			$('body').attr('class','la');
			}
		else if (city == 'ATX'){
			$('body').attr('class','austin');
			}
		else if (city == 'SYD'){
			$('body').attr('class','sydney');
			}

	}	
}); //end ready 
