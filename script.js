/* Multiplication */

// Create 2 variables, a & b, and set to ne random integers between 3 and 9
var a = Math.floor(Math.random()*10-3)+3;
var b = Math.floor(Math.random()*10-3)+3;
// Set a variable called product to be the product of a and b
var product = a * b;
// Set a variable called equation to display  a * b = ??
var quetion = 0;
while (question < 5) {
equation = alert(a + " * " + b + "= ??")
// Ask the equation of the user and store the user input in a variable called answer
answer = prompt(equation);
equation++;
}
// Say "Correct!" if the answer and product match, "Incorrect!" if not.
if (answer == product) alert("Correct!"); 
else alert("Incorrect!");
/* Multiplication whjile Loop */
// Embed all this code in a While loop and run it 5 times.

/* Multiplication For Loop */
// Convert the while loop to a for loop. 
