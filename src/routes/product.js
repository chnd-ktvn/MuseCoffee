const router = require('express').Router()
const { getProduct, getProductById, searchByName } = require('../controller/product.js')

router.get('/', getProduct)
router.get('/:id', getProductById)
router.get('/searchByName/:name', searchByName)

module.exports = router
