const { getDetailHistory, postDetailHistory, deleteDetailHistory, getHistoryDetailId } = require('../model/detailHistory.js')
const helper = require('../helper/response.js')

module.exports = {
  getDetailHistory: async (request, response) => {
    try {
      const { id } = request.params
      // const { id } = request.token.user_id
      console.log(id)
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
        user_id: request.token.user_id,
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
      const checkId = await getHistoryDetailId(id)
      if (checkId.length > 0) {
        const setData = {
          status: 0
        }
        await deleteDetailHistory(setData, id)
        return helper.response(response, 200, 'Success Delete Data')
      } else {
        return helper.response(response, 404, `Detail History By Id ${id} is Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
