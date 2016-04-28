/**
 * Created by Liukeyi on 2016/4/27.
 */
var fs = require('fs');
var path = require('path');
var User = require('../DataModel/User');

function UserService() { console.error("Cannot create a instance for a Static Service Class!");}

UserService.loadAllUser = function() {
    fs.readFile(path.resolve('../UserInfo/users.json'), function(err, data) {
        if (err) {
            console.error(err);
        } else {
            UserService.allUser = [];
            data = JSON.parse(data);
            for (var key in data) {
                var user = new User(data[key].name, data[key].password, data[key].profession, data[key].id);
                UserService.allUser.push(user);
            }
        }
    });
};

UserService.allUser = [];

module.exports = UserService;Log:Thu Apr 28 2016-Service : The Website is running at http://%s:%s