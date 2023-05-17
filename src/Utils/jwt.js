const jwt = require('jsonwebtoken');
const { successCode } = require('./response');

const generateToken = (data) => {
    let token = jwt.sign(data, "node-30", {algorithm:"HS256",expiresIn:"15m"});
    return token;
}

const checkToken = (token) => {
    let data = jwt.verify(token, "node-30");
    return data
}

const decodeToken = (token) => {
    return jwt.decode(token);
}

const privateAPI = (req,res,next) => {
    let {refreshToken} = req.params
    try {
        let { token } = req.headers;
        checkToken(token)
        next()
    } catch(err) {
        if (err.name == "TokenExpiredError" && refreshToken == true){
            let token = generateToken(checkUser.dataValues);
            successCode(res,token,"")
        } else {
            res.status(401).send(err.message)
        }
    }
}

module.exports = {
    generateToken,
    checkToken,
    decodeToken,
    privateAPI
}