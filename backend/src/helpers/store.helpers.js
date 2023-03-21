const { collection, query, where, getDocs, limit, getDoc, doc } = require("firebase/firestore")
const { db } = require("../config/db")

// Check for Store using Email
const checkForStore = (async(email) => {
    try {
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
    } catch (error) {
        console.log(error);
    }
});

//Check for Store using Id
const checkStoreWithId = async(id) => {
    try {
        let checkStore;
        const ref = doc(db, 'Store', id);
        const docSnap = await getDoc(ref);
        if(docSnap.exists()){
            checkStore = true;
        } else {
            checkStore = false;
        };
        return checkStore;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {
    checkForStore,
    checkStoreWithId,
}
