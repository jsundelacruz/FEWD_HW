$("a").click(function() {
  event.preventDefault();
  $("<div>")
    .append("default" + event.type + "prevented")
    .appendTo("#log");
});

$(document).ready(function() {
});

$('.readmore').click(function() {
  $('.extra-blog-text hide').slideDown(500);
  $('.extra-blog-text hide').show();
  $('.readless').show();
  $('.readmore').hide();
});

$('.readless').click(function) {
  $('.extra-blog-text').hide();
  $('.extra-blog-text').slideUp(500);
  $('.readless').hide();
  $('.readmore').show();
}

$('.learnmore').click(function(){
  $('.learnmoretext').show();
)}; 
