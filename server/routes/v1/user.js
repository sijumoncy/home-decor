const router = require('express').Router()
const authMiddleware = require('../../middlewares/authenticate')
const userController = require('../../controllers/user.controller')

// update user
router.put('/:id', authMiddleware.authenticate, authMiddleware.userDataUpdateByCreatedUser, userController.updateUser)


module.exports = router