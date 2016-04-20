/**
 * Created by Liukeyi on 2016/4/9.
 */
var express = require('express');
var router = express.Router();

router.use(function timelog(res, req, next) {
    console.log("Time: ", Date.now());
    next();
});

router.get('/', function(req, res) {
    res.send('Birds Main Page');
});

router.get('/about', function(req, res) {
    res.send('Birds about page');
});

module.exports = router;