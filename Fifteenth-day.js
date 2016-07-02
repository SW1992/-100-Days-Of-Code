// Day Fifteen
// Javascript try...catch...finally 
// when it comes to programming, errors are a everyday occurence, in JS & in any other language.

// the try statement can be used to test a given statement or statements for errors.
// the catch statement can be used to define a response, handling errors, should the try statement raise an exception.
try {
  // code to try
  console.loog("Try me");   
}
catch (error) {
  // handle errors
  console.log(error.message);
  // log error
  // console.loog is not a function
}

// try...catch statements can be used along with the throw statement, to allow you to throw your own custom error messages. 
// & the finally statement, which allows you to run some code irrespective of the result of the try/catch clause.
// together they can give you more authority over the flow of control in your programs.  
try {
  // code to try
  throw "Custom Exception";
  // create custom error
}
catch (error) {
  // handle errors
  console.log(error);
  // log custom error
  // Custom Exception 
}
finally {
  // code to execute regardless of result of try/catch 
  console.log("I Run Regardless.");
  // this will execute after the try/catch clause, but before any subsequent statements
}