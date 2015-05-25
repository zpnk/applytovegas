var db  = require('../db')
var joi = require('joi')

var schema = joi.object().keys({
  name: joi.string().min(3).max(50),
  email: joi.string().email(),
  role_id: joi.number().integer().required(),
  about: joi.string().min(50).max(200),
  resume: joi.string().uri(),
  links: joi.array().items(joi.string().uri())
}).options({
  abortEarly: false
})

var Candidate = {

  find: function(ids) {
    return db.select('candidates.*', 'roles.title as role')
      .from('candidates')
      .innerJoin('roles', 'roles.id', 'candidates.role_id')
      .whereIn('candidates.id', ids)
      .then(function(rows) {
        if (Array.isArray(ids)) return rows
        else return rows[0]
      })
  },

  create: function(candidate) {
    if (error = schema.validate(candidate).error) return Promise.reject(error)

    return db.insert(candidate).into('candidates').returning('*')
      .then(function(rows) {
        return rows[0]
      })
  }

}

module.exports = Candidate
