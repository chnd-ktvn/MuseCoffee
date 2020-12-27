const jwt = require('jsonwebtoken')
const helper = require('../helper/response.js')
module.exports = {
  authorization: (request, response, next) => {
    let token = request.headers.authorization
    console.log(token)
    // roses 1 check apakah headers dimasukkan?
    if (token) {
      // biar tulisan bearer dibuang ngambil tulisan
      // kata kunci harus sama
      token = token.split(' ')[1]
      // ngecek token yang dibawa user
      jwt.verify(token, 'MUSECOFFEE', (error, result) => {
        // error yg pertama jika token error atau nama nya salah
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')
        // ChandChand10?
        // ChandChand10?
        ) {
          // mnghnadle error
          console.log(error)
          return helper.response(response, 400, error.message)
        } else {
          // proses pengecekan role
          console.log(result)
          request.token = result
          // kalo ga error lanjoot
          next()
        }
      })
    } else {
      return helper.response(response, 400, 'Please Login First! Soale token kosong header gabawa token')
    }
  }
}
