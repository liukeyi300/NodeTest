/**
 * Created by Liukeyi on 2016/4/27.
 */
var url = require('url');

var LoginService = require('../Service/LoginService');

function Router() {console.error("Cannot create a instance for the Router!");}

Router.router = function(req, res) {
    var path = req.path;
    switch (path) {
        case "/login":
            LoginService.login(req, res);
            break;
        default:
            console.error("Wrong Request Path: " + path + "!");
            break;
    }
};

module.exports = Router;