// Day Eighteen
// Javascript Objects Part 3 

// Objects can be used as a reference data type 
// one of the main differences, between reference & primitive data types
// is that primitive data types store data as a value, where as reference data types store a reference to data 

var motorbike = "Ducatti XDiavel";
var motorbikeTwo = motorbike; 
// saved as a value
motorbike = "Yamaha YZF-R6"; 
// change value of motorbike
console.log(motorbikeTwo);
// Ducatti XDiavel, because that's the value that was saved at the time
console.log(motorbike);
// Yamaha YZF-R6

motorbike = {bike: "Ducatti XDiavel"};
motorbikeTwo = motorbike;
// refers to the motorbike object 
motorbike.bike = "Yamaha YZF-R6";
// change value 
console.log(motorbikeTwo.bike);
// both statements log Yamaha YZF-R6, because motorbikes value was stored as a reference, rather than a copy of a value in time
console.log(motorbike.bike);
// so both reflect the change

// objects have own & inherited properties
// own properties are defined in the object 
var sportsCar = {model: "LaFerrari"};
// inherited properties are 'inherited' from the objects prototype object
// in addition, all objects inherit properties & methods from the Object prototype

// you can check for own or inherited properties, on a object with the in operator
console.log("model" in sportsCar);
// returns true, because model exists as an own property of sportsCar
console.log("valueOf" in sportsCar);
// returns true, because sportsCar inherits the valueOf method from the Object prototype

// or check for own properties specifically, with the hasOwnProperty method
// which will return true if the object has a property as an own property
console.log(sportsCar.hasOwnProperty("model"));
// true
console.log(sportsCar.hasOwnProperty("valueOf"));
// false

// object properties can be traversed with the for in loop
for (item in sportsCar) {
  console.log(item);
  // model
}

// you can also use the object.keys() method, then loop through with a general for loop
var sportsCarKeys = Object.keys(sportsCar);
// see what i did there? ;)
for (var x = 0; x < sportsCarKeys.length; x++ ){
  console.log(sportsCarKeys[x]);
  // model
}





