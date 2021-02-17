const redis = require('redis')
const client = redis.createClient()
const helper = require('../helper/response')
module.exports = {
  getProductRedis: (request, response, next) => {
    client.get(`getproduct:${JSON.stringify(request.query)}`, (error, result) => {
      if (!error && result != null) {
        const newResult = JSON.parse(result)
        return helper.response(response, 200, 'Success Get All Products', newResult.result, newResult.pageInfo)
      } else {
        next()
      }
    })
  },
  getAllProductsRedis: (request, response, next) => {
    client.get(`getproducts:${JSON.stringify(request.query)}`, (error, result) => {
      if (!error && result != null) {
        const newResult = JSON.parse(result)
        return helper.response(response, 200, 'Success Get All Products', newResult.result, newResult.pageInfo)
      } else {
        next()
      }
    })
  },
  getProductByIdRedis: (request, response, next) => {
    const { id } = request.params
    client.get(`getproductbyid:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(response, 200, 'Success Get Product By Id', JSON.parse(result))
      } else {
        next()
      }
    })
  },
  getProductByIdAdmRedis: (request, response, next) => {
    const { id } = request.params
    client.get(`getproductbyidadm:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(response, 200, 'Success Get Product By Id', JSON.parse(result))
      } else {
        next()
      }
    })
  },
  getProductByCategoryRedis: (request, response, next) => {
    client.get(`getproductbycategory:${JSON.stringify(request.query)}`, (error, result) => {
      if (!error && result != null) {
        const newResult = JSON.parse(result)
        return helper.response(response, 200, 'Success Get Product By Category', newResult.result, newResult.pageInfo)
      } else {
        next()
      }
    })
  },
  getProductByCategoryAdmRedis: (request, response, next) => {
    client.get(`getproductbycategoryadm:${JSON.stringify(request.query)}`, (error, result) => {
      if (!error && result != null) {
        const newResult = JSON.parse(result)
        return helper.response(response, 200, 'Success Get Product By Category', newResult.result, newResult.pageInfo)
      } else {
        next()
      }
    })
  },
  getProductBySearchRedis: (request, response, next) => {
    client.get(`getproductbysearch:${JSON.stringify(request.query)}`, (error, result) => {
      if (!error && result != null) {
        const newResult = JSON.parse(result)
        return helper.response(response, 200, 'Success Get Product By Search', newResult.result, newResult.pageInfo)
      } else {
        next()
      }
    })
  },
  clearDataProductRedis: (request, response, next) => {
    client.keys('getproduct*', (_error, result) => {
      if (result.length > 0) {
        result.forEach((value) => {
          client.del(value)
        })
      }
      next()
    })
  },
  getCouponRedis: (request, response, next) => {
    client.get('getcoupon', (error, result) => {
      if (!error && result != null) {
        const newResult = JSON.parse(result)
        return helper.response(response, 200, 'Success Get Coupons', newResult)
      } else {
        next()
      }
    })
  },
  getAllCouponsRedis: (request, response, next) => {
    client.get('getcoupons', (error, result) => {
      if (!error && result != null) {
        const newResult = JSON.parse(result)
        return helper.response(response, 200, 'Success Get All Coupons', newResult)
      } else {
        next()
      }
    })
  },
  getCouponByIdRedis: (request, response, next) => {
    const { id } = request.params
    client.get(`getcouponbyid:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(response, 200, 'Success Get Coupon By Id', JSON.parse(result))
      } else {
        next()
      }
    })
  },
  getCouponByIdAdmRedis: (request, response, next) => {
    const { id } = request.params
    client.get(`getcouponbyidadm:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(response, 200, 'Success Get Coupon By Id', JSON.parse(result))
      } else {
        next()
      }
    })
  },
  clearDataCouponRedis: (request, response, next) => {
    client.keys('getcoupon*', (_error, result) => {
      if (result.length > 0) {
        result.forEach((value) => {
          client.del(value)
        })
      }
      next()
    })
  },
  getCategoryRedis: (request, response, next) => {
    client.get('getcategory', (error, result) => {
      if (!error && result != null) {
        const newResult = JSON.parse(result)
        return helper.response(response, 200, 'Success Get Category', newResult)
      } else {
        next()
      }
    })
  }
}
