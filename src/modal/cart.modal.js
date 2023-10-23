const { number } = require("joi");
const mongoose=require("mongoose");

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const cartModal=mongoose.model("cart",cartSchema);
module.exports=cartModal