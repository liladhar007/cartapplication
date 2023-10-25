const userModal = require("../modal/user.modal");
const jToken = require("jsonwebtoken");

const success = require("../util/constant");
const logger = require("../util/logging");
const log = logger(new Date() + "userController.js");


const secret = "882424lila"

const postRegistration = async (req, res) => {
    try {
        const { name, age, number, email, password } = req.body;
        const result = await userModal.create({
            name: name,
            age: age,
            number: number,
            email: email,
            password: password
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
                code: 400,
            })
        }

    } catch (err) {
        log.error(`your data creating err:${err}`);
        res.send({
            msg: "Error in creating data",
            status: "failed",
            code: 401
        })

    }
}


const postLogin = async (req, res) => {
    log.info(`the request is ${JSON.stringify(req.body)}`);
    try {
        const { email, password } = req.body;
        const user = await userModal.findOne({
            email: email,
            password: password
        });
        if (user) {
            const token = jToken.sign({
                name: user.name,
                email: user.email,
                id: user._id

            }, secret);
            return res.send({ msg: "user logged in successfully ", token: token })
        } else {
            res.send({ msg: "enter correct email or password" })
        }


    } catch (err) {
        log.error(`your data finding err:${err}`);
        res.send({
            msg: "Error in creating data",
            status: "failed",
            code: 400
        })

    }
}


const postFindLogin = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await userModal.findOne({ name: name });
        if (result) {
            res.send({
                status: "success",
                code: 200,
                data: result
            })
        } else {
            res.send({
                msg: "Error in finding user",
                status: "failed",
                code: 400,
            })
        }
    } catch (err) {
        log.error(`your data creating err:${err}`);
        res.send({
            msg: "Error in data creating ",
            status: "failed",
            code: 401
        })

    }
}

const findPage = async (req, res) => {
    try {
        const { page, perPage } = req.query;
        const skip = (page - 1) * perPage;
        const result = await userModal.find().limit(perPage).skip(skip).sort({
            "createdAt": -1,
            "srno": -1
        });
        const count = await userModal.count();
        if (result) {
            res.send({
                status: "success",
                code: 200,
                count: count,
                data: result
            })
        } else {
            res.send({
                msg: "Error in finding user",
                status: "failed",
                code: 400,
            })
        }

    } catch {
        log.error(`your data creating err:${err}`);
        res.send({
            msg: "Error in data creating ",
            status: "failed",
            code: 401
        })

    }
}


module.exports = {
    postRegistration,
    postLogin,
    postFindLogin,
    findPage
}