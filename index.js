var express = require('express');
var app = express();

var find_users = require('./find_users');

app
  .get('/', find_users);

var server = app.listen(process.env.PORT, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
