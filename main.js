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
