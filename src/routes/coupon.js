const router = require('express').Router()
const { getCoupon, getCouponAdm, postCoupon, getCouponById, getCouponByIdAdm, patchCoupon, deleteCoupon } = require('../controller/coupon.js')
const { authorization, isAdmin } = require('../middleware/auth.js')
const { getCouponRedis, getAllCouponsRedis, getCouponByIdRedis, getCouponByIdAdmRedis, clearDataCouponRedis } = require('../middleware/redis')

router.get('/', getCouponRedis, getCoupon)
router.get('/adm', authorization, isAdmin, getAllCouponsRedis, getCouponAdm)
router.get('/:id', getCouponByIdRedis, getCouponById)
router.get('/adm/:id', authorization, isAdmin, getCouponByIdAdmRedis, getCouponByIdAdm)
router.post('/', authorization, isAdmin, clearDataCouponRedis, postCoupon)
router.patch('/:id', authorization, isAdmin, clearDataCouponRedis, patchCoupon)
router.patch('/deleteCoupon/:id', authorization, isAdmin, clearDataCouponRedis, deleteCoupon)

module.exports = router
