
// //Карта

google.maps.event.addDomListener(window, 'load', init);
        
function init() {
  var coordinates = {lat: 59.631558, lng: 33.525350};
  var mapOptions = {
    zoom: 16,
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
