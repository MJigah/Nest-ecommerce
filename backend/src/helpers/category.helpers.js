const { doc, getDoc } = require("firebase/firestore");
const { db } = require("../config/db");

const checkForCategoryWithName = async(name) => {
    try {
        let checkCategory;
        const ref = doc(db, 'Category', id);
        const docSnap = await getDoc(ref);
        if(docSnap.exists()){
            checkCategory = true;
        } else {
            checkCategory = false;
        } return checkCategory;
    } catch (error) {
        console.log(error);
        return;
    }
}

module.exports = {
    checkForCategoryWithName,
}