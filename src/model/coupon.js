const connection = require('../config/mysql.js')
module.exports = {
  getCoupon: (date) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT coupon.coupon_id, product.product_name, product.photo, product.product_price, product.product_size, product.delivery_methods, coupon_code, coupon_disc, coupon_detail, coupon_background_color, coupon_valid_start, coupon_valid_end, coupon_created_at, coupon_updated_at, coupon_status FROM coupon JOIN product ON coupon.product_id=product.product_id WHERE coupon_status = 1 AND DATEDIFF(coupon_valid_end, ?) BETWEEN 0 AND DATEDIFF( coupon_valid_end, coupon_valid_start)', date, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  getAllCoupons: (date) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT coupon.coupon_id, product.product_name, product.photo, product.product_price, product.product_size, product.delivery_methods, coupon_code, coupon_disc, coupon_detail, coupon_background_color, coupon_valid_start, coupon_valid_end, coupon_created_at, coupon_updated_at, coupon_status FROM coupon JOIN product ON coupon.product_id=product.product_id WHERE DATEDIFF(coupon_valid_end, ?) BETWEEN 0 AND DATEDIFF( coupon_valid_end, coupon_valid_start)', date, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  postCoupon: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO coupon SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            coupon_id: result.insertId, ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getCouponById: (date, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT coupon.coupon_id, product.product_name, product.photo, product.product_price, product.product_size, product.delivery_methods, coupon_code, coupon_disc, coupon_detail, coupon_background_color, coupon_valid_start, coupon_valid_end, coupon_created_at, coupon_updated_at, coupon_status FROM coupon JOIN product ON coupon.product_id=product.product_id WHERE coupon_status = 1 AND DATEDIFF(coupon_valid_end, ?) BETWEEN 0 AND DATEDIFF( coupon_valid_end, coupon_valid_start) AND coupon.coupon_id=${id}`, date, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  getCouponByIdAdm: (date, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT coupon.coupon_id, product.product_name, product.photo, product.product_price, product.product_size, product.delivery_methods, coupon_code, coupon_disc, coupon_detail, coupon_background_color, coupon_valid_start, coupon_valid_end, coupon_created_at, coupon_updated_at, coupon_status FROM coupon JOIN product ON coupon.product_id=product.product_id WHERE DATEDIFF(coupon_valid_end, ?) BETWEEN 0 AND DATEDIFF( coupon_valid_end, coupon_valid_start) AND coupon.coupon_id=${id}`, date, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  getCouponId: (date, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM coupon WHERE DATEDIFF(coupon_valid_end, ?) BETWEEN 0 AND DATEDIFF( coupon_valid_end, coupon_valid_start) AND coupon_id=${id}`, date, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  patchCoupon: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE coupon SET ? WHERE coupon_id=${id}`, setData, (error, result) => {
        if (!error) {
          const newResult = {
            coupon_id: id,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  deleteCoupon: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE coupon SET ? WHERE coupon_id=${id}`, setData, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  }
}
