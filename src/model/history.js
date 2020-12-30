const connection = require('../config/mysql.js')
module.exports = {
  getHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT history_id, history_invoice, history_subtotal,payment_method, history_checked, history_created_at, user_delivery_address, user_phone_number FROM history JOIN user ON history.user_id=user.user_id WHERE history_checked=1', (error, result) => {
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
        'SELECT COUNT(history_subtotal) AS total FROM history',
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
