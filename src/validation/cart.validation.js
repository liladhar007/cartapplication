const joi=require("joi");


const cartValPost=(req,res,next)=>{
    const data =req.body;
    const joiSchema=joi.object().keys({
        productId:joi.string().required(),
        quantity:joi.number().required(),
        price:joi.number().required()
    })

    const validationData = joiSchema.validate(data);
    if(validationData.error){
        return res.send(validationData.error.details);
    }
    next();

}
module.exports={
    cartValPost
}