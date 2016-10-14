/**
 * Created by Liukeyi on 2016/4/27.
 */
var path = require('path');

var LoginService = require('../Service/LoginService');
var LogService = require('../Service/LogService');

var log = new LogService("Router");

function Router() { log.error("Cannot create a instance for the Router!"); }

Router.router = function(req, res) {
    var reqPath = req.path;
    var session = req.session;
    if (!session.user && req.url !== '/login') {
        res.redirect(path.resolve('../../WebContent/index.html'));
    }
    switch (reqPath) {
        case "/login":
            LoginService.login(req, res);
            break;
        case "/UserCheck":
            res.sendFile(path.resolve('../../WebContent/main.html'));
            break;
        case "/test":
            log.log(req.session.user);
            res.send({user: req.session.user});
            break;
        default:
            log.error("Wrong Request Path: " + reqPath + "!");
            break;
    }
};

module.exports = Router;