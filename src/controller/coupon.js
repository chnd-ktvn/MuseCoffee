const { getCoupon, postCoupon, getCouponById, patchCoupon, deleteCoupon } = require('../model/coupon.js')
const helper = require('../helper/response.js')
module.exports = {
  getCoupon: async (request, response) => {
    try {
      const result = await getCoupon()
      console.log(result)
      return helper.response(response, 200, 'Success Get Coupon', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  // ["250", "300", "500"]
  postCoupon: async (request, response) => {
    try {
      const {
        product_id,
        coupon_code,
        coupon_disc,
        coupon_status
      } = request.body
      const setData = {
        product_id,
        coupon_code,
        coupon_disc,
        coupon_created_at: new Date(),
        coupon_status
      }
      const result = await postCoupon(setData)
      return helper.response(response, 200, 'Success Post Coupon', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getCouponById: async (request, response) => {
    try {
      const { id } = request.params
      const result = await getCouponById(id)
      if (result.length > 0) {
        return helper.response(response, 200, 'Success Get Coupon By Id', result)
      } else {
        return helper.response(response, 404, `Coupon By Id ${id} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  patchCoupon: async (request, response) => {
    try {
      const { id } = request.params
      const {
        product_id,
        coupon_code,
        coupon_disc,
        coupon_status
      } = request.body
      const setData = {
        product_id,
        coupon_code,
        coupon_disc,
        coupon_updated_at: new Date(),
        coupon_status
      }
      const checkId = await getCouponById(id)
      if (checkId.length > 0) {
        const result = await patchCoupon(setData, id)
        return helper.response(response, 200, 'Success patch product by id', result)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  deleteCoupon: async (request, response) => {
    try {
      const { id } = request.params
      const result = await deleteCoupon(id)
      if (result.length > 0) {
        return helper.response(response, 200, 'Success', result)
      } else {
        return helper.response(response, 404, `Coupon By Id : ${id} Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
