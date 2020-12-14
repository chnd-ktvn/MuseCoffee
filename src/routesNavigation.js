const router = require('express').Router()
const product = require('./routes/product.js')
const category = require('./routes/category')
const coupon = require('./routes/coupon.js')
const history = require('./routes/history.js')
const detailHistory = require('./routes/detailHistory.js')

router.use('/product', product)
router.use('/category', category)
router.use('/coupon', coupon)
router.use('/history', history)
router.use('/detail', detailHistory)

module.exports = router
