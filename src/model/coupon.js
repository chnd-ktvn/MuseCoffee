const connection = require('../config/mysql.js')
module.exports = {
  getCoupon: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT coupon.product_id, product_name, photo,coupon.coupon_id, coupon_code, coupon_disc, coupon_detail, coupon_background_color, coupon_created_at, coupon_updated_at, coupon_status FROM coupon JOIN product ON coupon.product_id=product.product_id WHERE coupon_status = 1', (error, result) => {
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
  getCouponById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT coupon_id, product_name, coupon_code, coupon_disc, coupon_created_at FROM coupon JOIN product ON coupon.product_id=product.product_id WHERE coupon_status = 1 AND coupon_id=?', id, (error, result) => {
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
  deleteCoupon: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE coupon SET coupon_status=0 WHERE coupon_id=${id}`, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  }
}
