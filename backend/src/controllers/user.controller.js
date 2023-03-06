const asyncHandler = require("express-async-handler");
const { User, userConverter } = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middleware/token.middleware");
const {doc, setDoc, addDoc, collection, serverTimestamp } = require("firebase/firestore");
const { db } = require("../config/db/index");
const { checkForUser } = require("../helpers/user.helpers");
const { currentDate } = require("../helpers/help.helpers");

const userSignup = asyncHandler(async (req, res) => {
  try {
    const { email, username, password } = req.body;

    //Check for Existing User
    const checkUser = await checkForUser(email);
    if(checkUser){
        return res.status(400).send({message: 'User already exists!'})
    }

    //Create hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Get Current Date
    const datetime = currentDate();
    createdAt = datetime;
    updatedAt = datetime;

    //Query to create new Friebase record
    const ref = collection(db, 'User').withConverter(userConverter);
    const user = await addDoc(ref, new User(email, username, hashedPassword, createdAt, updatedAt), {timestamp: serverTimestamp()});

    if (!user) {
      return res.status(400).send({ message: "Invalid SignUp Details!" });
    }
    res.status(200).send({ message: "Signup Sucessful", data: user.id });
  } catch (error) {
    res.send("A Server Error Occured!");
    console.log(error);
  }
});

const userLogin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send({ message: "Invalid Email or Login Details!" });
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await generateToken(user._id);
      res.status(200).send({
        message: "Login Successful",
        token: token,
      });
    } else {
      res.status(400).send({ message: "Invaid Password or Login Details" });
    }
  } catch (error) {
    res.send("A Server Error Occured!");
    console.log(error);
  }
});

const getUserDetails = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      res.status(400).send({ message: "No Token Found" });
    }
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(500).send({ message: "Server Error Occured!" });
    console.log(error);
  }
});

module.exports = {
  userSignup,
  userLogin,
  getUserDetails,
};
