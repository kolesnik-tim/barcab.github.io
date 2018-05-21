import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';

var controller = new ScrollMagic.Controller();
var tween = TweenMax.to('#animate, #animate-text', 0.9, {opacity: 1, left: 0, top: 0});
var scene = new ScrollMagic.Scene({triggerElement: '#trigger', duration: '20%'})
  .setTween(tween)
  .addTo(controller);
var tween = TweenMax.to('#animate1, #animate-text1', 0.9, {opacity: 1, right: 0, top: 0});
var scene = new ScrollMagic.Scene({triggerElement: '#trigger1', duration: '20%'})
  .setTween(tween)
  .addTo(controller);
var tween = TweenMax.to('#animate2, #animate-text2', 0.9, {opacity: 1, left: 0, top: 0});
var scene = new ScrollMagic.Scene({triggerElement: '#trigger2', duration: '20%'})
  .setTween(tween)
  .addTo(controller);
var tween = TweenMax.to('#animate3, #animate-text3', 0.9, {opacity: 1, right: 0, top: 0});
var scene = new ScrollMagic.Scene({triggerElement: '#trigger3', duration: '20%'})
  .setTween(tween)
  .addTo(controller);
var tween = TweenMax.to('#animate4, #animate-text4', 0.9, {opacity: 1, left: 0, top: 0});
var scene = new ScrollMagic.Scene({triggerElement: '#trigger4', duration: '20%'})
  .setTween(tween)
  .addTo(controller);
var tween = TweenMax.to('#animate5, #animate-text5', 0.9, {opacity: 1, right: 0, top: 0});
var scene = new ScrollMagic.Scene({triggerElement: '#trigger5', duration: '20%'})
  .setTween(tween)
  .addTo(controller);







var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: '#trigger22', duration: 1300})
  .addTo(controller)
  .on('progress', function(e) {
    $('#progress').text((e.progress * 10000).toFixed(0));
  });

  
