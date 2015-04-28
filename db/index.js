var knex = require('knex')
var config = {
  client: 'postgres',
  connection: process.env.DATABASE_URL || 'postgres:///applytovegas_dev'
}

var db = knex(config)

module.exports = db
module.exports.close = db.destroy
