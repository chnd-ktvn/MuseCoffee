const connection = require('../config/mysql.js')
module.exports = {
  getHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM history', (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  postHistory: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO history SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            history_id: result.insertId, ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  deleteHistory: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM history WHERE history_id=?', id, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}
