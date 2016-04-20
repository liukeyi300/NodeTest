var fs = require('fs');
var data = " add lately";

var readerStream = fs.createReadStream('forWrite.txt');

readerStream.setEncoding("UTF8");

readerStream.on('data', function(chunk) {
    console.log('data');
    data += chunk;
});

readerStream.on('end', function () {
   console.log("Read End!");
    var writerStream = fs.createWriteStream('forWrite.txt');

    writerStream.write(data, "UTF8");
    writerStream.end();

    writerStream.on('finish', function(){
        console.log("Write End!!");
    });

    writerStream.on('error', function (err) {
        console.log(err.stack);
    });
});



readerStream.on("error", function (err) {
    console.log(err);
});



console.log("end!!");

