const router = require('express').Router()
const {
  registerUser,
  loginUser,
  editActivation,
  EditUserProfile,
  getUserById
} = require('../controller/user.js')
const { clearAllDataRedis } = require('../middleware/redis')
const { updateImage } = require('../middleware/userMulter')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.patch('/activation', editActivation)
router.patch('/editProfile/:id', updateImage, EditUserProfile)
router.get('/:id', getUserById)
router.delete('/deleteAllDataRedis', clearAllDataRedis)

module.exports = router
