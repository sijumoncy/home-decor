const cartService = require('../services/cart.service')

async function addCart(req, res) {
  try {
    const createdCart = await cartService.addCart(req.body);
    res
      .status(201)
      .json({ message: "cart created successfull", data: createdCart });
  } catch (err) {
    console.error("Cart Add error : ", err);
    res.status(500).json({ message: "error", error: err });
  }
}

async function updateCart(req, res) {
  try {
    const updatedCart = await cartService.updateCart(req, req.params.userId, req.body);
    if(updatedCart){
        res
          .status(201)
          .json({ message: "Cart updated successfull", data: updatedCart });
    }
    res.status(404).json({message:"cart not found", statusCode:404})
  } catch (err) {
    console.error("Cart Add error : ", err);
    res.status(500).json({ message: "error", error: err });
  }
}

async function deleteCart(req, res) {
  try{
    const deletedCart = await cartService.deleteCart(req, req.params.userId)
    if(deletedCart){
        res
          .status(201)
          .json({ message: "Cart deleted successfull", data: deletedCart });
    }
    res.status(404).json({message:"cart not found", statusCode:404})
  } catch(err) {
    console.error("delete cart error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

async function getCart(req,res) {
  try{
    const cart =  await cartService.getCart(req, req.params.userId)
    if(cart) {
        res.status(httpStatus.OK).json({ cart});
    }
    res.status(404).json({message:"cart not found", statusCode:404})
  }catch(err){
    console.error("get cart error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

async function getCarts(req,res) {
  try{
    const filter = null
    const pageNum = (req.query.limit || 100) * (req.query.page || 0);
    const carts =  await cartService.getCarts(pageNum, req.query.limit, filter)
    res.status(httpStatus.OK).json(carts);
  }catch(err) {
    console.error("get carts error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

module.exports = {
  addCart,
  getCart,
  getCarts,
  deleteCart,
  updateCart
};
