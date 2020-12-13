const router = require('express').Router()
const { getCategory } = require('../controller/category.js')
router.get('/', getCategory)
module.exports = router
