//menu-open
$('.menu-open, .menu ul a').on('click', function() {
  $('.menu').fadeToggle();
  $('.header__logo').fadeIn();
  $('.menu-open').toggleClass('active');
  $('body').toggleClass('modal');
});

//pop-up
$('[data-pop]').on('click', function() {
  let id = $(this).attr('href');
  let link = $(this).attr('pop-up-link');
  let video = $(this).attr('pop-up__video');
  $('.pop-up__content img').attr('src', link);
  $('.pop-up iframe').attr('src', video);
  $(id).fadeIn();
  $('.pop-up__bg').fadeIn();
  $('body').addClass('modal');
});

$('.pop-up__close, .pop-up__bg').on('click', function() {
  $('.pop-up').fadeOut();
  $('.pop-up__bg').fadeOut();
  $('body').removeClass('modal');
  $('.pop-up iframe').attr('src', '');
});
