// Day Three 
// Angular Directives 
/* Angular directives, essentially, allow us to create our own HTML attributes or tags 
with custom functionality. */
var application = angular.module("samsApp", []);
application.directive("samsDirective",function () {
	// here we are creating a custom directive, with the .directive function
	return {
		template: "<p> Custom Directive </p>",
		// output of our directive
		restrict: "AECM"
		// option to allow 4 types of invocation method for our directive (Attribute, Element, Class, Comment)
	};
});
/* as well as custom made directives, their are many built in angular directives, 
these include ng-controller & ng-app & any other attribute prefixed with "ng-". */



