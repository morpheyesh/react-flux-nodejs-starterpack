
require('babel-core/register');


var express = require('express');
var http = require('http');
var path = require('path');

var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');
var swig = require('swig');
var Draggable = require('react-draggable');


var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', {
      html: html
    });
    res.send(page);
  });

});

var server = http.createServer(app);

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
