exports.render = function(req, res) {
	res.render('index', {
		'title': 'Hello Stis && Photon',
		'message': 'How are things'
	});
};