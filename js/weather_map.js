"use strict";

/*
* ---NOTES  #1---
*Draggable Cursor found in documentation
*https://docs.mapbox.com/mapbox-gl-js/example/drag-a-marker/
*

* */


// Token access

var accessToken = MAPBOX_TOKEN;
mapboxgl.accessToken = MAPBOX_TOKEN;


//creates map (given)
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.7970, 32.7767],   //The center need to change by city search
    zoom: 10,

});

// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//     enableHighAccuracy: true
// })
//
// function successLocation(position) {
//     setupMap([position.coords.longitude, position.coords.latitude])
// }
//
// function errorLocation() {
//     setupMap([-2.24, 53.48])
// }

// // Add zoom and rotation controls to the map.
// map.addControl(new mapboxgl.NavigationControl());


//Creates a marker and establishes that it is draggable (Note #1)
let marker = new mapboxgl.Marker({
    draggable: true
})

    .setLngLat([-96.7970, 32.7767])
    .addTo(map);


marker.on('dragend', onDragEnd);


//Draggable Function (Note #1)
function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}</br>Latitude: ${lngLat.lat}`;

}



// When clicked the "city-search" (class name) button geolocates the city
$('#btn').click(function findCity () {  //click submit button to activate function
    geocode($('#search').val(), MAPBOX_TOKEN, map).then(function (coordinates) { //this converts the address to coordinates by calling the function
        map.setCenter(coordinates)  //It should reset the center to the coordinates from the data
        // setWeatherData(coordinates[0], coordinates[1]) //I want the lat & long
        map.setLngLat(coordinates) //A marker should be placed onto the cordinates
         new mapboxgl.Marker().setLngLat([coordinates]).addTo(map);
    })
})


// $('#btn').click(function () {  //click submit button to activate function
//     geocode($('#search').val(), MAPBOX_TOKEN, map).then(function (coordinates){
//     var popup = new mapboxgl.Popup()
//         var popup = new mapboxgl.Popup()
//             .setHTML(`this is your city location: ${renderPhysicalAddress}`);
//         var marker = new mapboxgl.Marker()
//             .setLngLat(coordinates)
//             .addTo(map)
//             .setPopup(popup);
//         popup.addTo(map);
//     });
// })


$('#btn').click(function renderPhysicalAddress (){  //When I click the button
    geocode($('#search').val(), MAPBOX_TOKEN, map).then(
        function getLatLng (coordinates) { //this converts the address to lng & lat by calling the function
        let lng = coordinates[0]; //longitude of submitted address location
        // console.log("Lng: " + coordinates[0])
        let lat = coordinates[1]; //latitude of submitted address location
        // console.log("Lat: " + coordinates[1])
            reverseGeocode({lat, lng}, MAPBOX_TOKEN).then(function address (results) {
                 $('#city-name').html(results); //writes the full physical address of the city
    var popup = new mapboxgl.Popup()
        var popup = new mapboxgl.Popup()
            .setHTML(`${results}`);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        popup.addTo(map);
            })
    })
})
/*
* ---NOTE #2 renderPhysicalAddress---
* This function gets the input value from the search bar once the button is clicked.
* Afterwards, geocode converts the address to coordinates in an array of lng & lat.
* Finally, reverseGeocode finds the full physical address of the city searched and writes the results within a span tag.
* Appending would not appropriate since it would just compile a list. Instead, we need a string that changes each time we search for results.
* Unfortunately, we could not convert the string into an array and splice the street, zip code, and other irrelevant information just to solely have the city and state to appear
*I do not have the resources available to sift through address names.
*
* I could not combine the findCity & renderPhysicalAddress functions together.  It will only move the location of the map to the designated city, but not render the physical address
* */

//+++++++++++++++++++++++++++++++++++++++WEATHER GET REQUEST++++++++++++++++++++++++++++++++++++




