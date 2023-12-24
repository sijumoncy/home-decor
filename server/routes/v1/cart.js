const router = require('express').Router()
const authMiddleware = require('../../middlewares/authenticate')
const cartController = require('../../controllers/cart.controller')

// get all carts
router.get('/', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, cartController.getCarts)

//get cart
router.get('/:userId', authMiddleware.authenticate, cartController.getCart)

// add new cart
router.post('/', authMiddleware.authenticate, cartController.addCart)

// update cart
router.put('/:id', authMiddleware.authenticate, cartController.updateCart)

// delete cart
router.delete('/:id', authMiddleware.authenticate, cartController.deleteCart)


module.exports = router