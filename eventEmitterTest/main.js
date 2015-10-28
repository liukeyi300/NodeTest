var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log("listener1 Go!");
}

var listener2 = function listener2() {
    console.log('listener2 Go!');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);

eventEmitter.emit('connection');

