var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('Connect Success!');
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function(){
    console.log("Receive Data!");
});

eventEmitter.emit('connection');

console.log("END");
