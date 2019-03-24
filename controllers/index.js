const User = require('../models/User');

module.exports = {
	postRegister(req, res, next) {
		User.register(new User({ username: req.body.username }), req.body.password, err => {
			if (err) {
				return next(err);
			}

			res.redirect('/');
		});
	}
};
