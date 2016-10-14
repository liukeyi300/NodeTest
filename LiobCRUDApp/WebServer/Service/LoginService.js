/**
 * Created by Liukeyi on 2016/4/27.
 */
var UserService = require('./UserService');
var LogService = require('./LogService');
var log = new LogService('LoginService');

function LoginService() { log.error("Cannot create a instance for a Static Service Class!"); }

LoginService.login = function(req, res) {
    var username = req.body.username;
    var pwd = req.body.pwd;
    var re = {};

    log.log("Username: " + username + " Password: " + pwd);

    var user = UserService.allUser.filter(function(it) {
        return it.username === username && it.pwd === pwd;
    });

    if (user.length > 0) {
        re.result = true;
        req.session.user = user[0].username;
    } else {
        req.session.user = "";
        re.result = false;
    }

    res.end(JSON.stringify(re));
};

module.exports = LoginService;