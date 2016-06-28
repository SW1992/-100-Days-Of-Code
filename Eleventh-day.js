// Day Eleven
// Javascript For Loops
// Javascript has several different types of loops, today i'm going to deal with the for & for in loops.
// Say you want to perform the same operation on each item of an array, loops are useful for helping to automate processes like this.

// for loop
// for loops are useful for when you want to execute some block of code a specific number of times.
for (var i = 0; i < 5; i++) {
  // code to run on each iteration
  console.log(i);
  // 0, 1, 2, 3, 4
}
// for loops generally consist of three optional staments

// Statement 1, is the intialization statement.
var x = 0; 
// This statement is generally used to intialize the loops counter variable.

// Statement 2, is the loop condtion statement.
x < 5;
// This is checked before each loop iteration & allows the loop to continue while it's expression is still true.

// Statement 3, is the increment/decrement statement.
x++;
// This occurs at the end of each loop iteration & is generally used to increase or decrease the value of the loops counter variable.
// The loop condtion is evaluated again after this.

// for in 
// for in loops are used to loop through the properties of an object.
var obj = {someProp: "Some value", somePropTwo: "Another value"};
for (prop in obj) { 
  // for each property in the object, it will run the specified code block
  console.log(obj[prop]);
  // Some value, Another Value
}



