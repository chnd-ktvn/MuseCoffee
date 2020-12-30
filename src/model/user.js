const connection = require('../config/mysql.js')
module.exports = {
  registerUser: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            user_id: result.insertId,
            ...setData
          }
          delete newResult.user_pasword
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  checkEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT user_id, user_name, user_email, user_password, user_role FROM user WHERE user_email = ? ', email, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  EditUserProfile: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE user SET ? WHERE user_id=${id}`,
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              user_id: id,
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
  getUserId: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM user WHERE user_id=${id}`, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(error)
        }
      })
    })
  },
  getPhotoUser: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT photo AS photo FROM user WHERE user_id=${id}`,
        (error, result) => {
          if (!error) {
            resolve(result[0].photo)
          } else {
            reject(error)
          }
        }
      )
    })
  }
}
