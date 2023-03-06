const asyncHandler = require("express-async-handler");
const { collection, query, where, getDocs, limit } = require("firebase/firestore")
const { db } = require("../config/db")

const checkForUser = (async(email) => {
    let checkUser = false;
    const userRef = collection(db, 'User');
    const q = query(userRef, where('email', '==', email), limit(1));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if(doc){
            checkUser = true;
        }
    });
    return checkUser;
});

module.exports = {
    checkForUser,
}