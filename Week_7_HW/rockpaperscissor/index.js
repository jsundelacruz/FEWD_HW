// onClick of button
//   store variable of rock/paper/scissors

var userChoice;
  $('button').click (function() {
  var rock = $('.rock').val();
  var paper = $('.paper').val();
  var scissors = $('.scissors').val();
  
  
  //generate random number for Bot and store computerChoice as rock/paper/scissor
  var computerChoice = Math.random();
    if(0.33>computerChoice>0) {
      computerChoice = ("Rock");
  } else {if (0.34>computerChoice>0.66) {
      computerChoice = ("Paper");
  } else (0.67>computerChoice); {
      computerChoice = ("Scissors");
  }
          
          
 //compare userChoice and computerChoice
var compare (function (userChoice, computerChoice) {          
 if (userChoice === computerChoice) {
   console.log(tie);
 } else if (you === "rock") {
   if (bot === "scissors") {
     console.log("You win!");
   } else {
     console.log("Bot wins!");
   }
   else if (you === "scissors") {
     if (bot ==="paper") {
       console.log("You win!")
     } else if{}
}
   
 }         
          
});
