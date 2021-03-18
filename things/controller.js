let Character = require('./charModel')

let controller = {
  create(request, response){
    let character = request.body
    Character
      .create(character)
      .then(character=> response.json(character))
  },
  readById(request, response){
    let id = request.params.id
    Character
      .findById(id)
      .then(characters=> response.json(characters))
  },
  readAll(request, response){
    Character
      .find({})
      .then(characters=> response.json(characters))
  },
  update(request, response) {
    let bookmark = request.body
    let id = request.params.id
    Character
      .findByIdAndUpdate(id, bookmark, {new: true})
      .then(character=> response.json(character))

  },
  destroy(request, response){
    let id = request.params.id
    Character
      .findByIdAndDelete(id)
      .then(()=> response.json({ok: true}))
  }
}

module.exports = controller