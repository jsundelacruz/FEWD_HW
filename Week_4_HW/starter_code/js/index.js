$(document).ready(function() {


$("a").click(function(event) {
  event.preventDefault();
});


$('.readmore').click(function() {
  $('.readless').show();
  $('.readless').slideDown();
  $('.show-this-on-click').slideDown();
  $('.show-this-on-click').show();
  $('.readmore').hide();
});


$('.readless').click(function() {

  $('.show-this-on-click').slideUp();
  $('.readless').hide();
  $('.readmore').show();

});

$(".learnmore").click(function(){
  $(".learnmoretext").show;
  $(".learnmoretext").slideDown();
  $(".learnmore").hide();
});

}); //end ready
