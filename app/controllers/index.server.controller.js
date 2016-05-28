exports.render = function(req, res) {
        res.render('index', {
        	title: 'Hello : Photon & Stis',
        	username: req.user ? req.user.username : ''
        });
};