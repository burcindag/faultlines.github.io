var map;
function initMap() {
  // Create a new map
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 38.9637, lng: 35.2433 },
  });

    var url = "https://burcindagistan.com/faultlines.github.io/data/faultlines.kml";
  
    var faultlinesLayer = new google.maps.KmlLayer(
    {
       url: url,
       suppressInfoWindows: true,  
       map:map,
       zindex: 0,
       clickable : true
    });
}
function myLocation() {
  // Create a new map centered on your current location
  navigator.geolocation.getCurrentPosition(function(position) {
    var myLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
    /*map = new google.maps.Map(document.getElementById('map'), {
      center: myLocation,
      zoom: 15
    });*/
    // Add a marker at your current location
    var marker = new google.maps.Marker({
      position: myLocation,
      map: map,
    });
    map.setCenter(myLocation);
    map.setZoom(15);
  });
}
