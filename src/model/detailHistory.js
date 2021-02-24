const connection = require('../config/mysql.js')
module.exports = {
  getDetailHistory: () => {
    // SELECT detail_history_id, qty, status, product_name, product_price FROM detail_history LEFT JOIN history USING (history_id) LEFT JOIN product USING (product_id)
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM detail_history', (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  postDetailHistory: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO detail_history SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            detail_history_id: result.insertId, ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getDetailHistoryId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM detail_history WHERE history_id=${id}`, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  deleteDetailHistory: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE detail_history SET ? WHERE detail_history_id=${id}`, setData, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}
