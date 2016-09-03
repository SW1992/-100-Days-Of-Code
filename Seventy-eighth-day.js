// Day Seventy Eight
// jquery fundamentals part 2
// Selecting a single element from a selection
// sometimes you will want to select a single DOM element, from a selection of elements
// if you want to access a paticular DOM element, you'll need to get it from the jQuery object
// you can't use jquery methods on a raw DOM element though, so if you want to do that you'll need to get a jQuery object instead
$(document).ready(function() { 
  var links = $("a");
  var firstLink = links[0];
  // can't use methods on this
  var lastLink = links.eq(2);
  lastLink.empty(); 
  // emptys inner content of last link
  
  // creating elements
  // you can use the jQuery function to create new elements 
  // they won't be visible though until you've placed them on the page
  var para = $('<p class="lorem"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>' )
  // creates p element with innerHTML & class
  $("h3").eq(1).after(para);
  // insert para after second header
});
