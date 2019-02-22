// Array with latitude and longitude
let metroAreaCenterCoordinates = [39.46, -98.2]

// Create the map
let map = L.map('USA-map').setView(metroAreaCenterCoordinates, 4)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
}).addTo(map)

var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',

    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popaup should open relative to the iconAnchor
});

// Add some markers
let verrazanoCoordinates = [40.6066, -74.0447]
let verrazanoMarker = L.marker(verrazanoCoordinates, {icon:bridgeIcon})
    .bindPopup("Verrazano-Narrows Bridge<br>Span length: 1298.4 meters")
    .addTo(map)

let mackinacCoordinates = [45.8174, -84.7278]
let mackinacMarker = L.marker(mackinacCoordinates, {icon:bridgeIcon})
    .bindPopup("Mackinac Bridge<br>Span length: 1158.0 meters")
    .addTo(map)

let goldenCoordinates = [37.8199, -122.4783]
let goldenMarker = L.marker(goldenCoordinates, {icon:bridgeIcon})
    .bindPopup("Golden Gate Bridge<br>Span length: 1280.2 meters")
    .addTo(map)

let georgeCoordinates = [40.8517, -73.9527]
let georgeMarker = L.marker(georgeCoordinates, {icon:bridgeIcon})
    .bindPopup("George Washington Bridge<br>Span length: 1067.0 meters")
    .addTo(map)

let tacomaCoordinates = [47.2690, -122.5517]
let tacomaMarker = L.marker(tacomaCoordinates, {icon:bridgeIcon})
    .bindPopup("Tacoma Narrows Bridge<br>Span length: 853.44 meters")
    .addTo(map)



