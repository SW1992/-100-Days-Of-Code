// Day Eighty One
// jQuery fundamentals part 6
// Getting back to your original selection
// after using a traversal method to get access to children or descendants of an original selection
// you may want to go back to your initial selection, usefully jQuery traversal methods
// will store a reference to your original selection, so you can go back to it, using a method like .end()
$(document).ready(function() {  
  $("div").find("p").css("background-color", "blue").end().css("border-color", "red");
  // sets blue background on p, end takes us back to our original div selection
  // and it's border get's changed to red
  // you can use the .addBack() method to add your intial selection, to the current selection stack
  $("li").next().css("font-weight", "bolder").addBack().css("font-family", "Arial");
  // get sibling of first li item, make it bolder, add intial selection to current selection
  // so it changes the font-family of both li items 
});