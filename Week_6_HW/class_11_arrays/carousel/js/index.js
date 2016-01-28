// Instructions:
// In the images folder, you will find 8 food images (feel free to use other images if you want)
// By default, food1.jpg is shown on the page.

// 1) When a user clicks next, food2.jpg. If they click next again, food3.jpg should be shown and so on.

// 2) When a user clicks back, you should show the previous image. So if you currently showing food3.jpg,
// a click on previous would show food2.jpg. A click on previous again would show food1.jpg

// Start with an array that contains strings of all the image paths.
// You will also need a variable to keep track of which image is currently being shown to the user.

//Bonus1: print out all items in the image array as <li>'s using a loop.
//Bonus2: add an active style to the currently displaying image. 
//Bonus 3: clicking on one of the list items will take you to the correct image, and keep theuser in the right

$(document).ready (function() {

	var images = [
		'images/food1.jpg', 
		'images/food2.jpg', 
		'images/food3.jpg', 
		'images/food4.jpg', 
		'images/food5.jpg', 
		'images/food6.jpg', 
		'images/food7.jpg', 
		'images/food8.jpg'];

	var counter = 0;

	$('.next').click(function() {
	  if (counter < images.length - 1) {
	    counter = counter + 1;
	  }
	  $('.image').attr('src', images[counter]);
	});

	$('.back').click(function() {
	  counter = counter - 1;
	  $('.image').attr('src', images[counter]);
	});

	$.each(images, function(index, value){
		// console.log(images[index]);
		$('.image-list').append('<li>'+images[index]+'</li>')
		// $('.image-list').append('<li>'+value+'</li>') //this works too
	});



}); //end ready
