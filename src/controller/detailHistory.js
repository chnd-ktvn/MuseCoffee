const { getDetailHistory, postDetailHistory, deleteDetailHistory } = require('../model/detailHistory.js')
const helper = require('../helper/response.js')

module.exports = {
  getDetailHistory: async (request, response) => {
    try {
      const result = await getDetailHistory()
      return helper.response(response, 200, 'Success Get Detail History', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  postDetailHistory: async (request, response) => {
    try {
      const {
        product_id,
        qty,
        history_id
      } = request.body
      const setData = {
        product_id,
        qty,
        history_id
      }
      const result = await postDetailHistory(setData)
      return helper.response(response, 200, 'Success Post Detail History', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  deleteDetailHistory: async (request, response) => {
    try {
      const { id } = request.params
      const result = await deleteDetailHistory(id)
      if (result.length > 0) {
        return helper.response(response, 200, 'Success', result)
      } else {
        return helper.response(response, 404, `Detail History By Id ${id} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
