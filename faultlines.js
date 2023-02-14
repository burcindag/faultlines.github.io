
var map;
var lines = [
//hat1	
  [
    { lat: 41.34, lng: 32.17 },
    { lat: 41.48, lng: 32.48 },
    { lat: 41.67, lng: 32.77 },
    { lat: 41.79, lng: 32.93 },
    { lat: 42.06, lng: 33.17 },
    { lat: 42.23, lng: 33.37 },
  ],
//hat2	
  [
    { lat: 39.12, lng: 43.38 },
    { lat: 39.21, lng: 43.67 },
    { lat: 39.47, lng: 44.03 },
    { lat: 39.80, lng: 44.47 },
  ],
//hat3
  [
    { lat: 33.08, lng: 35.80 },
    { lat: 33.43, lng: 36.35 },
    { lat: 33.73, lng: 36.93 },
  ],
//hat4
  [
    { lat: 35.13, lng: 33.53 },
    { lat: 35.51, lng: 33.98 },
    { lat: 36.08, lng: 34.59 },
  ],
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.0119, lng: 34.8020 },
    zoom: 6,
  });

  // Recursive function to draw each line
  function drawLine(index) {
    if (index >= lines.length) {
      return;
    }

    var line = [];
    for (var i = 0; i < lines[index].length; i++) {
      line.push(new google.maps.LatLng(lines[index][i].lat, lines[index][i].lng));
    }

    var polyline = new google.maps.Polyline({
      path: line,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    polyline.setMap(map);

    drawLine(index + 1);
  }
  
  // Load the grid KML data
  var kmlLayer = new google.maps.KmlLayer({
    url: "https://burcindagistan.com/faultlines.github.io/grid.kml",
    map: map,
  });

  drawLine(0);
}

