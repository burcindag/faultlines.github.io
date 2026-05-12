let map;
let userMarker;

async function initMap() {
    // Gerekli kütüphaneleri yükle
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 38.9637, lng: 35.2433 },
        mapId: "DEMO_MAP_ID", // Modern markerlar için gereklidir
    });

    // KmlLayer yerine GeoJSON kullanmak 2026 standartıdır
    // Eğer verin hala KML ise, bir kereliğine GeoJSON'a çevirip sitene yükle
    map.data.loadGeoJson("data/faultlines.geojson");

    // Stil verme (Fay hatlarını kırmızı yapalım)
    map.data.setStyle({
        strokeColor: "red",
        strokeWeight: 2
    });
}

// Sayfa yüklendiğinde başlat
initMap();

function myLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            if (userMarker) userMarker.map = null;

            userMarker = new google.maps.marker.AdvancedMarkerElement({
                position: pos,
                map: map,
                title: "Konumunuz"
            });

            map.setCenter(pos);
            map.setZoom(14);
        }, () => {
            alert("Konum izni alınamadı.");
        });
    }
}
