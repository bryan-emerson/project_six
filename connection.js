const mongoose = require('mongoose');
let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect('mongodb://localhost/characterdb', mongooseConnectionConfig);

mongoose.connection.on('connected', ()=> console.log("connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))
module.exports = mongoose;