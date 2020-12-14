const connection = require('../config/mysql.js')
module.exports = {
  getSize: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM size', (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}
