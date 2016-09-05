// Day Eighty
// jQuery fundamentals part 4
// Iteration 
// beyond the automatic or implicit iteration that jQuery does, for example if you used a setter method to set background-color for every selected header on a page.
// there is the .each() method, analogous to javascripts .forEach(), which can be used for manual or explicit iteration, to run some function on every item of a selction
$(document).ready(function() {  
  $("div").each(function(i,elem) {
    $(elem).append(": " + i);
    // appends index of element to end of div text
    $(elem).css("color", "blue");
    // changes colour of each element to blue
    // could also be done with $(this), instead of elem
  });
  // Method Chaining
  // a useful feature in jQuery is that you can chain multiple methods together, to perform all of them on the same selection
  // this makes code much more efficient because you don't have to call methods individually on a selector multiple times
  // chaining is possible because setter methods in jQuery always have access to the selection they are called on 
  $("li").css("color","red").text("changed").addClass("li-item");
  // change li text color to red, change text content, add class 
});