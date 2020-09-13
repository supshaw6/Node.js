//function sayHello(name) {
  //  console.log('Hello ' + name); // global object (called window in node.js)
//}

// sayHello('Sophia')

//--------------------
// creating modularity to avoid global functions from overwriting one another
// every file in a node application is a "modeule", must have at least one, main module
// console.log(module);

//---------------------
// loading the logger module
// const logger = require('./logger');   // don't forget the require function to load the module! better to store result in a constant

// pro tip: use jshint to check for errors before running

// console.log(logger.url);    // print url to console
// logger.log('message')       // print message to console using log function in logger.js

// or load entire module as a function
// const logger = require('./logger');

// logger('Hello Sophia! Great job!') 

//-------------------------
// working with file paths using built-in modules
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj)

// working with the OS module
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);
// console.log('Free Memory: ' + freeMemory);

// pro-tip: using a template string (helps build strings without concatinations)
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const EventEmitter = require('events');

// load logger module and call log function
// const Logger = require('./logger');
// const logger = new Logger(); // new Logger object

// Register a listener
// logger.on('messageLogged', (arg) => {
   //console.log('Listener called', arg);
// });

// logger.log('message');

// -------- HTTP Module ---------------
const http = require ('http');

// store result in a server object, has all features of EventEmitter
const server = http.createServer();