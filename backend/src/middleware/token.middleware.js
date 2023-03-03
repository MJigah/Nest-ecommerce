const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const { User } = require('../models/user.model');

const verifyToken = asyncHandler(async(req, res, next) => {
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
        //Get token from headers
        token = req.headers.authorization.split(' ')[1]

        //Verify Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        //Get user fron the token
        req.user = await User.findById(decoded.id).select('-password')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({message: "Not Authorized"})
    }
}

if(!token){
    res.status(401).json({message: "Not authorized, no token"})
}
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

module.exports = {
    generateToken,
    verifyToken,
}