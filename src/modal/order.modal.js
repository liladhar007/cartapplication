const mongoose=require("mongoose");

const orderSchema =new mongoose.Schema({
    user_Id:{
        type:String,
        required:true
    },
    cart_Id:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{
    timestamps:true
    })

const orderModal = mongoose.model("orderList",orderSchema);
module.exports=orderModal