class Order {
  constructor(
    orderItems,
    shippingAddress,
    paymentMethod,
    paymentResult,
    shippingPrice,
    taxPrice,
    user,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt
  ) {
    this.orderItems = orderItems;
    this.shippingAddress = shippingAddress;
    this.paymentMethod = paymentMethod;
    this.paymentResult = paymentResult;
    this.shippingPrice = shippingPrice;
    this.taxPrice = taxPrice;
    this.user = user;
    this.isPaid = isPaid;
    this.paidAt = paidAt;
    this.isDelivered = isDelivered;
    this.deliveredAt = deliveredAt;
  }
}

const orderConverter = {
  toFirestore: (order) => {
    return {
      orderItems: order.orderItems,
      shippingAddress: order.shippingAddress,
      paymentMethod: order.paymentMethod,
      paymentResult: order.paymentResult,
      shippingPrice: order.shippingPrice,
      taxPrice: order.taxPrice,
      user: order.user,
      isPaid: order.isPaid,
      paidAt: order.paidAt,
      isDelivered: order.isDelivered,
      deliveredAt: order.deliveredAt,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Order(
      data.orderItems,
      data.shippingAddress,
      data.paymentMethod,
      data.paymentResult,
      data.shippingPrice,
      data.taxPrice,
      data.user,
      data.isPaid,
      data.paidAt,
      data.isDelivered,
      data.deliveredAt
    );
  },
};

module.exports = {
    Order,
    orderConverter,
}

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