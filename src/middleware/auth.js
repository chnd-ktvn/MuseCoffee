const jwt = require('jsonwebtoken')
const helper = require('../helper/response.js')
module.exports = {
  authorization: (request, response, next) => {
    let token = request.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, 'ACCESS', (error, result) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')
        ) {
          console.log(error)
          return helper.response(response, 403, error.message)
        } else {
          request.token = result
          next()
        }
      })
    } else {
      return helper.response(response, 403, 'Please Login First!')
    }
  },
  isAdmin: (request, response, next) => {
    if (request.token.user_role === 2) {
      next()
    } else {
      return helper.response(response, 403, "You aren't authorized!")
    }
  },
  isUser: (request, response, next) => {
    if (request.token.user_role === 1) {
      next()
    } else {
      return helper.response(response, 403, "You aren't authorized!")
    }
  }
}
