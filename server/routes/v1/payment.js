const router = require('express').Router()
const authMiddleware = require('../../middlewares/authenticate')
const paymentController = require('../../controllers/payment.controller.js')

// new payment init
router.post('/', authMiddleware.authenticate, paymentController.initiatePayment)


module.exports = router