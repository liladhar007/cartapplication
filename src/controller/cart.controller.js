const cartModal = require("../modal/cart.modal");

const success = require("../util/constant");
const logger = require("../util/logging");
const log = logger(new Date() + "cartModal.js");

const cartCreate = async (req, res) => {
    try {
        const { userId, productId, quantity, price } = req.body;
        const result = await cartModal.create({
            userId: req.user.id,
            productId,
            quantity,
            price
        });
        if (result) {
            res.send({
                status: "success",
                code: 200,
                data: result
            })
        } else {
            res.send({
                msg: "Error in creating create",
                status: "failed",
                code: 400,
            })
        }

    } catch {
        log.error(`your data creating err:${err}`);
        res.send({
            msg: "Error in creating data",
            status: "failed",
            code: 400
        })

    }
}

const deleteFromCart = async (req, res) => {
    try {
        const { _id } = req.params;

        console.log(`${_id}`)
        
        const result = await cartModal.findOne({ _id });
        if (result) {
            const deleteData = await cartModal.deleteOne({ _id: result._id });
            res.send({
                msg: "success",
                code: 200,
                Data: deleteData
            })
        } else {
            res.send({
                msg: "Error in deleting id",
                status: "failed",
                code: 400,
            })
        }

    } catch (err) {
        log.error(`your data creating err:${err}`);
        res.send({
            msg: "Error in deleting id",
            status: "Failed",
            code: 400,
            err
        })

    }

}

module.exports = {
    cartCreate,
    deleteFromCart
}
