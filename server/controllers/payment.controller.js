const config = require("../config/config.js");
const paymentService = require("../services/payment.service.js");
const orderService = require("../services/order.service.js");

const stripe = require("stripe")(config.stripe.secret);

async function initiatePayment(req, res) {
  try {
    const { _id: orderId, successUrl, cancelUrl } = req.body;
    // check order in db
    const dbOrderData = await orderService.getOrder(req, orderId);
    // console.log("order conteoler dbOrderData ====: ", dbOrderData);
    if (dbOrderData) {
      const { amount } = dbOrderData;
      console.log("amount ====: ", amount);

      //   need to create stripe product data / line_items
      const line_items = dbOrderData.products.map((product) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: product.productId.title,
            images: [
              `${config.apiServerUrl}` +
                `${config.apiBaseUrl}/file/${product.productId.img}`,
            ],
          },
          unit_amount: Math.round(product.productId.price * 100),
        },
        quantity: product.quantity,
      }));

      const stripeSession = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: line_items,
        mode: "payment",
        success_url: successUrl,
        cancel_url: cancelUrl,
      });

      console.log("sripe out ===> ", stripeSession);

      if (stripeSession && stripeSession?.id) {
        // if payment success
        dbOrderData.paymentDetails = stripeSession;
        const updateOrder = await orderService.updateOrder(
          req,
          dbOrderData._id,
          dbOrderData
        );

        // payment success order updated
        return res.status(200).json({
          message: "Payment successfull",
          data: { sessionId: stripeSession.id, order: updateOrder },
        });
      }

      //   payment failed
      return res
        .status(400)
        .json({ message: "payment failed", data: null, error: true });
    } else {
      // order not found
      return res
        .status(404)
        .json({ message: "order not found", data: null, error: true });
    }
  } catch (err) {
    console.error("Order Add error : ", err);
    res.status(500).json({ message: "error", error: err });
  }
}

module.exports = {
  initiatePayment,
};
