const asyncHandler = require('express-async-handler');

const createNewOrder = asyncHandler(async(req, res) => {
    //Do something
});

module.exports = {
    createNewOrder,
}