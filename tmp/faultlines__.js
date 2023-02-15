
var map;

// Read fault line coordinates from file
var lines = [];
fetch('faults.txt')
  .then(response => response.text())
  .then(text => {
    var lines = text.split('\n');

    // Initialize the map and draw fault lines
    initMap();
  });

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


  var url = "https://burcindagistan.com/faultlines.github.io/data/grid.kml";
  
  var gridLayer = new google.maps.KmlLayer(
  {
     url: url,
     suppressInfoWindows: true,  
     map:map,
     zindex: 0,
     clickable : false
  });
  
  /*
  // fay hatları
  var urlF = "https://burcindagistan.com/faultlines.github.io/data/faults.kml";
  
  var faultlinesLayer = new google.maps.KmlLayer(
  {
     url: urlF,
     suppressInfoWindows: true,  
     map:map,
     zindex: 2,
     clickable : false
  });*/
}

