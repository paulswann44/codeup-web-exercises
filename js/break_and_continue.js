(function (){

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//  Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//  Your output should look like this:

let oddNumber= Number(prompt("Enter an odd number between 0 - 50:"));
for(let i = 1; i <= 50; i +=2) {
    //No Even Numbers-OR-Numbers above 50
    if (oddNumber % 2 === 0 || oddNumber >= 50) {
        alert("Not a valid number!");
        //It will break the loop and will not continue the loop if TRUE
        break;
        //Odd number must NOT match index
    } else if (oddNumber !== i) {
        console.log("Here is an odd number :" + i);
        //It stops the loop once oddNumber matches index
        //then continues to do another loop
        continue;
    } else if (oddNumber === i) {
        console.log("Yike! Skipping number:" + i);
    }


}

})();