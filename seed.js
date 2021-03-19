require('./connection.js')
let mongoose = require('mongoose')
let charJson = require('./chars.json')
let Character = require('./things/charModel.js')

Character
  .deleteMany({})
  .then(()=> Character.create(charJson))
  .then(mongoose.disconnect)
  .then(()=> console.log('seeding done!'))