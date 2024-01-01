const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: { type: String },
    categories: { type: Array },
    size: { type: String },
    colors: { type: Array },
    price: { type: Number },
    rating: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
