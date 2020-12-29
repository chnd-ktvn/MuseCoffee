const router = require('express').Router()
const { registerUser, loginUser, EditUserProfile } = require('../controller/user.js')
const { uploadImage, updateImage } = require('../middleware/userMulter')

router.post('/register', uploadImage, registerUser)
router.post('/login', loginUser)
router.patch('/editProfile/:id', updateImage, EditUserProfile)
module.exports = router
