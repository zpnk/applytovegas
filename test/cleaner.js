var db = require('../db')

module.exports.tables = function(tables) {
  var list = '"' + tables.join('","') + '"'
  return db.raw('truncate table '+ list +' restart identity cascade').return()
}
