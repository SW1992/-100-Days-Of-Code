// Day Twenty One
// Javascript scope

// their are two types of scope in javascript
// global scope & local or function level scope 
var heroOne = "Superman";
// global variable

function logHero() {
  var heroOne = "Batman";
  // local variable
  console.log(heroOne)
}
console.log(heroOne);
// Superman
// this is acessing the global heroOne variable
logHero();
// Batman
// this is accessing the local heroOne variable
// the scope of the two variables differ, so in this case we were accessing two different variables with the same name

// global variables and functions, are accessible anywhere in the script
// because the global scope is the window object, which owns all global variables and functions
var heroTwo = "Iron Man";

function logHeroTwo () {
  // global function
  console.log(heroTwo);
}
console.log(heroTwo);
// Iron Man
logHeroTwo();
// Iron Man
// this is possible because heroTwo is a global variable & their is no local variable with the same name overiding it's priority 

// if you initialize a variable without first declaring it with the Var keyword
// it automatically becomes a globally scoped variable
function logHeroThree () {
 heroThree = "Spiderman";
  // it's important to always declare variables, when you want them to only be accessible locally & in general
}
logHeroThree();
// call function, so the variable exists
console.log(heroThree);
// Spiderman
// because we didn't declare the variable, it's accessible globally

// locally scoped variables are only accesible inside the function in which they are defined
// this makes it possible to have variables with the same name, that exist as seperate variables, in different functions. 
function LogVillain () {
  var villain = "The Joker";
  console.log(villain);
}

function LogAnotherVillain() {
  var villain = "Lex Luthor";
  console.log(villain);
}
LogVillain();
// The Joker
LogAnotherVillain();
// Lex Luthor

// JS doesn't have block level scope, unlike some languages
// so say you have a variable, with some surrounding curly braces
// the code in those curly braces will only ever have either local or global scope, depending on the context in which they are used
var alterEgo = "Clark Kent";

{
  alterEgo = "Bruce Wayne";
  // this variable is in the global scope, because the curly braces have no scoping effect
  // so we are simply changing the value of the exisisting alterEgo variable
  console.log(alterEgo);
  // Bruce Wayne
}
console.log(alterEgo);
// Bruce Wayne



