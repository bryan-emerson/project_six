let fetch = require('node-fetch')
let fs = require('fs').promises

let url = 'https://www.swapi.tech/api/people/'

fetch(url)
  .then(response=>response.json())
  .then(data=> fs.writeFile("./chars.json", JSON.stringify(data)))
  .then(()=> console.log("done w/ url fetch!"))
  //more functions?
  .catch(error=> console.error(error))