const jToken = require("jsonwebtoken");

const cartValJwt = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.send({ msg: "Unauthorized user ", code: 400 })
        }
        const data = jToken.decode(token);
        if (data) {
            req.user = data;
            next();
        } else {
            res.send({ msg: "decode token error" });
        }
    } catch (err) {
        res.send(err);
    }

}

module.exports = {
    cartValJwt
}


