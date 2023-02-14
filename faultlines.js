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
	{ lat: 42.2062157967, lng: 40.267455139}, 
	{ lat: 42.2176372096, lng: 40.2731658454}, 
	{ lat: 42.2266131125, lng: 40.2808262732}, 
	{ lat: 42.2426030905, lng: 40.2876791209}, 
	{ lat: 42.2532630758, lng: 40.2968162512}, 
	{ lat: 42.2642746453, lng: 40.3055265151}, 
	{ lat: 42.2690335673, lng: 40.3159961435},	
	//hat1    
	{ lat: 20.4774290949, lng: 38.1617272272}, { lat: 20.4778703016, lng: 38.1607142454}, { lat: 20.4783652293, lng: 38.1595530683}, { lat: 20.478860157, lng: 38.1583347847}, { lat: 20.479450263, lng: 38.1569261432}, { lat: 20.4801545835, lng: 38.1554603956}, { lat: 20.480858904, lng: 38.1542040398}, { lat: 20.4811634751, lng: 38.1534045413}, { lat: 20.4818677956, lng: 38.1520910791}, { lat: 20.4823056165, lng: 38.1509489376}, { lat: 20.482933794, lng: 38.149635475}, { lat: 20.4834477579, lng: 38.1483220127},
	//hat2
	{ lat: 32.459447575, lng: 37.9415686899}, { lat: 32.4518332998, lng: 37.9309087046}, { lat: 32.440411887, lng: 37.9202487193}, { lat: 32.4312985513, lng: 37.9014509774}, { lat: 32.4314051167, lng: 37.8835820919}, { lat: 32.4218872726, lng: 37.8704950564}, { lat: 32.4206147714, lng: 37.8562888075}, { lat: 32.4088002371, lng: 37.8395620633}, { lat: 32.3921440101, lng: 37.8312339498}, { lat: 32.3838158966, lng: 37.8205263753},
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
