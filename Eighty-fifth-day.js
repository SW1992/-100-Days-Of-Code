// Day Eighty Five
// jQuery fundamentals part 9
// Event namespacing 
// you can namespace events in jQuery, with use of the .on() method and event.namespace
// namespacing events allows you to seperate them, so that tasks can be handled in different ways dependent on the namespace used
// and example where namespacing is useful is when you want to unbind specfic event handlers, 
// but not an entire event from an element, using the .off() method
$(document).ready(function() {
  $("input").on("focus.focusAlert", function() {
    alert("you focused");
  });
  $("input").on("focus.focusLog", function() {
    console.log("you focused");
  });
  // name spacing allows us to remove only the custom focus event we want to remove
  // rather than unbinding the focus event from the element entirely
  $("input").off("focus.focusLog");
  // unbind custom focusLog event 
  
  // Binding multiple events
  // the .on() method is more flexible than a shorthand event method, with it you can bind more than one event, plus an event handler, to an element
  // so you can run some code dependent if the page or a element is interacted with in a few different ways
  $("p").on("click mouseover", function() {
    alert("you clicked on, or hovered over me");
  });
});