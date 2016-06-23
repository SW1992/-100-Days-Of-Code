// Day Six
// Javascript Data types
// Their are 7 different data types in Javascript. As stated by the latest ECMAscript standard.
/* This includes 6 primitive data types, which are (Boolean, Null, Undefined, Number, String, Symbol)
& the Object data type, which is the only mutable data type in JS. */
var bool = true;
// boolean
var n = null;
// null
var undef = undefined;
// undefined
var num = 42;
// number
var str = "Some String";
// string
var sym = Symbol();
// symbol
var obj = {someProp: "some Value"};
// object
// You can use the typeof operator to determine what data type a variable value or individual operand belongs too.
console.log(typeof bool);
console.log(typeof n);
console.log(typeof undef);
console.log(typeof num);
console.log(typeof str);
console.log(typeof sym);
console.log(typeof obj);
// Note: null here will return "object" instead of "null" this is considered to be a bug in the javascript language.
var someVar = "Morgan Freeman";
someVar = 79;
someVar = true;
// Javascript has "dynamic" typing, which allows for the same variable to be set values of different types.




