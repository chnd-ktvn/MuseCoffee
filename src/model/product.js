const connection = require('../config/mysql.js')
// module.exports = {
//   getProductModel: () => {
//     return new Promise((resolve, reject) => {
//       connection.query('SELECT * FROM product'),
//       (error, result) => {
//         // console.log(error)
//         //  console.log(result)
//         // !error ? resolve(result) : reject(new Error(error))
//         if (!error) {
//           console.log(result)
//           resolve(result)
//         } else {
//           console.log('error di model')
//           reject(new Error(error))
//         }
//       }
//     })
//   }
// }
module.exports = {
  getProduct: (orderBy, limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT product_id, product_name, category_name, product_price, product_created_at, product_updated_at FROM product JOIN category ON product.category_id=category.category_id WHERE product_status = 1 ORDER BY ? ASC LIMIT ? OFFSET ?', [orderBy, limit, offset], (error, result) => {
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
  }
  // postProduct: (setData) => {
  //   return new Promise((re))
  // }
}
