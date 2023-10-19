const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    Weight: {
        type: String,
        require: true
    },
    prize: {
        type: Number,
        require: true
    },
    detail:{
        type:String,
        require:true
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        require:true
    }

}, {
    timestamps: true
})

const productModal = mongoose.model("productList", productSchema);
module.exports = productModal