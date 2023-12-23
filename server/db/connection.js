const mongoose = require('mongoose')
const config = require('../config/config')

async function connectDb() {
    try{
        mongoose.connect(config.mongo.url)
        .then(() => console.info("Db connected successfully"))
        .catch((error) => {throw new Error(error)})
    } catch(err){
        console.error("Error connect Db : ", err)
    }
}

module.exports = connectDb