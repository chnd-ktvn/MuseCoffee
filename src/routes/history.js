const router = require('express').Router()
const { getHistory, postHistory, deleteHistory } = require('../controller/history.js')
const { isUser, isAdmin } = require('../middleware/auth.js')

router.get('/', getHistory)
router.post('/', postHistory)
router.patch('/:id', isUser, isAdmin, deleteHistory)

module.exports = router
