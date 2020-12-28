const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../helper/response.js')
const { registerUser, checkEmail } = require('../model/user.js')
require('dotenv').config()

module.exports = {
  registerUser: async (request, response) => {
    try {
      const { user_name, user_email, user_password, user_phone_number, user_first_name, user_last_name, user_delivery_address, user_date_birth, user_gender } = request.body
      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(user_password, salt)
      const setData = {
        user_name,
        user_email,
        user_role: 1, // 1, 2, 3
        user_password: encryptPassword,
        user_phone_number,
        user_first_name,
        user_last_name,
        photo: request.file === undefined ? '' : request.file.filename,
        user_delivery_address,
        user_date_birth,
        user_gender,
        user_created_at: new Date().toLocaleString(),
        user_status: 1
      }
      const result = await registerUser(setData)
      return helper.response(response, 200, 'Success Register', result)
    } catch (error) {
      return helper.response(response, 400, 'Failed register')
    }
  },
  loginUser: async (request, response) => {
    try {
      const { user_email, user_password } = request.body
      const checkDataUser = await checkEmail(user_email)
      if (checkDataUser.length > 0) {
        const checkPassword = bcrypt.compareSync(user_password, checkDataUser[0].user_password)
        console.log(checkPassword)
        if (checkPassword) {
          const { user_id, user_name, user_email, user_role } = checkDataUser[0]
          if (user_role === 1) {
            const payload = {
              user_id, user_name, user_email, user_role
            }
            const token = jwt.sign(payload, process.env.ACCESS_USER, { expiresIn: '1h' })
            console.log(token)
            const result = { ...payload, token }
            return helper.response(response, 200, 'Success Login', result)
          } else {
            const payload = {
              user_id, user_name, user_email, user_role
            }
            const token = jwt.sign(payload, process.env.ACCESS_ADMIN, { expiresIn: '1h' })
            console.log(token)
            const result = { ...payload, token }
            return helper.response(response, 200, 'Success Login', result)
          }
        } else {
          return helper.response(response, 400, 'Wrong Password')
        }
      } else {
        return helper.response(response, 400, "You haven't registered yet!")
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request!')
    }
  }
}
