const asyncHandler = require('express-async-handler');
const { collection, addDoc, serverTimestamp } = require('firebase/firestore');
const { db } = require('../config/db');
const { checkForProduct } = require('../helpers/product.helpers');
const { productConverter } = require('../models/product.model');

const addProduct = asyncHandler(async(req, res) => {
    try {
        const {
            name,
            store,
            price,
            description,
            ratings,
            reviews,
            images,
            category,
            countInStock
        } = req.body;

        //Check for Existing Product
        const checkProduct = await checkForProduct(name);
        if(checkProduct) {
            return res.status(400).send({message: 'Product already exists!'});
        }

        // Query too create new Firebase record
        const ref = collection(db, 'Product').withConverter(productConverter);
        const product = await addDoc(
            ref,
            new Product(
                name,
                store,
                price,
                description,
                ratings,
                reviews,
                images,
                category,
                countInStock
            ),
            { timestamp: serverTimestamp() }
        );

        // Check if Product is created Successfully
        if(!product) {
            return res.status(400).send({message: 'Invalid Details!'});
        }

        res.status(200).send({message: 'Product Created Successfully!', data: product.id});
    } catch (error) {
        res.status(500).send('A Server Error Occured!');
        console.log(error)
    }
});

module.exports = {
    addProduct,
}