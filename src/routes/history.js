const router = require('express').Router()
const { getHistory, postHistory, deleteHistory } = require('../controller/history.js')

router.get('/', getHistory)
router.post('/', postHistory)
router.delete('/:id', deleteHistory)

module.exports = router
