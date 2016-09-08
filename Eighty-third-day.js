// Day Eighty Three
// jQuery fundamentals part 7 
// Manipulation 
// there are many jQuery manipulation methods, that can be used for DOM manipulation
// these methods are generally easier to use than their native DOM counterparts
// simplification of interaction with the DOM is actually one of the great features of jQuery
$(document).ready(function() {  
  // Altering elements 
  // adding and removing CSS classes are two ways you can alter elements
  // this can be done with .addClass() and .removeClass()
  // .toggleClass() can be used to set a class if it isn't already, and remove if it is
  $("li").eq(0).addClass("first");
  // give first list item the .first class
  $("li").eq(3).removeClass("last");
  // remove class from last list item
  $("li").eq(0).toggleClass("first");
  // toggle class so it isn't set anymore
  
  // Changing form values
  // you can change the inner content of html form elements like inputs with .val()
  // it excepts a text string, which will become the set content
  $("input").eq(0).val("set this text");
  // set content of text input 
  // you can also change attributes of these elements with .attr()
  $("input").eq(1).attr("checked","true");
  // set checkbox to checked
});