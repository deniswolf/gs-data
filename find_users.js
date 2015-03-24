var queryUsers = require('./db');

module.exports = function(req, res) {
	var params = req.query;
	var result = queryUsers(params);
	res.json(result);
};
