"use strict";




var accessToken = MAPBOX_TOKEN;
mapboxgl.accessToken = MAPBOX_TOKEN;


let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.7970, 32.7767],   //The center need to change by city search
    zoom: 10

});

map.addControl(new mapboxgl.NavigationControl());

// let marker = new mapboxgl.Marker({
//     draggable: true
// })
//     .setLngLat([-96.7970, 32.7767])
//     .addTo(map);

// marker.on('dragend', function onDragEnd() {
//     const lngLat = marker.getLngLat();//Produces this object when dragged- {lng: -96.74206835937004, lat: 32.71606049688401}
//     console.log('lat:' + lngLat.lat, '/typeof: ' + typeof lngLat.lat, '/lng:' + lngLat.lng, '/typeof: ' + typeof lngLat.lng);
//     coordinates.style.display = 'block';
//     coordinates.innerHTML = `Longitude: ${lngLat.lng}</br>Latitude: ${lngLat.lat}`;
// });


$('#btn').click(
    function renderPhysicalAddress() {  //When I click the button
        geocode($('#search').val(), MAPBOX_TOKEN, map).then(
            function getLatLong(coordinates) { //this converts the address to lng & lat by calling the function
                let lng = coordinates[0]; //longitude of submitted address location
                let lat = coordinates[1]; //latitude of submitted address location
                map.setCenter(coordinates)
                map.setZoom(10)

                let marker = new mapboxgl.Marker({draggable: true})
                    .setLngLat([coordinates[0], coordinates[1]])
                    .addTo(map)
                marker.setLngLat(coordinates)// -_-  it is not Map....It is marker
                getWeatherData(coordinates)
                reverseGeocode({lat, lng}, MAPBOX_TOKEN).then(function address(results) {
                    $('#city-name').html(results); //see note (2) below, but intend to delete

                });
            });
    });

function getWeatherData(coordinates) {
    $.get("http://api.openweathermap.org/data/2.5/forecast", { //This is the only endpoint that will not cause me an error
        APPID: OPEN_WEATHER_APPID,
        lat: coordinates[1],  //it should produce a number with lat coordinate wherever the marker moves
        lon: coordinates[0], // it should produce a number with long coordinate - wherever the marker moves
        units: "imperial",
        exclude: 'minutely,hourly,current,alerts'
    }).done(function (data) {

        let forecasts = data.list
        console.log("Data List: ", data.list)
        let forecastHTML = append(forecasts)
        $('#weather').html(forecastHTML)
        console.log("forecast: ", forecasts)

    }).fail(function (jqXhr, status, error) {
        console.log(jqXhr);
        console.log(status);
        console.log(error);
    });
}


let append = function (data) {
    let html = ``
    for (let i = 0; i < data.length; i += 8) {
        console.log("Data: ", data[i])
        const {
            dt_txt,
            main: {humidity, temp, temp_max, temp_min},
            weather: [{description, icon}],
            wind: {speed}
        } = data[i]
        html += `
            <div class="card  col-xxl">
               <h6 class="card-header text-center " >${dt_txt.substring(5, 7)}.${dt_txt.substring(8, 10)}.${dt_txt.substring(0, 4)}
               </h6>
               <img src='http://openweathermap.org/img/w/${icon}.png' class="img-thumbnail mx-auto d-block border-0" style='width: 100px; height: 100px;' alt="...">
              <div class="card-body pt-0">
              <h4 class="card-title text-center">${temp.toFixed(1)}ºF</h4>
                <div class="d-flex justify-content-around" >
                <p class="card-text mb-0 text-warning pe-1">
                H:${temp_max.toFixed(1)}ºF
                </p>

                <p class="card-text mb-0 text-warning" >
                L:${temp_min.toFixed(1)}ºF
                </p>
                </div>

              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item  humidity">Humidity: ${humidity}%</li>
                <li class="list-group-item  wind">Wind: ${speed} mph</li>
              </ul>
              <div class="card-body p-0 ">
              <p class="list-group-item bg-secondary text-light text-center p-0 m-0">${description.toUpperCase()}</p>
              </div>
            </div>`
    }
    return html
}




