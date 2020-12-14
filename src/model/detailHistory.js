const connection = require('../config/mysql.js')
module.exports = {
  getDetailHistory: () => {
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
  deleteDetailHistory: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM detail_history WHERE detail_history_id=?', id, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}
