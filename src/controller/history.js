const { getHistory, postHistory, deleteHistory } = require('../model/history.js')
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
  postHistory: async (request, response) => {
    try {
      const {
        history_invoice,
        subtotal,
        payment_method,
        status,
        user_id
      } = request.body
      const setData = {
        history_invoice,
        subtotal,
        payment_method,
        status,
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
      const { id } = request.params
      const result = await deleteHistory(id)
      if (result.length > 0) {
        return helper.response(response, 200, 'Success', result)
      } else {
        return helper.response(response, 404, `History By Id ${id} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
