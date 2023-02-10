var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.0119, lng: 34.8020 },
    zoom: 6,
  });

/*
  // Load the fault line data - USGS bad data
  var faultLines = [
    // North Anatolian Fault
    { lat: 41.48, lng: 32.48 },
    { lat: 41.67, lng: 32.77 },
    { lat: 41.79, lng: 32.93 },
    { lat: 42.06, lng: 33.17 },
    { lat: 42.23, lng: 33.37 },
    // East Anatolian Fault
    { lat: 39.12, lng: 43.38 },
    { lat: 39.21, lng: 43.67 },
    { lat: 39.47, lng: 44.03 },
    { lat: 39.80, lng: 44.47 },
    // Dead Sea Fault
    { lat: 33.08, lng: 35.80 },
    { lat: 33.43, lng: 36.35 },
    { lat: 33.73, lng: 36.93 },
    // Cyprus Arc Fault
    { lat: 35.13, lng: 33.53 },
    { lat: 35.51, lng: 33.98 },
    { lat: 36.08, lng: 34.59 },
  ];
  */
  // MTA data
    var faultLines = [
		{ lat: 36.252565 ,lng: 36.254883},
		{ lat: 37.317395 ,lng: 36.958008},
		{ lat: 37.839671 ,lng: 38.045654},
		{ lat: 38.410186 ,lng: 41.033936},
		{ lat: 38.933506 ,lng: 42.648926},
    ];
  
  // Style the fault lines
  var faultLinePath = [];
  for (var i = 0; i < faultLines.length; i++) {
    faultLinePath.push(new google.maps.LatLng(faultLines[i].lat, faultLines[i].lng));
  }

  var faultLine = new google.maps.Polyline({
    path: faultLinePath,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  // Add the fault lines to the map
  faultLine.setMap(map);
}
