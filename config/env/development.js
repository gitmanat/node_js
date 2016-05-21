module.exports = {
	debug: true,
	mongoUri: 'mongodb://localhost/my-project',
	sessionSecret: 'dev_secret_key',

	facebook: {
		clientID: '<your clientID>',
		clientSecret: '<your clientSecret>',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	google: {
		clientID: '<Google clientID>',
		clientSecret: '<Google clientSecret>',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};