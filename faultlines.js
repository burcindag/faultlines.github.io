
var map;
var lines = [
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lng: 34.8020, lat: 39.0119 },
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

  drawLine(0);

  /*
  var url = "https://burcindagistan.com/faultlines.github.io/grid.kml";
  
  var gridLayer = new google.maps.KmlLayer(
  {
     url: url,
     suppressInfoWindows: true,  
     map:map,
     zindex: 0,
     clickable : false
  });
  */
  // fay hatları
  var urlF = "https://burcindagistan.com/faultlines.github.io/faults.kml";
  
  var faultlinesLayer = new google.maps.KmlLayer(
  {
     url: urlF,
     suppressInfoWindows: true,  
     map:map,
     zindex: 10,
     clickable : false
  });
  
}

