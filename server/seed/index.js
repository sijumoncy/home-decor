const connectDb = require("../db/connection");
const mongoose = require("mongoose");

async function seedData() {
  console.log("dB connected  start seed ");
}

connectDb()
  .catch(() => {
    console.error("Db Connection Failed");
  })
  .then(async () => {
    await seedData();
  });

function exit() {
  mongoose
    .disconnect()
    .then(() => console.log("Disconnected"))
    .catch(() => console.log("Error Disconnect Db"));
}
