const connection = require('../config/mysql.js')
module.exports = {
  getHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM history', (error, result) => {
        if (!error) {
          // SELECT SUM(subtotal) AS total_price FROM history WHERE YEAR(history_created_at) = YEAR(NOW()) GROUP BY YEAR (history_created_at)
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
          reject(error)
        }
      })
    })
  },
  getInvoiceCount: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) AS total FROM history',
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
  getUserId: (id) => {
    return new Promise((resolve, reject) => {
      if (id) {
        // SELECT SUM(subtotal) AS total_price FROM history WHERE YEAR(history_created_at) = YEAR(NOW()) GROUP BY YEAR (history_created_at)

        // ini yang ketiga
        // SELECT SUM(history_subtotal) AS total_price FROM history WHERE YEAR(history_created_at) = YEAR(NOW()) GROUP BY YEAR (history_created_at)
        // ini yan gpertama
        // SELECT SUM(history_subtotal) AS total_price FROM history WHERE DAY(history_created_at) = DAY(NOW()) GROUP BY DAY (history_created_at)
        // ini yang kedua
        // 
        console.log(id)
        resolve(id)
      } else {
        reject(new Error())
      }
    })
  }
}
