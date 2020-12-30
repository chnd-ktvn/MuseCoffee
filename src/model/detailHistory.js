const connection = require('../config/mysql.js')
module.exports = {
  getDetailHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT detail_history_id, qty, status, product_name, product_price FROM detail_history LEFT JOIN history USING (history_id) LEFT JOIN product USING (product_id)', (error, result) => {
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
  getHistoryDetailId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM detail_history WHERE status = 1 AND detail_history_id=${id}`, (error, result) => {
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
