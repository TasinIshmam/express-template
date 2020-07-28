const winston = require('winston');
const {transports, format} = winston;
const split = require('split');


const print = format.printf((info) => {
    const log = `${info.level}: ${info.message}`;

    return info.stack
        ? `${log}\n${info.stack}`
        : log;
});

let logLevelConsole = process.env.NODE_ENV === "production" ? "info" : 'debug';

const logger = winston.createLogger({
    level: logLevelConsole,
    format: format.combine(
        format.errors({stack: true}),
        print,
    ),
    transports: [new transports.Console()],
});

logger.stream = split().on('data', function (line) {
    logger.info(line)
});


// testing format of error. Check this before fucking around with the morgan config :'3
// const error = new Error('Testing Error');
// logger.error(error);
// logger.error('An error occurred:', error);

module.exports = logger;