// Day Seventy Seven
// jQuery fundamentals part 1
// pseudo-selectors
// there are various useful jQuery pseudo selectors you can use for performing different tasks.
$(document).ready(function () {
  $("li:first").css("background-color", "blue");
  // turns background of first li element in page blue
  $("ul li:first-child").css("background-color", "blue");
  // sets background of first elements in each list to blue, :first-child can match more than one element, unlike :first
  $(".list-one li:odd").css("background-color", "yellow");
  // turns second li element of first list to yellow, :odd selects all odd elements in a sequence, but is 0 indexed, so selects 0, 2, 4 etc
  $("div:hidden").show();
  // :hidden is the opposite of :visible & can select elements with a CSS display value of none.
  
  // was the selection succesful?  
  // sometimes it can be useful to check if something you are trying to select definetly exists
  // for example, if you want to perform some code dependent on the outcome of this check
  if ($(".exists").length > 0) {
  // if the jQuery object has a length property greater than 0, an element with this class exists
    $(".exists").text("Yes!") 
    // so this will be run    
  }
});