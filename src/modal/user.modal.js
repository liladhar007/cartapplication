const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    age: {
        type: Number,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true

    }

}, {
    timestamps: true
})

const userModal = mongoose.model("userInfo", userSchema);
module.exports = userModal