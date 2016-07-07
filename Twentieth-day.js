// Day Twenty
// Javascript this

// this in javascript, is basically a reference object
// it refers to & it's value is, the object that is currently in context, the object that "owns" the current executing code
var someActor = {
  name: "Ryan Gosling",
  age: "35",
  profession: "Actor",
  logPersonDetail: function() {
    return this.name + " is " + this.age + ", and is an " + this.profession;
    // in this case, this's value will be equal to the object the method's defined on
    // since this will be object that is invoking the method 
    // when this is used in objects in general, it's value is that object
  }
}

console.log(someActor.logPersonDetail());
// Ryan Gosling is 35, and is an Actor 

// in the context of a constructor function, this basically acts as a placeholder, for objects created with the constructor function
function actorConstructor (name, age) {
  this.name = name;
  this.age = age;
  this.profession = "Actor";
  this.logPersonDetail = function() {
    return this.name + " is another " + this.profession + ", who is " + this.age;
  }
  // this's value will be equal to the object in context, when accessing a property or calling a method
}

var anotherActor = new actorConstructor ("Brad Pitt", "52"); 
console.log(anotherActor.logPersonDetail());
// Brad Pitt is another Actor, who is 52
// in this case, this is equal to the anotherActor object

// when used in a function it's value is whatever object claims ownership of the function
// for example, when used in a global function, this's value is the object that owns all global functions & variables
// the global window object
var firstName = "George";
var lastName = "Clooney";

function logFullName () {
  return this.firstName + " " + this.lastName;
  // equivalent to window.firstName & window.lastName
}
console.log(logFullName());
// George Clooney
console.log(window.logFullName());
// George Clooney

// which proves that window object owns global functions & variables
// and that in this case, this's value is the window object 
