var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
//var jade = require('jade');
var sass = require('node-sass-middleware');
var validator = require('express-validator');
var cookieSession = require('cookie-session');
var session = require('express-session');
var passport = require('passport');
var config = require('./config');
//var mongoose = require('mongoose');
//var uri = 'mongodb://localhost/my-project';
//var db = mongoose.connect(uri);

module.exports = function() {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
    	app.use(morgan('dev'));
    } else {
    	app.use(compression);
    }

    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(bodyParser.urlencoded({
    	extended: true
    }));
    app.use(bodyParser.json());
    app.use(validator());

    app.set('views', './app/views');
    app.set('view engine', 'jade');

    require('../app/routes/index.routes')(app);
    require('../app/routes/user.routes')(app);

    app.use(sass({
        src: './sass',
        dest: './public/css',
        outputStyle: 'compressed',
        prefix: '/css',
        debug : true,
        indentedSyntax: true
    }));

    app.use(express.static('./public'));
    
    return app;
};