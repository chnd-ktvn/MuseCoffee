const router = require('express').Router()
const { getCoupon, getCouponAdm, postCoupon, getCouponById, getCouponByIdAdm, patchCoupon, deleteCoupon } = require('../controller/coupon.js')
const { isAdmin } = require('../middleware/auth.js')

router.get('/', getCoupon)
router.get('/adm', isAdmin, getCouponAdm)
router.get('/:id', getCouponById)
router.get('/adm/:id', isAdmin, getCouponByIdAdm)
router.post('/', isAdmin, postCoupon)
router.patch('/:id', isAdmin, patchCoupon)
router.patch('/deleteCoupon/:id', isAdmin, deleteCoupon)

module.exports = router
