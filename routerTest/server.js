var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var query = url.parse(request.url).query;

        route(pathname);

        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write("Hello");
        response.end();
    }
    http.createServer(onRequest).listen(1234);
}

exports.start = start;