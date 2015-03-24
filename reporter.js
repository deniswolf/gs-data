module.exports = function(err) {
	console.error({
		message: err.message,
		stack: err.stack
	});
};
