var events = require('events');

var eventEmit = new events.EventEmitter();

var connectHandle = function() {
 console.log('connect handle!');
 eventEmit.emit('dataReceived');
};

var dataReceivedHandle = function() {
 console.log('datareceived handle!');
};

eventEmit.on('connect', connectHandle);
eventEmit.on('dataReceived', dataReceivedHandle);

eventEmit.emit('connect');

console.log('end');