const httpStatus = require("http-status");
const productService = require("../services/product.service");
const path = require("path");
const fs = require("fs");
const { deleteFile, renameFile } = require("../utils/fileUtils");
const {categories} = require('../constant/category')

async function addProduct(req, res) {
  try {
    req.body.img = req.file.filename;
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
    if (
      req.file &&
      (req.file.mimetype !== "image/jpeg" &&
        req.file.mimetype !== "image/png" &&
        req.file.mimetype !== "image/webp") && 
        req.file.mimetype !== "image/jpg"
    ) {
      res
        .status(httpStatus.NOT_ACCEPTABLE)
        .json({
          message: "error",
          error: "Image format not supported. (JPEG | PNG | WEBP)",
        });
      return;
    }
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );
    if (req.file) {
      const filePath = "./uploads";
      const oldFileName = req.body.img;
      const newFileName = req.file.filename;

      // Delete the old image file if it exists
      const deleted = await deleteFile(filePath, oldFileName)

      // rename old to new
      const renamed = await renameFile(filePath, oldFileName, newFileName)

      console.log({deleted, renamed, filePath, oldFileName, newFileName});
    }
    res
      .status(httpStatus.OK)
      .json({ message: "product updated successfull", data: updatedProduct });
    return;
  } catch (err) {
    console.error("Product Update error : ", err);
    res.status(500).json({ message: "error", error: err });
    return;
  }
}

async function deleteProduct(req, res) {
  try {
    const deletedProduct = await productService.deleteproduct(req.params.id);
    const fileName = req.body.img;
    const filePath = "./uploads";
    console.log({filePath, fileName}, req.body);
    const deleted = await deleteFile(filePath, fileName)
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
    const filter = {};
    // category can be multiple for OR condition pass like - string seperate with commas
    if (req.query?.category) {
      let categories = req.query?.category.split(',')
      categories = categories.filter((x) => x)
      filter.categories = { $in: categories };
    }
    const pageNum = (req.query.limit || 100) * (req.query.page || 0);
    const { products, totalProducts } = await productService.getproducts(
      pageNum,
      req.query.limit,
      filter
    );
    res.status(httpStatus.OK).json({ products, totalProducts });
  } catch (err) {
    console.error("get product error : ", err);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "error", error: err });
  }
}

async function getCategories(req, res) {
  try {
    res.status(httpStatus.OK).json(categories);
  } catch(err) {
    console.error("get product categories error : ", err);
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
  getCategories
};
