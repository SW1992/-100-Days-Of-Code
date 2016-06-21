// Day Four 
// Angular Expressions
// Angular expressions can be used to bind data to the HTML view.
/* Akin to JS expressions, Angular expressions can contain variables & operations with primitive data.
   However, in contrast, they don't support things like looping or conditional logic. */
var application = angular.module("samsApp",[]);
// define app
application.controller("control",function($scope) {
// define controller 
	$scope.favBand = "Asking Alexandria";
	$scope.favFilm = "Gladiator";
	$scope.favBook = "1984";
	// declare/intialize model data
	// the result or value of these expressions can be returned, wherever we write an expression in HTML. 
});
/*  Their are two output methods for expressions , 
    through a data-binding directive like this: ng-bind="expression". 
		or with double curly braces like this: {{ expression }} */
	