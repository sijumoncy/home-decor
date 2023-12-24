const Order = require("../models/Order.Model");

async function addOrder(orderBody) {
  try {
    const newOrder = new Order(orderBody);
    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOrder(req, id) {
  try {
    let order;
    if (req.user?.isAdmin) {
      order = await Order.findById(id);
    } else {
      order = await Order.findOne({ _id: id, userId: req.user?._id });
    }
    return order;
  } catch (err) {
    throw new Error(err);
  }
}

async function updateOrder(req, id, orderBody) {
  const order = await getOrder(req, id);
  if (!order) {
    return false;
  }
  Object.assign(order, orderBody);
  await order.save();
  return order;
}

async function deleteOrder(req, id) {
  try {
    let deletedOrder;
    if (req.user?.isAdmin) {
      deletedCart = await Order.find(id);
    }else{
      deletedOrder = await Order.findOne({_id: id, userId: req.user?._id})
    }
    if(deletedOrder){
      Object.assign(deletedOrder, {status: "cancelled"});
      await deletedOrder.save();
    }
    return deletedCart;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOrders(limit, pageNum, filter) {
  try {
    let orders;
    const filters = {...filter}
    if(!req.user?.isAdmin) {
      filters.userId = req.user?._id
    }
    orders = await Order.find(filters)
      .limit(limit || 100)
      .skip(pageNum)
      .exec();
    
    return orders;
  } catch (err) {
    throw new Error(err);
  }
}

async function getMonthlyOrders() {
  try {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    const data = await Order.aggregate([
      { $match: { createdAt: { $gte: lastYear }, status : {$ne: "cancelled"} } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales : "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          totalOrders: {$sum : 1},
          total: { $sum: "$sales" },
        },
      },
    ]);
    return data;
  } catch (err) {
    throw new Error(err);
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
