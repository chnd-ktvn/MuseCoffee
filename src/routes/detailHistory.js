const router = require('express').Router()
const { getDetailHistory, postDetailHistory, deleteDetailHistory } = require('../controller/detailHistory.js')
const { authorization, isUser } = require('../middleware/auth.js')

router.get('/', authorization, isUser, getDetailHistory) // authorization, isUser,
router.post('/', authorization, isUser, postDetailHistory) // authorization, isUser,
router.patch('/:id', authorization, isUser, deleteDetailHistory)

module.exports = router
