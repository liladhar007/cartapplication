const joi = require("joi");

const postValProduct =(req,res,next)=>{
    const data= req.body;
    const joiSchema=joi.object().keys({
        productName:joi.string().required(),
        Weight: joi.string().required(),
        prize: joi.number().required(),
        detail: joi.string().required(),
        categoryId:joi.string().required(),
    })

    const validationData = joiSchema.validate(data);
    if(validationData.error){
        return res.send(validationData.error.details);
    }
    next();
}

module.exports={
    postValProduct
}