const map = L.map('map').setView([25, 0], 2);
let marker = undefined;

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiam9zaHlhbmtmYW4wMSIsImEiOiJja3U4bXh4dmEyZmV4Mm5uaTEzNjk2c2w5In0.Mk0ce1C_XTpg1scZ3wWTGg'
}).addTo(map);

map.on('click', (e) => {
    if (marker === undefined) {
        marker = L.marker(e.latlng).addTo(map);
    } else {
        marker.setLatLng(e.latlng);
    }
    map.setView(e.latlng, 12);
});