$(document).ready(function() {
  var open = false;
  $('button.lines-button.x2').on('click', function(e) {
    e.preventDefault();
    if(!open){
      $('.main-menu').fadeIn(800);
      $('body').addClass('noscroll');
      $(this).addClass('close');
      $('.logo').addClass('menu-logo');
      open = true;
    }
    else{
      $(this).removeClass('close');
      $('body').removeClass('noscroll');
      $('.main-menu').fadeOut(800);
      $('.logo').removeClass('menu-logo');
      open = false;
    }
  });

  $('.menu-back').on('click', function(e) {
    e.preventDefault(); 
    if (open) {
      $('button.lines-button.x2').removeClass('close');
      $('body').removeClass('noscroll');
      $('.main-menu').fadeOut(800);
      $('.logo').removeClass('menu-logo');
      open = false;

    }
  });





})