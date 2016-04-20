/**
 * Created by Liukeyi on 2016/3/25.
 */
var util = require('util');

function Base() {
    this.name = "abc";
    this.base = 1001;
    this.sayHello = function() {
        console.log(this.name + ":" + this.base);
    };
}
Base.prototype.showName = function(){
    console.log(this.name);
};

function Sub() {
    this.name = "sub";
}

util.inherits(Sub, Base); //The sub class only inherits functions from Base class`s prototype

var objBase = new Base();
objBase.sayHello();
objBase.showName();

console.log(objBase);

var objSub = new Sub();
//objSub.sayHello();
objSub.showName();

console.log(objSub);
