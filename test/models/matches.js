var Matches = require.main.require('models/matches')

describe('Matches', function() {

  describe('.all', function() {

    it('should return matches with all related data', function() {
      return Matches.all()
        .then(function(matches) {
          matches[0].company.should.be.an.Object
          matches[0].candidates.should.be.an.Array
          matches[0].candidates[0].should.be.an.Object
        })
    })

  })

})
