const router = require('express').Router()
const { getProduct, getProductById, getProductByCategory, getAllProducts, getProductByIdAdm, searchByName, getProductByCategoryAdm, postProduct, patchProduct, deleteProduct } = require('../controller/product.js')
const { isAdmin } = require('../middleware/auth.js')
const { getProductRedis, getAllProductsRedis, getProductByIdRedis, getProductByIdAdmRedis, getProductByCategoryRedis, getProductByCategoryAdmRedis, getProductBySearchRedis, clearDataProductRedis } = require('../middleware/redis')
const { uploadImage, updateImage } = require('../middleware/productMulter')

router.get('/', getProductRedis, getProduct)
router.get('/all', isAdmin, getAllProductsRedis, getAllProducts)
router.get('/category/', getProductByCategoryRedis, getProductByCategory)
router.get('/category/adm', isAdmin, getProductByCategoryAdmRedis, getProductByCategoryAdm)
router.get('/searchByName/', getProductBySearchRedis, searchByName)
router.get('/:id', getProductByIdRedis, getProductById)
router.get('/adm/:id', isAdmin, getProductByIdAdmRedis, getProductByIdAdm)
router.post('/', isAdmin, uploadImage, clearDataProductRedis, postProduct)
router.patch('/:id', isAdmin, updateImage, clearDataProductRedis, patchProduct)
router.patch('/deleteProduct/:id', isAdmin, updateImage, clearDataProductRedis, deleteProduct)

module.exports = router
