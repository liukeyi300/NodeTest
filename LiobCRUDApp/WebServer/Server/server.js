/**
 * Created by Liukeyi on 2016/3/26.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var Router = require('./router');
var UserService = require('../Service/UserService');
var LoginService = require('../Service/LoginService');
var LogService = require('../Service/LogService');
var log = new LogService("Server");

var isLogin = false;

var urlencodedParser = bodyParser.urlencoded({extended : false});

app.get('/', function (req, res) {
    res.sendFile(path.resolve('../../WebContent/index.html'));
});

app.get('/main.html', function(req, res) {
    res.sendFile(path.resolve('../../WebContent/index.html'));
});

app.use(express.static('../../WebContent'));

app.get('/UserCheck', function (req, res) {
    res.sendFile(path.resolve('../../WebContent/main.html'));
});

app.post('/login', urlencodedParser, function (req, res) {
    Router.router(req, res);
});

var server = app.listen(1234, function () {
    var host = server.address().address;
    var port = server.address().port;

    //console.log("The Website is running at http://%s:%s", host, port);

    log.log("The Website is running at http://" + host + ":" + port);

    UserService.loadAllUser();
});
