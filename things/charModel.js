const mongoose = require('./connection');
const Schema = mongoose.Schema;

const charSchema = new Schema({
  uid: String,
  name: String,
  url: String
});

// let Character = mongoose.model("Character", charSchema)
// module.exports = Character

module.exports = mongoose.model("Character", charSchema);