// Day Eight 
// Logical & Ternary Operators
/* Logical operators in JS are typically used with boolean and/or variable values, 
as logical determinants, in logical expressions. */
var name = "sam";

// the logical AND ("&&") Operator, evaluates to true if both conditions are satisfied (true)
true && true // true
false && true // false
false && false // false

// the logical OR ("||") Operator, evaluates to true, if either condtion is satisfied  (true)
true || false // true
false || true // true 
false || false // false

// & the logical NOT ("!") Operator, returns true if a statement evaluates to false & false if a statement evaluates to true
!true // false (not true)
!false // true (not false)

// The Ternary Operator can be thought of a shorthand for the condtional if statement, which i will cover next time, it takes a condtion & two values.
// it can be used to assign one of these set of values to a variable, based upon the boolean outcome of the evaluated condition.
var myName = name === "sam" ? "my name is sam": "Your not sam";
console.log(myName); // my name is sam
 
