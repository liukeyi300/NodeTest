// var buff = new Buffer(10);
//
// var buff2 = new Buffer("testabcd");
//
// var buff3 = new Buffer("lastOne");
//
// console.log(buff);
//
// console.log(buff2);
//
//  console.log(buff3);

// var buf = Buffer.concat([buff2,buff3]);

// console.log(len);

// console.log(buf.toString());

var buff = new Buffer("abcd");
var buff2 = new Buffer("abc");
var buff3 = new Buffer("bcd");

// console.log(buff2.compare(buff));
// console.log(buff3.compare(buff));
// console.log(buff2.compare(buff3));

var buff4 = new Buffer(8);
buff4.write("efgh");
buff.copy(buff4, 4, 0, 4);
// console.log(buff4.toString());

var buff5 = new Buffer("testabcd");
var buff6 = buff5.slice(1,5);
console.log(buff5.toString());
console.log(buff6.toString());
buff5.write("lalala");
console.log(buff5.toString());
console.log(buff6.toString());