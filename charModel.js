const mongoose = require('./connection');
const Schema = mongoose.Schema;

const charSchema = new Schema({
  uid: String,
  name: String,
  url: String
});

let charModel = mongoose.model("Character", charSchema)
module.exports = charModel