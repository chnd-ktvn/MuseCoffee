const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../helper/response.js')
const { registerUser, checkEmail } = require('../model/user.js')
require('dotenv').config()

module.exports = {
  registerUser: async (request, response) => {
    try {
      // console.log(request.body)
      const { user_name, user_email, user_password } = request.body
      const salt = bcrypt.genSaltSync(10)

      const encryptPassword = bcrypt.hashSync(user_password, salt)

      // console.log(encryptPassword)
      const setData = {
        user_name, user_email, user_password: encryptPassword, user_created_at: new Date()
      }
      const result = await registerUser(setData)
      // console.log(result)
      return helper.response(response, 200, 'Success Register', result)
    } catch (error) {
      return helper.response(response, 400, 'Failed register')
    }
  },
  loginUser: async (request, response) => {
    try {
      // user_password
      const { user_email, user_password } = request.body
      const checkDataUser = await checkEmail(user_email)
      // saat check email terpanggil maka model checkemail akan mengambil data dari db user_id, user_email, user_password dan disimpan di checkdatauser
      // 1.proses penngecekan apakah email ada di db atau tidak kan login bisa berkali kali masukin emainya, cek aja pw nya, kalo ga ada itu bisa register
      // 2 pengecekan password

      // pastinya ga kosong sih, []
      if (checkDataUser.length > 0) {
        // kalo 0 register
        // const checkedPass
        // console.log(checkDataUser.length)
        // karena harusnya pengecekna itu yang ada di db hanya ada indeks 0 kan harusnya 1 emailnya

        // ini compare password yang dimasukkan dengan password yang ada di db
        const checkPassword = bcrypt.compareSync(user_password, checkDataUser[0].user_password)
        // const salt = bcrypt.genSaltSync(10)
        // const encryptPassword = bcrypt.hashSync(user_password, salt)
        // console.log(encryptPassword)
        console.log(checkPassword) // didni benrilai true atau false
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
      return helper.response(response, 400, 'Badd you wanna try?')
    }
  }
}
