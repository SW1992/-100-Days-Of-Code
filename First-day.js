// Day one
// Angular Scope
/* $scope is a Javascript object that owns application variable data in Angular JS. */
	 var application = angular.module("myApp",[]);
   // define app
	 application.controller("Control",function($scope) {
   // create controller function
   /* we can pass the $scope object to the 
	    controller function as an argument */
		 $scope.prop = "someData";
		 $scope.propTwo = "someMoreData";
		 // set properties of $scope object
  	/*  these are accessable in the view (HTML),
		    aswell as in the controller */
	 });

	 
	 
	 
	 
	 
	 