const router = require('express').Router()
const { getCoupon, postCoupon, getCouponById, patchCoupon, deleteCoupon } = require('../controller/coupon.js')
router.get('/', getCoupon)
router.post('/', postCoupon)
router.get('/:id', getCouponById)
router.patch('/:id', patchCoupon)
router.patch('/deleteCoupon/:id', deleteCoupon)

module.exports = router
