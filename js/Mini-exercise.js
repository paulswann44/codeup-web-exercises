//********************************************************
// ================ !! Mini-exercises !!
//********************************************************


// Write a function, returnFive, that returns the number five. No inputs should be defined.
function returnFive () {
    return 5;
}
console.log(returnFive(5))
// const returnFive = () => 5;



// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
function isFive (num) {
    return num == 5;
}

console.log(isFive(5));


// how many inputs should the function have?
// what are the data types for the inputs? number
// what is the data type of the output/return value?


// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
function isShortWord (str) {
    return str.length < 5;
}
console.log(isShortWord("cat"));

// const isShortHand = (str) => string.lenght < 5

// how many inputs?
// what data type for inputs?
// what is the return type?


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
function isSameLenght (str1, str2) {
    return str1.length === str2.length;
}
console.log(isSameLenght("apple", "fruit"));
// How many inputs?
// What type of input?
// What type of output?

