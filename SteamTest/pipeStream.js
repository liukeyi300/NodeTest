var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('forWrite.txt');

readerStream.pipe(writerStream);

console.log('end');