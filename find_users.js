var queryUsers = require('./db');
var possibleParams = ['id', 'name', 'role', 'name', 'created_at'];

function validateParamsNames(params) {
	var keys = Object.keys(params);
	if (keys.length === 0) return 'search params could not be empty';
	for (var i = 0; i < keys.length; i++) {
		if (possibleParams.indexOf(keys[i]) === -1) return 'invalid query parameter: ' + keys[i];
	}
	return true;
}

module.exports = function(req, res) {
	var params = req.query;
	var namesValidation = validateParamsNames(params);

	if (namesValidation !== true) {
		res.status(400).json({
			error: namesValidation
		});
	} else {
		var result = queryUsers(params);
		res.json(result);
	}
};
