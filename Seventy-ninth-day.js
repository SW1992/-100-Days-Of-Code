// Day Seventy Nine
// jQuery fundamentals part 3
// Testing selections
// you can test a selection against another selector, element or jquery object with is().
// it will return a boolean of true or false depending on wether the selection meets the critera of it's selector argument.
$(document).ready(function() {
  var bool = $("p").eq(0).is(".pg-1")
  $(".pg-2").text("the result of .is() was " + bool);
  // true 
  
  // getters and setters
  // there are two paticulary important types that methods generally fall under, when it comes to jQuery, getters and setters.
  // getters, get some information from a selection, setters can alter the content of a selection, or alter it in some other way.
  // most getters only operate on the first element in a selection, setters generally work on all elements in a selection.
  // text() and html() are two classic examples of getter/setter methods in jQuery
  var lorem = $(".pg-1").html()
  // get html of first para
  $(".pg-3").html(lorem);
  // set same as first para
  $("li").text("We All Get This!");
  // set text of all li's
});