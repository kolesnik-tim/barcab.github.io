import Swiper from 'swiper';


var swiper = new Swiper('.swiper-gallery', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-gallery-next',
    prevEl: '.swiper-gallery-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



var swiper = new Swiper('.swiper-reliability', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-reliability-next',
    prevEl: '.swiper-reliability-prev',
  },
});
