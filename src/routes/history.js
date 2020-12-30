const router = require('express').Router()
const { getHistory, getTodayIncome, getOrders, getYearIncome, postHistory, deleteHistory } = require('../controller/history.js')
const { authorization, isUser, isAdmin } = require('../middleware/auth.js')

router.get('/', authorization, isAdmin, getHistory)
router.get('/today', authorization, isAdmin, getTodayIncome)
router.get('/order', authorization, isAdmin, getOrders)
router.get('/year', authorization, isAdmin, getYearIncome)
router.post('/', authorization, isUser, postHistory)
router.patch('/:id', authorization, isAdmin, deleteHistory)

module.exports = router
