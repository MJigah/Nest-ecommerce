const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan')
const colors = require('colors');
const path = require('path');
const { errorHandler } = require('./middleware/error.middleware');
const bodyParser = require('body-parser');
const connectDb = require('./db/index');
connectDb();
const userRoutes = require('./routes/user.routes')
const app = express();
const swaggerDocs = require('./utils/swagger')

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser({extended: true}));
app.use(morgan('dev'));
swaggerDocs(app);

//Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html"))
  );
} else {
    app.get('/', (req, res) => res.send('Please set to production environment'))
}

app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server has started on port ${port}`));