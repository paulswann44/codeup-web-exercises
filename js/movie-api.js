/*PART (0)
* Any prerequisite functions/keys/variables
* */

const movieKey = MOVIE_API
let hideLoading = $('.lds-ring').hide();


//This is a function that stores the input value
$('#submit-btn').click((event) => {
    event.preventDefault();
    let search = $('#search').val()
    getMovies(search);

});


//Loading animation
const loadingAnimation = () => {
    $('.lds-ring').show();
    setTimeout(function () {
        $('.lds-ring').hide();
    }, 10000);
}


const getMovies = (search) => {
    loadingAnimation()
    fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search}`)
        .then(response => response.json())//then... return json
        .then(function (data) { //then return data
            // console.log('data', data);
            loadingAnimation()


            let movie = data.Search;
            console.log('data.Search: ', data.Search)
            let newMovies = movie.map(obj => obj.Title)


            let appendMovies = append(movie)
            $('#append-movies').html(appendMovies)  //I want to take the results and place it in the div w/ ID of movies


        })
        .catch((error) => {
            loadingAnimation()
            console.log(error);
        })
}


// This allows me to get the value from the fetc
const dataOfMovies = (newMovies) => {
    let movieCart = newMovies
    console.log('movie cart:', movieCart)
}


const append = function (data) {
    let html = ``
    for (let i in data) {
        // console.log("Data: ", data[i])
        const {Title, Year, Poster} = data[i]
        html += `<div class="container parent${i++} " id="parent${i++}">
            <button type="button" class="btn-close remove-card" id="delete" onclick="parentNode.remove()"></button> 
                         <img src="${Poster}">
                         <h5> ${Title}</h5>
                         <p>Movie Year: ${Year}</p>
                         <p>price is $2.99</p>
           <button type="button" class="btn" id="addToCart" onclick="addToCart('${Title}','${Year}')">Add Movie</button>  
            </div>`


    }
    return html
}

function addToCart(a,b) {
    console.log(a,b)
}





