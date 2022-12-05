/*PART (0)
* Any prerequisite functions/keys/variables
* */

const movieKey = MOVIE_API //


/*PART (1) -button to get movies from omdbapi
* */

//Btn search by either value of the search, title, year, or plot.
$('#submit-btn').click((event) => {
    event.preventDefault();
    let search = $('#search').val()
    getMovies(search);

});


/*PART (2)
* maybe create a function that changes the method that updates options.
*
 */
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
};


/*PART (3)
* maybe create a function that renders a loading animation
*BONUS
 */




/*PART (4)
* Fetch API to derive Search results
*
* */


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
    for (let i in data) {
        console.log("Data: ", data[i])
        const {Title, Year, Poster, imdbID, Type} = data[i]
        html += `<div>
                         <img src="${Poster}">
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