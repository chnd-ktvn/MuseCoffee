const router = require('express').Router()
const { registerUser, loginUser } = require('../controller/user.js')
const { uploadImage } = require('../middleware/multer')

router.post('/register', uploadImage, registerUser)
router.post('/login', loginUser)
module.exports = router

// require('crypto').randomBytes(64).toString('hex')
