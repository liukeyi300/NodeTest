/**
 * Created by Liukeyi on 2016/3/26.
 */
var fs = require('fs');
var path = require('path');

function login(req, res) {
    var username = req.body.username;
    var pwd = req.body.pwd;

    fs.readFile(path.resolve('../UserInfo/users.json'), function(err, data) {
        var re = false;
        if (err) {
            console.log(err);
        } else {
            console.log('Username : %s, pwd: %s', username, pwd);
            data = JSON.parse(data);
            for (var key in data) {
                if (data[key].name === username && data[key].password === pwd) {
                    re = true;
                    res.setHeader("Set-Cookie", "sid="+username);
                } else {

                }
            }
        }
        var response = {
            result : re
        };
        res.send(JSON.stringify(response));
    });
}

exports.login = login;