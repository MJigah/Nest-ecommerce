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
        deliveredAt,
    ) {
        this.orderItems = orderItems;
        this.shippingAddress = shippingAddress;
        this.paymentMethod = paymentMethod;
        this.paymentResult = paymentResult;
        this.shippingPrice = shippingPrice;
        this.taxPrice =  taxPrice;
        this.user = user;
        this.isPaid = isPaid;
    }
}