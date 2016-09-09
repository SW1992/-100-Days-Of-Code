// Day Eighty Four
// jQuery fundamentals part 8 
// Events 
// there are many event listening methods in jQuery that can be used for event binding
// the binded code will be executed, when a user iteracts with a page a certain way, and triggers said event
$(document).ready(function() {  
   // there's methods like .click(), which responds to the clicking of DOM elements, like buttons
   // .change() which is fired when an form elements value changes, such as ticking a checkbox
   // and .blur() which is fired when an in focus element becomes out of focus
   $("button").click(function() {
     alert("Button clicked!");
   });
   $("input").eq(0).change(function() { 
     alert("Value changed!");
   }); 
   // these method are all shorthands for and make use of the jQuery .on() method
   // which can be used similarly to shorthand methods, but takes the event in string form 
   // as it's first parameter, and an event handler as it's second
   $("input").eq(1).on("blur", function() {
     alert("No focus!"); 
   });
   // .off() can be used to unbind, binded events
   $("button").eq(1).off();
   // gets rid of click event binding for second button 
});