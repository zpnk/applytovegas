var db = require('../db')
var Company = require('./company')
var Candidate = require('./candidate')

var Matches = {

  all: function() {
    return db.select().from('matches')
      // {company:1, candidates:[1,2]} -> {company:{..}, candidates:[{..}, {..}]
      .map(function(match) {
        var matchInfo = {}
        return Company.find(match.company)
          .then(function(company) {
            matchInfo.company = company;
            return Candidate.find(match.candidates)
          })
          .then(function(candidates) {
            matchInfo.candidates = candidates;
            return matchInfo
          })
      })
  }

}

module.exports = Matches
