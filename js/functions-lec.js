
//Function - a reusable block of code that preforms a specified task,
//usually taking an input and producing an output

//console.log()
//prompt()
//alert()
//confirm()
//.startsWith()
//.endsWith()
//numbers() - constructor

//EXAMPLE:
//someFunction(argument)
//can accept a number of arguments
//Arguments are typically OPTIONAL, but some are required


//prompt("what did you have for breakfast?");

//storing the return value of the prompt to our variable named LittleMermaid
//let littleMermaid = prompt(" How many days did you rent for?");

// stores the value of parseInt to our variable
//let littleMermaidDays = parseInt(littleMermaid);

//EXECUTING FUNCTIONS - DEFINITION VS EXECUTION
//Definition is calling the name of the function without the ()
//console.log(parseInt);

//Performing the function when used with ()
//console.log(parseInt("11"));

//***************************************
//FUNCTION EXPRESSION
//***************************************

//function add(num, num2) {
//    return num + num2; //return options are optional.  An example would be Alert()
    //BODY of the FUNCTION
//    console.log("Finished the Function execution");

//};
//console.log(add(5, 3));
//DEFINITION:
//Arguements are the value we pass to a function when executed
//Parameters are placeholders for our function

//let ten =add(5,5)
//console.log(ten);

//***************************************
//ARROW FUNCTION EXPRESSION
//***************************************

//const addition = (num, num2) => num + num2;
//console.log(addition(1,1));
//This is more for a "one" line of code

//***************************************
//FUNCTION EXPRESSION W/IN FUNCTION
//***************************************

//console.log(add(add(5,6), add(10,7));
//(5+6)+(10+7)


//***************************************
//ANONYMOUS FUNCTION
//***************************************

//const increment = function(x){
//    return x +1;
//};
//console.log(2)

//let two = increment(1);

//console.log(addition (two, 6));

//***************************************
// SHOUT() FUNCTION
//***************************************

//function shout(message) {
//    alert(message.toUpperCase() +!!!);
//} ;

//shout("codeup"); //Alert will pop up in the browser

//console.log(shout("codeup")); //returns undefined with "Return" or without "Return"
//Performs a task without an output.  The value has not been defined.
