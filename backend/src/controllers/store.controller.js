const asyncHandler = require("express-async-handler");
const { collection, serverTimestamp, addDoc } = require("firebase/firestore");
const { db } = require("../config/db");
const { Store, storeConverter } = require("../models/store.models");

const createNewStore = asyncHandler(async (req, res) => {
  try {
    const { name, address, isVerified, email, contact, category } = req.body;
    const ref = collection(db, "Store").withConverter(storeConverter);
    const store = await addDoc(
      ref,
      new Store(name, address, isVerified, email, contact, category),
      { timestamp: serverTimestamp() }
    );
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
