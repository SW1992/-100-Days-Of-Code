// Day Thirteen
// Regular Expressions
// in javascript regular expressions are descriptive patterns, that consist of a number of characters (alphanumeric or otherwise).
var reg = /regexp/;
// regexp literal
var strOne = "look for regexp";
var strTwo = "this is a string";  
// these patterns are commonly used in conjuction with the string search () & replace() methods.
// to search for matches.
strOne.search(reg);
// returns 9, (index of first character where it finds a match)

// or replace exsisting patterns with a given replacement.
var result = strTwo.replace(/string/,"replacement");
// returns new string where the first param (pattern) is replaced with the second param (string).
console.log(result);
// this is a replacement 

/* using regex instead of just strings with these methods, gives the possibilty for much more powerful operations.
& allows you to use things like modifiers (aka flags) for case insensitive (i), global (g) or mutli-line searches (m). */
var regTwo = /global/gi;
var strThree = "A GLOBAL & case insensitive replacement operation";
result = strThree.replace(regTwo, "universal");
// replaces all instances of the pattern "global", with replacement.
console.log(result);
// a universal & case insensitive replacement operation

// their are also regular expression methods like exec(), which tests for a match in a string.
var regThree = /a/;
var strFour = "abcdefg";
result = regThree.exec(strFour);
// returns an array containing text match if found, otherwise returns null.
console.log(result); 
// ["a"] 

// and test(), which also looks for a match of the given regular expression, in a string.   
var regFour = /humans/; 
var strFive = "humans exist, so this will be true";
result = regFour.test(strFive); 
// returns a boolean of true of false depending if it's found.
console.log(result);
// true
 

