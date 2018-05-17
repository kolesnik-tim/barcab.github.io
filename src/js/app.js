import './import/swiper.js';
import './import/rangeslider.js';


// //menu-open
// $('.menu-open').on('click', function() {
//   $('.menu__mobile').fadeIn();
//   $('.menu--bg').fadeIn();
// });
// $('.menu--bg, .close, .menu__mobile a').on('click', function() {
//   $('.menu__mobile').fadeOut();
//   $('.menu--bg').fadeOut();
// });


//Карта
google.maps.event.addDomListener(window, 'load', init);
        
function init() {
  var coordinates = {lat: 56.017667, lng: 38.131931};
  var mapOptions = {
    zoom: 10.5,
    center: coordinates,
  };
  
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var image = 'img/pin.png';
  var beachMarker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
  });
}
