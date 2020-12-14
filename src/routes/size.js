const router = require('express').Router()
const { getSize } = require('../controller/size.js')
router.get('/', getSize)
module.exports = router
