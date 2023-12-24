const router = require('express').Router()
const authMiddleware = require('../../middlewares/authenticate')
const orderController = require('../../controllers/order.controller')

// add new order
router.post('/', authMiddleware.authenticate, orderController.addOrder)

// update order
router.put('/:id', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, orderController.updateOrder)

// delete order
router.delete('/:id', authMiddleware.authenticate, orderController.deleteOrder)

//get orderauthMiddleware
router.get('/:id', authMiddleware.authenticate, orderController.getOrder)

// get all orders
router.get('/', authMiddleware.authenticate, orderController.getOrders)

// get monthly order status
router.get('/monthly', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, orderController.getMonthlyOrders)


module.exports = router