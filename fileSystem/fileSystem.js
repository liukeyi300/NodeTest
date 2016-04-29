/**
 * Created by Liukeyi on 2016/3/25.
 */
var fs = require('fs');
var buff = new Buffer(1024);
//console.log("Open file Ready!");
// fs.open('input.txt', 'w+', function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Open file Success!");
// });

// fs.stat('./testPath', function (err, stat) {
//     console.log(stat);
// });

// fs.open('input.txt', 'r+', function (err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//     console.log("Open file Success!");
//     console.log("Read file Ready!");
//     fs.read(fd, buff, 0, buff.length, 0, function (err, bytes) {
//        if (err) {
//            return console.log(err);
//        }
//        console.log(bytes + " bytes were read");
//         if (bytes > 0) {
//             console.log(buff.slice(0, bytes).toString());
//         }
//         fs.close(fd, function (err) {
//            if (err) {
//                console.log(err);
//            }
//             console.log('Close file Success!');
//         });
//     });
// });

// console.log('Open file Ready!');
// fs.open('input.txt', 'r+', function (err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//     console.log('Open file Success!');
//     console.log('Truncate file Ready!');
//
//     fs.ftruncate(fd, 10, function (err) {
//        if (err) {
//            console.log(err);
//        }
//         fs.read(fd, buff, 0, buff.length, 0, function (err, bytes) {
//            if (err) {
//                console.log(err);
//            }
//             if (bytes > 0) {
//                 console.log(buff.slice(0, bytes).toString());
//             }
//
//             fs.close(fd, function (err) {
//                if (err) {
//                    console.log(err);
//                }
//                 console.log('Close File Success!');
//             });
//         });
//     });
// });

// fs.unlink('input1.txt',function (err) {
//     if (err) {
//         return console.error(err);
//     }
// });

var a = fs.statSync("./tmp/test1/a.txt");
var b = fs.statSync("./tmp1/test.txt");
//console.log(fs.statSync('./tmpsdf/a.txt') + "\n");
var i = 0;
i ++;