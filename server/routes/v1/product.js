const router = require("express").Router();
const authMiddleware = require("../../middlewares/authenticate");
const productController = require("../../controllers/product.controller");
const multer = require("multer");
const fs = require('fs')

const filePath = './uploads'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      fs.mkdirSync(filePath, { recursive: true })
      cb(null, filePath);
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      cb(null, `${Date.now()}.${ext}`);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/webp") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const uploadImage = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 10,
    },
    fileFilter: fileFilter,
  });

// get all products : no auth
router.get("/", productController.getProducts);

//get product : no atuh
router.get("/:id", productController.getProduct);

// add new product
router.post(
  "/",
  authMiddleware.authenticate,
  authMiddleware.adminOnlyCheck,
  uploadImage.single('image'),
  productController.addProduct
);

// update product
router.put(
  "/:id",
  authMiddleware.authenticate,
  authMiddleware.adminOnlyCheck,
  productController.updateProduct
);

// delete product
router.delete(
  "/:id",
  authMiddleware.authenticate,
  authMiddleware.adminOnlyCheck,
  productController.deleteProduct
);

module.exports = router;
