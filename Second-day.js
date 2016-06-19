// Day Two
// Angular Services
// services in angular JS are objects exclusively available to angular applications
var application = angular.module("myApp",[]);
// we can use services to share code/functionality across different angular controllers
application.controller("control",function($timeout) {
  // here we pass in the $timeout service to the controller function
	$timeout(function() {
		console.log("i'll run in a second");
	},1000);
});
/* it's the Angular equivalent of the window.setTimeout function
	 & will call a specified function after a given delay (ms) */
	
/* note: the delay can sometimes be longer than the time specified, 
   performance can vary depending on $timeouts place in the queue */