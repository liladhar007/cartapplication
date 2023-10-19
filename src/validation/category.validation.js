const joi = require("joi");

const postValCategory =(req,res,next)=>{
    const data= req.body;
    const joiSchema=joi.object().keys({
        category:joi.string().required()
    })

    const validationData = joiSchema.validate(data);
    if(validationData.error){
        return res.send(validationData.error.details);
    }
    next();
}

module.exports={
    postValCategory
}