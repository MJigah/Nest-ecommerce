const asyncHandler = require("express-async-handler");
const { serverTimestamp, collection, addDoc } = require("firebase/firestore");
const { db } = require("../config/db");
const { orderConverter, Order } = require("../models/order.model");

const createNewOrder = asyncHandler(async (req, res) => {
  try {
    const {
      paymentMethod,
      paymentResult,
      shippingPrice,
      taxPrice,
      user,
      isPaid,
      paidAt,
      isDelivered,
      deliveredAt,
    } = req.body;

    //Add Required Data
    const newItems = {
      product: "Spaghetti",
      quantity: 3.0,
      name: "Mac Donald's spaghetti",
      totalPrice: 600.0,
    };

    const newShippingAddress = {
      fullName: "John Doe",
      address: "Ethopia Crescent",
      city: "Ethereum City",
      postalCode: "007",
      country: "Ethopia",
    };

    const newlyCreatedOrder = new Order(
      paymentMethod,
      paymentResult,
      shippingPrice,
      taxPrice,
      user,
      isPaid,
      paidAt,
      isDelivered,
      deliveredAt
    );
    newlyCreatedOrder.addOrderItems(newItems);
    newlyCreatedOrder.addShippingAddress(newShippingAddress);

    //Query to create a new Firebase record
    const ref = collection(db, "Order").withConverter(orderConverter);
    const order = await addDoc(ref, newlyCreatedOrder, {
      timestamp: serverTimestamp(),
    });
    if (!order) {
      return res.status(400).send({ message: "Invalid Details" });
    }

    res
      .status(200)
      .send({ message: "Order Created Successfully", data: order.id });
  } catch (error) {
    res.status(500).send("A Server Error Occured!");
    console.log(error);
  }
});

module.exports = {
  createNewOrder,
};
