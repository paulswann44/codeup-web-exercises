/*PART (0)
* Any prerequisite functions/keys/variables
* */

const movieKey = MOVIE_API
let hideLoading = $('.lds-ring').hide();
const shoppingCart = [];
// console.log('shopping cart:', shoppingCart)





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
            console.log('data', data);
            loadingAnimation()
            let movie = data.Search;
            let appendMovies = append(movie)
            $('#append-movies').html(appendMovies)  //I want to take the results and place it in the div w/ ID of movies
            addToCart(data)
        })
        .catch((error) => {
            loadingAnimation()
            console.log(error);
        })
}



let append = function (data) {
    let html = ``
    for (let i in data) {
        console.log("Data: ", data[i])
        const {Title, Year, Poster, imdbID, Type} = data[i]
        html += `<div>
            <button type="button" class="btn-close remove-card" id="delete" onclick="parentNode.remove()"></button> <br>
                         <img src="${Poster}">
                         <h5> ${Title}</h5>
                         <p>Movie Year: ${Year}</p>
                         <p>price is $2.99</p>
           <button type="button" class="btn" id="addToCart" onclick="addToArray()">Add Movie</button> <br>
           <button type="button" class="btn" id="addToWishList">Add to wishlist</button> <br>


            </div>`
        function addToArray() {
            movieArray.push(data[i])
        }
    }
    return html
}


// function addToCart (data){
//     shoppingCart.push()
// }




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