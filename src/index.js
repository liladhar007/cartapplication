const express =require("express");
const app = express();
app.use(express.json());
const logger= require("./util/logging");
const log = logger(new Date()+"index.js");

const route =require("./route/index");
app.use(route.userRoute);
app.use(route.productRoute);
app.use(route.categoryRoute);



const db = require("./config/database");

const PORT =3000;
app.listen(PORT,()=>{
    log.info(`Server is Run on ${PORT}`);
    db.dbConnection();
})