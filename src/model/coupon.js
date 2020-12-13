const connection = require('../config/mysql.js')
module.exports = {
  getCoupon: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM coupon', (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  }
}
