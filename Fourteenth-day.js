// Day Fourteen
// Regular Expressions continued

// brackets can be used with regular expressions, to look for a range of characters or digits, specified between the [].
// the string match() method, can be used to match a string against a regular expression object.
var someStr = "123456789";
var reg = /[123]/g; 
var result = someStr.match(reg);
// it returns an array which contains the whole match result if found, or null, if it isn't.
console.log(result);
// ["1","2","3"]

// various special characters, can also be used in regular expressions.
/* these use a precursory backslash "\" to indicate that they are special characters, 
not to be interpreted literally. */
var someStrTwo = "Searching for whitespace in a string.";
var regTwo = /\s/g;
// special character for finding white space.
result = someStrTwo.match(regTwo);
// returns array containing all the white space in the string.
console.log(result);
// [" ", " ", " ", " ", " "]

var someStrThree = "Word Chars." 
var regThree = /\w/g;
// special character for finding word characters.
// word characters here are defined as characters 0-9, _ , A-Z, a-z.
result = someStrThree.match(regThree); 
console.log(result);
// ["W","o","r","d", "C","h","a","r","s"]

var someStrFour = "Non Word...Characters!";
var regFour = /\W/g;
// special character for finding non word characters. 
result = someStrFour.match(regFour);
console.log(result);
// [" ", ".", ".",".", "!"]

// the string split() method can also be used with regular expressions.
// this method will split the string it's called on, into an array of sub-strings, at a given seperator character, if provided.
// if a seperator character is not provided, it'll return an array with one item, which is the entire string.  
var someStrFive = "Split,Me,Up";
var regFive = /[,]/g;
result = someStrFive.split(regFive);
// split at commas
console.log(result);
// "["Split", "Me", "Up"]


