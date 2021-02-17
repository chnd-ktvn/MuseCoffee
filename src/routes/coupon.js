const router = require('express').Router()
const { getCoupon, getCouponAdm, postCoupon, getCouponById, getCouponByIdAdm, patchCoupon, deleteCoupon } = require('../controller/coupon.js')
const { authorization, isAdmin } = require('../middleware/auth.js')
const { getAllCouponsRedis, getCouponByIdRedis, getCouponByIdAdmRedis, clearDataCouponRedis } = require('../middleware/redis')
// getCouponRedis,

router.get('/', getCoupon)
router.get('/adm', getAllCouponsRedis, getCouponAdm)
router.get('/:id', getCouponByIdRedis, getCouponById)
router.get('/adm/:id', getCouponByIdAdmRedis, getCouponByIdAdm)
router.post('/', authorization, isAdmin, clearDataCouponRedis, postCoupon)
router.patch('/:id', authorization, isAdmin, clearDataCouponRedis, patchCoupon)
router.patch('/deleteCoupon/:id', authorization, isAdmin, clearDataCouponRedis, deleteCoupon)

module.exports = router
