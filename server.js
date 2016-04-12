// Express module : Mounting request path

var express = require('express');
var app = express();

var logger = function(req, res, next) {
	console.log(req.method, req.url);

	next();
}

var hello = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello Stis & Photon');
};

var goodbye = function(req, res, next) {
	res.setHeader('content-Type', 'text/plain');
	res.end('Goodbye Stis & Photon');
};

app.use(logger);
app.use('/hello', hello);
app.use('/goodbye', goodbye);

app.listen(3000);
console.log('Server running at http://localhost:3000');

module.exprots = app;