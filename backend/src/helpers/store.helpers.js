const { collection, query, where, getDocs, limit } = require("firebase/firestore")
const { db } = require("../config/db")

const checkForStore = (async(email) => {
    let checkStore = false;
    const userRef = collection(db, 'Store');
    const q = query(userRef, where('email', '==', email), limit(1));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if(doc){
            checkStore = true;
        }
    });
    return checkStore;
});

module.exports = {
    checkForStore,
}