const Cart = require("../models/Cart.Model");

async function addCart(cartBody) {
  try {
    const newCart = new Cart(cartBody);
    const savedCart = await newCart.save();
    return savedCart;
  } catch (err) {
    throw new Error(err);
  }
}

async function getCart(req, userId) {
  try {
    let cart;
    if (req.user?.isAdmin || req.user?._id === userId) {
      cart = await Cart.find({userId: userId});
    }
    return cart;
  } catch (err) {
    throw new Error(err);
  }
}

async function updateCart(req, userId, cartBody) {
  let cart;
  cart = await getCart(req, userId);
  cart = cart?.length > 0 ? cart[0] : undefined;
  if (!cart) {
    return false;
  }
  Object.assign(movie, cartBody);
  await movie.save();
  return movie;
}

async function deleteCart(req, userId) {
  try {
    let deletedCart;
    if (req.user?.isAdmin || req.user?._id === userId) {
      deletedCart = await Cart.findOneAndDelete({user: req.user?._id});
    } 
    return deletedCart;
  } catch (err) {
    throw new Error(err);
  }
}

async function getCarts(limit, pageNum, filter) {
  try {
    let products;
    const { category, ...rest } = filter;
    if (filter) {
      products = await Product.find({
        ...rest,
        categories: { $in: [category] },
      })
        .limit(limit || 100)
        .skip(pageNum)
        .exec();
    } else {
      products = await Product.find()
        .limit(limit || 100)
        .skip(pageNum)
        .exec();
    }
    return products;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  addCart,
  updateCart,
  deleteCart,
  getCart,
  getCarts,
};
