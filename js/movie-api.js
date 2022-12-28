const movieKey = MOVIE_API;
let hideLoading = $('.lds-ring').hide();


//URL for the glitch database
const url = "https://autumn-dapper-armadillo.glitch.me/movies/";

//This gets the live and accurate update of the POST request from glitch
fetch(url).then(res => res.json()).then(data => console.log(data));


//loading animation
function loadingAnimation() {
    document.querySelector('.lds-ring').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.lds-ring').style.display = 'none';
    }, 500);
}

const searchButton = document.getElementById("submit-btn");

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    let search = document.getElementById("search").value;
    getMovies(search);
});

//Get request to the omdb API
const getMovies = search => {
    loadingAnimation()
    fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search}`)
        .then(response => response.json())
        .then(function (data) {

            let movie = data.Search;
            let appendMovies = append(movie);
            $('#append-movies').html(appendMovies);

        })
        .catch((error) => {
            loadingAnimation();
            console.log(error);
        })
}

//Appends into a card when information if fetched
const append = data => {
    let html = ``
    for (let i in data) {
        const {Title, Year, Poster} = data[i]
        html += `<div class="row">
<div class="container parent col-md card" id="parent">
            <button type="button" class="btn-close remove-card" id="delete" onclick="parentNode.remove()"></button>
                         <img class="img-thumbnail mx-auto d-block border-0 w-75 h-75" src="${Poster} alt='image'">
                         <h5 class="justify-content-center d-flex"> ${Title} - <p class="year">${Year}</p></h5>
                                    <button type="button" class="btn btn-outline-primary " id="addToCart" onclick="postMovie('${Title}','${Year}','${Poster}')">Add Movie</button>
            </div></div>`


    }
    return html
}

function uploadMovie() {
    let movieTitle = document.getElementById('title').value;
    let movieYear = document.getElementById('year').value;
    let moviePoster = '<img src="../img/default-movie.png" alt="default">'

    if (isNaN(movieYear) || movieYear % 1 !== 0 || movieYear < 1900 || movieYear > 2023) {

        alert('Invalid year! Please enter a whole number between 1900 and 2023.');
    } else {

        // const moviePost =[movieTitle, movieYear, moviePoster]
        // postMovie(moviePost)
        postMovie(movieTitle, movieYear, moviePoster)
        this.parentNode.remove();
        alert('Thank you for your submission!');
        //window allows it to reload from the server rather than cache
        window.location.reload();
    }
    console.log(`${movieTitle}`)
    console.log(`${movieYear}`)
}


let uploadMovies = document.getElementById('uploadMovie');
uploadMovies.addEventListener('click', uploadMovie);


const postMovie = (title, year, poster) => {
    const movieObj = {
        title: title,
        year: year,
        poster: poster
    }
    let option = {
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
            console.log('data', data);
        })
        .catch((error) => {
            alert(`Error posting your movie: ${error.message}`);
            console.log(error.message);
        })

}
//Delete request to Glitch
const deleteMovie = id => {
    let movieObj = {id: id};

    let option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };
    console.log('delete option', option)
    fetch(`${url}${id}`, option)
        .then(response => response.json())
        .then(function (data) {
            console.log(' delete data', data);
        })
        .catch((error) => {
            alert(`Error deleting your movie: ${error.message}`);
            console.log(error.message);
        })

}

//Stored values the selected values
const selectedValues = []; //Note (1)
console.log('selected values: ', selectedValues);

const getInCart = (search) => {
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
shoppingCartButton.addEventListener('click', getInCart);

//This creates cards within the cart.
const createCartElements = cart => {
    let renderCart = document.getElementById('renderCart');
    let itemCart = ``;
    //Let it be 15 because indexes between 0-14 is dummy data.
    for (let i = 15; i < cart.length; i++) {
        let item = cart[i];
        itemCart += `<div class="card cart">`
        itemCart += `<div class="d-flex justify-content-between">`
        itemCart += ` <img src='${item.poster}' class='imageCard' alt='image'>`
        itemCart += `<p class="d-flex align-self-center m-0">${item.title}</p>`
        itemCart += `<input type="checkbox" name="name" value="${item.id}" id="check">`
        itemCart += `</div>`
        itemCart += `</div>`
    }

    renderCart.innerHTML = itemCart;

    //This selects all the checkboxes by id
    let checkboxes = document.querySelectorAll('#check');
    //It listens for a click for each individual checkbox clicked
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('click', function (event) {
            // If it is checked, it pushes its value into the selectedValues array. See above for Note (1).
            if (event.target.checked) {
                selectedValues.push(event.target.value);
            } else {
                // If it is not checked, it finds the index of the value in the selectedValues array and removes it using the splice() method.
                // The splice() method removes elements from an array and returns them as a new array.  It removes 15 elements starting from index 1.
                let index = selectedValues.indexOf(event.target.value);
                if (index > -1) {
                    selectedValues.splice(1, 15);
                }
            }
        });
    });
}


function deleteChecks(selectedValues) {
    // This loop iterates through each element in the removeButtons HTMLCollection
    let removeButtons = document.getElementsByClassName('remove');
    // This adds an event listener for the 'click' event on each element in the HTMLCollection
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', function () {
            // This inner loop iterates through each value in the selectedValues array simalar to 2D array
            for (let j = 0; j < selectedValues.length; j++) {
                // This line stores the current value in the selectedValues array in the variable 'value'
                let value = selectedValues[j];
                // This line calls the deleteMovie function and passes in the 'value' variable as an argument
                deleteMovie(value)

            }
        });
    }
}

deleteChecks(selectedValues);

//function does a put request
const putMovie = (editDetails) => {
    const movieObj = {
        title: editDetails[0],
        year: editDetails[1],
        id: editDetails[2],
        comment: editDetails[3]
    };
    const option = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };

    return fetch(`${url}${editDetails[2]}`, option)
        .then((response) => response.text())
        .then((data) => {
            alert('Movie was updated successfully!');
            console.log('data', data);
        })
        .catch((error) => {
            alert(`Error updating movie: ${error.message}`);
            console.log(error.message);
        });
};

let editButton = document.getElementById('update-button');
editButton.addEventListener('click', (event) => {
    event.preventDefault();
    let movieId = selectedValues;
    let title = document.getElementById('edit-title').value;
    let year = document.getElementById('edit-year').value;
    let comment = document.getElementById('edit-comment').value;

    if (year >= 1900 && year <= 2023 && year % 1 === 0 && title !== null || undefined) {
        let editDetails = [title, year, movieId, comment];
        let stringPromise = putMovie(editDetails);
        event.target.parentNode.remove();

        alert('Successfully updated movie!');
        //window allows it to reload from the server rather than cache
        location.reload();
    } else if(selectedValues === null || undefined){
        alert('Selects a movie to modify');
    }else if(title === null || undefined){
        alert('Add a movie title');
    } else{
        alert('Invalid year! Please enter a whole number between 1900 and 2023.');

    }
});











