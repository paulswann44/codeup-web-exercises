(function() {


//1. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(multiplier) {
    for (let i = 1; i <= 10; i++){
        console.log(i + " x "+ multiplier + " = " + multiplier * i);
    }

}
showMultiplicationTable(7);

//2.Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

    function randomInt(max, min) {
        for (let i = 1; i <= 10; i++) {
            let randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);

            if (randomNumber % 2 !== 0) {
                console.log(i, randomNumber + " is a odd number");
            } else if (randomNumber % 2 === 0) {
                console.log(i, randomNumber + " is an even number");
            }
        }
    }
    randomInt(200, 20);







// 4.   Create a for loop that uses console.log to create the output shown below.

    for (let i = 100; i >= 0; i -=5) {
        console.log(i);
    }



})();





