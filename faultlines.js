var map;
function initMap() {
  // Create a new map
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 38.9637, lng: 35.2433 },
  });
/*
  // Load fault line coordinates directly from text file
  fetch('faults.txt')
    .then(response => response.text())
    .then(text => {
      var lines = text.split('\n');

      // Draw fault lines
      for (var i = 0; i < lines.length; i++) {
        var line = new google.maps.Polyline({
          path: google.maps.geometry.encoding.decodePath(lines[i]),
          strokeColor: 'red',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        line.setMap(map);
      }
    });
  */
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
