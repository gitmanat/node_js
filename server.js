// Connect module : Order middleware

var connect = require('connect');
var app = connect();

var logger = function(req, res, next) {
	console.log(req.method, req.url);

	next();
}

var hello = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello Stis & Photon');
};
app.use(logger);
app.use(hello);

app.listen(3000);
console.log('Server running at http://localhost:3000');