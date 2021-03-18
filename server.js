let app = require('./app')

let express = require('express')
let mongoose = require('mongoose')

app.set("port", process.env.PORT || 9500);
let server = app.listen(app.get("port"))

server.on('listening', ()=> console.log("Server is listening"))
server.on('error', error=> console.error("Server is sad", error))

module.exports = server
