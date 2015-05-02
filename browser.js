var runTests = require("./main");


var result = runTests(),
	$support = document.getElementById("support");

$support.value = result.passed + "/" + result.all;


var key,
	val,
	row,
	$supported = document.getElementById("supported"),
	$unsupported = document.getElementById("unsupported");

for(key in result.state) {
	val = result.state[key];

	row = document.createElement("li");
	row.textContent = key;

	if(val) {
		supported.appendChild(row);
	} else {
		unsupported.appendChild(row);
	}
}
