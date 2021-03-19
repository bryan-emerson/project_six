let express = require('express')
let router = new express.Router()

let controller = require('./controller')

router.get('/', controller.readAll)
router.get('/:id', controller.readById)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.destroy)


//sample dummy route for checking out route
// router.get('/', (req, res)=> {res.json({message: "hitting things index"})})


module.exports = router