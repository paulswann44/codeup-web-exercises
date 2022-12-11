

function createCartElements(cart) {
    let renderCart = document.getElementById('renderCart');

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];

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

        let trashButton = document.createElement('button');
        trashButton.innerHTML = 'delete me';
        trashButton.className = 'trash';





        itemDiv.appendChild(poster);
        itemDiv.appendChild(title);
        card.appendChild(itemDiv);
        renderCart.appendChild(card);
        itemDiv.appendChild(trashButton);
        itemDiv.appendChild(editButton);
    }
}

let shoppingCartButton = document.getElementById('shoppingCart');

shoppingCartButton.addEventListener('click', function() {
    createCartElements(cart);
});






/*
*
* (1) new url so I am starting from a clean slate
* (2) fix button to cart
* (3) loading animation
* (4) class="navbar-toggler-icon" hover rather than click (HAMBERGER MENU BTN)
* (5) allow for POST, PATCH, DELETE
*
* */