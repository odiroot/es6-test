(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Test = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global exports */
/* jshint globalstrict:true */
"use strict";


function evalTest(code) {
    try {
        eval(code);
        return true;
    } catch(e) {
        return false;
    }
}


exports.hasArrowFunctions = function() {
    return evalTest("var f = (a) => { return a; };");
};


exports.hasNativeClasses = function() {
    return evalTest("class C {};");
};


exports.hasConstKeyword = function() {
    return evalTest("const c = 1;");
};


exports.hasLetKeyword = function() {
    return evalTest("let _lk = 1;");
};


exports.hasObjectShortcutSyntax = function() {
    return evalTest("var x = 1, o = { x };");
};


exports.hasForOfLoops = function() {
    return evalTest("var a = [1, 2, 3], el; for(el of a) { el += 1; }");
};


exports.hasBlockLevelFunctions = function() {
    var success = evalTest("{ function __blockLevel() { return true; } }");

    if(success) {
        return typeof __blockLevel === "undefined";
    } else {
        return false;
    }
};


exports.hasDefaultParameters = function() {
    var result;
    try {
        result = eval("(function __dfp(a, _dfpa = 1) { return a + _dfpa; })(2)");
        return typeof _dfpa === "undefined" && result === 3;
    } catch(e) {
        return false;
    }
};


exports.hasRestParameters = function() {
    return evalTest("(function _rp(...b) { return b.length; })()");
};


exports.hasSpreadOperator = function() {
    return evalTest("(function() { var a = [1, 2]; return [5, ...a, 6]; })()");
};


exports.hasTemplateStrings = function() {
    return evalTest("var x = 1, s = `X value is ${x}.`;");
};


exports.hasDestructuringAssignment = function() {
    return evalTest("var [a, b] = [1, 2]; var {c, d} = {c: 3, d: 4};");
};


exports.hasGenerators = function() {
    return evalTest("function *_g() { yield 1; }");
};


exports.hasMapStructure = function() {
    return evalTest("var m = new Map(); m.set(1, true);");
};


exports.hasWeakMapStructure = function() {
    return evalTest("var a = {}, _wm = new WeakMap(); _wm.set(a, true);");
};


exports.hasWeakSetStructure = function() {
    return evalTest("var a = {}, _ws = new WeakSet(); _ws.add(a);");    
};


exports.hasSetStructure = function() {
    return evalTest("var s = new Set(); s.add(1);");
};


exports.hasTypedArrays = function() {
    return evalTest("var _ta = new Int32Array(2);");
};


exports.hasPromises = function() {
    return typeof Promise === "function" && typeof Promise.resolve === "function";
};


exports.hasProxies = function() {
    return evalTest("var _ph = { get: function() {} }, _p = new Proxy({}, _ph);");
};


exports.hasSymbols = function() {
    return evalTest("var _s = Symbol('sym');");
};


// TODO: Built-in extensions section.




},{}],2:[function(require,module,exports){
var tests = require("./lib");


module.exports = function runTests() {
	var key,
		fun,
		result,
		count = 0,
		passed = 0,
		state = {};

	for(key in tests) {
		fun = tests[key];
		result = fun();

		state[key] = result;

		if(result) {
			passed += 1;
		}
		count += 1;
	}

	return {
		state: state,
		passed: passed,
		all: count
	};
};

},{"./lib":1}]},{},[2])(2)
});