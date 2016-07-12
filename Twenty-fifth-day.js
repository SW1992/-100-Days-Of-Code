// Day Twenty Five
// Javascript Callbacks 

// callback functions in JS, are functions passed as a parameter to other functions
// the call back function, is then executed at some point, within the function it's passed too

// a good example of using callbacks in JS, is using the Array.prototype.forEach method
// which runs a given callback function on every item of the array the methods invoked on
var numberArr = [10,20,30,40,50]; 
// array to use with forEach 

numberArr.forEach(function(currentVal) { 
  console.log(currentVal);
  // 10, 20, 30, 40, 50 
  // logs one item at a time
}); 

// when we pass callbacks to other functions, it's important to note, that it's the function definition that get's passed
// the function isn't actually executed in the parameter brackets, it's executed in the body of the containing function

// this is important to note because, the fact that the outer function has been given the function definition 
// means it has the privilige to execute the callback, when needed

// we used an unnamed function in the first example, but you can also pass named functions as callbacks
var someObj = {FilmQuote: "I Love lamp"};

function getData (obj,callbackFun) {
  callbackFun(obj);
  // call our callback function, passing in local parameter
}

function doSomethingWithData (data) {
  if (typeof data === "object") {
  // if passed in data is an object
  for (prop in data) {
    console.log(data[prop]);
    // for every prop in object, log it's value
    }
  }
  else if (typeof data === "string") {
  // if passed in data is a string
    console.log(data);
    // log data
  }
  else if (typeof data === "number") {
  // if passed in data is a number
    console.log("the number is: " + data);
    // log the number is: some number
  }
  
}

getData(someObj,doSomethingWithData);
// I love lamp

// here we were calling the getData function & passing in a object for the first parameter 
// and passing in the named function to be used as a callback function, as the second parameter

// so can you pass parameters to callback functions, like you can do with any other function
var someVar = "Gentlemen, you can't fight in here. This is the war room!";

function getMoreData (callbackFun) {
  callbackFun(someVar);
  // you can also pass global variables 
  // here we pass the global someVar variable to our previous call back function
}

getMoreData(doSomethingWithData);
// Gentlemen, you can't fight in here. This is the war room!

// to avoid errors from, things that aren't functions being passed, as the callback parameter
// we can use the typeof operator once more, to verify the callback parameter is a function 
var someNum = 42;

function getOtherData (num,callbackFun) {
  if (typeof callbackFun === "function") {
  // if passed in callback parameter is indeed a function, then call it
    callbackFun(num);
    // passing in, passed in number as parameter 
  }
}

getOtherData(someNum,doSomethingWithData);
// the number is: 42  









