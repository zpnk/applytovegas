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

    it('should return multiple candidates', function() {
      return Candidate.find([1,2])
        .then(function(candidates) {
          candidates.should.be.an.Array
          candidates[0].id.should.equal(1)
          candidates[1].id.should.equal(2)
        })
    })

  })

  describe('.create', function() {

    it('should fail if validations do not pass', function() {
      return Candidate.create({})
        .catch(function(error) {
          error.message.should.match(/required/)
        })
    })

    it('should fail if email is duplicate', function() {
      return Candidate.create(fixtures.candidate(1))
        .catch(function(error) {
          error.message.should.match(/duplicate/)
        })
    })

    it('should save the candidate', function() {
      return Candidate.create(fixtures.candidate(2))
        .then(function(candidate) {
          candidate.should.have.property('created_at')
        })
    })

  })

})
