class Product {
  constructor(
    name,
    store,
    price,
    description,
    ratings,
    reviews,
    images,
    countInStock,
    category
  ) {
    this.name = name;
    this.store = store;
    this.price = price;
    this.description = description;
    this.ratings = ratings;
    this.reviews = reviews;
    this.images = images;
    this.countInStock = countInStock;
    this.category = category;
  }
}

const productConverter = {
  toFirestore: (product) => {
    return {
      name: product.name,
      store: product.store,
      price: product.price,
      description: product.description,
      ratings: product.ratings,
      reviews: product.reviews,
      images: product.images,
      category: product.category,
      countInStock: product.countInStock,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Product(
      data.email,
      data.store,
      data.price,
      data.description,
      data.ratings,
      data.reviews,
      data.images,
      data.category,
      data.countInStock
    );
  },
};

module.exports = {
  Product,
  productConverter,
};
