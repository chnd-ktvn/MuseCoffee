const router = require('express').Router()
const { getHistory, postHistory, deleteHistory } = require('../controller/history.js')
const { isAdmin } = require('../middleware/auth.js')

router.get('/', getHistory)
router.post('/', postHistory)
router.patch('/:id', isAdmin, deleteHistory)

module.exports = router
