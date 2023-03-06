const express = require('express');
const { createNewStore } = require('../controllers/store.controller');
const router = express.Router();

router.post('/create', createNewStore);

module.exports = router;