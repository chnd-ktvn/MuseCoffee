const router = require('express').Router()
const { getProduct, getProductById, getProductByCategory, searchByName, postProduct, patchProduct, deleteProduct } = require('../controller/product.js')
// const { authorization } = require('../middleware/auth.js')
const { getProductRedis, getProductByIdRedis, getProductByCategoryRedis, getProductBySearchRedis, clearDataProductRedis } = require('../middleware/redis')
const { uploadImage, updateImage } = require('../middleware/multer')

// router.get('/', authorization, getProduct)
router.get('/', getProductRedis, getProduct)
router.get('/category/', getProductByCategoryRedis, getProductByCategory)
router.get('/searchByName/', getProductBySearchRedis, searchByName)
router.get('/:id', getProductByIdRedis, getProductById)
router.post('/', uploadImage, clearDataProductRedis, postProduct)
router.patch('/:id', updateImage, clearDataProductRedis, patchProduct)
router.patch('/deleteProduct/:id', updateImage, clearDataProductRedis, deleteProduct)

module.exports = router
