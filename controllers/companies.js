var Company = require('../models/company')

module.exports = {

  new: function(req, res) {
    res.render('companies')
  },

  create: function(req, res) {
    Company.create(req.body)
      .then(function(company) {
        res.status(201)
        res.send(company)
      })
      .catch(function(errors) {
        res.status(422)
        res.send(errors)
      })
  }

}
