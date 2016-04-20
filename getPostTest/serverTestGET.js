/**
 * Created by Liukeyi on 2016/3/25.
 */
var http = require('http');
var util = require('util');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    console.log(url.parse(req.url).pathname);
    res.end(util.inspect(url.parse(req.url).pathname));
}).listen(1234);
