/**
 * Created by Liukeyi on 2016/10/14.
 */
var express = require('express');
var app = new express();

var path = require('path');

app.use(express.static('./WebContent'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('./WebContent/TestEventSource.html'));
});
app.get('/test', function(req, res) {
    res.writeHead(200, {
        'Content-Type' : 'text/event-stream',
        'Cache-Control' : 'no-cache',
        'Connection' : 'keep-alive'
    });

    var i = 0;
    setInterval(function() {
        res.write("data: " + (i++) + "\n\n");
    }, 2000);
});

var server = app.listen(1234, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("The Website is running at http://" + host + ":" + port);
});