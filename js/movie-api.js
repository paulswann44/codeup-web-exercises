/*PART (0)
* Any prerequisite functions/keys/variables
* */

const movieKey = MOVIE_API //


/*PART (1)
* */

//Btn search by either value of the search, title, year, or plot.
$('#submit-btn').click((event) => {
    event.preventDefault();
    let search = $('#search').val()
    getMovies(search);

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
* */

//VERSION #1
// const getMovies = (search) => {
//     fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search}`)
//         .then(response => response.json())//then... return json
//         .then(function (data) { //then return data
//             console.log('data', data);
//
//             let results = ``;
//             data.forEach( movie => {
//                 const {Title, Year, imdbID, Type, Poster} = movie;
//                 results +=
//                     `<div>
//                          <p>Movie name: ${Title}</p>
//                  </div>`;
//
//
//
//             })
//             $('#movies').html(results)  //I want to take the results and place it in the div w/ ID of movies
//         })
//         .catch((error) => {
//             // console.log(error);
//         })
// }

//VERSION #2
const getMovies = (search) => {
    fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search}`)
        .then(response => response.json())//then... return json
        .then(function (data) { //then return data
            console.log('data', data);

            let movie = data.Search;
            let appendMovies = append(movie)
            $('#append-movies').html(appendMovies)  //I want to take the results and place it in the div w/ ID of movies
        })
        .catch((error) => {
            console.log(error);
        })
}

let append = function (data) {
    let html = ``
    for (let i = 0; i < data.length; i++) {
        console.log("Data: ", data[i])
        const {Title, Year} = data[i]
        html += `<div>
                         <p>Movie name: ${Title}</p>
                         <p>Movie Year: ${Year}</p>
            
            </div>`
    }
    return html
}





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