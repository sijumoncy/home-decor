const config = require("../config/config.js");
const paymentService = require("../services/payment.service.js");
const orderService = require("../services/order.service.js");

const stripe = require("stripe")(config.stripe.secret);

async function initiatePayment(req, res) {
  try {
    
    
    const { _id:orderId } = req.body;
    // check order in db
    const dbOrderData = await orderService.getOrder(req, orderId);
    // console.log("order conteoler dbOrderData ====: ", dbOrderData);
    if (dbOrderData) {
        const { amount } = dbOrderData;
        console.log("amount ====: ", amount);

        // generate products data from order




      //   need to create stripe product data / line_items

        // const stripeSession = await stripe.checkout.sessions.create({
        //   payment_method_types: ["card"],
        //   line_items: [],
        //   mode: "payment",
        //   success_url: "/shop/checkout",
        //   cancel_url: "http://localhost:3000/shop/checkout",
        // });

        // console.log("sripe out ===> ", stripeSession);

        // if (stripeSession && stripeSession?.id) {
        //   // if payment success
        //   dbOrderData.paymentDetails = stripeSession;
        //   const updateOrder = await orderService.updateOrder(
        //     req,
        //     dbOrderData._id,
        //     dbOrderData
        //   );

        //   // payment success order updated
        //   return res.status(200).json({
        //     message: "Payment successfull",
        //     data: { sessionId: stripeSession.id, order: updateOrder },
        //   });
        // }

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
