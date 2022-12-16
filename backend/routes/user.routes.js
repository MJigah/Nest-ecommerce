const express = require('express');
const { userSignup, userLogin, getUserDetails } = require('../controllers/user.controller');
const { verifyToken } = require('../middleware/token.middleware');
const router = express.Router();

router.post('/signup', userSignup)

router.post('/login', userLogin)

router.get('/', verifyToken, getUserDetails)

module.exports = router;