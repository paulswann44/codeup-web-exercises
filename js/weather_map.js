/*
* NOTES:
*(1)Draggable Cursor
*https://docs.mapbox.com/mapbox-gl-js/example/drag-a-marker/
*
* (2) Web Dev Simplified
* https://www.youtube.com/watch?v=OySigNMXOZU
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


// Create "+" and "-" navigation tool on the right corner (Note 2)
const nav = new mapboxgl.NavigationControl()
map.addControl(nav)


//Creates a marker and establishes that it is draggable (Note 1)
let marker = new mapboxgl.Marker({
    draggable: true
})

    .setLngLat([-96.7970, 32.7767])
    .addTo(map);

marker.on('dragend', onDragEnd);


//Draggable Function (Note 1)
function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}





// When clicked the "city-search" (class name) button geolocates the city
$('#btn').click(function () {  //click submit button to activate function
    geocode($('#search').val(), MAPBOX_TOKEN, map).then(function (coordinates) { //this converts the address to coordinates by calling the function
        map.setCenter(coordinates)  //It should reset the center to the coordinates from the data
        // setWeatherData(coordinates[0], coordinates[1]) //I want the lat & long
        map.setLngLat(coordinates) //A marker should be placed onto the cordinates
        console.log(coordinates)
    })


})





