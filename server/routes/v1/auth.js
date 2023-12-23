const router = require('express').Router()
const {userRegister} = require('../../controllers/auth.controller')

// Registration
router.post('/register', userRegister)

module.exports = router