var queryUsers = require('./db');
var reporter = require('./reporter');
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
	console.log('Incomming!');
	var params = req.query;
	var namesValidation = validateParamsNames(params);

	if (namesValidation !== true) {
		var error = new Error(namesValidation);
		reporter(error);
		res.status(400).json({
			error: namesValidation
		});
	} else {
		queryUsers(params)
			.then(function(result) {
				res.json(result);
				return result;
			})
			.catch(function(err) {
				reporter(err);
				res.status(500).json({
					error: err.message
				});
			});

	}
};
