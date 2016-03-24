var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('a_event', function(arg1, arg2) {
    console.log('a_event1:', arg1, arg2);
});

eventEmitter.on('a_event', function(arg1, arg2){
    console.log('a_event2', arg1, arg2);
});

setTimeout(function() {
    eventEmitter.emit('a_event',2,3);
}, 1000);
console.log('end');
