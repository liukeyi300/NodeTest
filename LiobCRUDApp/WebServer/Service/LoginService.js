/**
 * Created by Liukeyi on 2016/4/27.
 */
var UserService = require('./UserService');

function LoginService() { console.error("Cannot create a instance for a Static Service Class!"); }

LoginService.login = function(req, res) {
    var username = req.body.username;
    var pwd = req.body.pwd;
    var re = {};
    var date = new Date();
    console.log(date.toDateString() +  '-LoginService : username: ' + username + '; password: ' + pwd);

    var user = UserService.allUser.filter(function(it) {
        return it.username === username && it.pwd === pwd;
    });

    if (user.length > 0) {
        re.result = true;
    } else {
        re.result = false;
    }
    res.end(JSON.stringify(re));
};

module.exports = LoginService;