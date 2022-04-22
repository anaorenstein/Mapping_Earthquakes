// Add console.log to check to see if our code is working.
console.log("working");

//  Add a marker to the map for Los Angeles, California.
// let map = L.map('mapid').setView([40.7, -94.5], 4);
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//  Add a circle to the map for Central Los Angeles, California.
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// let marker = L.circle([34.0522, -118.2437], {
//     radius: 100
// }).addTo(map);

//  Add a large circleMarker to the map
let map = L.map('mapid').setView([40.7, -94.5], 4);
// An array containing each city's location, state, and population.
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location,{
        radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

// We create the dark tile layer that will be the background of our circleMarker map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);