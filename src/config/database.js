const mongoose = require("mongoose");
const success = require("../util/constant");
const logger = require("../util/logging");
const log = logger(new Date() + "database.js");


const dbConnection = async () => {
    try {
        const URL = "mongodb://project:project@localhost:27017/project";
        await mongoose.connect(URL);
        log.info(`dbConnection is done now`);
    } catch (err) {
        log.error(`dbConnection error ${err}`);
    }

}
module.exports = {
    dbConnection
}