const { getDocs, collection, where, limit, query } = require("firebase/firestore");
const { db } = require("../config/db");

const checkForProduct = (async(name) => {
    let checkProduct = false;
    const productRef = collection(db, 'Product');
    const q = query(productRef, where('name', '==', name), limit(1));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if(doc){
            checkProduct = true;
        }
    });
    return checkProduct;
})

module.exports = {
    checkForProduct,
}