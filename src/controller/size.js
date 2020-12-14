const { getSize } = require('../model/size.js')
const helper = require('../helper/response.js')

module.exports = {
  getSize: async (request, response) => {
    try {
      const result = await getSize()
      console.log(result)
      return helper.response(response, 200, 'Success Get Category', result)
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
