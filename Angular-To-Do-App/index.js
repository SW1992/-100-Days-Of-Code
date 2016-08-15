// Day Fifty Nine 
var app = angular.module("toDoApp",[]);
app.controller("toDoCtrl",function($scope) {
  $scope.toDoArr = [   
    {"title": "Create To Do List App", "completed": false}
  ];            
  // array to hold to do list items
  $scope.addItem = function() {
  // method to add items when called
    $scope.toDoArr.push({"title": $scope.newItem, "completed": false})
    // add new item to do list array  
    $scope.newItem = "" 
    // reset input box to empty string 
  }    
  $scope.clearMarked = function() {
  // method to clear marked items when called   
    $scope.toDoArr  = $scope.toDoArr.filter(function(item) {
      return item.completed === false;
      // filter out completed items 
    })
  }
});    
