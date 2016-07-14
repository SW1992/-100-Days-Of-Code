// Day Twenty Seven
// Javascript bind, apply & call 

// the bind method can be used in JS, to manually set which object this will be bound too, when a function is called or method is invoked
// it can be useful when you assign an object method where you use this, to a variable
// when you call a method like that you might find this doesn't have the value you think it does, bind can be used to rectify that
window.name = "Jimmy Carr";
// name prop stored on the global object

var person = {
  // name prop local to person object
   name: "Sean Lock",
   logName: function () {
     return this.name; 
   }
};

var bestComedian = person.logName;

console.log(bestComedian());
// Logs: Jimmy Carr, not Sean Lock, like we would expect
// because the bestComedian function is executed as a global function 
// so this is bound to the global (window) object
bestComedian = person.logName.bind(person);
// we can use bind, to set this to the correct value we want, the person object
console.log(bestComedian());
// Logs: Sean Lock

// the apply & call methods can also be used to set the value of this explicitly in JS, both methods are very similar but vary slighty
// the first parameter, for both methods is used to set the this value to constitute which object functions are invoked upon
// the second parameter in the case of apply takes an array of arguments, to pass to the function
// call's second parameter, takes a seperated list of arguments, to pass to the function
this.arr = [10,20,30];

function logArray(arr) {
  return this.arr;
}

var arrHolder = {
  arr: [60,70,80],
}

console.log(logArray(arrHolder.arr));
// Logs: 10, 20, 30, instead of what we wanted
console.log(logArray.apply(arrHolder,arrHolder.arr));
// we can use apply, thusly, to set this to the object we want
// passing the property value array we want the function to return as the second parameter
// Logs: 60, 70, 80 like we wanted
var number = -Infinity; 

var numHolder = { 
  number: Infinity
}

function logNumber(num) {
  return this.number;  
}

console.log(logNumber(numHolder.number));
// Logs: -Infinity, not what we wanted 
console.log(logNumber.call(numHolder,numHolder.number));
// similar to before we can use call, thusly
// passing the property value number we want the function to return as the second parameter
// Logs: Infinity

// notably you can use call & apply to "borrow" methods, to use with objects
// you can use array methods, with array like objects, for example
var arrLike = {0: "OverWatch", 1: "Rocket League", 2: "Fallout 4", length: 3};
// array like object 

console.log(Array.prototype.reverse.call(arrLike)); 
// borrow reverse method from the array prototype & use it on our array like object
// Logs: Object {0: "Fallout 4", 1: "Rocket League", 2: "OverWatch", length: 3 } 

console.log(Array.prototype.slice.call(arrLike,2));
// borrow slice method, slice item 2 from array like object, returning it in new array
// Logs: Array ["OverWatch"]




