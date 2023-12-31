const express = require("express");
const app = express();
app.use(express.json());
const logger = require("./util/logging");
const log = logger(new Date() + "index.js");

const dotenv=require("dotenv");
dotenv.config();

const route = require("./route/index");
app.use(route.userRoute);
app.use(route.productRoute);
app.use(route.categoryRoute);
app.use(route.cartRoute);
app.use(route.orderRoute);



const db = require("./config/database");

const PORT = process.env.PORT;
app.listen(PORT, () => {
    log.info(`Server is Run on ${PORT}`);
    db.dbConnection();
})