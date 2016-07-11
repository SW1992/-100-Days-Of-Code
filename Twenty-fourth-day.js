// Day Twenty Four
// Javascript variable & function hoisting

// In js, variables declarations are hoisted to the top of their containing scope
// to the top of the script if global & the top of the function if local
// this can give the appearance of variables being used before they are declared
// note: only variable declarations are hoisted, variable assignments are not hoisted
console.log(someVar);
// logs undefined, which proves the variable exists
// but because it's only been declared at this point, it's value is undefined

var someVar = "assigned later";

console.log(someVar);
// logs assigned later, at this point the variable has been intialized

// this means that, although it appears differently, this example is equivalent to doing this 
var anotherVar;

console.log(anotherVar);
// undefined

anotherVar = "assigned later";

console.log(anotherVar); 
// assigned later 
// note: even though variable declarations are hoisted, it's considered a best practice to always declare variables at the top of the scope that their being used in

// function declarations are also hoisted, they differ from variable hoisting in that the whole function gets hoisted, not just the name 
// but are similar to variable hoisting, in that, function assignments don't get hoisted 
hoistMe()
// hoist away

function hoistMe () {
  console.log("hoist away");
}

notHoisted()
// Throws TypeError: notHoisted is not a function, because function expressions aren't hoisted, even though the declaration still is

var notHoisted = function noHoist() {
  console.log("i'm not hoisted");
}

// in terms of hoisting, function declarations take precedence over variable declarations 
var precedence;

function precedence () {
  return "I take precedence";   
}

console.log(precedence);
// logs function declaration, rather the value of the variable, which would be undefined 
