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
  getHistoryByIdUser: (user_id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM history WHERE history_deleted=0 AND user_id=${user_id}`, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  getHistoryUserById: (user_id, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM history WHERE history_deleted=0 AND user_id=${user_id} AND history_id=${id}`, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  getHistoryId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM history WHERE history_checked = 1 AND history_id=${id}`, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getInvoiceCount: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(history_total) AS total FROM history',
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
  postHistory: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO history SET ?', setData, (error, result) => {
        console.log(error)
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
  deleteHistory: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE history SET ? WHERE history_id=${id}`, setData, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  getTodayIncome: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT SUM(history_subtotal) AS total_price  FROM history WHERE DATE(history_created_at) = DATE(NOW())', (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  getYearIncome: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT SUM(history_subtotal) AS total_price FROM history WHERE YEAR(history_checked_at) = YEAR(NOW()) GROUP BY YEAR (history_checked_at)', (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  }
}
