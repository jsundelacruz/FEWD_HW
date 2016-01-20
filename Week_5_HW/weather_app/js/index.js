// When the user clicks the button, run the convert function
document.getElementById('submit').onclick = convert;

function convert() {
	event.preventDefault();

  // Get the value stored in #c
  var c = document.getElementById('c').value;
    
  // Set up a variable to store the fahrenheit temp
  var f;
  
  // Convert F to C
  f = c * (9/5) + 32;  
  
  // Print F temp on the page
  document.getElementById('f').innerHTML = f + "°F";
  
  // Change bg based on temp          
  if (c<=10) { 
    $('body').addClass('cold');
  } else if (c<=20) {
    $('body').addClass('mild');
  } else if (c>20) {
    $('body').addClass('warm');
  };

  $('#c').val("");

};
