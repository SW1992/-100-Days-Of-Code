// Day Five
// Angular Controllers
// Controllers can be used to organize & control data in angular applications.
/* they're defined in JS with a Javascript object constructor function,
& defined in HTML with the ng-controller directive. */
var app = angular.module('samsApp',[]);
app.controller('myController',function($scope) {
	// create controller & pass in application object ($scope)
  $scope.someProp = "Some value";
	$scope.someMethod = function () {
    return $scope.someProp;
	}
	/* controllers can have methods & property’s assigned to them, 
	like any other JS object. */ 
}); 	
/* with larger projects, in paticular, controllers are useful for
   allowing us to store functionality for a project all in one place. */