/* While Loop Review: Three Guesses */

// Define a variable answer, set equal to a random number between 1 and 10
var answer = Math.floor(Math.random()* 10)+1;
// Define a variable guess, set equal to 0
guess = 0;
// Let the user guess WHILE guessCount is less than 4
for (let guessCount = 0;guessCount < 4;guessCount++) {
// Set guess equal to the user input after "Guess my number"
guess = prompt("Guess my number");
// If guess is equal to answer, say "Right!" and break the loop
if (guess == answer) { 
    alert ("Right!");
  break;
}
// Otherwise say "Wrong!"
else alert("Wrong!");
// End the loop
}
// If guessCount is equal to 4, say "Out of guesses. The number was ANSWER"
if (guessCount == 3) alert("Out of guesses. The number was" + answer);
/* For Loop Conversion */

// Rewrite this as a for loop. 


/* Multiplication */

// Create 2 variables, a & b, and set to ne random integers between 3 and 9
var question = 0;
for (let question =0; question < 5;question++) {
var a = Math.floor(Math.random()*(10-3))+3;
var b = Math.floor(Math.random()*(10-3))+3;
// Set a variable called product to be the product of a and b
var product = a * b;
equation = a + " * " + b + " = ??";
// Ask the equation of the user and store the user input in a variable called answer
answer = prompt(equation);
if (answer == product) alert("Correct!"); 
else alert("Incorrect!");
}
// Say "Correct!" if the answer and product match, "Incorrect!" if not.

/* Multiplication whjile Loop */
// Embed all this code in a While loop and run it 5 times.

/* Multiplication For Loop */
// Convert the while loop to a for loop. 
