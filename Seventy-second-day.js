function lessThan(x,y) {
  console.assert(x < y, "Error: x is not less than y")
}
lessThan(10,5) 
// prints error message to console

var someObj = {"Chrome Dev Tools are Fun": true};
console.dir(someObj)
// prints object to console

function howMany(name) {
  console.count("Called with " + name)
}
howMany("Sam")
howMany("Sam")
// prints label & amount of times invoked with same input

function groupMe() {
  console.group("Grouped Statements")
  console.log("Group")
  console.log("Me")
  console.log("Together")
  console.groupEnd()
}
groupMe()
// prints title & viewable grouped statements