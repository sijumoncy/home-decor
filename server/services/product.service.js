const Product = require("../models/Product.Model");

async function addProduct(productBody) {

    const newProduct = new Product(productBody);
    const savedProduct = await newProduct.save();
    return savedProduct;
}

async function updateProduct(id, productBody) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: productBody },
      { new: true }
    );
    return updatedProduct;
  } catch (err) {
    throw new Error(err);
  }
}

async function deleteproduct(id) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  } catch (err) {
    throw new Error(err);
  }
}

async function getproduct(id) {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    throw new Error(err);
  }
}

async function getproducts(pageNum, limit, filter) {
  try {
    let products;
    if (filter) {
      const { category, ...rest } = filter;
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
  addProduct,
  updateProduct,
  getproduct,
  getproducts,
  deleteproduct,
};
