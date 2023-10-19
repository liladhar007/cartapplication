const categoryModal = require("../modal/category.modal");


const success = require("../util/constant");
const logger = require("../util/logging");
const log = logger(new Date() + "userController.js");



const categoryCreate=async(req,res)=>{
    try{
        const{category}=req.body;
        const result = await categoryModal.create({
            category:category
        });
        if (result) {
            res.send({
                status: "success",
                code: 200,
                data: result
            })
        } else {
            res.send({
                msg: "Error in creating categoryName",
                status: "failed",
                code: 400,
            })}
}catch (err) {
    log.error(`your data creating err:${err}`);
    res.send({
        msg: "Error in creating data",
        status: "failed",
        code: 401
    })
}

}
module.exports={
    categoryCreate
}