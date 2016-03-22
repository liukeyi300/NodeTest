/**
 * Created by Liukeyi on 2016/3/22.
 */
var eventEmitter = require('events').EventEmitter,
    emitter = new eventEmitter();
var listener1 = function() {
    console.log('listener1');
};

var listener2 = function(){
    console.log('listener2');
};
var listener12 = function(){
    console.log('listener12');
};

emitter.on('event1', listener1);
emitter.on('event1', listener12);
emitter.on('event2',listener2);

console.log(eventEmitter.listenerCount(emitter,'event1'));

console.log(eventEmitter.listenerCount(emitter,'event2'));

emitter.emit('event1');

emitter.removeListener('event1',listener1);

console.log(eventEmitter.listenerCount(emitter,'event1'));

emitter.emit('event1');