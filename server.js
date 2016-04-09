// Closure and Event-driven

function prefix(pre) {
	return function fileHandler(err, data) {
		console.log(pre + " " + data);
	};
}
var say = prefix("Say:");             // Closure
var shout = prefix("Shout:");          // Closure

var fs = require('fs');
fs.readFile('hello.txt', say);
fs.readFile('hello.txt', shout);