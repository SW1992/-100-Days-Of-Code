// Day Nineteen
// Javascript Prototype & inheritance

// all Javascript Objects have a link to a prototype object
// methods & properties are inherited from this prototype 
// wether it's a custom prototype of the object, or the Object.prototype which every JS object inherits from

// you can create a custom prototype with an object constructor function
function Band(singer,guitarist,bassist,drummer) {
  this.singer = singer;
  this.guitarist = guitarist;
  this.bassist = bassist;
  this.drummer = drummer;  
}

// then when you use the new keyword to create objects like
var Shikari = new Band("Rou Reynolds", "Rory Clewlow", "Chris Batten", "Rob Rolfe");
var Metallica = new Band("James Hetfield", "Kirk Hammett", "Robert Trujillo", "Lars Ulrich");
// they will use the same prototype

// you can't add a property to a prototype in the exact same way as you would with a regular object
// but you can add it directly in the constructor function, or use the prototype property
Band.prototype.nationality = null;
// define property on prototype
Metallica.nationality = "American";
Shikari.nationality = "British";
// set individual objects values for property defined on prototype
console.log(Metallica.nationality);
// Amercian
console.log(Shikari.nationality);
// British

// you can also add methods to a prototype, in the constructor function or with the prototype property
Band.prototype.fullBand = function () {
  return this.singer + " " + this.guitarist + " " + this.bassist + " " + this.drummer;
  // will return full band when called
}

console.log(Metallica.fullBand()); 
// James Hetfield, Kirk Hammett, Robert Trujillo, Lars Ulrich
console.log(Shikari.fullBand());
// Rou Reynolds, Rory Clewlow, Chris Batten, Rob Rolfe

// note: it's important, generally, to never try to define methods or properties on the built-in prototypes in javascript
// in some cases it's acceptable, but as a general rule, only modify you own custom prototypes

// the prototype chain is traversed when you try access properties of an object
// it will look for the property on the object, on it's prototype & the prototypes prototype if necessary
// carrying on up the chain untill it finds the property it's looking for 
// or reaches the end of the prototype chain

var obj = {prop: "some value"}; 
// obj > Object.prototype > null (end of the chain)