// Day Twenty Three
// Javascript Closures

// Closures in javascript are functions nested in other functions, that have access to variables & parameters defined in their outer scope 
// this is possible because, as stated by the MDN: closures are said to "remember the environment in which they are created" 
// closures also have access to the global scope, as well as their own local scope, as normal with functions
 
// closure example
var globalVar = "We";   
function outerFun (param) { 
  var freeVar = "Accessible in the closure";  
  function innerFun() {
    return globalVar + " " + param + " " + freeVar;
  }
  return innerFun()
  // so the innerFun will be called, after we call outerFun
  // the value that the inner function returns, will be the return value of the call     
}
console.log(outerFun("Are"));
// We Are Accessible in the closure
// Note: closures have access to variables & parameters, existing in their outer scope, even after the outer function has returned

// closures make it possible to have private variables, which are only changable in the context of the closure
var countDown = ( function () {
  var count = 4;
  // set variables intial value
  return function finalCountdown() {
    return count -= 1;
    // countDown = countDown - 1
  }
})();
// using an IIFE, so the outer function only runs once, to set intial value of variable at 4 
console.log(countDown());
// 3
console.log(countDown());  
// 2
console.log(countDown());
// 1

// and private methods too, both are useful for restricting access to code, offering a greater level of protection 
var countDownStatement = (function () {
  var countStatement = "it's the final countdown"; 
  // string to be returned, only via private method   
  return { 
    privateMeth: function() {
      return countStatement; 
    }
  }
})();
console.log(countDownStatement.privateMeth());
// it's the final countdown  
