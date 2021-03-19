const mongoose = require('mongoose');
let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }

let connectionString = ""
if(process.env.NODE_ENV === "production"){
  connectionString = process.env.DB_URL
} else {
  connectionString = "mongodb://localhost/characterdb"
}

mongoose.connect(connectionString, mongooseConnectionConfig);



mongoose.connection.on('connected', ()=> console.log("connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))
module.exports = mongoose;