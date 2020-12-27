const connection = require('../config/mysql.js')
module.exports = {
  getCategory: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM category', (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getProductByCategory: (categoryId, orderBy, limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT product_id, product_name, category_name, product_price, product_created_at, product_updated_at FROM product JOIN category ON product.category_id=category.category_id WHERE product_status=1 AND category.category_id=${categoryId} ORDER BY ${orderBy} ASC LIMIT ${limit} OFFSET ${offset}`, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  getProductCount: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT COUNT(*) AS total FROM product WHERE product_status=1', (error, result) => {
        if (!error) {
          resolve(result[0].total)
        } else {
          reject(error)
        }
      })
    })
  }
}
