const router = require('express').Router()
const { getHistory, getHistoryByUser, getTodayIncome, getOrders, getYearIncome, postHistory, deleteHistory, deleteHistoryUser } = require('../controller/history.js')
const { authorization, isUser, isAdmin } = require('../middleware/auth.js')

router.get('/', getHistory) //  authorization, isAdmin,
router.get('/:id', authorization, isUser, getHistoryByUser)
router.get('/today', authorization, isAdmin, getTodayIncome)
router.get('/order', authorization, isAdmin, getOrders)
router.get('/year', authorization, isAdmin, getYearIncome)
router.post('/', authorization, isUser, postHistory)
router.patch('/', authorization, isUser, deleteHistoryUser)
router.patch('/:id', authorization, isAdmin, deleteHistory)

module.exports = router
