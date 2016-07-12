/**
 * Created by Liukeyi on 2016/5/7.
 */
var LogService = require('./LogService');
var log = new LogService('Guid');

function Guid() { log.error("Cannot create a instance for a Static Service Class!"); }

Guid.getGuid = function() {
    var key = '0123456789abcdef';
    var template = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
    var re = template.replace(/x/g, key[Math.floor(16 *  Math.random())]);
    return re;
};

module.exports = Guid;