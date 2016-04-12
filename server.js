// Express module : express wrapper

var express = require('express');
var app = express();

var logger = function(req, res, next) {
	console.log(req.method, req.url);

	next();
}

var hello = function(req, res, next) {
	res.send('Hello Stis & Photon');       //Express wrapper : Setting Content-Type same argument
};

var goodbye = function(req, res, next) {
	res.send('Goodbye Stis & Photon');     //Express wrapper : Setting Content-Type same argument
};

app.use(logger);
app.use('/hello', hello);
app.use('/goodbye', goodbye);

app.listen(3000);
console.log('Server running at http://localhost:3000');

module.exprots = app;