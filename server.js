// Event-driven
// 2. Asynchonous

var fs = require('fs');
//Add Call back function
fs.readFile('hello.txt', function(err,data) {
    console.log(data.toString());
});

console.log('Do other things');