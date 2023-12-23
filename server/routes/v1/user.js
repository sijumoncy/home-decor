const router = require('express').Router()
const authMiddleware = require('../../middlewares/authenticate')
const userController = require('../../controllers/user.controller')



// update user
router.put('/:id', authMiddleware.authenticate, authMiddleware.userDataUpdateByCreatedUser, userController.updateUser)

// delete 
router.delete('/:id', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, userController.deleteUser)


module.exports = router