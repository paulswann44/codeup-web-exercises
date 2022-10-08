"use strict";

//CMD+A+/
// Make a function named isOdd(number)
function isOdd(num){
    return (num % 2 !==0);
}
console.log(isOdd(6));
// Make a function named isEven(number)
function isEven(num){
    return (num % 2 === 0)
}

console.log(isEven(4));

// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return (input === input);
}

console.log(identity("input"));

// Make a function named isFive(input)
function isFive(input) {
    return 5;
}
console.log(isFive(3));
// Make a function named addFive(input) that adds five to some input.
function addFive (x) {
    return x + 5;
}
console.log(addFive(6));

// Make a function named isMultipleOfFive(input)
function isMultipleOfFive(x){
    return x * 5;
}
console.log(isMultipleOfFive(2));
// Make a function named isThree(input)
function isThree(num) {
    return (num = 3);
}
console.log(isThree(6));

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(num){
    return (num * 3);
}
console.log(isMultipleOfThree(4));

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(i){
    if (i % 3 && i % 5 !==0) {
        return true;
    }
    return false;
}

console.log(isMultipleOfThreeAndFive(15));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
//function isMultipleOf(target, n) {

//}

// Make a function named isTrue(boolean)
function isTrue (boolean) {
    return "true";

}
console.log(isTrue("false"));

// Make a function named isFalse(boolean)
function isFalse (boolean) {
    return false;
}
console.log(isFalse(true));

// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy (input) {

}
console.log(isTruthy("input"))
