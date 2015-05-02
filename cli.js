var runTests = require("./main");


var result = runTests();

console.log("ES6 support: " + result.passed + "/" + result.all);
console.log("Features:");
console.log(result.state);


