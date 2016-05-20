var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	username: {
		type: String,
	    unique: true,
	    trim: true,
	    required: true,
	},
	email: {
		type: String,
	    index: true,
	    match: /.+\@.+\.+/
	},
	password: {
		type: String,
		validate: [
		   function(password) {
		   	return password && password.length >= 6;
		   },
		   'password must be at least 6 characters'
		]
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('User', UserSchema);