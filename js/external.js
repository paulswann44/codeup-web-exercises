//1.
console.log("Hello from external Javascript");

//2.
alert('Welcome to my website');

//3.
let myPrompt = prompt('What is your favorite color?');
alert("Great, " + myPrompt + " is my favorite color too!");


//Exercise 3, Part I - Disney Movies

//Little Mermaid
let price = 3;
let movieOne = prompt("How many days did you rent Little Mermaid?");
let priceOfMermaid = movieOne * price;
console.log(alert("The price of the Little Mermaid is " + priceOfMermaid));

//Brother Bear
let movieTwo = prompt("How many days did you rent Brother Bear?");
let priceOfBear = movieTwo * price;
console.log(alert("The price of the Brother Bear is " + priceOfBear));

//Hercules
let movieThree =prompt('How many days did you rent Hercules?');
let priceOfHercules = price * movieThree;
console.log(alert("The price of the Hercules is " + priceOfHercules));
 let totalPrice = priceOfHercules  + priceOfBear + priceOfMermaid;
 alert(totalPrice);


//Exercise 3, Part II

//Google
let googlePay = prompt("What is the pay from Google?");
let googleHours = prompt("How many hours? did you work for Google?");
let results = googlePay * googleHours;
//console.log(alert("This will be your pay " + results ));

//Apple
let applePay = prompt("What is the pay from Amazon?");
let appleHours = prompt("How many hours did you work for Amazon?");
let sumOfPay = applePay * appleHours;
//console.log(alert("This will be your pay " + sumOfPay));


//Amazon
let amazonPay = prompt("What is the pay from Facebook?");
let  amazonHours= prompt("How many hours did you work for Facebook?");
let totalPay = amazonPay * amazonHours;
//console.log(alert("This will be your pay " + totalPay));
let payment = (results + sumOfPay + totalPay);
alert(payment);

//Excercise 3, Part III - Class Conflict

let isFull = confirm("is the class full?");
let hasConflict = confirm("do you have a conflict with your schedule?");
alert(!isFull && !hasConflict);

//Exercise 4, Part IV - Discount Offer
let itemsBought = prompt("How many items did you purchase?");
let offer = confirm("Has the offer expired?");
let isPremium = confirm("Are you a premium member?");
alert((parseFloat(itemsBought >2 )||isPremium) && !offer);


