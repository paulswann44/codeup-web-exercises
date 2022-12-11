
/*PART (0)
* Any prerequisite functions/keys/variables
* */

const movieKey = MOVIE_API
let hideLoading = $('.lds-ring').hide();


//URL for the glitch database
const url = "https://spiny-irradiated-orchestra.glitch.me/movies/";

//This gets the live and accurate update of the POST request from glitch
// fetch(url).then(res => res.json()).then(data => console.log(data));


//This is a function that stores the input value
$('#submit-btn').click((event) => {
    event.preventDefault();
    let search = $('#search').val()
    getMovies(search);
    // postInCart(search);

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
                         
<!--           <button type="button" class="btn btn-outline-primary " id="addToCart" onclick="addToCart('${Title}','${Year}','${Poster}')">Add Movie</button>  -->
           <button type="button" class="btn btn-outline-primary " id="addToCart" onclick="postMovie('${Title}','${Year}','${Poster}')">Add Movie</button>  
            </div></div>`


    }
    return html
}




function uploadMovie() {
    let movieTitle = document.getElementById('title').value;
    let movieYear = document.getElementById('year').value;
    let moviePoster = '<img src="img/default-movie.png" alt="default">'
    let movieComment = 'This movie was uploaded by independent content creator';

    if (isNaN(movieYear) || movieYear % 1 !== 0 || movieYear < 1900 || movieYear > 2023) {

        alert('Invalid year! Please enter a whole number between 1900 and 2023.');
    } else {
        postMovie(movieTitle, movieYear,moviePoster)
        this.parentNode.remove();
        alert('Thank you for your submission!');
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
    const movieObj = {id: id}


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


//This is an internal tool.  Be careful when selecting a large range of index numbers (0 to 500 as an example) or will be denied access to glitch database.
//Glitch is terrible
function resetDatabase(id) {
    for (var i = 294; i <= 297; i++) {
        deleteMovie([i])

    }
}
let reset = document.getElementById('deleteDatabase')
reset.addEventListener('click', resetDatabase);


let selectedValues= [];
console.log('selected values: ',selectedValues)

function createCartElements(cart) {
    let renderCart = document.getElementById('renderCart');

    for (let i = 2; i < cart.length; i++) {
        let item = cart[i];
        console.log('item: ' , item)

        let card = document.createElement('div');
        card.className = 'card';


        let itemDiv = document.createElement('div');
        itemDiv.style.display = 'flex';
        itemDiv.style.justifyContent = 'space-between';

        let poster = document.createElement('img');
        poster.src = item.poster;
        poster.width = 50;
        poster.height = 50;




        let title = document.createElement('p');
        title.innerHTML = item.title;


        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = "name";
        checkbox.value = item.id;
        checkbox.id = "check";



        itemDiv.appendChild(poster);
        itemDiv.appendChild(title);
        card.appendChild(itemDiv);
        renderCart.appendChild(card);
        itemDiv.appendChild(checkbox);

        // add an event listener to the checkbox that listens for a 'click' event
        checkbox.addEventListener('click', function(event) {
            // if the checkbox is checked, add its value to the selectedValues array
            if (event.target.checked) {
                selectedValues.push(event.target.value);
            } else {
                // if the checkbox is not checked, remove its value from the selectedValues array
                let index = selectedValues.indexOf(event.target.value);
                if (index > -1) {
                    selectedValues.splice(index, 1);
                }
            }
        });

    }


};




//this gets the current jason file
const postInCart =  (search) => {
    const response =
        fetch(`${url}`)
            .then(response => response.json())//then... return json
            .then(function (data) { //then return data
                console.log('cart data', data);
                createCartElements(data)

            })
            .catch((error) => {
                console.log(error);
            })
}
let shoppingCartButton = document.getElementById('shoppingCart');
shoppingCartButton.addEventListener('click', postInCart);


// function deleteChecks(values){
//
//     for (let i = 0; i < values.length; i++) {
//     // for (let i of values) {
//     // for (let i in values) {
//         let values =value[i];
//         console.log(values)
//         // deleteMovie(values)
//     }
// }
// let checkDelete = document.getElementsByClassName('remove');
// checkDelete.addEventListener('click', deleteChecks);
//
// deleteChecks(selectedValues);

// function deleteChecks(values) {
//     for (let i = 0; i < values.length; i++) {
//         let value = values[i]; // use a different variable name for the current element in the array
//         console.log('value:' ,value);
//         // deleteMovie(value);
//     }
// }
//
// let checkDelete = document.getElementsByClassName('remove');
// checkDelete.addEventListener('click', deleteChecks);
//
// deleteChecks(selectedValues);







/*
*(1) I want to select the values into an array 'selectedValues'
* (2) create a function named deleteChecks that accepts the array 'selected values and loops it
*
* */

function deleteChecks(selectedValues) {
    // get all elements with the class name 'remove'
    let removeButtons = document.getElementsByClassName('remove');

    // add an event listener to each 'remove' button that listens for a 'click' event
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', function () {
            // loop through the selectedValues array
            for (let j = 0; j < selectedValues.length; j++) {
                let value = selectedValues[j];
                deleteMovie(value)

            }
        });
    }
}

// get the selected card element
let selectedCard = document.getElementById('selected-card');

// add a 'click' event listener to the selected card element
selectedCard.addEventListener('click', function() {
    // call the deleteChecks function and pass the selectedValues array to it
    deleteChecks(selectedValues);
});
