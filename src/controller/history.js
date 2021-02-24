const { getHistory, getHistoryByIdUser, getHistoryUserById, getInvoiceCount, getTodayIncome, getYearIncome, getHistoryId, postHistory, deleteHistory } = require('../model/history.js')
const { getDetailHistoryId } = require('../model/detailHistory.js')
const helper = require('../helper/response.js')
const moment = require('moment')

module.exports = {
  getHistory: async (request, response) => {
    try {
      const result = await getHistory()
      for (let i = 0; i < result.length; i++) {
        result[i].orders = await getDetailHistoryId(result[i].history_id)
      }
      return helper.response(response, 200, 'Success Get History', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getHistoryByUser: async (request, response) => {
    try {
      const { id } = request.params
      const result = await getHistoryByIdUser(id)
      for (let i = 0; i < result.length; i++) {
        result[i].orders = await getDetailHistoryId(result[i].history_id)
      }
      return helper.response(response, 200, `Success Get History By ID User ${id}`, result)
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
      console.log(today)
      const result = await getInvoiceCount()
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
        address,
        phone_number,
        tax,
        shipping,
        payment_method,
        history_total,
        user_id
      } = request.body
      const setData = {
        history_invoice: 'mc-' + totalIncrement,
        history_total,
        address,
        phone_number,
        tax,
        shipping,
        payment_method,
        history_checked: 0,
        user_id,
        history_created_at: moment().format()
      }

      const result = await postHistory(setData)
      return helper.response(response, 200, 'Success order.', result)
    } catch (error) {
      console.log(error + 'controller post')
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
  },
  deleteHistoryUser: async (request, response) => {
    try {
      let { user_id, id } = request.query
      user_id = parseInt(user_id)
      id = parseInt(id)
      const checkId = await getHistoryUserById(user_id, id)
      if (checkId.length > 0) {
        const setData = {
          history_deleted: 1
        }
        await deleteHistory(setData, id)
        return helper.response(response, 200, 'Success Deleted Data History Payment')
      } else {
        return helper.response(response, 404, `History By Id ${id} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request disini?', new Error(error))
    }
  }
}
