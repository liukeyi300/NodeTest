var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');

var urlencodedParser = bodyParser.urlencoded({extended : false});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(multer({dest : '/tmp/'}).array('image'));

app.get('/index.html', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function (req, res) {
    var response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, function (req, res) {
    var response = {
        first_name : req.body.first_name,
        last_name : req.body.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
});

app.post('/file_upload', function(req, res) {
    console.log(req.files[0]);

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
       if (err) {
           console.log(err);
       } else {
           var response = {
               message : 'File uploaded successfully',
               filename: req.files[0].originalname
           };
       }
        console.log(response);
        res.send(JSON.stringify(response));
    });
});

var server = app.listen(1234, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(host + ":" + port);
});
