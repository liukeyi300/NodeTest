var fs = require('fs');
var zlib = require('zlib');

var readerStream = fs.createReadStream('input.txt');
readerStream
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('compress.txt.gz'));