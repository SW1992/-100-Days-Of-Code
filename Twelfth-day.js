// Day Twelve
// Javascript While Loops
 
// while loop
// The while loop, runs a statement, whilst a specific condition remains to be true.
// The condtion is tested before each pass through the loop (iteration). 
// The loops statement is then executed, providing the condtion is still true.
var x = 0;
var y = 0;
while (x < 4) {
  // statement to execute
  /* it's important to modify the value of the loop variable 
  or you will create an infinite loop, which can crash your browser. */
  x++;
  y += x;
  console.log(x, y);
  // x = 1 y = 1 (y = x + y)
  // x = 2 y = 3
  // x = 3 y = 6
  // x = 4 y = 10
}

// do/while loop
// do/while is similar to the while loop, but will always run at least once.
// this is because it executes it's statement before it checks the loop condtion.
// so will always run at least once, even if the condtion is false.
var z = 0;
do 
{
  // run code
  z++;  
  console.log(z);
  // 1, 2
} while (z < 2);  

// while & for loops are ultimately very similar 
/* the main difference is that while loops have their increment/decrement statement
 in their block "{}" & their initialization statement outside of it, instead of in the parentheses of while. */

