/*var buf = new Buffer(20);
len = buf.write("safsadsdfsa");
var json = buf.toJSON();
console.log(json);
*/
var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
/*var buffer3 = Buffer.concat([buffer1,buffer2]);*/
var re = buffer1.compare(buffer2);
console.log(re);