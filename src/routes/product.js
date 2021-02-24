const router = require('express').Router()
const { getProduct, getProductById, getProductByCategory, getAllProducts, getProductByIdAdm, searchByName, getProductByCategoryAdm, postProduct, patchProduct, deleteProduct } = require('../controller/product.js')
const { authorization, isAdmin } = require('../middleware/auth.js')
const { getProductRedis, getAllProductsRedis, getProductByIdRedis, getProductByIdAdmRedis, getProductByCategoryRedis, getProductByCategoryAdmRedis, clearDataProductRedis } = require('../middleware/redis')

const { uploadImage, updateImage } = require('../middleware/productMulter')

router.get('/', getProductRedis, getProduct)
router.get('/all/', getAllProductsRedis, getAllProducts)
router.get('/category/', getProductByCategoryRedis, getProductByCategory)
router.get('/category/adm', getProductByCategoryAdmRedis, getProductByCategoryAdm)
router.get('/searchByName/', searchByName)
router.get('/:id', getProductByIdRedis, getProductById)
router.get('/adm/:id', getProductByIdAdmRedis, getProductByIdAdm)
router.post('/', authorization, isAdmin, uploadImage, clearDataProductRedis, postProduct)
router.patch('/:id', authorization, isAdmin, updateImage, clearDataProductRedis, patchProduct)
router.patch('/deleteProduct/:id', authorization, isAdmin, updateImage, clearDataProductRedis, deleteProduct)

module.exports = router
