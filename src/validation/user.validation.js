const joi = require("joi");

const postValRegistration =(req,res,next)=>{
    const data= req.body;
    const joiSchema=joi.object().keys({
        name:joi.string().required(),
        age: joi.number().required(),
        number: joi.number().required(),
        email: joi.string().email().required(),
        password: joi.string().required()
    })

    const validationData = joiSchema.validate(data);
    if(validationData.error){
        return res.send(validationData.error.details);
    }
    next();
}


const postValLogin =(req,res,next)=>{
    const data= req.body;
    const joiSchema=joi.object().keys({
        email: joi.string().email().required(),
        password: joi.string().required()
    })
    const validationData = joiSchema.validate(data);
    if(validationData.error){
        return res.send(validationData.error.details);
    }
    next();
}

module.exports={
    postValRegistration,
    postValLogin

}