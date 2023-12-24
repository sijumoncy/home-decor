const router = require('express').Router()
const authMiddleware = require('../../middlewares/authenticate')
const userController = require('../../controllers/user.controller')

// get all users
router.get('/', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, userController.getUsers)

//get user
router.get('/:id', authMiddleware.authenticate, authMiddleware.userDataUpdateByCreatedUser, userController.getUser)

// update user
router.put('/:id', authMiddleware.authenticate, authMiddleware.userDataUpdateByCreatedUser, userController.updateUser)

// delete 
router.delete('/:id', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, userController.deleteUser)

// get user stats
router.get('/status', authMiddleware.authenticate, authMiddleware.adminOnlyCheck, userController.getUserStatus)


module.exports = router