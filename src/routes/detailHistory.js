const router = require('express').Router()
const { getDetailHistory, postDetailHistory, deleteDetailHistory } = require('../controller/detailhistory.js')

router.get('/', getDetailHistory)
router.post('/', postDetailHistory)
router.delete('/:id', deleteDetailHistory)

module.exports = router
