
//initialize environment variables
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.MONGODB_URI = process.env.MONGODB_URI_LOCAL;  //in case of dev, connect to local URI.
    process.env.NODE_ENV = 'development';
}

//initialize logger
require('../utils/logger');

//initialize database
require('../database/mongoose');


