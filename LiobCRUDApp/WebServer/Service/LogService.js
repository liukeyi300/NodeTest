/**
 * Created by Liukeyi on 2016/4/28.
 */
var fs = require('fs');

function LogService(moduleName) {
    var checkFile = function() {
        var exist = fs.existsSync(LogService.defaultFilePath);
        if (!exist) {
            
        }
    };

    var writeFile = function(data) {
        checkFile();
        fs.appendFile(LogService.defaultFilePath, data, {encoding:'utf-8'}, function(err) {});
        console.log(data);
    };

    this.log = function(content){
        var data = "Log:" + (new Date()).toDateString() + "-" + moduleName + " : "  + content;
        writeFile(data);
    };

    this.error = function(content) {
        var data = "Error:" + (new Date()).toDateString() + "-" + moduleName + " : "  + content;
        writeFile(data);
    };
}

LogService.setLogFilePath = function(path) {
    this.defaultFilePath = path;
};

LogService.defaultFilePath = __dirname + "\\UserService.js";

module.exports = LogService;