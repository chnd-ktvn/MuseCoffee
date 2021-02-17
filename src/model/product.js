const connection = require('../config/mysql.js')
module.exports = {
  getProduct: (orderBy, limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT product_id, category_name, product_name, photo, product_price, product_size, product_detail, start_delivery_hour, end_delivery_hour, stock_product, delivery_methods, is_food, product_created_at, product_updated_at, product_status FROM product JOIN category ON product.category_id=category.category_id WHERE product_status=1 ORDER BY ${orderBy} ASC LIMIT ${limit} OFFSET ${offset}`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  getAllProducts: (orderBy, limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT product_id, category_name, product_name, photo, product_price, product_size, product_detail, start_delivery_hour, end_delivery_hour, stock_product, delivery_methods, is_food, product_created_at, product_updated_at, product_status FROM product JOIN category ON product.category_id=category.category_id ORDER BY ${orderBy} ASC LIMIT ${limit} OFFSET ${offset}`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  getProductById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT product.product_id, product_name, category_name, coupon_code, product_price, photo, product_size, start_delivery_hour, end_delivery_hour, stock_product, delivery_methods, is_food, product_detail, product_created_at, product_updated_at FROM product INNER JOIN category USING (category_id) LEFT JOIN coupon USING (coupon_id) WHERE product_status=1 AND product.product_id=${id}`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getProductByIdAdm: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT product.product_id, product_name, category_id,category_name, coupon_code, product_price, photo, product_size, start_delivery_hour, end_delivery_hour, stock_product, delivery_methods, is_food, product_detail, product_created_at, product_updated_at, product_status FROM product INNER JOIN category USING (category_id) LEFT JOIN coupon USING (coupon_id) WHERE product.product_id=${id}`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getProductByCategory: (categoryId, orderBy, limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT product_id, category_name, product_name, photo, product_price, product_size, product_detail, start_delivery_hour, end_delivery_hour, stock_product, delivery_methods, is_food, product_created_at, product_updated_at, product_status FROM product JOIN category ON product.category_id=category.category_id WHERE product_status=1 AND category.category_id=${categoryId} ORDER BY ${orderBy} ASC LIMIT ${limit} OFFSET ${offset}`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getProductByCategoryAdm: (categoryId, orderBy, limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT product_id, category_name, product_name, photo, product_price, product_size, product_detail, start_delivery_hour, end_delivery_hour, stock_product, delivery_methods, is_food, product_created_at, product_updated_at, product_status FROM product JOIN category ON product.category_id=category.category_id WHERE category.category_id=${categoryId} ORDER BY ${orderBy} ASC LIMIT ${limit} OFFSET ${offset}`,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  searchByName: (name, orderBy, limit, offset) => { // categoryId,
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT product_id, category_name, product_name, photo, product_price,product_size, product_detail, start_delivery_hour, end_delivery_hour, stock_product, delivery_methods, is_food, product_created_at, product_updated_at, product_status FROM product JOIN category ON product.category_id=category.category_id WHERE product_status=1 AND product_name LIKE '%${name}%' ORDER BY ${orderBy} ASC LIMIT ${limit} OFFSET ${offset}`,
        (error, result) => { //   AND category.category_id=${categoryId}
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getProductId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM product WHERE product_id=${id}`, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  checkProductName: (product_name) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM product WHERE product_name= ?', product_name, (error, result) => {
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
      connection.query(
        'SELECT COUNT(*) AS total FROM product WHERE product_status=1',
        (error, result) => {
          if (!error) {
            resolve(result[0].total)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getAllProductCount: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) AS total FROM product',
        (error, result) => {
          if (!error) {
            resolve(result[0].total)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getProductCountByCategory: (categoryId) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) AS total FROM product WHERE product_status=1 AND category_id=?', categoryId,
        (error, result) => {
          if (!error) {
            resolve(result[0].total)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getProductCountBySearchName: (name) => {
    return new Promise((resolve, reject) => { //  categoryId,
      connection.query(
        `SELECT COUNT(*) AS total FROM product WHERE product_status=1 AND product_name LIKE '%${name}%'`,
        (error, result) => { // AND category_id=?
          if (!error) {
            resolve(result[0].total)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  getPhotoProduct: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT photo AS photo FROM product WHERE product_id=${id}`,
        (error, result) => {
          if (!error) {
            resolve(result[0].photo)
          } else {
            reject(error)
          }
        }
      )
    })
  },
  postProduct: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO product SET ?',
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              product_id: result.insertId,
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  patchProduct: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE product SET ? WHERE product_id=${id}`,
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              product_id: id,
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  deleteProduct: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE product SET ? WHERE product_id=${id}`, setData,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        }
      )
    })
  }
}
