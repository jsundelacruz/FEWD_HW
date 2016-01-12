//Implement the red light using jQuery. Don't forget to add the script tags.


$('.stop-button').click(function(){
	clearLights();
	$('.stop-light').css({
		backgroundColor: 'yellow'
	});

});

$('.slow-button').click(function(){
	clearLights();
	$('.slow-light').css({
		backgroundColor: 'yellow'
	});
});

$('.go-button').click(function(){
	clearLights();
	$('.go-light').css({
		backgroundColor: 'green'
	});
});

function clearLights() {
	$('.bulb').css({
		backgroundColor: 'black'
	});
};