var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log('MainPage GET Request!');
    res.send('Hello GET!');
});

app.post('/', function (req, res) {
    console.log('MainPage POST Request!');
    res.send('Hello POST');
});

app.delete('/del_user', function (req, res) {
    console.log('/del_user DELETE Request');
    res.send('Delete Page');
});

app.get('/list_user', function (req, res) {
    console.log('/list_user Request');
    res.send('List User');
});

app.get('/abc', function (req, res) {
    console.log('/abc Request!');
    console.log(req.params);
    console.log(req.query);
    res.send('abc');
});

var server = app.listen(1234, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Address http://%s:%s', host, port);
});