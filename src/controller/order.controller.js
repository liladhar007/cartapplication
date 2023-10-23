const orderModal = require("../modal/cart.modal");

const success = require("../util/constant");
const logger = require("../util/logging");
const log = logger(new Date() + "orderController.js");

const postCreate = async (req, res) => {
    try {
        const { user_Id, cart_Id, status, } = req.body;
        const result = await orderModal.create({
            user_Id,
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
        log.error(`order data creating error ${err}`);
        res.send({
            msg: " order data create error ",
            status: "failed",
            code: 400,

        })

    }
}
module.exports = {
    postCreate
}

