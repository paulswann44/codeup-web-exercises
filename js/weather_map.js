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
    const lngLat = marker.getLngLat();//Produces this object when dragged- {lng: -96.74206835937004, lat: 32.71606049688401}
    // console.log('lat:' + lngLat.lat, '/typeof: ' + typeof lngLat.lat,'/lng:'+ lngLat.lng, '/typeof: ' + typeof lngLat.lng);
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}</br>Latitude: ${lngLat.lat}`;
}

marker.on('dragend', weatherData());


$('#btn').click(
    function renderPhysicalAddress() {  //When I click the button
        geocode($('#search').val(), MAPBOX_TOKEN, map).then(
            function getLatLong(coordinates) { //this converts the address to lng & lat by calling the function
                let lng = coordinates[0]; //longitude of submitted address location
                let lat = coordinates[1]; //latitude of submitted address location
                map.setCenter(coordinates)  //It should reset the center to the coordinates from the data
                weatherData(lat, lng)
                marker.setLngLat(coordinates)// -_-  it is not Map....It is marker
                reverseGeocode({lat, lng}, MAPBOX_TOKEN).then(function address(results) {
                    // $('#city-name').html(results); //see note (2) below, but intend to delete
                    let popup = new mapboxgl.Popup({className: 'edit-popup'}) //This generates a popup with a custom class
                        .setLngLat(coordinates)//Sets the pop at the searched destination
                        .setHTML(`Your location is:<br> ${results} <br> Your coordinates are: <br> ${coordinates}`)//Displays the physical address
                        .addTo(map);//adds it to the map
                });
            });
    });

/*
* NOTE #2
* I will delete later because I can possibly use the JSON file, so it just shows the city
*
* */
//+++++++++++++++++++++++++++++++++++++++WEATHER GET REQUEST++++++++++++++++++++++++++++++++++++

function weatherData () {
    $.get("http://api.openweathermap.org/data/2.5/forecast", { //This is the only endpoint that will not cause me an error
        APPID: OPEN_WEATHER_APPID,
        lat: marker.getLngLat().lat,  //it should produce a number with lat coordinate wherever the marker moves
        lon: marker.getLngLat().lng, // it should produce a number with long coordinate - wherever the marker moves
        units: "imperial",
        exclude: 'minutely,hourly,current,alerts'
    }).done(function (data) {
        $('.date').each(function(){
            $(this).html('date path goes here'); //Endpoint won't work
        });
        $('.temprature').each(function(){  //each temprature should have this
            $(this).html('temprature path goes here'); //Endpoint won't work
        });
        $('.humidity').each(function(){
            $(this).html('humidity path goes here'); //Endpoint won't work
        });
        $('.pressure').each(function(){
            $(this).html('pressure path goes here'); //Endpoint won't work
        });
        $('.wind').each(function(){
            $(this).html('wind path goes here'); //Endpoint won't work
        });
        $('.wind').each(function(){
            $(this).html('wind path goes here'); //Endpoint won't work
        });
        $('#city-name').html('City name path goes here');

        console.log('The entire response:', data);
        console.log('Diving in - here is current information: ', data.current);
        console.log('A step further - information for tomorrow: ', data.daily[1]);//is it daily needed?
    }).fail(function (jqXhr, status, error) {
        console.log(jqXhr);
        console.log(status);
        console.log(error);
    });
}



