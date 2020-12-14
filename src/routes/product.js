const router = require('express').Router()
const { getProduct, getProductById, searchByName, postProduct, patchProduct, deleteProduct } = require('../controller/product.js')

router.get('/', getProduct)
router.get('/:id', getProductById)
router.get('/searchByName/:name', searchByName)
router.post('/', postProduct)
router.patch('/:id', patchProduct)
router.patch('/deleteProduct/:id', deleteProduct)

module.exports = router
