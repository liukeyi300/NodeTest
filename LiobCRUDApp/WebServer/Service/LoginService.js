/**
 * Created by Liukeyi on 2016/4/27.
 */
var express = require('express');
var session = require('express-session');

var UserService = require('./UserService');
var LogService = require('./LogService');
var log = new LogService('LoginService');

function LoginService() { log.log("Cannot create a instance for a Static Service Class!"); }

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
    } else {
        re.result = false;
    }
    res.end(JSON.stringify(re));
};

module.exports = LoginService;