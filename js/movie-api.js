/*PART (0)
* Any prerequisite functions/keys/variables
* */

const movieKey = MOVIE_API
let hideLoading = $('.lds-ring').hide();


//URL for the glitch database
const url = "https://axiomatic-private-utahceratops.glitch.me/movies/";

//This gets the live and accurate update of the POST request from glitch
fetch(url).then(res => res.json()).then(data => console.log(data));


//This is a function that stores the input value
$('#submit-btn').click((event) => {
    event.preventDefault();
    let search = $('#search').val()
    getMovies(search);

});


//loading animation
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
<div class="container parent col-md card" id="parent">
            <button type="button" class="btn-close remove-card" id="delete" onclick="parentNode.remove()"></button> 
                         <img class="img-thumbnail mx-auto d-block border-0 w-75 h-75" src="${Poster}">
                         <h5 class="justify-content-center d-flex"> ${Title} - <p class="year">${Year}</p></h5>

                         
           <button type="button" class="btn btn-outline-primary " id="addToCart" onclick="addToCart('${Title}','${Year}','${Poster}')">Add Movie</button>  
            </div></div>`


    }
    return html
}

/*
* This creates the cart where it stores the value of the array
* Might or might not be useful
* */



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


    function uploadMovie() {
        // Get the values of the title and year inputs
        let movieTitle = document.getElementById('title').value;
        let movieYear = document.getElementById('year').value;
        let movieComment = 'This movie was uploaded by independent content creator';

        if (isNaN(movieYear) || movieYear % 1 !== 0 || movieYear < 1900 || movieYear > 2023) {

            alert('Invalid year! Please enter a whole number between 1900 and 2023.');
        } else {
            // If the year is a valid value, you can now use the movieTitle and movieYear variables to do whatever you want with the movie title and year, such as displaying them on the page or sending them to a server.
            postMovie(movieTitle, movieYear,'',movieComment)
        }
        console.log(`${movieTitle}`)
        console.log(`${movieYear}`)
    }


    document.getElementById('uploadMovie').addEventListener('click', uploadMovie);



    const postMovie = (title, year, poster, comment) =>{
    console.log(title, year, poster, comment)
    const movieObj = {title: title, year: year, poster: poster, comment:'This movie was uploaded by independent content creator'};
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

 function putMovie (id) {
    id.preventDefault()

    console.log("hello")
    // movie.preventDefault()
    const movieObj = {title: "Hello", body: '3'}
    const option =   {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };
    console.log('put option', option)
    fetch(`${url}${id}`, option)
        .then(response => response.json())
        .then(function (data) {
            alert('movie was good to watch')
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
        })

}



function deleteMovie(id) {
    const movieObj = {title: "Hello", body: '1'}
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };
    console.log('delete option', option)
    fetch(`${url}${id}`, option)
    // fetch(url, option)
        .then(response => response.json())
        .then(function (data) {
            // alert(`was deleted`)
            console.log(' delete data', data);
        })
        .catch((error) => {
            console.log(error);
        })

}







/*
*
* (2) CREATE A MODAL THAT POP-UP'S FOR CHECK OUT (PUT)
*                   (A) Can Edit the order quantity (PATCH)
*                   (B) Calculate subtotal and total
*                   (C) Input that puts in special code to get 20% discount
*                   (D) DELETE MOVIES FROM THE LIST
* */




