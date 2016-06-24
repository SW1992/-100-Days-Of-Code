// Day Seven
// Comparision & Relational operators
// Comparision operators are useful for logical expressions in javascript, 
/* two operands or variable values can be tested for equality or inequality towards each other
   , which will evaluate to a boolean value of either true or false. */

// there are "===" strict equality comparsions, type & value must be equal to return true.
1 === 1 // true
1 === "1" // false

// "!==" strict inequality comparisions, value and/or type must be inequal to return true.
1 !== "1" // true
1 !== 1 // false

// "==" unstrict equality 
2 == "2" // true
1 == 2 // false

// & "!==" inequality comparisions 
1 != 2 // true
2 != "2" // false

/* with unstrict comparisions, javascript will convert operands to the same type while comparing, if necessary. 
It then applies strict comparison between the two operands. */

// relational operators, are useful to checking if a value is greater than another ">" 
6 > 5 // true
5 > 6 // false

// less than another "<"
5 < 6 // true
6 < 5 // false

// greater than or equal too another ">=" 
6 >= 6 // true
5 >= 6 // false

// or less than or equal too another "<="
6 <= 6 // true
6 <= 5 // false



