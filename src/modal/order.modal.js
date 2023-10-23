const mongoose=require("mongoose");

const orderSchema =new mongoose.Schema({
    user_Id:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    cart_Id:{
        type:mongoose.Types.ObjectId,
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