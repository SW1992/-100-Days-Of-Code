// Day Twenty Two
// Javascript function invocation 

// functions can be invoked in a few different ways in JS
// this, will have a different value depending on which you use
 
// probably the most common invocation method is invoking a function, as a global function
// though doing it this way, pollutes the global name space, so their are better options 
function someFun(firstName,middleName,lastName) { 
  return firstName + " " + middleName + " " + lastName;
}  
console.log(someFun("Matthew", "James", "Bellamy")); 
// Matthew James Bellamy
// in this case, the value of this will be equal to the window object, which owns global functions
// the value of this, generally, is the value of the onwer object of a function or method 

// another way is constructor invocation
// this is done when you use the new keyword & call a constructor function, to create an new instance of an object
function someConstructor(name,age) {
  this.name = name;
  this.age = age;
  // intially this will have no value
}
var someObj = new someConstructor("Tom Morello", "52", "5 foot & 9 inches");
console.log(someObj.name + ", is " + someObj.age + " years old");
// Tom Morello, is 52 years old
// the value of this now, will be the value of the new object we have created when we invoked the constructor function
// so this will be equal to someObj

// another common way is, invoking a function as an object method
var anotherObj = {
  name: "Jimi Hendrix",
  profession: "Guitar Hero",
  logDetail: function () {
    return this.name + " was a " + this.profession;
  }
}
anotherObj.logDetail()
// Jimi Hendrix was a Guitar Hero
// in this case, this will be equal to the object that owns the method that is being invoked
// so this will be equal to anotherObj

// the call & apply methods can also be used to invoke functions
// they can also be used to set the value of this explicitly (manually)
// the value of the first argument passed to either, will determine the this value, when the functions invoked
// the value of this determines the object, the function is invoked upon
function anotherFun (firstName, lastName, middleName) {
  return firstName + " " + lastName + " " + middleName;
}
var someOtherObj = {};
someOtherObj = anotherFun.call(someOtherObj,"Benjamin", "Paul", "Bruce" );
// equivalent to someOtherObj.anotherFun()
// with the call method the other values are the parameters to be passed to the function
console.log(someOtherObj);
// Benjamin Paul Bruce 

var someArr = ["Brian","Elwin", "Haner"]
someOtherObj = anotherFun.apply(someOtherObj,someArr);
// also equivalent to someOtherObj.anotherFun()
// with the apply method the function arguments are passed as an array
console.log(someOtherObj);
// Brian Elwin Haner  






