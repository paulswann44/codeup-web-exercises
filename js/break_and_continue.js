(function(){


// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//  Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//  Your output should look like this:


    //Prompt() will produce a "string", so it needs to be converted to a number
    let oddNumber= Number(prompt("Enter an odd number between 0 - 50:"));



     for(let i = 1; i <= 50; i +=2) {

            if (oddNumber !== i) {
                console.log("Here is an odd number:" + i);
                continue;

            } else if (oddNumber === i) {
                console.log("Yikes! Skipping number:" + i);


         }

     }






})();