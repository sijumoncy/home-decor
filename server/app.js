const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')

const userRoute = require('./routes/v1/user')
const authRoute = require('./routes/v1/auth')
const cartRoute = require('./routes/v1/cart')
const orderRoute = require('./routes/v1/order')
const productRoute = require('./routes/v1/product')
const fileRoute = require('./routes/v1/file')
const paymentRoute = require('./routes/v1/payment')
const config = require('./config/config')

const app = express();

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
app.use(`${config.apiBaseUrl}/file`, fileRoute)
app.use(`${config.apiBaseUrl}/payment`, paymentRoute)


module.exports = app;