(function () {
//1. EXPODENTIAL WHILE LOOP
// //starting index
// let i = 1;
// //will evaluate until false
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
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. DONE!!!
//
// Step 3:
// Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise. NOTE: THIS IS AN IF STATEMENT

 //All the cones that must be sold
    let allCones = Math.floor(Math.random() * (100 - 50 + 1) + 50);

console.log(allCones + " cones to be sold...");
let i = 0;

do {
// This expression will generate a random number between 1 and 5
    let conesToBeSold= Math.floor(Math.random() * (5 - 1 + 1) + 1);
    if(allCones < conesToBeSold){
        console.log( "Cannot sell you " + conesToBeSold + " if I only have " + allCones );
        continue;
    } else if (allCones <= !false) {
        allCones -= conesToBeSold;
        console.log("cones remaining: " + allCones + ", sold: " + conesToBeSold);
        break;
    } else if (allCones > conesToBeSold) {
        console.log( "Cones remaining: " + allCones + ", cones needed to be sold: " + conesToBeSold);
        allCones -= conesToBeSold
      i = allCones;

    }
} while(allCones >= i);

console.log("Yay! I sold them all!");

//Ending inventory
console.log("Cones remaining: " + allCones);



})();







