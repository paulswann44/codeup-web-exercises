const movieKey = MOVIE_API
let hideLoading = $('.lds-ring').hide();


//URL for the glitch database
const url = "https://autumn-dapper-armadillo.glitch.me/movies/";

//This gets the live and accurate update of the POST request from glitch
fetch(url).then(res => res.json()).then(data => console.log(data));


//This is a function that stores the input value

const searchButton = document.getElementById("submit-btn");

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    let search = document.getElementById("search").value;
    getMovies(search);
});


//loading animation
function loadingAnimation() {
    document.querySelector('.lds-ring').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.lds-ring').style.display = 'none';
    }, 500);
}


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
        // console.log("Data: ", data[i])
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
    let movieDetails = [movieTitle, movieYear, moviePoster];

    if (isNaN(movieYear) || movieYear % 1 !== 0 || movieYear < 1900 || movieYear > 2023) {

        alert('Invalid year! Please enter a whole number between 1900 and 2023.');
    } else {
        postMovie(movieDetails)
        this.parentNode.remove();
        alert('Thank you for your submission!');
    }
    console.log(`${movieTitle}`)
    console.log(`${movieYear}`)
}


let uploadMovies = document.getElementById('uploadMovie');
uploadMovies.addEventListener('click', uploadMovie);


const postMovie = movieDetails => {
    const movieObj = {
        title: movieDetails[0],
        year: movieDetails[1],
        poster: movieDetails[2],
    };
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
            // alert('Post successful')
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
        })

}


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
//Glitch is terrible.
const resetDatabase = id => {
    for (var i = 0; i <= 0; i++) {
        deleteMovie([i])

    }
}

let reset = document.getElementById('deleteDatabase')
reset.addEventListener('click', resetDatabase);


let selectedValues = [];
console.log('selected values: ', selectedValues)

// function createCartElements(cart) {
//     // cart.preventDefault()
//     let renderCart = document.getElementById('renderCart');
//
//     for (let i = 15; i < cart.length; i++) {
//         let item = cart[i];
//         console.log('item: ', item)
//
//         let card = document.createElement('div');
//         card.className = 'card';
//
//
//         let itemDiv = document.createElement('div');
//         itemDiv.style.display = 'flex';
//         itemDiv.style.justifyContent = 'space-between';
//
//         let poster = document.createElement('img');
//         poster.src = item.poster;
//         poster.width = 50;
//         poster.height = 50;
//
//
//         let title = document.createElement('p');
//         title.innerHTML = item.title;
//
//
//         let checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.name = "name";
//         checkbox.value = item.id;
//         checkbox.id = "check";
//
//
//         itemDiv.appendChild(poster);
//         itemDiv.appendChild(title);
//         card.appendChild(itemDiv);
//         renderCart.appendChild(card);
//         itemDiv.appendChild(checkbox);
//
//         checkbox.addEventListener('click', function (event) {
//             if (event.target.checked) {
//                 selectedValues.push(event.target.value);
//             } else {
//                 let index = selectedValues.indexOf(event.target.value);
//                 if (index > -1) {
//                     selectedValues.splice(0, 15);
//                 }
//             }
//         });
//
//     }
//
//
// };

const createCartElements = cart => {
    let renderCart = document.getElementById('renderCart');
    let itemCart = ``;
    //Let it be 15 because indexes between 0-14 is dummy data.
    for (let i = 15; i < cart.length; i++) {
        let item = cart[i];
        itemCart += `<div class="card">`
        itemCart += `<div class="d-flex justify-content-between">`
        itemCart += ` <img src='${item.poster}' class='imageCard' alt='image'>`  //<== I need help here :'(
        itemCart += ` <p>${item.title}</p>`
        itemCart += `<input type="checkbox" name="name" value="${item.id}" id="check">`
        itemCart += `</div>`
        itemCart += `</div>`
    }

    renderCart.innerHTML = itemCart;


    let checkboxes = document.querySelectorAll('#check');  //selects all the checkboxes with the ID of checkbox
    checkboxes.forEach(function (checkbox) {       //loops through each checkbox with the id of #check
        checkbox.addEventListener('click', function (event) {  //listens for th click of the individual checkbox
            if (event.target.checked) { //if this checked box specifically triggers (target) the event push to array selectedValues
                selectedValues.push(event.target.value);
            } else {
                let index = selectedValues.indexOf(event.target.value);
                if (index > -1) {
                    selectedValues.splice(0, 15);
                }
            }
        });
    });
}


const postInCart = search => {
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


function deleteChecks(selectedValues) {
    let removeButtons = document.getElementsByClassName('remove');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', function () {
            for (let j = 0; j < selectedValues.length; j++) {
                let value = selectedValues[j];
                document.querySelector(`input[value="${value}"]`).parentElement.remove();
                deleteMovie(value);

            }


        });
    }
}

deleteChecks(selectedValues);


const putMovie = editDetails => {
    let id = editDetails[0]
    const movieObj = {id: editDetails[0], title: editDetails[1], year: editDetails[2], comment: editDetails[3]};
    // const movieObj = {id: id, title: title, year: year};
    const option = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };

    return fetch(`${url}${id}`, option)
        .then((response) => response.text())
        .then((data) => {
            // Update the movie's information in the UI
            alert('Movie was updated successfully!');
            console.log('data', data);
        })
        .catch((error) => {
            // Display an error message to the user
            alert(`Error updating movie: ${error.message}`);
            console.log(error.message);
        });
}

//MODAL 3 testing
//narrative:  (1) I want a function named editMovies.  It takes in the array called selectedValues whenever I click the button with the id of #update-button and store it in a variable with the idMovies. It stores the value of the 3 inputs with the id of #edit-title for the title, id of #edit-year for the year, and id of #edit-comment for the textarea (comments).
// (2) if idNumber || title || year === null || undefine ===> alert message 'Enter the following '


let editButton = document.getElementById('update-button');
editButton.addEventListener('click', function editMovies(event) {
    event.preventDefault();
    let idNumber = selectedValues;
    let title = document.getElementById("edit-title").value;
    let year = Number(document.getElementById("edit-year").value);
    let comment = document.getElementById("edit-comment").value;
    console.log('idNumber', idNumber)
    console.log('title ', title);
    console.log('year ', year);
    console.log('comment ', comment);

    let editDetails = [idNumber, title, year, comment]

    // if (idNumber || title || year === null || undefined){
    //     alert('Submit the appropriate information below');
    // } else{
    putMovie(editDetails);

    // }


});