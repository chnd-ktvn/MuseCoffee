const connection = require('../config/mysql.js')
module.exports = {
  getCategory: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM category', (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}
