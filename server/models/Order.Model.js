const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItem",
        required: true,
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
    paymentStatus: { type: String, default: "pending" },
    paymentDetails: { type: Object }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
