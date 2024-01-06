const httpStatus = require("http-status");
const productService = require("../services/product.service");

async function addProduct(req, res) {
  try {
    req.body.img = req.file.filename
    const createdProduct = await productService.addProduct(req.body);
    return res
      .status(httpStatus.CREATED)
      .json({ message: "product added successfull", data: createdProduct });
  } catch (err) {
    console.error("Product Add error : ", err);
    if (err.code === 11000) {
      return res
        .status(httpStatus.CONFLICT)
        .json({ message: "product already exist", error: err });
    }
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "unknown error", error: err });
  }
}

async function updateProduct(req, res) {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );
    res
      .status(201)
      .json({ message: "product updated successfull", data: updatedProduct });
  } catch (err) {
    console.error("Product Add error : ", err);
    res.status(500).json({ message: "error", error: err });
  }
}

async function deleteProduct(req, res) {
  try {
    const deletedProduct = await productService.deleteproduct(req.params.id);
    res
      .status(httpStatus.OK)
      .json({ message: "Successfully deleted product", deletedProduct });
  } catch (err) {
    console.error("delete product error : ", err);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "error", error: err });
  }
}

async function getProduct(req, res) {
  try {
    const product = await productService.getproduct(req.params.id);
    res.status(httpStatus.OK).json({ product });
  } catch (err) {
    console.error("get product error : ", err);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "error", error: err });
  }
}

async function getProducts(req, res) {
  try {
    const filter = null;
    if (req.query?.category) {
      filter.category = req.query.category;
    }
    const pageNum = (req.query.limit || 100) * (req.query.page || 0);
    const {products , totalProducts} = await productService.getproducts(
      pageNum,
      req.query.limit,
      filter
    );
    res.status(httpStatus.OK).json({products, totalProducts});
  } catch (err) {
    console.error("get product error : ", err);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "error", error: err });
  }
}

module.exports = {
  addProduct,
  updateProduct,
  getProduct,
  getProducts,
  deleteProduct,
};
