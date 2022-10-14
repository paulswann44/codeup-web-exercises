//1 EXPODENTIAL WHILE LOOP

// var i = 1;
//will evaluate until false
// while (i <=14) {
//     console.log(Math.pow(2,i));
//     i++;
// }



//2.
// CONDITION: An ice cream seller can't go home until she sells all of her cones.
//
// Step 1:
// First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. DONE!
//
// Step 2:
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. DONE!
//
// Step 3:
// Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.


// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * (100 - 50 + 1) + 50);
//This expression will generate a random number between 1 and 5
let beingSold= Math.floor(Math.random() * (5 - 1 + 1) + 1);

console.log(allCones);
console.log(beingSold);

let i = 1

do {
    if (allCones > beingSold) {
        console.log(beingSold + " cones sold, and I cannot go home until I sell " + (allCones - beingSold));
    } else if (allCones < beingSold) {
        console.log("I only have " + (allCones - beingSold) + "hi" );
    } else if (allCones == beingSold)
        console.log("Yay! I sold them all");
    i++;
    {
    }
}while(i < allCones);

let i = 1

do {
    console.log(i);
    i++
} while(i <= 10);

//***RESULTS SHOULD LOOK LIKE THIS***
//5 cones sold...
// if there are enough cones
//Cannot sell you 6 cones I only have 3...
// If there are not enough cones
//Yay! I sold them all!
// If there are no more cones



