const router = require('express').Router()
const authMiddleware = require('../../middlewares/authenticate')
const productController = require('../../controllers/product.controller')

// get all products : no auth
router.get('/', productController.getProducts)

//get product : no atuh
router.get('/:id', productController.getProduct)

// add new product
router.post('/', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, productController.addProduct)

// update product
router.put('/:id', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, productController.updateProduct)

// delete product
router.delete('/:id', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, productController.deleteProduct)

// get product stats
router.get('/status', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, productController.getProductStatus)


module.exports = router