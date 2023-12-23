const express = require('express')
const userRoute = require('./routes/v1/user')
const config = require('./config/config')

const app = express();


app.use(`${config.apiBaseUrl}/user`, userRoute)


module.exports = app;