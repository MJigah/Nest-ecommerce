const express = require('express');
const router = express.Router();

router.post('/create', productController);

module.exports = router;