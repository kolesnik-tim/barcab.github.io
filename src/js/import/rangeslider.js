import slider from 'rangeslider.js';


$('input[type="range"]').rangeslider({
  polyfill: false,
  onSlide: function() {
    ProductSlider();
  },
});


let list;
$.getJSON('baraban.json', function(data) {
  list = data;
});

function ProductSlider() {
  let inputValue;
  let id;

  inputValue = $('input').val();
  list.forEach(function(item, i) {
    i = i + 1;
    let barabanH = item.d / 10;
    if(+inputValue === i) {
      $('.title').text(item.title);
      $('.title1').text(item.title1);
      $('.d').text(item.d);
      $('.l').text(item.l);
      $('.d1').text(item.d1);
      $('.s').text(item.s);
      $('.count').text(item.count);
      $('.barabanH').css('height', barabanH);
    }
  });
}
