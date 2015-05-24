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


exports.hasMapStructure = function() {
    return evalTest("var m = new Map(); m.set(1, true);");
};


exports.hasSetStructure = function() {
    return evalTest("var s = new Set(); s.add(1);");
};


exports.hasPromises = function() {
    return typeof Promise === "function" && typeof Promise.resolve === "function";
};

