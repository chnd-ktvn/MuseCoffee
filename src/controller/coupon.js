const { getCoupon, getAllCoupons, postCoupon, getCouponById, getCouponByIdAdm, getCouponId, patchCoupon, deleteCoupon } = require('../model/coupon.js')
const helper = require('../helper/response.js')
module.exports = {
  getCoupon: async (request, response) => {
    try {
      const data = new Date()
      const result = await getCoupon(data)
      if (result.length > 0) {
        return helper.response(response, 200, 'Success Get Coupon', result)
      } else {
        return helper.response(response, 404, 'No data or Coupons are Invalid!')
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getCouponAdm: async (request, response) => {
    try {
      const data = new Date()
      const result = await getAllCoupons(data)
      if (result.length > 0) {
        return helper.response(response, 200, 'Success Get Coupon', result)
      } else {
        return helper.response(response, 404, 'Coupons are invalid!')
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  postCoupon: async (request, response) => {
    try {
      const {
        product_id, coupon_code, coupon_disc, coupon_detail, coupon_background_color, coupon_valid_start, coupon_valid_end
      } = request.body
      const setData = {
        product_id,
        coupon_code,
        coupon_disc,
        coupon_detail,
        coupon_background_color,
        coupon_valid_start,
        coupon_valid_end,
        coupon_created_at: new Date().toLocaleString(),
        coupon_status: 1
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
      const date = new Date()
      console.log(date)
      const result = await getCouponById(date, id)
      if (result.length > 0) {
        return helper.response(response, 200, `Success Get Coupon By Id ${id}`, result)
      } else {
        return helper.response(response, 404, `Coupon By Id ${id} is Not Found or Invalid Coupon`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getCouponByIdAdm: async (request, response) => {
    try {
      const { id } = request.params
      const date = new Date()
      console.log(date)
      const result = await getCouponByIdAdm(date, id)
      if (result.length > 0) {
        return helper.response(response, 200, `Success Get Coupon By Id ${id}`, result)
      } else {
        return helper.response(response, 404, `Coupon By Id ${id} is Not Found or Invalid Coupon`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  patchCoupon: async (request, response) => {
    try {
      const { id } = request.params
      const {
        product_id, coupon_code, coupon_disc, coupon_detail, coupon_background_color, coupon_valid_start, coupon_valid_end
      } = request.body
      const setData = {
        product_id,
        coupon_code,
        coupon_disc,
        coupon_detail,
        coupon_background_color,
        coupon_valid_start,
        coupon_valid_end,
        coupon_updated_at: new Date().toLocaleString(),
        coupon_status: 1
      }
      const date = new Date()
      const checkId = await getCouponId(date, id)
      if (checkId.length > 0) {
        const result = await patchCoupon(setData, id)
        return helper.response(response, 200, 'Success patch product by id', result)
      } else {
        return helper.response(response, 404, `Id ${id} is Not Found or Invalid Coupon!`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  deleteCoupon: async (request, response) => {
    try {
      const { id } = request.params
      const date = new Date()
      const checkId = await getCouponById(date, id)
      const setData = {
        coupon_status: 0,
        coupon_deleted_at: new Date().toLocaleString()
      }
      if (checkId.length > 0) {
        await deleteCoupon(setData, id)
        return helper.response(response, 200, `Success Delete Coupon By Id ${id}`)
      } else {
        return helper.response(response, 404, `Coupon By Id : ${id} Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
