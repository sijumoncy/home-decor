const connectDb = require("../db/connection");
const mongoose = require("mongoose");
const ProductModel = require("../models/Product.Model");
const {productsSeedData} = require("./data");

async function seedData() {
  console.log("dB connected  start seed ");
  await ProductModel.deleteMany({});
  await ProductModel.insertMany(productsSeedData);
  await exit();
}

connectDb()
  .catch(() => {
    console.error("Db Connection Failed");
  })
  .then(async () => {
    await seedData();
  });

async function exit() {
  mongoose
    .disconnect()
    .then(() => console.log("Disconnected"))
    .catch(() => console.log("Error Disconnect Db"));
}
