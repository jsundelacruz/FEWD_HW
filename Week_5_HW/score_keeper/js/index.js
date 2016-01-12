$(document).ready(function() {
	var total = 0;

	$('.zero').click(function() {
		total = 0;
		console.log(total);
		$('.result').text(total);
	}); //end zero click

	$('.add5').click(function() {
		total = total+5;
		console.log(total);
		$('.result').text(total);
	}); //end add5 click

	$('.add10').click(function() {
		total = total+10;
		console.log(total);
		$('.result').text(total);
	}); //end add10 click

	$('.sub1').click(function() {
		total = total-1;
		console.log(total);
		changeText(total);
	}); //end sub1 click
}); //end ready 


function changeText(newText) {
	$('.result').text(total);
}