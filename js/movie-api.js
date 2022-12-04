/*PART (0)
* Any prerequisite functions/keys/variables
* */

const movieKey = MOVIE_API


/*PART (1)
* Detail: GetElementbyID for the values from the Search Bar. Either via Jquery or Element Selector
*
* */

//Btn search by either value of the search, title, year, or plot.
$('#submit-btn').click(() => {
    // event.preventDefault();
    let search = $('#search').val
    // let year = $('#year').val
    // let plot = $('#plot').val
    // let type = $('#type').val
    // getMovie(search, year, plot, type); //It will trigger the getMovies Function
    getMovies(search); //It will trigger the getMovies Function
    console.log(search)
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

const getMovies = (search) => {
    let loader = `<div class="boxLoading"></div>`;
    document.getElementById('movieResult').innerHTML = loader;
//     // fetch(`http://www.omdbapi.com/?apikey=${movieKey}&s=${search}&y=${year}&plot=${plot}&${type}`)
    fetch(`http://www.omdbapi.com/?apikey=${movieKey}&s=${search}`)
        .then(response => response.json())//then... return json
        .then(function (data) { //then return data
            console.log(data)
            data.forEach(movies()=>{
                const {{Poster, Title, Year, imdbID, Genre}}
                <ul>

                </ul>
            // })

        })

}


// const movieApiMovies = () => {
//     let loader = `<div class="boxLoading"></div>`;
//     document.getElementById('movieResult').innerHTML = loader;
//     fetch(movieApi_url + "movies/")
//         .then(response => response.json())
//         .then(function (data) {
//             let result = `<h2> Movies I've watched! </h2>`;
//             data.forEach((movie) => {
//                 const {id, name, year, note_imdb, genre, duration} = movie;
//                 result +=
//                     `<div>
//                     <h5> Movie ID: ${id} </h5>
//                     <ul>
//                         <li>Movie name: ${name}</li>
//                         <li>Movie year: ${year}</li>
//                         <li>Movie note on IMDB: ${note_imdb}</li>
//                         <li>Movie Genre: ${genre}</li>
//                         <li>Movie duration: ${duration}</li>
//                     </ul>
//                 </div>`;
//                 document.getElementById('movieResult').innerHTML = result;
//             })
//         })
// };


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