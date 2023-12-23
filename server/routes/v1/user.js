const router = require('express').Router()

router.get('/', (req, res) => {
    console.log("in user get ");
    res.send("user get api hit")
})


module.exports = router