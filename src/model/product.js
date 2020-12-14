const connection = require('../config/mysql.js')
module.exports = {
  getProduct: (orderBy, limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT product_id, product_name, category_name, product_price, product_created_at, product_updated_at FROM product JOIN category ON product.category_id=category.category_id WHERE product_status = 1 ORDER BY ${orderBy} ASC LIMIT ${limit} OFFSET ${offset}`, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getProductById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT product_id, product_name, category_name, product_price, product_created_at, product_updated_at FROM product JOIN category ON product.category_id=category.category_id WHERE product_status=1 AND product_id=?', id, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  searchByName: (name) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT product_id, product_name, category_name, product_price, product_created_at, product_updated_at FROM product JOIN category ON product.category_id=category.category_id WHERE product_status=1 AND product_name LIKE '%${name}%'`, (error, result) => {
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
      connection.query('SELECT COUNT(*) AS total FROM product', (error, result) => {
        if (!error) {
          resolve(result[0].total)
        } else {
          reject(error)
        }
      })
    })
  },
  postProduct: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO product SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            product_id: result.insertId, ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  patchProduct: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE product SET ? WHERE product_id=${id}`, setData, (error, result) => {
        if (!error) {
          const newResult = {
            product_id: id,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE product SET product_status=0 WHERE product_id=${id}`, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  }
}
