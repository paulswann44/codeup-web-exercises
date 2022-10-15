(function () {
//1 EXPODENTIAL WHILE LOOP
//starting index
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


//This is how you get a random number between 50 and 100
//  let allCones = Math.floor(Math.random() * (100 - 50 + 1) + 50);
//
// //Beginning inventory
// console.log(allCones + " cones to be sold...");
// let i = 0;
//
// do {
// // This expression will generate a random number between 1 and 5
//     let conesToBeSold= Math.floor(Math.random() * (5 - 1 + 1) + 1);
// //An expression to express to illustrate that there are
// // LESS cones in inventory that can be sold
//     if(allCones < conesToBeSold){
//         console.log( "Cannot sell you " + allCones + " if I only have " + conesToBeSold );
// //if true, then break
//         break;
// //An expression to express to illustrate that there are LESS cones in inventory that can be sold
//     } else {
//         console.log( "Cones remaining: " + allCones + ", cones needed to be sold: " + conesToBeSold);
// //The increment is depleted per cycle by the amount of cones to be sold
//         allCones -= conesToBeSold
// //This is so that the ending balance reflects remaining inventory rather than inventory sold.
//        i = conesToBeSold;
//     }
// //The condition is that all the cones (allCones) much be almost or exactly ZERO (i =conesToBeSold)
// } while(allCones >= i);
//
// console.log("Yay! I sold them all!");
//
// //Ending inventory
// console.log("All cones sold: ", allCones);

})();







