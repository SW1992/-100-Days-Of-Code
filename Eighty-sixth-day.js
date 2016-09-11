// Day Eighty Six
// jQuery fundamentals part 10
// Passing named functions as event handlers
// it is possible to pass named functions to handle events as well as anonymous functions
// you can do this through passing the result of a function assignment or passing a named function directly
// this can be useful if you want to use one handler for handling events, with multiple different elements
$(document).ready(function() {
  $("button").eq(0).click(function clickHandlerOne() {
    alert("first button clicked");
  });
  var clickHandlerTwo = function() {
    alert("second button clicked");
  };
  $("button").eq(1).click(clickHandlerTwo);
  // Event object
  // in jQuery whenever a event occurs you can get access to something called the event object
  // by passing this into the handler function you can acess several useful, event object properties
  // many of these are cross browser compatible
  $(document).mouseenter(function(event) {
    console.log(event.type);
    // logs mouseenter, the type of event
    console.log(event.target);
    // logs entire html document, the DOM element that initiated the event
  });
});