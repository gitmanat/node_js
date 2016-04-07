// Event-driven
// 1. Synchonous

var fs = require('fs');
var data = fs.readFileSync('hello.txt');

console.log(data.toString());
console.log('Do other things');