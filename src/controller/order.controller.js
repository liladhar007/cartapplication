const { default: mongoose } = require("mongoose");
const orderModal = require("../modal/order.modal");

const success = require("../util/constant");
const logger = require("../util/logging");
const log = logger(new Date() + "orderController.js");

const postCreate = async (req, res) => {
    try {
        const { cart_Id, status, } = req.body;
        const result = await orderModal.create({
            user_Id: req.user.id,
            cart_Id,
            status,
        });
        if (result) {
            res.send({
                status: "success",
                code: 200,
                data: result
            })
        } else {
            res.send({
                msg: "data create error ",
                status: "failed",
                code: 400,
            })
        }
    } catch (err) {
        log.error(`your order data creating error ${err}`);
        res.send({
            msg: " order data create error ",
            status: "failed",
            code: 400,

        })

    }
}

const getById = async (req, res) => {
    try {
        const { _id } = req.params;
        // console.log(_id)
        const result = await orderModal.aggregate([
            {
                $lookup: {
                    from: "userinfos",
                    localField: "user_Id",
                    foreignField: "_id",
                    as: "orderData"
                },
            },
            
            {
                $match: { _id: new mongoose.Types.ObjectId(_id) }
            }
        ]);
        // console.log(`${result}`);
        if (result) {
            res.send({
                msg: "data successfully create",
                code: 200,
                data: result
            })
        } else {
            res.send({
                msg: "data create error ",
                code: 400,
                status: "failed"
            })
        }

    } catch (err) {
        log.error(`your order data creating error ${err}`);
        res.send({
            msg: " order data create error ",
            status: "failed",
            code: 400,

        })
    }
}
module.exports = {
    postCreate,
    getById
}

