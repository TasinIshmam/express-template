let mongoose = require('mongoose');
const logger = require('../utils/logger')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoIndex: false
}).then(() => logger.info("You are connected to the database"))
    .catch((err) => {
        logger.error(err)
    });

module.exports = {mongoose};
