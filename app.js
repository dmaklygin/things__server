
/**
 * Module dependencies.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
//    models = require('./models'),
    http = require('http'),
    path = require('path'),
    Config = require('./conf'),
    conf = new Config();

var app = express();

mongoose.connect(conf.mongo);


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(conf.secret));
  app.use(express.session());
//  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// routines
app.get('/things', routes.thing.list);
app.get('/things/create', routes.thing.create);
app.get('/things/comments', routes.thing.commentsList);
app.get('/things/add_comment', routes.thing.addComment);
app.get('/things/add_point', routes.thing.addPoint);
app.get('/users', routes.user.list);
app.get('/users/create', routes.user.create);
app.get('/thing/:id', routes.thing.item);

app.options('*', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers',
        'accept, origin, content-type, referer, cache-control, pragma, user-agent');
    res.header('Access-Control-Max-Age', 1728000);
    res.header('Content-Length', 0);
    res.send(204);
});

// Response for all other pages
app.get('*', function(req, res) {
    res.send(404);
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
