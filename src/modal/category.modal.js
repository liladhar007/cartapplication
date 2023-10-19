const mongoose = require("mongoose");

const categorySchema=new mongoose.Schema({
    category:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const categoryModal = mongoose.model("category",categorySchema);
module.exports = categoryModal