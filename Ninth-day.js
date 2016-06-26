// Day Nine
// Conditional Statements
/* Often when you are programming in JS or any other language, you will want 
   different outcomes/different code to be run depending on the evaluated result of some condition or conditions. */
// This is what conditional statements are useful for.

// if, else if & else statements
var hoursInDay = new Date().getHours();
// get hours in the day
var welcome;
// we will set our welcome variable, depending on the outcome of the conditional statement.
if (hoursInDay < 12) {
	// the if statement runs it's block of code, if the specified condition evaluates to true.
	welcome = "Hello & Good Morning";
	console.log(welcome);
}
else if (hoursInDay < 20) {
	// the else if statement, is like an alternative truth statement.
	/* It runs it's block of code when the if condtion evaluates to false 
	but it's condtion evaluates to true. */
	welcome = "Hello & Good Day";
	console.log(welcome);
}
else {
	// if all conditions tested evaluate to false, the else statement runs it's block of code.
	welcome = "Hello & Good Evening";
	console.log(welcome);
}

