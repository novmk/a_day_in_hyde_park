$(document).ready(function() {
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 130) {
      $("canvas").fadeIn();
    } else {
      $("canvas").fadeOut();
    }
  });

});