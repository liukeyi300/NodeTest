/**
 * Created by Liukeyi on 2016/4/28.
 */
var fs = require('fs');
var path = require('path');

function LogService(moduleName) {
    var checkFile = function() {
        if (!fs.existsSync(LogService.defaultFilePath)) {
            var filePath = path.dirname(LogService.defaultFilePath);
            fs.mkdirSync(filePath);
            fs.openSync(LogService.defaultFilePath, 'a+');
        }
    };

    var writeFile = function(data) {
        checkFile();
        fs.appendFile(LogService.defaultFilePath, data, {encoding:'utf-8'}, function(err) {});
        console.log(data);
    };

    this.log = function(content){
        var date = new Date();
        var data = "Log:" + date.toLocaleDateString() + " " + date.toLocaleTimeString() + "-"
            + moduleName + " : "  + content + "\n";
        writeFile(data);
    };

    this.error = function(content) {
        var date = new Date();
        var data = "Error:" + date.toLocaleDateString() + " " + date.toLocaleTimeString() + "-"
            + moduleName + " : "  + content + "\n";
        writeFile(data);
    };
}

LogService.setLogFilePath = function(absolutePath) {
    this.defaultFilePath = absolutePath;
};

LogService.defaultFilePath = path.resolve('../log/log.txt');

module.exports = LogService;