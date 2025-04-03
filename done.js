/* While Loop Review: Three Guesses */

// Define a variable answer, set equal to a random number between 1 and 10
var answer = Math.floor(Math.random()* 10)+1;
// Define a variable guess, set equal to 0
var guess = 0;
// Define a variable guessCount, set equal to 0
var guessCount = 0;
// Let the user guess WHILE guessCount is less than 4
while (guessCount < 4) {
// Add one to guessCount
    guessCount++;
// Set guess equal to the user input after "Guess my number"
guess = prompt("Guess my number");
// If guess is equal to answer, say "Right!" and break the loop
if (guess == answer) {
    alert("Right!");
    break; 
}
// Otherwise say "Wrong!"
else alert("Wrong!");
// End the loop
    }
// If guessCount is equal to 4, say "Out of guesses. The number was ANSWER"
if (guess == 4) alert("Out of guesses. The number was"  + answer);
/* For Loop Conversion */
// Rewrite this as a for loop. 
for (let guessCount = 0;guessCount < 4;guessCount++) {
}


