/**
 * Created by Liukeyi on 2016/3/25.
 */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    console.log('Cookies: '+ req.cookies);
    res.send("hahaha");
});

app.listen(1234);