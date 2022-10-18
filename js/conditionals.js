"use strict";

(function() {
    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message which relates to the
     * color stated in the argument of the function. For colors you do not have
     * responses written for, return a string stating so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *
     *
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

//function analyzeColor (color) {
//         if (color === "red") {
//             console.log("Red is the color of my cup!");
//         } else if (color === "orange") {
//             console.log("The color of an orange is orange");
//         } else if (color === "yellow") {
//             console.log("Yellow is the color of the sun.");
//         } else if (color === "green") {
//             console.log("The grass is colored green");
//         } else if (color === "blue") {
//             console.log("the color of water");
//         } else if (color === "violet" ) {
//             console.log("Purple is the color of royalty,");
//         } else {
//             console.log("Indigo is not a real color");
//         }
// }
//
// let userColor = prompt("What is your favorite color?")
// analyzeColor(userColor);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
     * You should see a different message every time you refresh the page
     */
//analyzeColor(randomColor);
    /**
     * TODO:
     * Comment out the code above, and refactor your function to use a switch-case statement
     */
// function colorAnalyze(color) {
//     switch(color) {
//         case "red":
//             alert("Red is the color of my cup!");
//             break;
//         case "orange":
//             alert("the color of orange is orange");
//             break;
//         case "yellow":
//             alert("the color of the sun is yellow.");
//             break;
//         case "green":
//             alert("grass is green");
//             break;
//         case "blue":
//             alert("the color of water is blue");
//             break;
//         case "violet":
//             alert("This color is the same as purple");
//             break;
//         default:
//             alert("indigo is not a real color");
//             break;
//     }
// }

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
// let colorPrompt= prompt("what is your favorite color");
// colorAnalyze(colorPrompt);
    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * everything for free!.
     *
     * Write a function named `calculateTotal` which accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *


     * Test your function by passing it various values and checking for the expected
     * return value.
     */
//*********************************************
//          IF/ELSE-IF /IF STATEMENT
//*********************************************

// function calculateTotal(luckyNumber, price) {
//     if (luckyNumber === 0){
//         return 0 * price;
//     }else if (luckyNumber === 1){
//         return .1 * price;
//     }else if(luckyNumber === 2) {
//         return .25 * price;
//     } else if(luckyNumber === 3) {
//         return .35 * price;
//     } else if (luckyNumber === 4){
//         return .5 * price;
//     } else {
//         return price;
//     }
// }


// console.log("You have a discounted price of $" + calculateTotal(0, 100));
// console.log("You have a discounted price of $" + calculateTotal(1, 100));
// console.log("You have a discounted price of $" + calculateTotal(2, 100));
// console.log("You have a discounted price of $" + calculateTotal(3, 100));
// console.log("You have a discounted price of $" + calculateTotal(4, 100));
// console.log("You have a discounted price of $" + calculateTotal(5, 100));


//*********************************************
//              SWITCH STATEMENT
//*********************************************
//
// function calculateTotal(luckyNumber, price) {
//
//     switch (luckyNumber) {
//         case 0:
//             return 0 * price;
//             break;
//         case 1:
//             return .1 * price;
//             break;
//         case 2:
//              return .25 * price;
//             break;
//         case 3:
//             return .35 * price;
//             break;
//         case 4:
//             return .5 * price;
//             break;
//         default:
//             return 1 * price ;
//             break;
//     }
// }
//
//
// console.log("You have a discounted price of $" + calculateTotal(0, 100));
// console.log("You have a discounted price of $" + calculateTotal(1, 100));
// console.log("You have a discounted price of $" + calculateTotal(2, 100));
// console.log("You have a discounted price of $" + calculateTotal(3, 100));
// console.log("You have a discounted price of $" + calculateTotal(4, 100));
// console.log("You have a discounted price of $" + calculateTotal(5, 100));
    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// //Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = prompt("What is your total bill?");
// alert("Your total bill will be $" + calculateTotal(luckyNumber,totalBill));


    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */


//*********************************************
//      NESTED IF STATEMENT WITH IF'S
//*********************************************
//     let confirmNumber = confirm("do you want to submit a number?");
//
//     function nestedIfStatements(confirmNumber) {
//         if (confirmNumber === true) {
//             //By storing the prompt in the if statement, I can reuse it within the alerts
//             let promptNumber = prompt("What is your number");
//             if (promptNumber % 2 !== 0 && promptNumber > 0) {
//                 alert("Your number is odd!");
//                 //promptNumber will return as a string, so it needs parseFloat
//                 alert(parseFloat(promptNumber) + 100);
//                 alert("Your number is also POSITIVE.")
//             } else if (promptNumber % 2 === 0 && promptNumber > 0) {
//                 alert("Your number is even");
//                 //promptNumber will return as a string, so it needs parseFloat
//                 alert(parseFloat(promptNumber) + 100);
//                 alert("Your number is POSITIVE");
//             } else if (promptNumber % 2 !== 0 && promptNumber < 0) {
//                 alert("Your number is odd");
//                 //promptNumber will return as a string, so it needs parseFloat
//                 alert(parseFloat(promptNumber) + 100);
//                 alert("Your number is NEGATIVE");
//             } else if (promptNumber % 2 === 0 && promptNumber < 0) {
//                 alert("Your number is odd");
//                 //promptNumber will return as a string, so it needs parseFloat
//                 alert(parseFloat(promptNumber) + 100);
//                 alert("Your number is NEGATIVE");
//             } else {
//                 alert("It is not a number or zero");
//             }
//         } else {
//             alert("Thank you for your time!")
//         }
//     }
//
//     nestedIfStatements(confirmNumber);
//
//

})();