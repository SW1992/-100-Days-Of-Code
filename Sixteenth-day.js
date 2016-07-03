// Day Sixteen  
// Javascript Objects Part 1 

// OOP in JS & in other programming languages, is a way of representing real life objects in code.
// In the real world objects have certain characteristics or properties.
// If you think about a plane or a motorbike, it will have a certain colour, weight, length etc.

// Objects in javascript take the form of undordered collections of name-value pairs called properties, and can also contain methods.
// properties are akin to characteristics of real world objects & consist of a property name & property value.

// methods are akin to the things you can do with certain objects, a motorbike object could have an accelerate or decelerate method. 
// methods consist of a property name, but the value points to a function definition, which can be invoked at will.

// object literal definition
var obj = { 
  firstName: "Joe",  
  lastName: "Bloggs", 
  height: "6ft",
  personDescription: function() { console.log(this.firstName + " " + this.lastName + " is " + this.height + " tall") }
};

// there's two main ways of accessing objects properties in JS.
// note: property names that contain a space, hypen or start with a number can only be accessed with bracket notation.

// dot notation 
// which takes the form objectName.PropertyName 
console.log(obj.firstName);
// Joe

// bracket notation
// which takes the form objectName["PropertyName"]
console.log(obj["lastName"]);
// Bloggs

// we can also access an objects properties through a variable
var howTall = "height";
console.log(obj[howTall]);
// 6ft

// method calls take the form objectName.method()
obj.personDescription();
// Joe Bloggs is 6ft tall

// In JS, everything except primitives are considered objects.
// Anything that isn't Number, String, Boolean, Null or Undefined. 
// Though primitives can be coerced to objects & this is what allows you to access methods & properties on them.

