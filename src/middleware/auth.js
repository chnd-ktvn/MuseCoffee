const jwt = require('jsonwebtoken')
const helper = require('../helper/response.js')
// const { getUserId } = require('../model/history')
module.exports = {
  isUser: (request, response, next) => {
    let token = request.headers.authorization
    if (token) {
      token = token.split(' ')[1]
      jwt.verify(token, process.env.ACCESS_USER, (error, result) => {
        if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')
        ) {
          console.log(error)
          return helper.response(response, 400, error.message)
        } else {
          request.token = result
          // console.log(result.user_role)
          // if (result.user_role === 2) {
          next()
          // }



          // console.log(result)
          // request.token = result
          // next()
        }
      })
    } else {
      return helper.response(response, 400, 'Please Login First! Soale token kosong header gabawa token')
    }
  },
  isAdmin: (request, response, next) => {
    console.log(request.token)
    if (request.token.user_role === 2) {
      next()
    }

    // next()
    // let token = request.headers.authorization
    // if (token) {
    //   token = token.split(' ')[1]
    //   jwt.verify(token, process.env.ACCESS_ADMIN, (error, result) => {
    //     if ((error && error.name === 'JsonWebTokenError') || (error && error.name === 'TokenExpiredError')
    //     ) {
    //       console.log(error)
    //       return helper.response(response, 400, error.message)
    //     } else {
    //       request.token = result
    //       console.log(result.user_id)
    //       getUserId(result.user_id)
    //       // return result.user_id
    //       next()
    //     }
    //   })
    // } else {
    //   return helper.response(response, 400, 'Please Login First! Soale token kosong header gabawa token')
    // }
  }
}
