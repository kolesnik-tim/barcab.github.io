import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';



//step






//number
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: '#trigger22', duration: 1400})
  .addTo(controller)
  .on('progress', function(e) {
    $('#progress').text((e.progress * 10000).toFixed(0));
  });


var tween = TweenMax.to('#animate6', 0.9, {opacity: 1, left: 0});
var scene = new ScrollMagic.Scene({triggerElement: '#trigger6', duration: '20%'})
  .setTween(tween)
  .addTo(controller);
var tween = TweenMax.to('#animate7', 0.9, {opacity: 1, right: 0});
var scene = new ScrollMagic.Scene({triggerElement: '#trigger7', duration: '20%'})
  .setTween(tween)
  .addTo(controller);
  




