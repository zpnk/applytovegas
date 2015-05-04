var fixtures  = require.main.require('test/fixtures')
var Candidate = require.main.require('models/candidate')

describe('Candidate', function() {

  describe('.find', function() {

    it('should return the candidate with its role', function() {
      return Candidate.find(1)
        .then(function(candidate) {
          candidate.id.should.equal(1)
          candidate.role.should.be.a.String
        })
    })

  })

  describe('.create', function() {

    it('should save the candidate', function() {
      return Candidate.create(fixtures.candidate(2))
        .then(function(candidate) {
          candidate.id.should.equal(2)
        })
    })

  })

})
