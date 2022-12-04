/*PART (0)
* Any prerequisite functions/keys/variables
* */

const movieKey = MOVIE_API


/*PART (1)
* Detail: GetElementbyID for the values from the Search Bar. Either via Jquery or Element Selector
*
* */

//Btn search by either value of the search, title, year, or plot.
$('#submit-btn').click((event) => {
    event.preventDefault();
    let search = $('#search').val()
    let year = $('#year').val()
    let type = $('#type').val()
    let plot = $('#plot').val()
    console.log('search: ', search)
    console.log('year: ', year)
    console.log('type: ', type)
    console.log('plot: ', plot)
    getMovies(search, year, type, plot); //It will trigger the getMovies Function

});


/*PART (2)
* Reset Button
* Might have to store to local storage
 */

$('#reset-btn').click(() => location.reload());


/*PART (3)
* Fetch API to derive Search results
*
* (1)
* 's' is required for search under the documentation
* 't' is optional for title
* 'y' is optional for year
* 'p' is optional for plot
* 'type' is optional for type
*
* (2) Load example for fetch
* https://codepen.io/vaishnav21/pen/ExgVNXY
*
* (3) Loading screen
* https://stackoverflow.com/questions/53799108/how-to-add-a-loading-animation-while-fetch-data-from-api-vanilla-js
*
* (4)
* https://codepen.io/Manoz/pen/kyWvQw
* */

const getMovies = (search, year, type, plot) => {
    fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search}&y=${year}&t=${plot}&type=${type}`) //search is the problem
        .then(response => response.json())//then... return json
        .then(function (data) { //then return data
            console.log('data', data); //nothing appears
            let movies = response.data.Search
            console.log('movies: ', movies);
            movies.forEach((movie) => {
                const {Title, Year, imdbID, Type, Poster} = movie;
                results +=
                    `<div>
                         <h1>Movie name: ${Title}</h1>
                         <p>Movie Year: ${Year}</p>
                         <img src="${Poster}" alt="${Title}">
                 </div>`;
            })
            $('#movies').html(results)
        })
        .catch((error) => {
            console.log(error)
        })
}




/*PART (4)
* A function to render results
* */


/*
* NOTES:
*
* (1)  API Follow Along
* https://www.youtube.com/watch?v=67eJTr6_ylY
*
* (2) API WEBSITE
* https://www.omdbapi.com/
*
*
* (4) Maybe as a substitute for background
* https://codepen.io/sarazond/pen/LYGbwj
*
* */