$(document).ready(function() {
  var open = false;
  $('button.lines-button.x2').on('click', function(e){
    e.preventDefault();
    if(!open){
      $('.main-menu').fadeIn(800);
      $(this).addClass('close');
      open = true;
    }
    else{
      $(this).removeClass('close');
      $('.main-menu').fadeOut(800);
      open = false;
    }
  });



})