import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';




//number
// var controller = new ScrollMagic.Controller();
// var scene1 = new ScrollMagic.Scene({triggerElement: '#trigger22', duration: 1400})
//   .addTo(controller)
//   .on('progress', function(e) {
//     let number = (e.progress * 10000).toFixed(0);
//     $('#progress').text(number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
//   });
var controller = new ScrollMagic.Controller();
if ($(window).width() <= '1024') {
  var scene1 = new ScrollMagic.Scene({triggerElement: '#trigger22', duration: 1100})
    .addTo(controller)
    .on('progress', function(e) {
      let number = (e.progress * 10000).toFixed(0);
      $('#progress').text(number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    });
} else{
  var scene1 = new ScrollMagic.Scene({triggerElement: '#trigger22', duration: 1400})
    .addTo(controller)
    .on('progress', function(e) {
      let number = (e.progress * 10000).toFixed(0);
      $('#progress').text(number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    });
}


var tween1 = TweenMax.to('#animate6', 0.9, {opacity: 1, left: 0});
var scene2 = new ScrollMagic.Scene({triggerElement: '#trigger6', duration: '20%'})
  .setTween(tween1)
  .addTo(controller);
var tween2 = TweenMax.to('#animate7', 0.9, {opacity: 1, right: 0});
var scene3 = new ScrollMagic.Scene({triggerElement: '#trigger7', duration: '20%'})
  .setTween(tween2)
  .addTo(controller);
  



scene3.on('leave', function(event) {
  scene1.remove();
  scene2.remove();
  scene3.remove();
});
