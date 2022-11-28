(function () {
"use strict";




var accessToken = MAPBOX_TOKEN;
mapboxgl.accessToken = MAPBOX_TOKEN;


let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96.7970, 32.7767],
    zoom: 3

});

map.addControl(new mapboxgl.NavigationControl());

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-96.7970, 32.7767])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    console.log('Drag function','lat:' + lngLat.lat, '/typeof: ' + typeof lngLat.lat, '/lng:' + lngLat.lng, '/typeof: ' + typeof lngLat.lng);

}

marker.on('dragend', onDragEnd);




$('#btn').click(
    function renderPhysicalAddress() {
        geocode($('#search').val(), MAPBOX_TOKEN, map).then(
            function getLatLong(coordinates) {
                let lng = coordinates[0];
                let lat = coordinates[1];
                map.setCenter(coordinates)
                map.setZoom(10)

                let marker = new mapboxgl.Marker({draggable: true})
                    .setLngLat([coordinates[0], coordinates[1]])
                    .addTo(map)
                marker.setLngLat(coordinates);
                getWeatherData(coordinates)


            });
    });

function getWeatherData(coordinates) {
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: coordinates[1],
        lon: coordinates[0],
        units: "imperial",
        exclude: 'minutely,hourly,current,alerts'
    }).done(function (data) {
console.log(data);
        let forecasts = data.list
        console.log("Data List: ", data.list)
        let appendedForecast = append(forecasts);
        $('#weather').html(appendedForecast);
        console.log("forecast: ", forecasts)

        //City Name
        $('#city-name').html(data.city.name);
        console.log("Data City: ", data.city.name)




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
               <h6 class="card-header date text-center " >${dt_txt.substring(5, 7)}/${dt_txt.substring(8, 10)}/${dt_txt.substring(0, 4)}
               </h6>
               <img src='http://openweathermap.org/img/w/${icon}.png' class="img-thumbnail mx-auto d-block border-0 img" ;' alt="image">
              <div class="card-body pt-0">
              <h4 class="card-title text-center">${temp.toFixed(1)}ºF</h4>
                <div class="d-flex justify-content-around" >
                <p class="card-text mb-0 text-warning pe-1">
                H: ${temp_max.toFixed(1)}ºF
                </p>
                <p class="card-text mb-0 text-warning" >
                L: ${temp_min.toFixed(1)}ºF
                </p>
                </div>
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item humidity">Humidity: ${humidity}%</li>
                <li class="list-group-item wind">Wind: ${speed} mph</li>
              </ul>
              <div class="card-body p-0 ">
              <p class="list-group-item bg-secondary text-light text-center p-0 m-0">${description.toUpperCase()}</p>
              </div>
            </div>`
    }
    return html
}



})();
// data.