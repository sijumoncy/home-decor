const express = require('express')
const hemlet = require('helmet')
const cors = require('cors')

const userRoute = require('./routes/v1/user')
const authRoute = require('./routes/v1/auth')
const cartRoute = require('./routes/v1/cart')
const orderRoute = require('./routes/v1/order')
const productRoute = require('./routes/v1/product')
const config = require('./config/config')

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: "*",
    credentials: true,
  };

app.use(cors(corsOptions));

app.use(`${config.apiBaseUrl}/user`, userRoute)
app.use(`${config.apiBaseUrl}/auth`, authRoute)
app.use(`${config.apiBaseUrl}/product`, productRoute)
app.use(`${config.apiBaseUrl}/cart`, cartRoute)
app.use(`${config.apiBaseUrl}/order`, orderRoute)


module.exports = app;