const router = require('express').Router()
const { getCoupon } = require('../controller/coupon.js')
router.get('/', getCoupon)
module.exports = router
