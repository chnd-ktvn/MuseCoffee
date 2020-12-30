const router = require('express').Router()
const { getCategory } = require('../controller/category.js')
const { getCategoryRedis } = require('../middleware/redis')
router.get('/', getCategoryRedis, getCategory)
module.exports = router
