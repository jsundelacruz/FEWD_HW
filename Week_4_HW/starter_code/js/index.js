$(document).ready(function() {


$("a").click(function() {
  event.preventDefault();
  $("<div>")
    .append("default" + event.type + "prevented")
    .appendTo("#log");
});


$('.readmore').click(function() {
  $('.readless').show();
  $('.readless').slideDown();
  $('.show-this-on-click').slideDown();
  $('.show-this-on-click').show();
  $('.readmore').hide();
});


$('.readless').click(function() {
  // $('.readmore').show();  
  $('.show-this-on-click').slideUp();
  $('.readless').hide(); 

  setTimeout(function(){
    $('.readmore').show()}
    , 350)
  
});

$(".learnmore").click(function(){
  $(".learnmoretext").show; 
  $(".learnmoretext").slideDown();
  $(".learnmore").hide();
});

}); //end ready





