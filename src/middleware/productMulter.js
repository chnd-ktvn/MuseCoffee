const multer = require('multer')
const { getProductId } = require('../model/product.js')
const helper = require('../helper/response')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/product_photo')
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
  fileSize: 2 * 1024 * 1024 // 2MB
}
const upload = multer({ storage, fileFilter, limits }).single('photo')
const uploadImage = async (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return helper.response(res, 400, err.message) // Multer Error
    } else if (err) {
      return helper.response(res, 400, err.message) // Unknown Error
    }
    next()
  })
}
const updateImage = async (req, res, next) => {
  const { id } = req.params
  const checkId = await getProductId(id)
  if (checkId.length > 0) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return helper.response(res, 400, err.message) // Multer Error
      } else if (err) {
        return helper.response(res, 400, err.message) // Unknown Error
      }
      next()
    })
  } else {
    return helper.response(res, 404, `Id ${id} is Not Found`)
  }
}
module.exports = { uploadImage, updateImage }
