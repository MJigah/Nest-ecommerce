const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan')
const colors = require('colors');
const path = require('path');
const { errorHandler } = require('./src/middleware/error.middleware');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/user.routes')
const storeRoutes = require('./src/routes/store.routes')
const productRoutes = require('./src/routes/product.routes');
const orderRoutes = require('./src/routes/order.routes');
const categoryRoutes = require('./src/routes/category.routes');
const app = express();
const swaggerDocs = require('./src/config/utils/swagger/swagger')

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
swaggerDocs(app);

//Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html"))
  );
} else {
    app.get('/', (req, res) => res.send('Please set ENV to production environment'))
}

app.use('/api/users', userRoutes);
app.use('/api/store', storeRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/category', categoryRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server has started on port ${port}`));