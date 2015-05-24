var Candidate = require('../models/candidate')

module.exports = {

  new: function(req, res) {
    res.render('candidates', {title: 'Candidates - '})
  },

  create: function(req, res) {
    Candidate.create(req.body)
      .then(function(candidate) {
        res.status(201)
        res.send(candidate)
      })
      .catch(function(errors) {
        res.status(422)
        res.send(errors)
      })
  }

}
