const router = require('express').Router()
const {userRegister, userLogin} = require('../../controllers/auth.controller')

// Registration
router.post('/register', userRegister)

// login
router.post('/login', userLogin)

module.exports = router