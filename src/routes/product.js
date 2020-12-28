const router = require('express').Router()
const { getProduct, getProductById, getProductByCategory, searchByName, postProduct, patchProduct, deleteProduct } = require('../controller/product.js')
const { isAdmin } = require('../middleware/auth.js')
const { getProductRedis, getProductByIdRedis, getProductByCategoryRedis, getProductBySearchRedis, clearDataProductRedis } = require('../middleware/redis')
const { uploadImage, updateImage } = require('../middleware/multer')

router.get('/', getProductRedis, getProduct)
router.get('/category/', getProductByCategoryRedis, getProductByCategory)
router.get('/searchByName/', getProductBySearchRedis, searchByName)
router.get('/:id', getProductByIdRedis, getProductById)
router.post('/', isAdmin, uploadImage, clearDataProductRedis, postProduct)
router.patch('/:id', isAdmin, updateImage, clearDataProductRedis, patchProduct)
router.patch('/deleteProduct/:id', isAdmin, updateImage, clearDataProductRedis, deleteProduct)

module.exports = router
