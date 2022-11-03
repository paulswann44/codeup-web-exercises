(function (){
// Warm-Up:

// (1) Create a function named "typePrinter" that accepts an array as an input
// (2) and logs the data type of each element to the console.



//Condition One: create a function


//
// let arr = [true, "Icon", 25, "66", false, 0];
//
// function typePrinter(userArr){
//     for(let i = 0; i < userArr.length; i++){
//         console.log(typeof userArr[i])
//     }
// }
//
// typePrinter(arr);


//
// (1) Create a function named "average" that takes in an array of
// (2) numeric values, and
// (4) returns the average.
// (4) If any of the elements in the array are non-numeric, the function should return false.

// let array = [1,2,12,4,5]


// function average (array) {
//     let count = 0;
//     //break the array
//     for (let i = 0;  i < array.length; i++) {
//         if(!isNaN(parseFloat(array[i]))) {
//             return count += parseFloat(array[i]);
//         } else {
//             return false;
//         }
//     }
//
// }



// (1) Write a function named "inBetween" that accepts three inputs: min, max, num,
// (2) and returns a boolean determining whether or not the "num" parameter is in between the min and max numbers.
//
//     EX:
// inBetween(1, 10, 5) returns true
// inBetween(25, 26, 25) returns false
// inBetween(0, 1, 0.5) returns true

//condition one




// function inBetween(min, max, num) {
//     if (num < max && num > min) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(num < max);
//     return num < max && num > min;
//
// }

// console.log(inBetween(5, 10, 7));
// console.log(inBetween(5, 10, 10));



// function average(input) {
//     let sum = 0;
//     for(let i = 0; i < input.length; i++) {
//         if(!isNaN(parseFloat(input[i]))) {
//             sum += parseFloat(input[i]);
//         } else {
//             return false;
//         }
//     }
//     return sum / input.length;
// }


// console.log(average(["6", 5, 3, 2, 9]));                    // returns 5
// console.log(average([true, 6, 9, 3, 10]));                // returns false
// console.log(average([{name: "Codey the Duck"}, 10, 3, false])); // returns false" +
// console.log(average([1, 2, 3, 4, 5]));                     // returns 3
// console.log(average(["5.5", "five", 3, 6, 7]));               // returns false



// Create a function named "filterNegativity" that accepts an array of numbers, and returns an array with only positive numbers.
//
//     Ex: filterNegativity([5, -6, 2, 0, -5, -13]) // returns [5, 2, 0,]
//

function filterNegativity (array) {
    let negArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 0){
            return negArray.push(array[i]);
        }else{
            return false
        }
    }
}


    console.log(filterNegativity([5, -6, 2, 0, -5, -13])); // returns [5, 2, 0,]


// const filterNegativity = (array) => {
//     let positiveArray = [];
//     let negativeArray = [];
//     for(let i = 0; i <array.length; i++) {
//         if(array[i] >= 0) {
//             positiveArray.push(array[i]);
//         }else if (array[i] < 0){
//             negativeArray.push(array[i]);
//         }
//     }
//     return positiveArray
//     //return negativeArray
// }
//     console.log(filterNegativity([5, -6, 2, 0, -5, -13])); // returns [5, 2, 0,]




// const filterNegativity = (arr) => {
//     let positiveArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] >= 0) {
//             positiveArr.push(arr[i]);
//         }
//     }
//     return positiveArr;
// }

//console.log(filterNegativity([5, -6, 2, 0, -5, -13]));


})();


















