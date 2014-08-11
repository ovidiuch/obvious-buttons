$(function() {
  new Dragdealer('flat-slider');

  var globalCounter = 0;
  $('.btn').click(function(e) {
    e.preventDefault();
    $('.global-counter').text(++globalCounter);
  });
});
