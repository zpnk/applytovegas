var router     = require('express').Router()
var pages      = require('../controllers/pages')
var companies  = require('../controllers/companies')
var candidates = require('../controllers/candidates')

router.get('/', pages.home)
router.get('/companies', companies.new)
router.get('/candidates', candidates.new)

module.exports = router
