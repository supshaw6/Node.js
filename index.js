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

logger('Hello Sophia! Great job!')