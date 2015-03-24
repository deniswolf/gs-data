var users = require('./users.db.json');
var possibleParams = ['id', 'name', 'role', 'name', 'created_at'];
var Promise = require('bluebird');

function findByKey(collection, key, value) {
  return collection.filter(function(item) {
    return item[key] === value;
  });
}

// note: the simplest/fastest implementation, IRL it would be outsourced to DB to handle
function queryUsers(params) {
  return new Promise(function(res, rej) {
    var result = users;

    possibleParams.forEach(function(key) {
      if (params[key] !== undefined) result = findByKey(result, key, params[key]);
    });

    return res(result);
  }
	);
}

module.exports = queryUsers;
