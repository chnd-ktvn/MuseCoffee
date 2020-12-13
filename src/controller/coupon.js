const { getCoupon } = require('../model/coupon.js')
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
  }
}
