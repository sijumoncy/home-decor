const router = require('express').Router()
const fileController = require('../../controllers/file.controller')

//get product file
router.get('/:filename',  fileController.getProductImage)


module.exports = router