const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const helper = require('../helper/response.js')
const { registerUser, checkEmail, EditUserProfile, getUserId, getPhotoUser } = require('../model/user.js')
const moment = require('moment')
const fs = require('fs')
require('dotenv').config()

module.exports = {
  registerUser: async (request, response) => {
    try {
      const { user_email, user_password, user_phone_number } = request.body
      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(user_password, salt)
      // photo: request.file === undefined ? '' : request.file.filename,
      const checkDataUser = await checkEmail(user_email)
      // console.log(checkDataUser.length)
      if (checkDataUser.length > 0) {
        return helper.response(response, 400, 'Your email has been registered!')
      } else {
        const setData = {
          user_email,
          user_role: 1,
          user_password: encryptPassword,
          user_phone_number,
          user_date_birth: moment().format(),
          user_created_at: moment().format(),
          user_status: 1,
          user_activation: 'off'
        }
        const result = await registerUser(setData)
        const userId = result.user_id
        if (userId !== null) {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: {
              user: 'faithrose636@gmail.com',
              pass: 'arkademyfaith'
            }
          })
          const mailOptions = {
            from: '"Muse Coffee"<faithrose636@gmail.com>',
            to: user_email,
            subject: 'Muse Coffee - Activate Your Account',
            html: `<div style="font-family: cursive; font-size: 20px;">
            <h4>Hey, it's nice to see you. I am Faith from Muse Coffee.</h4>

            <p>I am here to send you the access link to Muse Coffee. Please, click <a href="https://muse-coffee-net.netlify.app/activate/${userId}">this</a> to activate your account.</p>
            
            
            <p>Happy Shopping!</p></div>`
          }
          await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              return helper.response(response, 400, 'Email not sent!')
            } else {
              return helper.response(response, 200, 'Email has been sent!')
            }
          })
          return helper.response(response, 200, 'Success Register! To activate your account, please check your email!', result)
        }
      }
    } catch (error) {
      return helper.response(response, 400, 'Failed register!')
    }
  },
  loginUser: async (request, response) => {
    try {
      const { user_email, user_password } = request.body
      const checkDataUser = await checkEmail(user_email)
      const userIsActive = checkDataUser[0].user_activation
      if (userIsActive === 'on') {
        if (checkDataUser.length > 0) {
          const checkPassword = bcrypt.compareSync(user_password, checkDataUser[0].user_password)
          if (checkPassword) {
            const { user_id, user_name, user_email, user_role, photo } = checkDataUser[0]
            const payload = {
              user_id, user_name, user_email, user_role, photo
            }
            const token = jwt.sign(payload, 'ACCESS', { expiresIn: '1h' })
            const result = { ...payload, token }
            return helper.response(response, 200, 'Success Login!', result)
          } else {
            return helper.response(response, 400, 'Wrong Password!')
          }
        } else {
          return helper.response(response, 400, "You haven't registered yet!")
        }
      } else {
        return helper.response(response, 400, "You haven't activated your account yet!")
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request!', error)
    }
  },
  editActivation: async (req, res) => {
    try {
      const { id } = req.body
      const checkUserId = await getUserId(id)
      if (checkUserId.length > 0) {
        if (checkUserId[0].user_activation === 'off') {
          const setData = {
            user_activation: 'on',
            user_updated_at: moment().format()
          }
          const result = await EditUserProfile(setData, id)
          return helper.response(
            res,
            200,
            'Success activating your account', result
          )
        } else {
          return helper.response(res, 400, 'Your account is already active.')
        }
      } else {
        return helper.response(res, 404, 'ID Not Found!')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request!', error)
    }
  },
  EditUserProfile: async (request, response) => {
    try {
      const { id } = request.params
      const { user_name, user_email, user_password, user_phone_number, user_first_name, user_last_name, user_delivery_address, user_date_birth, user_gender } = request.body
      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(user_password, salt)
      const checkId = await getUserId(id)
      if (checkId.length > 0) {
        const setData = {
          user_name,
          user_email,
          user_role: 1,
          user_password: encryptPassword,
          user_phone_number,
          user_first_name,
          user_last_name,
          photo: request.file === undefined ? '' : request.file.filename,
          user_delivery_address,
          user_date_birth,
          user_gender,
          user_updated_at: new Date().toLocaleString(),
          user_status: 1
        }
        const photo = await getPhotoUser(id)
        fs.unlink(`./uploads/user_photo/${photo}`, function (err) {
          if (err) console.log(err)
          console.log('File deleted')
        })
        const result = await EditUserProfile(setData, id)
        return helper.response(
          response,
          200,
          `Success update profile user by id ${id}`,
          result
        )
      } else {
        return helper.response(response, 404, 'ID not found')
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getUserById: async (request, response) => {
    try {
      const { id } = request.params
      const result = await getUserId(id)
      if (result.length > 0) {
        return helper.response(
          response,
          200,
          `Success Get Data User By Id ${id}`,
          result
        )
      } else {
        return helper.response(
          response,
          404,
          `Data User By Id ${id} is Not Found`
        )
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
