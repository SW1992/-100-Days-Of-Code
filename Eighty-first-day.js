// Day Eighty One
// jQuery fundamentals part 5
// traversal & filtering
// they are many different ways to traverse DOM elements with jQuery
// as you move through DOM elements of a page you can modify your first selection, filtering it to only include selections of elements with certain characteristics
// you can use the .filter() method for this
$(document).ready(function() {  
  var prime = $("div").filter(".prime");
  // store divs with class prime 
  $(prime).css("font-weight", "bolder");
  // set prime divs text to bold 
  var notPrime = $("div").not(".prime");
  // .not() can be used similarly to filter to return an jQuery object of elements that don't meet some criteria
  notPrime.each(function(i, elem) {
    $(elem).append("is not a prime"); 
  }); 
  
  // traversing descendants 
  // there's are many useful jQuery methods for DOM Tree traversal
  var ancestor  = $("li").parent();
  // .parent() here returns the direct parent selector of all li elements, ul
  var spans = $("ul").find("span"); 
  // .find() here gets all the descendant spans of the ul
  spans.css("color", "green");
  // turn all span text red
  var children = $("li").children(); 
  // .children() gets all direct children of li's, which are the p elements
  children.css("color", "brown");
  // turns all p text brown
  $("li").first().css("color", "yellow");
  // .first() gets the first li element, turns text yellow
  $("li").last().css("color", "orange");
  // .last() gets the last li element, turns text orange
});