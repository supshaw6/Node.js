// code copied from index.js
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

// Logger class will be given all functionality associated with EventEmitter
class Logger extends EventEmitter {
    // when a function is inside a class it's called a method in that class
    log(message) {
        // Send an HTTP request
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'})
    }
}

//module.exports.log = log; // export log function
//module.exports.url = url;

// or export entire thing as a function
// module.exports = log;

// one alternative: export as a class!
module.exports = Logger;