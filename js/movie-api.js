/*PART (0)
* Any prerequisite functions/keys/variables
* */

const movieKey = MOVIE_API
let hideLoading = $('.lds-ring').hide();


//URL for the glitch database
const url = "https://axiomatic-private-utahceratops.glitch.me/movies";

//This gets the live and accurate update of the POST request from glitch
fetch(url).then(res => res.json()).then(data => console.log(data));


//This is a function that stores the input value
$('#submit-btn').click((event) => {
    event.preventDefault();
    let search = $('#search').val()
    getMovies(search);

});


//Loading animation
// const loadingAnimation = () => {
//     $('.lds-ring').show();
//     setTimeout(function () {
//     }, 5000);
// }

function loadingAnimation() {
    document.querySelector('.lds-ring').style.display = 'block';
    setTimeout(function() {
        document.querySelector('.lds-ring').style.display = 'none';
    }, 5000);
}

//Get request to the omdb API
const getMovies = async (search) => {
    loadingAnimation()
    const response = await
    fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search}`)
        .then(response => response.json())//then... return json
        .then(function (data) { //then return data
            // console.log('data', data);
            // loadingAnimation();



            let movie = data.Search;


            let appendMovies = append(movie);
            $('#append-movies').html(appendMovies) ;


        })
        .catch((error) => {
            loadingAnimation();
            console.log(error);
        })
}

//Appends into a card when information if fetched
const append = function (data) {
    let html = ``
    for (let i in data) {
        // console.log("Data: ", data[i])
        const {Title, Year, Poster} = data[i]
        html += `<div class="row">
<div class="container parent col-md-3 card m-0" id="parent">
            <button type="button" class="btn-close remove-card" id="delete" onclick="parentNode.remove()"></button> 
                         <img class="img-thumbnail mx-auto d-block border-0 w-75 h-75" src="${Poster}">
                         <h5 class="justify-content-center d-flex"> ${Title} - <p class="year">${Year}</p></h5>

                         
           <button type="button" class="btn btn-outline-primary " id="addToCart" onclick="addToCart('${Title}','${Year}','${Poster}');parentNode.remove()">Add Movie</button>  
            </div></div>`


    }
    return html
}

/*
* This creates the cart where it stores the value of the array
* Might or might not be useful
* */
let cart = [];

const addToCart = (title, year, poster) => {
    let item = {
        title: title,
        year: year,
        poster: poster

    };
    cart.push(item);
    console.log('cart', cart);
    console.log(cart.length);

}



const postMovie = movie =>{
    console.log(movie)
    movie.preventDefault()
    const movieObj = movie;
    const option =   {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };
    console.log('post option', option)
    fetch(url, option)
        .then(response => response.json())
        .then(function (data) {
            // alert('Post successful')
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
        })

}
// let post= document.getElementById('new-movie');
// post.addEventListener('submit', postMovie);








/*
* (1) POST ADDed MOVIES TO THE DATABASE/GLITCH
* (2) CREATE A MODAL THAT POP-UP'S FOR CHECK OUT (PUT)
*                   (A) Can Edit the order quantity (PATCH)
*                   (B) Calculate subtotal and total
*                   (C) Input that puts in special code to get 20% discount
*                   (D) DELETE MOVIES FROM THE LIST
* */




