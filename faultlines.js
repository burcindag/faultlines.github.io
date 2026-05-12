var map;
var userMarker;

function initMap() {
    // Türkiye merkezli başlangıç
    const centerTurkey = { lat: 38.9637, lng: 35.2433 };
    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: centerTurkey,
        streetViewControl: false,
        mapId: "FAULTLINE_MAP_ID", // Google Cloud üzerinden stil tanımlamak için
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    });

    // KML Katmanı - Burçin Dağıstan domaini üzerinden çekiliyor
    const url = "https://burcindagistan.com/faultlines.github.io/data/faultlines.kml";
    
    const faultlinesLayer = new google.maps.KmlLayer({
        url: url,
        suppressInfoWindows: false, // Bilgi pencereleri fay hattı detayları için açık kalabilir
        map: map,
        preserveViewport: true
    });
}

function myLocation() {
    const btn = document.getElementById('locationBtn');
    
    if (!navigator.geolocation) {
        alert("Tarayıcınız konum özelliğini desteklemiyor.");
        return;
    }

    btn.innerText = "Konum Alınıyor...";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Mevcut bir işaretçi varsa kaldır
            if (userMarker) userMarker.setMap(null);

            // Modern Advanced Marker
            userMarker = new google.maps.marker.AdvancedMarkerElement({
                position: pos,
                map: map,
                title: "Buradasınız"
            });

            map.panTo(pos);
            map.setZoom(12);
            btn.innerHTML = '<span class="icon">📍</span> Konumumu Bul';
        },
        (error) => {
            alert("Konum izni reddedildi veya ulaşılamıyor.");
            btn.innerHTML = '<span class="icon">📍</span> Konumumu Bul';
        },
        { enableHighAccuracy: true, timeout: 5000 }
    );
}