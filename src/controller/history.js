const { getHistory, getInvoiceCount, getTodayIncome, getYearIncome, getHistoryId, postHistory, deleteHistory } = require('../model/history.js')
const helper = require('../helper/response.js')

module.exports = {
  getHistory: async (request, response) => {
    try {
      const result = await getHistory()
      return helper.response(response, 200, 'Success Get History', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getTodayIncome: async (request, response) => {
    try {
      const result = await getTodayIncome()
      return helper.response(response, 200, 'Success Get Today Income', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getOrders: async (request, response) => {
    try {
      const today = new Date()
      const result = await getInvoiceCount()
      console.log(today)
      console.log(result)
      return helper.response(response, 200, 'Success Get Today Income', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getYearIncome: async (request, response) => {
    try {
      const today = new Date()
      const result = await getYearIncome()
      console.log(today)
      console.log(result)
      return helper.response(response, 200, 'Success Get Today Income', result)
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
        payment_method
      } = request.body
      const setData = {
        history_invoice: 'mc-' + totalIncrement,
        history_subtotal,
        payment_method,
        history_checked: 1,
        user_id: request.token.user_id,
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
      const { id } = request.params
      const checkId = await getHistoryId(id)
      if (checkId.length > 0) {
        const setData = {
          admin_id: request.token.user_id,
          history_checked: 0,
          history_checked_at: new Date()
        }
        await deleteHistory(setData, id)
        return helper.response(response, 200, 'Success Delete Data')
      } else {
        return helper.response(response, 404, `History By Id ${id} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request disini?', new Error(error))
    }
  }
}
