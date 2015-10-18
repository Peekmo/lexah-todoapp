(function (console) { "use strict";
var Main = function() { };
Main.main = function() {
	var mod = window.angular.module("todoapp",[]).controller("TodoController",["$scope",function(scope) {
		return new TodoController(scope);
	}]);
};
var TodoController = function(scope) {
	scope.data = "Hello";
};
var angular__$Angular_TranscludeFn_$Impl_$ = {};
angular__$Angular_TranscludeFn_$Impl_$.call = function(this1,scope,link) {
	this1(scope,link);
};
angular__$Angular_TranscludeFn_$Impl_$.withoutScope = function(this1,link) {
	this1(link);
};
var angular_internal_ModuleMacros = function() { };
var angular_internal_InjectorMacros = function() { };
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
