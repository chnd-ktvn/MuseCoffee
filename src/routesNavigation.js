const router = require('express').Router()
const product = require('./routes/product.js')
const category = require('./routes/category')
const coupon = require('./routes/coupon.js')
// const history = require('./routes/history.js')

router.use('/product', product)
router.use('/category', category)
router.use('/coupon', coupon)
// router.use('/history', history)

module.exports = router
