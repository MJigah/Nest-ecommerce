const asyncHandler = require("express-async-handler");
const { collection, addDoc } = require("firebase/firestore");
const { db } = require("../config/db");
const { checkForCategoryWithName } = require("../helpers/category.helpers");
const { categoryconverter, Category } = require("../models/category.model");

const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const checkCategory = await checkForCategoryWithName(name);
    if (checkCategory) {
      return res.status(400).send({ message: "Category already exists!" });
    }

    const ref = collection(db, "Category").withConverter(categoryconverter);
    const category = await addDoc(ref, new Category(name));
    if(!category){
        return res.status(400).send({message: 'Invalid Details'});
    }

    res.status(200).send({message: 'Category Created successfully', data: category.id});
  } catch (error) {
    res.status(500).send("A Server Error occured!");
    console.log(error);
  }
});

module.exports = {
  createCategory,
};
