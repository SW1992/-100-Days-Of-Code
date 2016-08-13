// Day Fifty Seven
var app = angular.module("toDoApp",[]);
app.controller("toDoCtrl",function($scope) {
  $scope.toDoArr = [   
    {"title": "Create To Do List App", "completed": false}
  ];         
  // array to hold to do list items
  $scope.addItem = function() {}   
  // method to add items  
  $scope.clearMarked = function() {}
  // method to clear marked items   
});   
