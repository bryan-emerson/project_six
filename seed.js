require('./connection.js')
let mongoose = require('mongoose')
let charJson = require('./chars.json')
let charModel = require('./charModel.js')

charModel
  .deleteMany({})
  .then(()=> charModel.create(charJson))
  .then(mongoose.disconnect)
  .then(()=> console.log('seeding done!'))