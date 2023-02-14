var map;
function initMap() {
  // Create a new map
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 38.9637, lng: 35.2433 },
  });

    var url = "https://burcindagistan.com/faultlines.github.io/data/faylar.kml";
  
    var gridLayer = new google.maps.KmlLayer(
    {
       url: url,
       suppressInfoWindows: true,  
       map:map,
       zindex: 0,
       clickable : true
    });
}
