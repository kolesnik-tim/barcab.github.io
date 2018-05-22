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


var swiper = new Swiper('.swiper-delivery', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-delivery-next',
    prevEl: '.swiper-delivery-prev',
  },
  breakpoints: {
    1090: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    800: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    540: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  },
});


var swiper = new Swiper('.swiper-reliability', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-reliability-next',
    prevEl: '.swiper-reliability-prev',
  },
  breakpoints: {
    1090: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 1,
    },
  },
});
