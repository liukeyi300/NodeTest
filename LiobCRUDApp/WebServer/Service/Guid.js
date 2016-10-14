/**
 * Created by Liukeyi on 2016/5/7.
 */
var LogService = require('./LogService');
var log = new LogService('Guid');

function Guid() { log.error("Cannot create a instance for a Static Service Class!"); }

Guid.getGuid = function() {
    var key = '0123456789abcdef';
    var template = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
    for (var i = 0; i < 32; i ++) {
        template = template.replace(/x/, key[Math.floor(16 *  Math.random())]);
    }
    return template;
};

module.exports = Guid;