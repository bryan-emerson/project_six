let express = require('express')
let thingRouter = require('./things/router')

let router = new express.Router()
router.use('/things', thingRouter)

module.exports = router