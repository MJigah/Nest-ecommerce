const { getDocs, collection, where, limit, query, getDoc, doc } = require("firebase/firestore");
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

//Check for Product using Id
const checkProductWithId = async(id) => {
    try {
        let checkProduct;
        const ref = doc(db, 'Product', id);
        const docSnap = await getDoc(ref);
        if(docSnap.exists()){
            checkProduct = true;
        } else {
            checkProduct = false;
        };
        return checkProduct;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {
    checkForProduct,
    checkProductWithId,
}