import './import/swiper.js';
import './import/map.js';
import './import/input.js';
import './import/rangeslider.js';


//menu-open
$('.menu-open, .pop-up ul a').on('click', function() {
  $('.pop-up').fadeToggle();
  $('.header__logo').fadeIn();
  $('.menu-open').toggleClass('active');
  $('body').toggleClass('modal');
});

//header__logo
$(window).scroll(function() {
  if($(this).scrollTop() > 250) {
    $('.header').addClass('active');
    $('.header__logo').fadeIn();
  } else{
    $('.header').removeClass('active');
    $('.header__logo').fadeOut();
  }
});
//якаря
$('#menu1, #menu').on('click','a', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
