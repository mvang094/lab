////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

let lovesCode = true;
if (lovesCode = true)
  console.log("I love to code!");
else
  console.log("Coding has its challenges");

// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

if (amysAge < brittanisAge) //if Amys age is less than Brittani, then it prints out that Brittani is older
  console.log("Brittani is older");
else if (amysAge === brittanisAge) //If Amy's age is the same as Brittanis, then it prints out that they are the same age
  console.log("Brittani and Amy are the same age");
else
  console.log("Amy is older"); //This is a catch-all that if all the statements above are not true, then it must mean that Amy is older


////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

if (amysBirthYear === brittanisBirthYear) //If Amy was born the same year as Brittani, then it would print out that they were born in the same year
  console.log("Brittani and Amy were born in the same year");
else
  console.log("Brittani and Amy were not born in the same year"); 

////////// PROBLEM 4 //////////

let temperature = 55;
let rain = false;

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. 
  If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. 
  If it is 60 degrees or below, one should wear a jacket and carry an umbrella. 
  Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

if ((temperature >= 80) && rain) //Since rain is already set to true, you do not need to state it again in the condition. JS already knows it's
                                 //been declared above
  console.log("It is raining and 80 degrees and above. Wear a t-shirt and take an umbrella");
else if (temperature >= 80)
  console.log("It is 80 degrees and above. Wear a t-shirt");
else if(60 <= temperature && rain) //You do not need to include the 'Less than 80 degrees because if the first condition was false,
                                   // that means that the temperature has to be less than 80.
  console.log("It is " + temperature + " and raining. Wear a rain jacket");
else if (60 <= temperature)
  console.log("It is " + temperature + ". Bring a light jacket");
else if ((temperature < 60) && rain)
  console.log("It is " + temperature + " and raining. Wear a jacket and carry and umbrella");
else if (temperature < 60) //you can put (!rain), but it seems to work without it
  console.log("It is " + temperature + ". Wear long sleeves");

////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.(We are supposed to print the word "Hello" to the screen 10x)
*/

//let word; //since it has not been instantiated, javascript will put undefined as the value

for (let i = 0; i < 10; i++){
  console.log("Hello");}

////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayTwo = [];

for (let x = 0; x < array.length; x++)
  arrayTwo[x] = array[x];

console.log(arrayTwo);*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

for (let x = 0; x < array.length; x++)
  console.log(array[x]);

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration 
  it would log 10, on the second iteration it would log 9.
*/

/*
Because the iterator is decrementing, we want to make sure that the iterator is greater than or equal to 0 (We still need index[0]). 
We do not want the loop to run to index[-1], which does not exist. We do not want x > array.length 
as it will stop after 1 iteration (x-- will make it go under the array.length and nothing will log 
as that condition became false.) Once x = 0, it will stop. */

for (let x = array.length; x >= 0; x--)
  console.log(array[x]);
                                      
////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. 
  In each iteration of the loop, increase the score by one. If your code is successful, 
  you will see your logged statement 7 times.
*/

while (score < passingScore){
  console.log("Your score is not high enough");
  score++;
};


////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.
*/

let changeMyMind = true;

console.log(changeMyMind);

if(changeMyMind)
  changeMyMind = false;
else
  changeMyMind = true;

console.log(changeMyMind);


////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true 
// (it should currently be set to false due to the if-else statement in Problem 9). 
// After you change the value of changeMyMind, console.log it's new value (it should now read true).

changeMyMind = !changeMyMind; //Changes changeMyMind to the opposite of what it is
console.log(changeMyMind);

////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

// Create a while loop that continues to run while z is greater than 0. 
// Within the while loop, log a countdown from the value of z to 1. 
// Once you have logged the countdown, make sure you decrement z by 1. 
// If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

let z = 5;
while (z > 0){
  for (let x = z; x > 0; x--)
    console.log(x);
z--
};
