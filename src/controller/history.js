const { getHistory, getInvoiceCount, getHistoryId, postHistory, deleteHistory, getUserId } = require('../model/history.js')
const helper = require('../helper/response.js')

module.exports = {
  getHistory: async (request, response) => {
    try {
      const result = await getHistory()
      console.log(new Date().toLocaleTimeString()) // 2017-06-25
      return helper.response(response, 200, 'Success Get History', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  postHistory: async (request, response) => {
    try {
      const total = await getInvoiceCount()
      const totalIncrement = parseInt(total) + 1
      const {
        history_subtotal,
        payment_method,
        history_checked,
        user_id
      } = request.body
      const setData = {
        history_invoice: 'mc-' + totalIncrement,
        history_subtotal,
        payment_method,
        history_checked,
        user_id,
        history_created_at: new Date()
      }
      const result = await postHistory(setData)
      return helper.response(response, 200, 'Success Post History', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  deleteHistory: async (request, response) => {
    try {
      const userId = await getUserId()
      // const userId = isAdmin()
      const { id } = request.params
      console.log(userId + 'berhasil tidak ya')
      const checkId = await getHistoryId(id)
      const setData = {
        history_checked: 0,
        history_checked_at: new Date()
      }
      if (checkId.length > 0) {
        await deleteHistory(setData, id)
        return helper.response(response, 200, 'Success Delete Data')
      } else {
        return helper.response(response, 404, `History By Id ${id} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
