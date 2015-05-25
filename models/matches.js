var db = require('../db')
var Company = require('./company')
var Candidate = require('./candidate')

var Matches = {

  all: function() {
    return db.select().from('matches')
      // {company:1, candidates:[1,2]} -> {company:{..}, candidates:[{..}, {..}]
      .map(function(match) {
        var matchInfo = {}
        return Company.find(match.company_id)
          .then(function(company) {
            matchInfo.company = company;
            return Candidate.find(match.candidate_ids)
          })
          .then(function(candidates) {
            matchInfo.candidates = candidates;
            return matchInfo
          })
      })
  }

}

module.exports = Matches
