const asyncHandler = require('express-async-handler');
const firebase = require('../config/db/index')
const { User } = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../middleware/token.middleware');
const firestore = firebase.firestore()


const userSignup = asyncHandler(async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // const checkUser = await User.findOne({email});
        // if(checkUser){
        //     res.status(400).send({message: 'User already exists!'})
        // }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // const user = await User.create({
        //     email,
        //     username,
        //     password: hashedPassword
        // });
        const user = await firestore.collection('users').docs.set({
            email,
            username,
            hashedPassword,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })

        if(!user){
            res.status(400).send({message: 'Invalid SignUp Details!'})
        }
        res.status(200).send({message: 'Signup Sucessful'})
    } catch (error) {
        res.send('A Server Error Occured!')
        console.log(error);
    }
})

const userLogin = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email});
        if(!user){
            res.status(400).send({message: 'Invalid Email or Login Details!'})
        }
        if(user && (await bcrypt.compare(password, user.password))){
            const token = await generateToken(user._id);
            res.status(200).send({
                message: 'Login Successful',
                token: token
            })
        } else {
            res.status(400).send({message: 'Invaid Password or Login Details'});
        } 
    } catch (error) {
        res.send('A Server Error Occured!')
        console.log(error);
    }
})

const getUserDetails = asyncHandler(async(req, res) => {
    try{
        const user = await User.findById(req.user._id).select('-password')
        if(!user){
            res.status(400).send({message: 'No Token Found'});
        }
        res.status(200).send({data: user})
    } catch(error){
        res.status(500).send({message: 'Server Error Occured!'});
        console.log(error);
    }
})

module.exports = {
    userSignup,
    userLogin,
    getUserDetails,
}