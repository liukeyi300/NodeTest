var bird = require('./bird');
var express = require('express');
var app = express();

app.use('/bird', bird);

var server = app.listen(1234, function() {
   console.log("start");
});