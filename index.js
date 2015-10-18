(function (console) { "use strict";
var HxOverrides = function() { };
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Main = function() { };
Main.main = function() {
	var mod = window.angular.module("todoapp",[]).controller("TodoController",["$scope",function(scope) {
		return new controller_TodoController(scope);
	}]);
};
var Reflect = function() { };
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
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
var controller_TodoController = function(scope) {
	this.scope = scope;
	this.init_app();
};
controller_TodoController.prototype = {
	create: function(value) {
		if(value != "" && value != null) this.todos.push(new model_Todo(value));
	}
	,init_app: function() {
		var _g = this;
		this.todos = [];
		var $it0 = HxOverrides.iter(["My todo","My second todo"]);
		while( $it0.hasNext() ) {
			var value = $it0.next();
			this.create(value);
		}
		this.scope.todos = this.todos;
		this.scope.create = function() {
			_g.create(Reflect.field(_g.scope,"new_todo"));
		};
	}
};
var model_Todo = function(value) {
	this.id = new Date().getTime();
	this.value = value;
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
