const mongoose = require("mongoose");
const success = require("../util/constant");
const logger = require("../util/logging");
const log = logger(new Date() + "database.js");
const dotenv = require("dotenv");
dotenv.config();


const dbConnection = async () => {
    try {
        const HOST = process.env.HOST
        const PORT = process.env.dbPORT
        const user = process.env.user
        const password = process.env.password
        const dbName = process.env.dbName
        const URL = `mongodb://${user}:${password}@${HOST}:${PORT}/${dbName}`;
        await mongoose.connect(URL);
        log.info(`dbConnection is done now`);
    } catch (err) {
        log.error(`dbConnection error ${err}`);
    }

}
module.exports = {
    dbConnection
}