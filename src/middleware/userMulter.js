const multer = require('multer')
const { checkEmail, getUserId } = require('../model/user.js')
const helper = require('../helper/response')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/user_photo')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Extension file must be PNG or JPG'), false)
  }
}
const limits = {
  fileSize: 2 * 1024 * 1024
}
const upload = multer({ storage, fileFilter, limits }).single('photo')
const uploadImage = async (req, res, next) => {
  try {
    const { user_email } = req.body
    const checkDataUser = await checkEmail(user_email)
    if (checkDataUser.length < 1) {
      upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return helper.response(res, 400, err.message)
        } else if (err) {
          return helper.response(res, 400, err.message)
        }
        next()
      })
    }
  } catch (error) {
    return helper.response(res, 400, 'Your email has been registered!')
  }
}
const updateImage = async (req, res, next) => {
  const { id } = req.params
  const checkId = await getUserId(id)
  if (checkId.length > 0) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return helper.response(res, 400, err.message)
      } else if (err) {
        return helper.response(res, 400, err.message)
      }
      next()
    })
  } else {
    return helper.response(res, 404, `Id ${id} is Not Found`)
  }
}
module.exports = { uploadImage, updateImage }
