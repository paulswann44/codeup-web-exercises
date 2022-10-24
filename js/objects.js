(function(){
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


        //Method One
        let person = new Object();
        person.firstName = "Paul";
        person.lastName = "Swann";
        console.log(person.firstName);
        console.log(person.lastName);

        //Method Two
        // let person = {
        //         firstName: "Paul",
        //         lastName: "Swann"
        //     };
        // console.log(person.firstName)
        // console.log(person.lastName)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello =   `Hello from ${person.firstName} ${person.lastName}`;
    console.log(person.sayHello);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount.
     *
     * Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron, and George need to pay.
     * We know that
     * Cameron bought $180, Ryan $250, and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

// *********************************
//       -**FOR LOOP METHOD**-
// *********************************
//
//     for (let i =  0; i < shoppers.length; i++) {
//         if (shoppers[i].amount > 200) {
//             console.log(`${shoppers[i].name} original value is $${shoppers[i].amount}, but adjusted amount net of discount will be $(${shoppers[i].amount * .88})`);
//         } else  {
//             console.log(`${shoppers[i].name} need to pay $${shoppers[i].amount}`);
//         }
//     }

// *********************************
//       -**FOR EACH METHOD**-
// *********************************



// shoppers.forEach(checkShopperAmount);
//
// function checkShopperAmount(shopper) {
//     if (shopper.amount >= 200) {
//         console.log(shopper.name + "needs to pay $" + (shopper.amount * ((1-0.12))));
//     }
//     else if (shopper.amount < 200){
//         console.log(shopper.name + "needs to pay $" + (shopper.amount));
//     }
// }





/** TODO:
 * Step 1: Create an array of objects that represent books and store it in a
 * variable named `books`.
 *
 * Step 2: Each object should have a title and an author property.
 *
 * Step 3: The author property should be an object with properties
 * `firstName` and `lastName`.
 *
 * Step 4: Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */

let books = [
    {
        title: "The Raven",
        author: {
            firstName: "Edger",
            lastName: "Poe"
        }
    },
    {
        title: "End of the World is Just the Beginning",
        author: {
            firstName: "Peter",
            lastName: "Zeihan"
        }
    },
    {
        title: "Guns, Germs, and Steal",
        author: {
            firstName: "Jared",
            lastName: "Diamond"
        }
    },
    {
        title: "Fairy Tale",
        author: {
            firstName: "Stephen",
            lastName: "King"
        }
    },
    {
        title: "Green Eggs and Ham",
        author: {
            firstName: "Theodor",
            lastName: "Geisel"
        }
    },


];
console.log(books[0].title);
console.log(books[1].author.firstName);
console.log(books[2].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

// *********************************
//       -**FOR EACH METHOD**-
// *********************************

// books.forEach(checkBooks);
//
// function checkBooks (book, index) {
//     let bookNumber = index +1;
//     console.log("Book number: " + bookNumber + '\n' + "Title: " + book.title + '\n' + "Author: " + book.author.firstName + " " + book.author.lastName);
// }

// *********************************
//       -**FOR LOOP METHOD**-
// *********************************
    for(let i = 0; i <books.length; i++ ) {
        console.log(`Book: ${books.indexOf(books[i])+1} \n Title: ${books[i].title} \n Author: ${books[i].author.firstName} ${books[i].author.lastName}`)

    }
    /**

     * Bonus:
     * -STEP 1:
     *   Create a function named `createBook` that accepts a title and author
     *   name
     *
     * -STEP 2:
     *   returns a book object with the properties described
     *   previously.
     *
     * -STEP 3:
     *   Refactor your code that creates the books array to instead
     *   use your function.
     *
     * -STEP 4:
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above.
     *
     *
     * -STEP 5:
     *   Refactor your loop to use your `showBookInfo` function.
     */



// function createBook(bookTitle, author){
//     //This splits the string
//     author = author.split(" ");
//     let book = {
//         title: bookTitle,
//         author: {
//
//             firstName: author[0], //Akira
//             lastName: author[1] //Toriyama
//         }
//     }
//     return book;
// }
// books.push(createBook("Dragon ball", "Akira Toriyama"));
// console.log(books)
//
// function showBookInfo(book){
//     //from the books object-array, count each book
//     console.log(`Book # ${books.indexOf(book) + 1}`);
//     console.log(`Title: ${book.title}`);
//     console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
// }
//
// for (let i = 0; i < books.length; i++){
//     showBookInfo(books[i])
// }
//
// showBookInfo(books)
// console.log(books)
//
})();