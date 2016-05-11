/**
 * Created by Liukeyi on 2016/3/26.
 */
var express = require('express');
var app = express();

app.set('env', 'development');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var bodyParser = require('body-parser');
var path = require('path');

var Router = require('./router');
var UserService = require('../Service/UserService');
var LoginService = require('../Service/LoginService');
var LogService = require('../Service/LogService');

var log = new LogService("Server");

var urlencodedParser = bodyParser.urlencoded({extended : false});

var secretKey = "SecretKey";

app.use(cookieParser());

app.use(session({
    restore: new redisStore(),
    secret: secretKey,
    resave: true,
    saveUninitialized: false,
    name:'LiobCRUD',
    cookie:{
        maxAge: 6000 * 60 * 3
    }
}));

app.get('/', function (req, res) {
    if (req.session.user) {
        res.sendFile(path.resolve('../../WebContent/main.html'));
    } else {
        res.sendFile(path.resolve('../../WebContent/index.html'));
    }
});

app.get('/index.html', function(req, res) {
    if (req.seesion.user) {
        res.redirect(path.resolve('../../WebContent/main.html'));
    }
});

app.get('/main.html', function(req, res) {
    res.sendFile(path.resolve('../../WebContent/index.html'));
});

app.use(express.static('../../WebContent'));

app.get('/UserCheck', function (req, res) {
    Router.router(req, res);
});

app.post('/login', urlencodedParser, function (req, res) {
    Router.router(req, res);
});

var server = app.listen(1234, function () {
    var host = server.address().address;
    var port = server.address().port;

    log.log("The Website is running at http://" + host + ":" + port);

    UserService.loadAllUser();
});


