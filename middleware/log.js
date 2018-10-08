const winston = require('winston');
require();

module.exports = () => {
  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaught-exceptions.log" })
  );
  
  process.on('unhandledRejection', ex => { 
    throw ex;
  });

  
};


