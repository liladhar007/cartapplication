const { default: mongoose } = require("mongoose");
const productModal = require("../modal/product.modal");


const success = require("../util/constant");
const logger = require("../util/logging");
const log = logger(new Date() + "userController.js");


const postProductList = async (req, res) => {
    try {
        const { productName, Weight, prize, detail, categoryId } = req.body;
        const result = await productModal.create({
            productName,
            Weight,
            prize,
            detail,
            categoryId
        });
        if (result) {
            res.send({
                status: "success",
                code: 200,
                data: result
            })

        } else {
            res.send({
                msg: "Error in creating data",
                status: "failed",
                code: 404,
            })

        }
    } catch (err) {
        log.error(`your data creating err:${err}`);
        res.send({
            msg: "Error in creating data",
            status: "failed",
            code: 400
        })

    }
}

const getProductFind = async (req, res) => {
    try {
        const { productName } = req.body;
        const result = await productModal.findOne({ productName });

        if (result) {
            res.send({
                status: "success",
                code: 400,
                data: result
            })
        }
        else {
            res.send({
                msg: "Error in creating data",
                status: "failed",
                code: 404,
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

const getFindCategory = async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await productModal.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "_id",
                    foreignField: "categoryId",
                    as: "productData"
                },
            },
            {
                $match: { _id: new mongoose.Types.ObjectId(_id) }
            }, 
            {
                $project: {
                    _id: 0,
                    productName:1,
                    Weight:1,
                    prize:1,
                    detail:1,
                    productData:{
                        _id:1,
                        category:1,
                        categoryId:1

                    }
                }
            }

        ]);
        if (result) {
            res.send({
                status: "success",
                code: 400,
                data: result
            })
        } else {
            res.send({
                msg: "Error in creating aggregate",
                status: "failed",
                code: 404
            })
        }
    } catch (err) {
        log.error(`your data creating err:${err}`);
        res.send({
            msg: "Error in creating data",
            status: "failed",
            code: 400
        })
    }

}


module.exports = {
    postProductList,
    getProductFind,
    getFindCategory
}