const jwt = require('jsonwebtoken')
const helper = require('../helper/response.js')
module.exports = {
  isUser: (request, response, next) => {
    let token = request.headers.authorization
    console.log(token)
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.ACCESS_USER, (error, result) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')
        ) {
          console.log(error)
          return helper.response(response, 400, error.message)
        } else {
          // console.log(result)
          // request.token = result
          next()
        }
      })
    } else {
      return helper.response(response, 400, 'Please Login First! Soale token kosong header gabawa token')
    }
  },
  isAdmin: (request, response, next) => {
    let token = request.headers.authorization
    console.log(token)
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.ACCESS_ADMIN, (error, result) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')
        ) {
          console.log(error)
          return helper.response(response, 400, error.message)
        } else {
          // console.log(result)
          // request.token = result
          next()
        }
      })
    } else {
      return helper.response(response, 400, 'Please Login First! Soale token kosong header gabawa token')
    }
  }
}
