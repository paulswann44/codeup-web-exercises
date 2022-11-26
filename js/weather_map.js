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
    zoom: 10,

});

// Add zoom and rotation controls to the map (Note #1)
map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([-96.7970, 32.7767])
    .addTo(map);

marker.on('dragend', onDragEnd());//"on" is a jQuery handler

//tests the drag on lat & lng
function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}</br>Latitude: ${lngLat.lat}`;
}




$('#btn').click(function renderPhysicalAddress() {  //When I click the button
    geocode($('#search').val(), MAPBOX_TOKEN, map).then(
        function getLatLng(coordinates) { //this converts the address to lng & lat by calling the function
            let lng = coordinates[0]; //longitude of submitted address location
            let lat = coordinates[1]; //latitude of submitted address location
            map.setCenter(coordinates)  //It should reset the center to the coordinates from the data
            marker.setLngLat(coordinates)// -_-  it is not Map....It is marker
            reverseGeocode({lat, lng}, MAPBOX_TOKEN).then(function address(results) {
                $('#city-name').html(results); //writes the full physical address of the city
                let popup = new mapboxgl.Popup({className: 'edit-popup'}) //This generates a popup with a custom class
                    .setLngLat(coordinates)//Sets the pop at the searched destination
                    .setHTML(`Your location is:<br> ${results} <br> Your coordinates are: <br> ${coordinates}`)//Displays the physical address
                    .addTo(map);//adds it to the map
            });
        });
});


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

function weatherData () {
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: marker.getLngLat(),
        lon: marker.getLngLat(),
        units: "imperial"
    }).done(function (data) {
        console.log('5 day forecast', data);
    });
}

