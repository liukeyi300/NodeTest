/**
 * Created by Liukeyi on 2016/3/24.
 */
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('compress.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('decompress.txt'));