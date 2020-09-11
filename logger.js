var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

//module.exports.log = log; // export log function
//module.exports.url = url;

// or export entire thing as a function
module.exports = log;