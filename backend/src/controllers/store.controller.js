const asyncHandler = require("express-async-handler");
const { collection, serverTimestamp, addDoc } = require("firebase/firestore");
const { db } = require("../config/db");
const { checkForStore } = require("../helpers/store.helpers");
const { Store, storeConverter } = require("../models/store.models");

const createNewStore = asyncHandler(async (req, res) => {
  try {
    const { name, address, isVerified, email, contact } = req.body;

    //Check for Existing Store
    const checkStore = await checkForStore(email);
    if (checkStore) {
      return res.status(400).send({ message: "Store already exists!" });
    }

    //Create Store Categories
    const category = {
      name: "Food Bank",
      menu: [
        {
          name: "Spice & Seasoning",
          sub: [{ name: "salt" }, { name: "cubes" }, { name: "stocks" }],
        },
      ],
    };

    //Query to create new firebase record
    const ref = collection(db, "Store").withConverter(storeConverter);
    const store = await addDoc(
      ref,
      new Store(name, address, isVerified, email, contact, category),
      { timestamp: serverTimestamp() }
    );

    //Check if Store is created sucessfully
    if (!store) {
      return res.status(400).send({ message: "Invalid Details!" });
    }
    res
      .status(200)
      .send({ message: "Store Created Successful", data: store.id });
  } catch (error) {
    res.status(500).send("A Server Error Occured!");
    console.log(error);
  }
});

module.exports = {
  createNewStore,
};
