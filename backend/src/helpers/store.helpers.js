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


// User db
// ==> Address

// Category db
// ==> Main Category
//     ==> Sub Category
//         ==> Sub sub Category
//             ==> tags

// Store db
// ==> Category
// ==> star Ratings
// ==> Reviews

// Product db
// ==> Description
// ==> star Ratings
// ==> Reviews

// Order db
// ==> orderItems
// ==> shippingAddress
// ==> paymentMethod
// ==> paymentResult
// ==> shippingPrice
// ==> taxPrice
// ==> user
// ==> isPaid
// ==> paidAt
// ==> isDelivered
// ==> deliveredAt
// orderItems: [
//     {
//       slug: { type: String, required: true },
//       name: { type: String, required: true },
//       quantity: { type: Number, required: true },
//       image: { type: String, required: true },
//       price: { type: Number, required: true },
//       product: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Product',
//         required: true,
//       },
//     },
//   ],
//   shippingAddress: {
//     fullName: { type: String, required: true },
//     address: { type: String, required: true },
//     city: { type: String, required: true },
//     postalCode: { type: String, required: true },
//     country: { type: String, required: true },
//     location: {
//       lat: Number,
//       lng: Number,
//       address: String,
//       name: String,
//       vicinity: String,
//       googleAddressId: String,
//     },
//   }