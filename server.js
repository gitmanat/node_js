process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose(); //return mongoose.connect(config.mongoUri);
var app = express();
var passport = passport();
app.listen(3000);

module.exprots = app;

console.log('Server running at http://localhost:3000');

