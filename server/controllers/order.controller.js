const orderService = require("../services/order.service");

async function addOrder(req, res) {
  try {
    const orderBody = {...req.body, userId : req.user._id}
    const createdOrder = await orderService.addOrder(orderBody);
    res
      .status(201)
      .json({ message: "Order created successfull", data: createdOrder });
  } catch (err) {
    console.error("Order Add error : ", err);
    res.status(500).json({ message: "error", error: err });
  }
}

async function updateOrder(req, res) {
  try {
    const updatedOrder = await orderService.updateOrder(req, req.params.id, req.body);
    if(updatedOrder){
        res
          .status(201)
          .json({ message: "Order updated successfull", data: updatedOrder });
    }
    res.status(404).json({message:"Order not found", statusCode:404})
  } catch (err) {
    console.error("Order Update error : ", err);
    res.status(500).json({ message: "error", error: err });
  }
}

async function deleteOrder(req, res) {
  try{
    const deletedOrder = await orderService.deleteOrder(req, req.params.id)
    if(deletedOrder){
        res
          .status(201)
          .json({ message: "Order Cancelled successfull", data: deletedOrder });
    }
    res.status(404).json({message:"Order not found", statusCode:404})
  } catch(err) {
    console.error("delete Order error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

async function getOrder(req,res) {
  try{
    const order =  await orderService.getOrder(req, req.params.id)
    if(order) {
        res.status(httpStatus.OK).json({ order});
    }
    res.status(404).json({message:"Order not found", statusCode:404})
  }catch(err){
    console.error("get Order error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

async function getOrders(req,res) {
  try{
    const filter = null
    const pageNum = (req.query.limit || 100) * (req.query.page || 0);
    const orders =  await orderService.getOrders(pageNum, req.query.limit, filter)
    res.status(httpStatus.OK).json(orders);
  }catch(err) {
    console.error("get orders error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}


async function getMonthlyOrders(req,res) {
  try{
    const status =  await orderService.getMonthlyOrders()
    res.status(httpStatus.OK).json(status);
  }catch(err) {
    console.error("get monthly orders error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

module.exports = {
  addOrder,
  updateOrder,
  getOrder,
  getOrders,
  deleteOrder,
  getMonthlyOrders
};
