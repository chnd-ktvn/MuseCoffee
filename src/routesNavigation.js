const router = require('express').Router()
const product = require('./routes/product.js')
const category = require('./routes/category')
const coupon = require('./routes/coupon.js')
const history = require('./routes/history.js')
const detailHistory = require('./routes/detailHistory.js')
const size = require('./routes/size.js')

router.use('/product', product)
router.use('/category', category)
router.use('/coupon', coupon)
router.use('/history', history)
router.use('/detail', detailHistory)
router.use('/size', size)

module.exports = router
