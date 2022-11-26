"use strict";

/*
* ---NOTES  #1---
*Draggable Cursor found in documentation
*https://docs.mapbox.com/mapbox-gl-js/example/drag-a-marker/
*
* Geolocation
* https://docs.mapbox.com/mapbox-gl-js/example/locate-user/
*
* API References
* https://docs.mapbox.com/mapbox-gl-js/api/map/#map#on
* */


// Token access

var accessToken = MAPBOX_TOKEN;
mapboxgl.accessToken = MAPBOX_TOKEN;


//creates map (given)
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.7970, 32.7767],   //The center need to change by city search
    zoom: 10

});

// Add zoom and rotation controls to the map (Note #1)
map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-96.7970, 32.7767])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}</br>Latitude: ${lngLat.lat}`;
}

marker.on('dragend', onDragEnd);


$('#btn').click(
    function renderPhysicalAddress() {  //When I click the button
    geocode($('#search').val(), MAPBOX_TOKEN, map).then(
        function getLatLong(coordinates) { //this converts the address to lng & lat by calling the function
            let lng = coordinates[0]; //longitude of submitted address location
            let lat = coordinates[1]; //latitude of submitted address location
            map.setCenter(coordinates)  //It should reset the center to the coordinates from the data
            // weatherData(coordinates[0], coordinates[1])
            marker.setLngLat(coordinates)// -_-  it is not Map....It is marker
            reverseGeocode({lat, lng}, MAPBOX_TOKEN).then(function address(results) {
                $('#city-name').html(results); //writes the full physical address of the city
                // let popup = new mapboxgl.Popup({className: 'edit-popup'}) //This generates a popup with a custom class
                //     .setLngLat(coordinates)//Sets the pop at the searched destination
                //     .setHTML(`Your location is:<br> ${results} <br> Your coordinates are: <br> ${coordinates}`)//Displays the physical address
                //     .addTo(map);//adds it to the map
            });
        });
});



//+++++++++++++++++++++++++++++++++++++++WEATHER GET REQUEST++++++++++++++++++++++++++++++++++++

// function weatherData () {
//     $.get("http://api.openweathermap.org/data/2.5/forecast", {
//         APPID: OPEN_WEATHER_APPID,
//         lat: marker.getLngLat(),
//         lon: marker.getLngLat(),
//         units: "imperial"
//     }).done(function (data) {
//         console.log('5 day forecast', data);
//     });
// }



