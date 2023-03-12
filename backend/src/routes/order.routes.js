const express = require('express');
const { createNewOrder } = require('../controllers/order.controllerss');
const router = express.Router();

router.post('/create', createNewOrder);

module.exports = router;