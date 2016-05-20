var user = require('../controllers/user.controller');
var passport = require('passport');

module.exports = function(app) {
    app.route('/signup')
       .get(user.renderSignup)
       .post(user.signup);

    app.route('/user')
       .post(user.create)
       .get(user.list);
    app.route('/user/:username')
       .get(user.read)
       .put(user.update)
       .delete(user.delete);
    app.param('username', user.userByUsername);
};