var fs = require("fs");
//var data = fs.readFileSync('input.txt');   //阻塞方式

/**
 * 非阻塞方式 
 */
fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.error(err);
    } else {
        console.log(data.toString());
    }
});
console.log("End");
