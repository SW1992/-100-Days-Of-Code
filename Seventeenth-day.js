// Day Seventeen
// Javascript Objects Part 2 

// there are a few ways you can create objects in javascript
// the most common & easiest way is object literal notation using {}
var car = {brand: "Volkswagen", model: "Golf GTI ", colour: "Blue"};

// however this method isn't always the most efficient way to create objects
/* say we wanted to create many objects all of the same type, such as several car objects,
in this case, an object constructor is far more effective */
function carConstructor(brand,model,colour) {
  // with constructor notation, we can set pre-determined properties
  this.brand = brand;
  this.model = model;
  this.colour = colour;
  // this acts as a placeholder for the executing object
}

var carTwo = new carConstructor("Mercedes-Benz", "SLK 350", "White");
// we can then create car objects with the new keyword, which calls the constructor function and passes in the values for the properties
// these properties can then be accessed like normal 
console.log(carTwo.brand + " " + carTwo.model + " " + carTwo.colour);
// Mercedes-Benz SLK 350 White

// you can also use another form of constructor notation new Object(), though this suffers the same effiency pitfall as the literal method
// using new Object() for singular objects, also complicates code unnecessarily & runs slower than the literal notation way  
var carThree = new Object();
carThree.brand = "Audi";
carThree.model = "A5";
carThree.colour = "Silver"; 
// set properties
console.log(carThree.brand);
// Audi

// all object data properties also have three attributes, all set to true by default
// Configurable, which determines wether a property can be modified or deleted
// Enumerable, which determines wether the property shows up during the iteration process of a for...in loop, or exists in the returned array of Object.Keys()
// Writeable, which determines wether a property can be changed with an assignment operator
console.log(Object.getOwnPropertyDescriptor(carThree,'brand'));
// {"value": "Audi", writeable: true, enumerable: true, configurable: true}

// you can delete object properties with the delete keyword, providing that their not inherited properties or have their configurable attribute set to false
delete carThree.colour;
console.log(carThree.colour);
// logs undefined, because the objects colour property has been deleted








