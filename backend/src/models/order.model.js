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