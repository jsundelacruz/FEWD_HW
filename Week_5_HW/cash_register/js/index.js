// var total=0;
// onSubmit
// 	var newVal = inputVal
// 	appendToList (newVal)
// 	total = total + newVal
// 	totalElement.text(total)
// 	clearInput();


$(document).ready(function() {

	var total = 0;
	
	$('.entry').submit(transactionSubmit);

	function transactionSubmit(event) {
			event.preventDefault();

			var newVal = $('.new-entry').val();

			newVal = parseFloat(newVal); 
			// var newVal = parseFloat($('.new-entry').val());

			// console.log(newVal);

			$('.entries').append('<li>'+ '$' + newVal + '</li>');

			total = total + newVal; //total += newVal;

			formatCurrency(total);

			$('.total').text(total);

			$('.new-entry').val('');
	};

	function formatCurrency(number) {
		$('.total').text('$');
		//do code to format currency
	};



}); //end ready 
