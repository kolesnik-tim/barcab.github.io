import './import/swiper.js';
import './import/map.js';
import './import/pop-up.js';
import './import/input.js';
import './import/scrollmagic.js';
import './import/rangeslider.js';



//header
var lastScrollTop = 0;
$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {   
    $('.header').removeClass('active');
  } else if(st <= 0) {
    $('.header').removeClass('active');
    $('.header__logo').fadeOut();
  } else {
    $('.header').addClass('active');
    $('.header__logo').fadeIn();
  }
  lastScrollTop = st;
});


//якаря
$('#menu1, #menu').on('click','a', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
