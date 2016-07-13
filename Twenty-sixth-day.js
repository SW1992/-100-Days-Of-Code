// Day Twenty Six
// Javascript Currying

// Currying also known as partial application, is a functional programming technique, in JS & other languages
// it allows us to pass a function all the arguments it's expecting or just some partial amount of arguments 
// having another function or functions, waiting to recieve the other arguments

// currying example
var curry = function(food) { 
  return function (adjective) {
    console.log(food + " is " + adjective); 
  };
};

var describeCurry = curry("Curry");
// call first function, passing first para, returns function definition
console.log(describeCurry("Yummy"));
// call second function, passing second para
// logs: Curry is Yummy

// so, with currying, you can pass function parameters in installments
// we can also, pass the parameters seperately in a sequential series of brackets
// calling the antecedent curried function directly
console.log(curry("Pizza")("Awesome"));
// logs: Pizza is Awesome

// you can pass as many parameters as you want
// by nesting the appropriate amount of functions & by giving calls the correct number of brackets, 
// for the amount of parameters you want to pass to different functions
var anotherCurry = function(item) {
  return function (noun) {
    return function (adjective) {
      console.log(item + " " + noun + " " + adjective);
    };
  }; 
};

console.log(anotherCurry("PC")("is")("Fun"));
// logs: PC is Fun

// like before, you can also assign the result of the first function call & pass a further series of parameters, in sequential brackets
var describeItem = anotherCurry("Bed");
console.log(describeItem("is")("Warm")); 
// logs: Bed is Warm

