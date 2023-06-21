
/*drawer
________________________*/
$(document).ready(function() {
  $('.drawer').drawer();
});

/*scroll
________________________*/
$(function(){
  $('a[href^="#"]').click(function(){
    var header = jQuery('.header').innerHeight();
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust - header ;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

new WOW().init();